import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
.member.container{
  box-sizing: border-box;
  box-shadow: 0px 1px 6px -2px(grey);
  border: 1px solid grey;
  padding: 30px;
  margin-bottom: 25px;

   
}
h2{
  font-family: Arial, Helvetica, sans-serif;
  color: #111111;
  margin-bottom: 1em;
  font-size: 1.4em;

}
`
export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>wait..</h3>
  }

  return (
    <Styled>
    <div className='member container'>
      <h2>Name: {details.teamMateName}</h2>
      <p>Favorite Asana: {details.favoriteAsana}</p>
      <p>Email: {details.email}</p>
      <p>Title: {details.status}</p>
      

    </div>
    </Styled>
  )
}
