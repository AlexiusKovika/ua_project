// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Base/Footer'
import Header from './components/Base/Header'
import HomePage from './components/Pages/Home'
import ModalContainer from './components/Base/ModalContainer'
// import Admin from './components/Pages/Admin'
import Success from './components/Pages/Home/Content/Success/Success';
import CreateCategory from "./components/Pages/Admin/pages/CreateCategory";
import CreateTask from "./components/Pages/Admin/pages/CreateTask";
import CreateQuestion from "./components/Pages/Admin/pages/CreateQuestions";
import ErrorPages from "./components/Pages/Admin/pages/Error";

import './App.scss'

const App = () => {

  return (
    <BrowserRouter>
    <ModalContainer>
      
      
        <Header />

          <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/success' element={<Success />} />

            <Route  path="admin/create-category" element={<CreateCategory />} exact />
            <Route  path="admin/create-question" element={<CreateQuestion />} exact />
            <Route  path="admin/create-task" element={<CreateTask/>} exact />
            <Route  path="*" to="/404" element={<ErrorPages />} />
            

          </Routes>
            
          <Footer />
          
      
    </ModalContainer>
        {/* <ModalContainer>
          <Header />
          <HomePage />
          <Footer />
        </ModalContainer> */}
    </BrowserRouter>
  )
}

export default App
