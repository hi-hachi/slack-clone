import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <Container>
        <Main>
            <AccessTimeIcon fontSize='small' />
            <SearchContainer>
                <Search>
                    <ManageSearchIcon fontSize='small' />
                    <input type = 'text' placeholder='検索' />
                </Search>
            </SearchContainer>
            <HelpOutlineIcon fontSize='small'/>
        </Main>
        <UserContainer>
            <Name>
                Karaage5
            </Name>
            <UserImage>
                <img src = "https://i.imgur.com/6VBx3io.png" alt = 'Person' />
            </UserImage>
        </UserContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
    align-items: center;

`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-right: 16px;
    margin-left: 16px;

`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px gray;
    /* width: 100%; */
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    
    input{
        width: 100%;
        background-color: transparent;
        border: none;
        color: white;
        padding: 5px 0px 5px 8px;
    }
    input:focus{
        outline: none;
    }

`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    img{
        width: 100%;
    }

`