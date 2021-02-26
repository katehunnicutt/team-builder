import React from 'react'

export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>wait..</h3>
  }

  return (
    <div className='member container'>
      <h2>Name: {details.teamMateName}</h2>
      
      <p>Favorite Asana: {details.favoriteAsana}</p>
      <p>Email: {details.email}</p>
      <p>Title: {details.status}</p>
      

    </div>
  )
}
