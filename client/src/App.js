import React from 'react';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
   <>
      <Navbar />
      <main>
        <Jumbotron />
        <Searchbar />
        <Container />
      </main>
   </>
   
  );
}

export default App;
