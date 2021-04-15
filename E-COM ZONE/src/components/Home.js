import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { db } from "../firebase";
import Product from "./Product";


function Home() {
    const [products, setproducts] = useState([])

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []; 

            tempProducts = snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setproducts(tempProducts);
        })
    }

    // using react hook to stop this getProducts() calling too many times as react re-renders home too many times
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <Container>
            <Banner>

            </Banner>

            <Content>
                {
                    products.map((data) => (
                        <Product
                            title = {data.product.name}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                            id = {data.id}
                        />
                    ))

                }
            </Content>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    max-width: 1500px; 
    margin: 0 auto; 
`

const Banner = styled.div`
    background-image: url("https://www.amazon.ca/images/G/15/kindle/journeys/ZGU1ZTAyOWIt/ZGU1ZTAyOWIt-YTU0YWQzYjYt-w1500._CB655559622_.jpg"); 
    min-height: 600px; 
    background-position: center; 
    background-size: cover;  
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); 
    z-index: 1; 
`

const Content = styled.div`
    padding-left: 10px; 
    padding-right: 10px; 
    margin-top: -350px; 
    display: flex; 
`