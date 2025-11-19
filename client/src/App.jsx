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
    const addUserSubmitHandler = (event) =>{
      event.preventDefault();
      const formData = new FormData(event.target);
      const userData = Object.fromEntries(formData);
      console.log("Submitting user data:", userData)

      fetch('http://localhost:3030/jsonstore/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(result => console.log(result))
            

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
        {showCreateUser && 
          <CreateUser 
            onClose={closeUserModalHandler}
            onSubmit={addUserSubmitHandler}
            />
        }     
      </main>
      <Footer/>
    </div>
  )
}

export default App
