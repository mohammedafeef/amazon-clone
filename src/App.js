import { useState,useEffect } from 'react';
import {db} from './firebase.js';
import {Header , Cart , Home} from './components/index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
const App = ()=>{
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
  useEffect(()=>(getCartProduct()),[]);
  return(
    <Router>
      <Header cartProducts = {cartProducts}/>
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
export default App;