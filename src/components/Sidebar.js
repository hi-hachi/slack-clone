import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import { sidebarItemsData } from '../data/SidebarItemsData';


function Sidebar(props) {

  return (
    <Container>
        <WorkspaceContainer>
            <Name>
                Clever Programmer
            </Name>
            <NewMessage>
                <AddCircleOutlineIcon  fontSize='small'/>
            </NewMessage>
        </WorkspaceContainer>
        <MainChannels>
            {
                sidebarItemsData.map(item => (
                    <MainChannelItem>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                ))
            }
        </MainChannels>
        <ChannelsContainer>
            <NewChannelContainer>
                <div>
                    Channels
                </div>
                <AddIcon fontSize='small' />
            </NewChannelContainer>
            <ChannelsList>   
                {
                    props.rooms.map(item => (
                        <Channel>
                            # {item.name}
                        </Channel>
                    ))
                }
            </ChannelsList>
        </ChannelsContainer>

    </Container>
  )
}

export default Sidebar

const Container = styled.div`
    background: #3f0e40;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;

`

const Name = styled.div`

`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3f0e40;
    fill: #3f0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;

`

const MainChannels = styled.div`
    padding-top: 20px;

`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 38px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
`

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding-left: 19px;
    padding-right: 12px;


`

const ChannelsList  = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    &:hover{
        background: #350D36;
    }
`