
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/dashboard/create' element={<CreatePage/>}/>
        <Route path='/dashboard/update/:id' element={<UpdatePage/>}/>

        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
