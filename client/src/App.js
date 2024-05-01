import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBook from './component/CreateBook'
import ShowBookList from './component/ShowBookList'
import ShowBookDetails from './component/ShowBookDetails'
import UpdateBookInfo from './component/UpdateBookInfo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;