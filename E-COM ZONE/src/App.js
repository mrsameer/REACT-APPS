import './App.css';
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from 'react';
import {db, auth} from "./firebase";
import Login from "./components/Login";

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [cartItems, setCartItems] = useState([]);

    const getCartItems = () => {
        db.collection('cartitems').onSnapshot((snapshot) => {
            const tempItems = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data()
            }))

            setCartItems(tempItems);
        })
    }

    const signOut = () => {
        auth.signOut().then(()=>{
            localStorage.removeItem('user')
            setUser(null)
        })
    }

    useEffect(() => {
        getCartItems();
    }, [])


    return (
        <Router>
            {
                !user ? (
                    <Login setUser={setUser} />
                ) : (
                    <Container>
                        <Header
                            signOut={signOut}
                            user={user}
                            cartItems={cartItems} />

                        <Switch>

                            <Route path="/cart">
                                <Cart cartItems={cartItems} />
                            </Route>

                            <Route path="/">
                                <Home />
                            </Route>

                        </Switch>
                    </Container>
                )
            }
        </Router>
    );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED; 
`