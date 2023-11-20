import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Form from './components/scrines/Form';
import Nav from './components/scrines/Nav';
import Home from './components/scrines/Home';
import Table from './components/scrines/Table';
import Update from './components/scrines/Update';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
