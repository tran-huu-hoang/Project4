import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashoards';
import CategoryList from './pages/CategoryList';
import AddCategory from './pages/AddCategory';
import EditCategory from './pages/EditCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/categorylist' element={<CategoryList />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/editcategory/:id' element={<EditCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
