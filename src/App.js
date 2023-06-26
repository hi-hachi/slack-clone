import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Chat from './components/Chat';
import styled from 'styled-components';
import db from './firebase';



const router = createBrowserRouter([
  {
    path : "/",
    element : <Login />
  },
  {
    path : "/room",
    element : <Chat />
  }
])

function App() {
  // room
  const [rooms, setRooms] = useState([]);

  // get info of firestore documents
  function getChannels() {
    const postData = collection(db, "rooms");
    // console.log(postData);
    // getDocs(postData).then((snapshot) => {
    //   setRooms(snapshot.docs.map((doc) => ( { id: doc.id, name: doc.data().name })));
    // });

  // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setRooms(post.docs.map((doc) => ({ id : doc.id, name: doc.data().name})))
    });
    
  };

  useEffect(() => {
    console.log('hello use effect mode!');
    getChannels();
  }, []);
  // console.log(rooms);

  return (
    <div className="App">
      <Container>
        <Header />
        <Main>
          <Sidebar rooms = {rooms}/>
          <RouterProvider router = {router}/>
        </Main>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width : 100%;
  height : 100vh;
  display: grid;
  grid-template-rows: 40px auto;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`