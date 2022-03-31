import React from 'react';
import './App.css';
import styled from 'styled-components';
import Drawer from './components/Drawer/Drawer';
import Nav from './components/Nav/Nav';
import SubNav from './components/SubNav/SubNav';
import Product from './components/Product/Product';

function App() {
    return (
        <Content>
            <DrawerContainer>
                <Drawer />
            </DrawerContainer>
            <PageContent>
                <Nav />
                <SubNav />
                <Product />
            </PageContent>
        </Content>
    );
}

export default App;
const Content = styled.div`
    display: flex;
`
const DrawerContainer = styled.div`
    width: 20%;
`
const PageContent = styled.div`
margin: 1.3rem 2rem 0;
    width: calc(100% - (20%));
`