import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Cards'
import './Card.css'

export default function CardList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
  }, [])

  if (loading) return <h2>Loading...</h2>


  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='Card-container'>
      {currentUsers.map((profile, index) => (
        <Card key={index} profile={profile} />
      ))}

      
      <div style={{ marginTop: '20px' }}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          ⬅ Back
        </button>
        <span style={{ margin: '0 10px' }}> Page {currentPage} </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next ➡
        </button>
      </div>
    </div>
  )
}
