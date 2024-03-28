import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header, Footer, Lab_list, Content, Button, Home, Lab2} from './components'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Header>
        <h1>Добрый день!</h1>
      </Header>
      <Content>
        <p>Основной материал</p>
      </Content>
      <Lab_list>
        <ul>
          <li><Link to={'/'}>Лабораторная 1</Link></li>
          <li><Link to={'/Lab2'}>Лабораторная 2</Link></li>
          <li><Link to={'/'}>Лабораторная 3</Link></li>
          <li><Link to={'/'}>Лабораторная 4</Link></li>
          <li><Link to={'/'}>Лабораторная 5</Link></li>
        </ul>
      </Lab_list>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/lab2' element={<Lab2/>}/>
      </Routes>
      <Footer>
        <p>Рычков В.Д. 2024</p>
      </Footer>
    </>
  )
}

export default App
