import React from 'react';
import styled from 'styled-components';

function Login({setUser}) {
    return (
        <Container>
            <LoginSection>
                <h1>Login to amazon</h1>
                <AmazonLogo src='https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png'/>
                <LoginButton onClick = {setUser}>
                    signUp & Login
                </LoginButton>
            </LoginSection>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const LoginSection = styled.div`
    width:35%;
    height:60%;
    display:flex;
    ${'' /* justify-content:center; */}
    align-items:center;
    flex-direction:column;
    border:1px solid black;
    border-radius:1rem;
    box-shadow:1px 1px 5px rgba(0,0,0,.5);
    padding:2.4rem;
    h1{
        font-family:mono-space ,sans-serif;
        font-size:2.5rem;
        font-weight:800;
        margin:3rem 0 5rem 0;
    }
`
const AmazonLogo = styled.img`
    width:15rem;
    margin-bottom:4rem;
    filter:drop-shadow(0 0 5px rgba(0,0,0,.6));
`
const LoginButton = styled.button`
    margin: 6rem 0 1rem;
    font-size:2rem;
    font-weight:600;
    padding:1rem 2rem;
    background:#febd69;
    border-radius:5px;
`

export default Login
