import './App.css'
import { useState } from 'react'
import Navbar from './componets/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/> }/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

