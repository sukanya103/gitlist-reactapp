import { useState } from 'react'
import './App.css'
import Cards from './Cards'
import SearchForm from './SearchForm'
import axios from 'axios'
import CardList from './CardList'

function App() {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(null);
  const [error,setError] = useState(null);

  const fetchUserData= async (username)=>{
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response.data);

      setUser(response.data)
      
    } catch (err) {
      setError("User Not Found!!")
      setUser(null)
      
    }
    setLoading(false)
  };


  return (
    <>
    <SearchForm onSearch={fetchUserData}/>
    {user && <Cards profile={user}/>}
    <h1>All Users</h1>
    <CardList/>
      
    </>
  )
}

export default App
