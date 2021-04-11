import styled from 'styled-components'
import { db } from '../firebase';
const Item = ({id,tittle,price,rating,image,quantity}) =>{
    let options =[];
    for(let i =1;i<Math.max(quantity,20);++i){
        i == quantity?options.push(<option value ={i} selected>Qty: {i}</option>):
        options.push(<option value ={i} >Qty: {i}</option>);
    }
    const setCount = async (count) =>{
        let product = await db.collection('cartProducts').doc(id);
        product.update({
            quantity:count
        })
    }
    const dltItem =async () =>{
        let item = await db.collection('cartProducts').doc(id);
        // use get to find an doc in an collection 
        // let product = await item.get()
        // console.log(product)
        quantity >1 ?(
            item.update({
                quantity:quantity - 1
            })
        ):(
            item.delete()
        )
    }
    return(
        <Container>
            <Image>
                <img src={image}/>
            </Image>
            <Info>
                <Tittle>
                    {tittle}
                </Tittle>
                <ActionQuandity>
                    <Quandity>
                        <select onChange={(e)=>setCount(parseInt(e.target.value))}>
                            {options}
                        </select>
                    </Quandity>
                    <DltButton onClick = {dltItem}>
                        Delete
                    </DltButton>
                </ActionQuandity>
            </Info>
            <Price>
                ${price}
            </Price>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    ${'' /* justify-content:space-around; */}
    font-size:1.5rem;
    font-family:sans-serif;
    border-bottom:2px solid rgba(0,0,0,.4);
    border-radius:3px;
    padding:1.5rem;
`
const Image = styled.div`
    ${'' /* object-fit:contain; */}
    img{
        width:15rem;
        object-fit:contain;
    }
`
const Info = styled.div`
    font-size:1.3rem;
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-left:1rem;
`
const Tittle = styled.div`
    text-transform:capitalize;
    font-size:2rem;
    font-weight:500;
    color:darkblue;
`
const ActionQuandity = styled.div`
    display:flex;
`
const Quandity = styled.div`
    margin: 0 10px;
    select{
        padding:.5rem .3rem;
        border:1px solid rgba(0,0,0,.4);
        :focus{
        background-color:rgba(0,0,0,.4);
        box-shadow:2px 2px 3px rgba(0,0,0,.3);
        }
    }
`
const DltButton = styled.button`
    padding:.2rem;
    background-color:#febd69;
    border:1px solid black;
    border-radius:3px;
    :active{
        outline:none;
    }
`
const Price = styled.div`
    font-weight:700;
    font-size:2rem;
`
export default Item;