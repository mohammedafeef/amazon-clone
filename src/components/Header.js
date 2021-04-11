import styled from 'styled-components';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

const Header = ({cartProducts,userName,signOut}) =>{
    let Count = 0;
    cartProducts.forEach((elem) => {
        Count += elem.product.quantity;
    });
    return(
        <Container>
            <HeaderLogo>
                <Link to="/">
                <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </Link>
            </HeaderLogo>
            <HeaderLocationOption>
                <LocationOnIcon style={{fontSize:'1.8rem'}}/>
                <LocationOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your location</OptionLineTwo>
                </LocationOption>
            </HeaderLocationOption>
            <HeaderSearch>
                <HeaderSearchInput type="text"/>
                <HeaderSearchIcon>
                    <SearchIcon style={{fontSize:'1.5rem'}}/>
                </HeaderSearchIcon>
            </HeaderSearch>
            <HeaderOption>
                <ProfileOption onClick={signOut}>
                    <OptionLineOne>Hello,{userName}</OptionLineOne>
                    <OptionLineTwo>Accounts&lists</OptionLineTwo>
                </ProfileOption>
                <OrderOption>
                    <OptionLineOne>ordres</OptionLineOne>
                    <OptionLineTwo>&return</OptionLineTwo>
                </OrderOption>
            </HeaderOption>
            <HeaderCart>
                <Link to="/cart">
                <ShoppingBasketIcon style={{fontSize:'2rem'}}/>
                <ProductCount>{Count}</ProductCount>
                </Link>
            </HeaderCart>
        </Container>
    )
}
// styling using the styled components
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height:2.5rem;
    background-color:black;
    color:white;
    font-family:
`
const HeaderLogo = styled.div`
    display:grid;
    place-items:center;
    padding:1rem;
    img{
        width:8rem;
    }
`
const HeaderLocationOption = styled.div`
    display:flex;
    margin-right:.5rem;
`
const LocationOption = styled.div`
    margin-left:.5rem;
`
const OptionLineOne = styled.span`
    display:block;
    font-size:1.2rem;

`
const OptionLineTwo = styled.span`
    display:block;
    font-weight:900;
    font-size:1.2rem;
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    margin:0 .5rem;
    background-color:#febd69;
    color:black;
    border-radius:3px;
    overflow:hidden;
    :focus-within{
        box-shadow:0px 0 0 2px #febd69;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow:1;
    overflow:hidden;
    padding:.7rem;
    border:none;
    outline:none;
    :focus-within{
        outline:none;
    }
`
const HeaderSearchIcon = styled.div`
    display:flex;
    align-items:center;
    padding:.5rem;
`
const HeaderOption = styled.div`
    display:flex;
    padding:0 1rem;
`
const ProfileOption = styled.div`
    margin:0 .5rem;
`
const OrderOption = styled.div`
    margin:0 .5rem;
`
const ProductCount = styled.div`
    padding:.5rem;
    font-size:1.5rem;
    font-weight:600;
    color:#febd69;
`
const HeaderCart = styled.div`
    display:flex;
    a{
        display:flex;
        text-decoration:none;
        color:white;
    }
`


export default Header;