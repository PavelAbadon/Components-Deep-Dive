import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import TableComponent from './components/TableComponent'
import Pagination from './components/Pagination'
import CreateUser from './components/CreateUser'

function App() {
    const [users, setUser] = useState([]);
    const [showCreateUser, setShowCreateUser] = useState(false);

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await fetch(`http://localhost:3030/jsonstore/users`);
                const data = await response.json();
                setUser(Object.values(data));
            } catch (err) {
                console.error('Error loading users:', err);
            }
        }
        loadUsers();
    }, []);		

    const addUserHandler = () => {
        setShowCreateUser (true);
    }
    const addUserSubmitHandler = (event) =>{
      event.preventDefault();
      const formData = new FormData(event.target);
      const { country, city, street, streetNumber, ...userData } = Object.fromEntries(formData);
       userData.address = {
            country,
            city,
            street,
            streetNumber,
        }

        userData.createdAt = new Date().toISOString();
        userData.updatedAt = new Date().toISOString();
      //console.log("Submitting user data:", userData)

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
          <TableComponent users={users}/>
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
