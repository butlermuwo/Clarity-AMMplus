import React from 'react'
import Home from '../src/Components/home/Home'
import Navbar from '../src/Components/navbar/Navbar'
import Footer from './Components/Footer'
import Chart from './Components/Chart'
import Table from './Components/table/Table'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Chart />
      <Table />
      <Footer />
    </div>
  )
}

export default App
