import styled from "styled-components";
import { db } from "../firebase";
const Product =({
    id,
    tittle,
    price,
    rating,
    image
})=>{
    const addToCart =()=>{
        const cartItem = db.collection('cartProducts').doc(id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                console.log(doc.data().quantity + 1)
                db.collection('cartProducts').doc(id).update({
                    quantity:doc.data().quantity + 1
                })
            }else{
                db.collection('cartProducts').doc(id).set({
                    name:tittle,
                    price:price,
                    image:image,
                    rating:rating,
                    quantity:1
                })
            }
        })
    }
    return(
        <Container>
            <Tittle>
                {tittle}
            </Tittle>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating).fill().map(rating=><span>⭐</span>)
                }
            </Rating>
            <Image src={image}/>
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}
export default Product;
const Container = styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    max-height:40rem;
    padding:2rem;
    margin:1rem;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    border: 1px solid black;
    box-shadow:5px 2px 5px 3px rgba(0,0,0,.3);
`
const Tittle = styled.span`
    font-size:1.8rem;
`
const Price = styled.span`s
    font-weight:600;
    font-size:1.5rem;
    margin-top:3px;
`
const Rating = styled.div`
`
const Image = styled.img`
    max-height:20rem;
    object-fit:contain;
`
const ActionSection = styled.div`
    display:grid;
    place-items:center;
`
const AddToCartButton = styled.button`
    width:9rem;
    border:1px solid black;
    background-color:#febd69;
    padding:.5rem;
    margin-top:2rem;
    overflow:hidden;
    border-radius:5px;
    :active{
        outline:none;
    }
    :hover{
        box-shadow:0 0 4spx 3px rgba(0,0,0,.2);
    }
`