import { useState,useEffect } from 'react';
import {db,auth,provider} from './firebase.js';
import {Header , Cart , Home,Login} from './components/index.js';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
const App = ()=>{
  // const [loginState,setLoginState] = useState(null);
  const [userData,setUserData] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartProducts,setCartProduct] = useState([]);
  const getCartProduct =()=>{
      db.collection('cartProducts').onSnapshot((snapshot)=>{
          let tempCartProduct =[];

          tempCartProduct = snapshot.docs.map((doc)=>({
              id:doc.id,
              product:doc.data()
          }))
          // console.log(tempCartProduct);
          setCartProduct(tempCartProduct);
      })
  }
  const setUser = async() =>{
    console.log("called")
    try{
      let googlePopAuth = await auth.signInWithPopup(provider);
      console.log(googlePopAuth)
      setUserData(googlePopAuth.user.displayName)
      // setLoginState(googlePopAuth.user.emailVerified)
      localStorage.setItem('user',JSON.stringify(googlePopAuth.user.displayName))
      // localStorage.setItem('loginState',JSON.stringify(loginState))
    }catch (err){
      alert(err)
    }
  }
  const signOut = async () =>{
    await auth.signOut();
    // setLoginState(null)
    setUserData(null)
    // localStorage.removeItem('loginState')
    localStorage.removeItem('user')
  }
  useEffect(()=>(getCartProduct()),[]);
  // console.log(loginState)
  return(
    <Container>
      {
      !userData ? (
        <Login setUser = {setUser}/>
      ):(
        <Router>
          <Header cartProducts = {cartProducts} userName= {userData} signOut = {signOut}/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/cart">
              <Cart cartProducts = {cartProducts}/>
            </Route>
          </Switch>
        </Router>
      )
      }
    </Container>

  )
}
const Container = styled.div`
  display:flex;
  flex-direction:column;
`
export default App;