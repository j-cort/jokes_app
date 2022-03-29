import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./Header";
import Main from "./Main";
import Jokes from "./JokesList";
import Post from "./Post";


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <div className="ui container">
            <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/alljokes' element={<Jokes />}/>
              <Route path='/newjoke' element={<Post />}/>
            </Routes>
          </div>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
