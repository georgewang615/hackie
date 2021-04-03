import React from 'react'
import styled from 'styled-components'
import MyButton from './MyButton.js';

const Header = ({name, showTaskAdd}) => {

    const handleClick = () => {
        showTaskAdd = true;
    }
    return (
        <Container>
            <Heading>{name}'s Tasks</Heading>
            <Buttonbox>
                <MyButton ButtonText= 'Add Task' onClick = {handleClick}/>
                <MyButton ButtonText= 'Challenge'  onClick = {handleClick}/>
            </Buttonbox>

        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 100px;     
    padding: 0;
    margin: 0;
    background-color: #eaddb6; 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 1.5em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    height: 100%;
    line-height: 4em;
    color: #29b39e;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 10px;
`