import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Footer, Lab_list, Content, Home, Lab3, Lab2, Lab1, Menu, Button } from './components'
import { Routes, Route, Link } from 'react-router-dom'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'

function App() {

  return (
    <>
      <Menu />
      <Header>
        <h1>Главная</h1>

      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lab1' element={<Lab1 />} />
          <Route path='/lab2' element={<Lab2 />} />
          <Route path='/lab3' element={<Lab3 />} />
        </Routes>
      </Content>

      <Lab_list>
        <ul>
          <li><Link to={'/Lab1'}>Лабораторная 1</Link></li>
          <li><Link to={'/Lab2'}>Лабораторная 2</Link></li>
          <li><Link to={'/Lab3'}>Лабораторная 3</Link></li>
          <li><Link to={'/'}>Лабораторная 4</Link></li>
          <li><Link to={'/'}>Лабораторная 5</Link></li>
        </ul>
      </Lab_list>

      <Footer>
        <p>Рычков В.Д. 2024</p>
      </Footer>
    </>
  )
}

export default App
