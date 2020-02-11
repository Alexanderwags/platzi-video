import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search'
import '../assets/styles/app.scss';
import '../assets/styles/components/Search.scss';
import '../assets/styles/components/Header.scss';
const App = () => (

     <div className="App">
         <Header />
         <Search />
     </div>
);

export default App;