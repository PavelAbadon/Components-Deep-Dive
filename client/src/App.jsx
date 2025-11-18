import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import TableComponent from './components/TableComponent'
import Pagination from './components/Pagination'
import CreateUser from './components/CreateUser'

function App() {
    const [showCreateUser, setShowCreateUser] = useState(false);
		

    const addUserHandler = () => {
        setShowCreateUser (true);
    }
    const closeUserModalHandler = () =>{
        setShowCreateUser (false);
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
        {showCreateUser && <CreateUser onClose={closeUserModalHandler}/>}     
      </main>
      <Footer/>
    </div>
  )
}

export default App
