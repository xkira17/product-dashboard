import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import Categories from './pages/Categories'
import CreateCategory from './pages/CreateCategory'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/create-category' element={<CreateCategory />} />
      </Route>
    </Routes>
  )
}

export default App