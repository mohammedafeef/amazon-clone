import styled from 'styled-components'
const CartItemTotal = ({cartProducts}) =>{
    let totalAmount = 0;
    cartProducts.forEach((elem)=>{
        totalAmount += elem.product.quantity *elem.product.price;
    })
    return(
        <Container>
            <TotalPrice>
                total price :<span>${totalAmount}</span>
            </TotalPrice>
            <PayOutButton>
             PayOut & Buy   
            </PayOutButton>
        </Container>
    )
}
const Container = styled.div`
    flex:.2;
    margin-right:8px;
    padding:8px 8px 0;
    font-size:2rem;
`
const TotalPrice = styled.div`
    padding:1rem 0;
    span{
        display:block;
        font-weight:700;
    }
`
const PayOutButton = styled.button`
    padding:.5rem;
    background-color:#febd69;
    border:1px solid ;
    outline:none;
    border-radius:3px;
    :active{
        outline:none;
    }
`

export default CartItemTotal;