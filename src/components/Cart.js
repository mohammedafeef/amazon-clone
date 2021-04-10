import styled from "styled-components";
import {CartItems ,CartItemTotal} from './index.js';
const Cart = ({cartProducts}) =>{
    return(
        <Container>
            <CartItems cartProducts = {cartProducts}/>
            <CartItemTotal cartProducts = {cartProducts}/>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    font-family:sans-serif;
`

export default Cart;