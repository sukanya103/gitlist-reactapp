import React, { useState } from 'react'
import './Card.css'

export default function SearchForm({onSearch}) {
    const [query,setQuery] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
            onSearch(query);
    }

    const handleChange= (e)=>{
        const value = e.target.value;
        setQuery(value)
        if(value.trim()==''){
            onSearch('')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search User' onChange={handleChange} value={query}/>
            <button type='submit'  >Search</button>

        </form>
    </div>
  )
}