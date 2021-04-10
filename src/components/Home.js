import styled from "styled-components";
import Product from "./Product";
import {db} from '../firebase';
import { useEffect } from "react";
import { useState } from "react";
const Home = () =>{
    const [storeProducts,setProducts] =useState([]);
    const getProducts = () =>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProdcuts = [];
            // console.log(snapshot)
            tempProdcuts = snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    product:doc.data()
                }
            ))
            // console.log(tempProdcuts);
            setProducts(tempProdcuts);
        })
    }
    useEffect(()=>{
        getProducts()
        console.log(storeProducts);
    },[])
    return(
        <Container>
            <Banner>
            </Banner>
            <Content>
                {
                    storeProducts.map((data)=>(
                        <Product 
                            id = {data.id}
                            tittle={data.product.name}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}
//styling section of home
const Container = styled.div`
    ${'' /* max-width:1500px; */}
    margin:0 auto;
    font-family:sans-serif;
`
const Banner = styled.div`
    background-image:url("https://i.imgur.com/SYHeuYM.jpg");
    min-height:60rem;
    background-position:center;
    background-size:cover;
    z-index:1;
    mask-image:linear-gradient(to bottom ,rgba(0,0,0,1),rgba(0,0,0,0));
`
const Content = styled.div`
    padding:0 2rem;
    margin-top:-34rem;
    display:flex;
    flex-wrap:wrap;
`
export default Home;