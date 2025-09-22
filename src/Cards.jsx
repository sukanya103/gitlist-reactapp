import React from 'react'
import './Card.css'

export default function Card({ profile }) {
  return (
    <div className='Profile-details'>
      <img src={profile.avatar_url} alt={profile.login} />

      <div className='Profile-data'>
        <h3>UserName: {profile.login}</h3>
        <h3>ID: {profile.id}</h3>
        <button>
          <a href={profile.html_url} target='_blank' rel="noreferrer">
            See details
          </a>
        </button>
      </div>
    </div>
  )
}

