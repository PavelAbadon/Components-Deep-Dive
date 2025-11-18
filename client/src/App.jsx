import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import TableComponent from './components/TableComponent'
import Pagination from './components/Pagination'
import CreateUser from './components/CreateUser'

function App() {
    const [showCreateUser, setShowCreateUser] = useState(false);
    //нов ред да видя дали гитхъб десктоп ще проработи

    const addUserHandler = () => {
        console.log('add new user');
        setShowCreateUser (true);
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
        {showCreateUser && <CreateUser/>}     
      </main>
      <Footer/>
    </div>
  )
}

export default App
