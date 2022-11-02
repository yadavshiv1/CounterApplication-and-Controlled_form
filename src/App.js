
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Parent } from './component/Parent';
import Layout from './Layout';
import Controll from './component/Controll';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Parent />} />
          <Route path='/controll' element={<Controll />} />
          </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
