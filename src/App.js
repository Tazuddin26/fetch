
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Fetch from './fetch';
import Pagination from './pagination';
function App() {
  return (
    <div className="App">   
      <Routes>
        <Route path="/pagination" element={<Pagination/>} />
      </Routes>
    </div>
  )
};
export default App;
