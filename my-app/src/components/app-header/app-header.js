import React from 'react';
import './app-header.css';
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'darkgrey' : 'black'};
        :hover {
            color: black;            
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
        span {
            color: red;
        }
    }
`;

const AppHeader = ({allPosts, liked}) => {
    return (
        <Header>
            <h1>Dmitry Rogozin</h1>
            <h2>Записей <span>{allPosts}</span> | Понравилось <span>{liked}</span></h2>
        </Header>
    )
}

export default AppHeader;