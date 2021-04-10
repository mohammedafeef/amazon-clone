
import styled from 'styled-components'
import {Item} from './index.js'
import {db} from '../firebase'
import { useEffect } from 'react'
const CartItems = ({cartProducts}) =>{
    return(
        <Container>
            <Tittle>
                Shopping Cart 
            </Tittle>
            <hr/>
            <SelectedItem>
            {
                cartProducts.map((data)=>(
                    <Item 
                    id = {data.id} 
                    tittle = {data.product.name}
                    price = {data.product.price}
                    rating = {data.product.rating}
                    image = {data.product.image}
                    quantity = {data.product.quantity}
                    />
                ))
            }
            </SelectedItem>
        </Container>
    )
}
const Container = styled.div`
    flex:.8;
    margin:10px 10px 0;
    padding:10px 8px 0;
    hr{
        border:none;
        border-top:2px solid gray;
        border-radius:2px;
    }
`
const Tittle = styled.div`
    font-size:2.5rem;
    margin-bottom:1rem;
    font-weight:600;
`
const SelectedItem = styled.div`
    display:flex;
    flex-direction:column;
`
export default CartItems;
