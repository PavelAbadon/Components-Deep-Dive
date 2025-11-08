import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import TableComponent from './components/TableComponent'
import Pagination from './components/Pagination'

function App() {
   return (
    <div>
      <Header/>
      <main className="main">
        <section className="card users-container">        
          <Search/>    
          <TableComponent/>               
          <Pagination/>
        </section>        
      </main>
      <Footer/>
    </div>
  )
}

export default App
