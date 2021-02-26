import React, {useState} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import AshramForm from  './form'
import Member from './Member'

const teamList = [
  {teamMateName: 'Chandika', status: 'Karma Yogi', email: 'chandika@sivananda.org', favoriteAsana: 'savasana'},

  {teamMateName: 'Maha Lakshmi', status: 'Karma Yogi', email: 'mahaLa@sivananda.org', favoriteAsana: 'savasana'},

  {teamMateName: 'Iswara', status: 'Chaitanya', email: 'iswara@sivananda.org', favoriteAsana: 'savasana' },
]

const initialFormValue = {

  teamMateName: '',
  status: '',
  email: '',
  /// make a dropdown yay
  favoriteAsana: '',
}

function Form(){
  const [teamMates, setTeamMates] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValue)



  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, [inputName]: inputValue
    })
  }

  const submitForm = () => {
    
    const newTeamMate = {
      teamMateName: formValues.teamMateName.trim(),
      status: formValues.status.trim(),
      email: formValues.email.trim(),
      favoriteAsana: formValues.favoriteAsana.trim()
    }

    setTeamMates(teamMates.concat(newTeamMate))
    setFormValues(initialFormValue);
  }

return(
  <div className='container'>
    <h1>Team Form</h1>
    <AshramForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />


    {teamMates.map((teamMate) => {
      return(
        <Member key={teamMate.id} details={teamMate}/>
      )})
      }
  </div>
)
}
render(
  <>
    <Form />
    {/* <App /> */}
  </>,
  document.getElementById('root')
);


