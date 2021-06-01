import styled from "styled-components";

const Header = styled.div`
    position: relative;
    background: linear-gradient(180deg, #282B78 0%, #0B0D36 100%);
    width: 100%;
    height: 200px;
`;

const Logo = styled.div`
    width:30%;
    display:inline-block;
    vertical-align: middle;
    margin:32px 0;
    position:relative;
    left:5%;
`;
const Nav = styled.div`
    width:70%;
    display:inline-block;
    vertical-align: middle;
    margin:32px 0;
    position:relative;
    right:5%;
    background-color:red;
    text-align:right;
`;

export default {Header, Logo, Nav};