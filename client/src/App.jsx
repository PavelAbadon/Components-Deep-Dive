import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import TableComponent from './components/TableComponent'
import Pagination from './components/Pagination'

function App() {
    const addUserHandler = () => {
        console.log('add new user');
        
    }

   return (
    <div>
      <Header/>
      <main className="main">
        <section className="card users-container">        
          <Search/>    
          <TableComponent/>
          <button className="btn-add btn" onClick={addUserHandler}>Add new user</button>               
          <Pagination/>
        </section>        
      </main>
      <Footer/>
    </div>
  )
}

export default App
