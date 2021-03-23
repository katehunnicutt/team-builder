import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
*{
    box-sizing: border-box;
    color: #222222;
    
}
label{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px
}
input, select{
    width:14em;

}


.submit button{
padding: 1em;
background-color: lightblue;
margin: 20px;
border: none;
justify-self: flex-end;

}

`

export default function AshramForm(props){
    const { values, update, submit} = props


const onChange = evt => {
    const {name, value} = evt.target
    update(name, value)
}

const onSubmit= evt => {
    evt.preventDefault()
    submit()
}

return(
<Styles>
<form className= 'form-container' onSubmit={onSubmit}>

<div className='form-group-inputs'>

    <label>Name
        <input
            name= 'teamMateName'
            type= 'text'
            value={values.teamMateName}
            onChange={onChange}
            placeholder='name'
        />
    </label>

    <label>Title
        <select value={values.status} name='status' onChange={onChange}>
            <option value= ''>--- Select Guest Type ---</option>
            <option value= 'Swami'>Swami</option>
            <option value= 'Chaitanya'>Chaitanya</option>
            <option value= 'Karma Yogi'>Karma Yogi</option>
            <option value= 'Yoga Vacationer'>Yoga Vacationer</option>

        </select>

    </label>

    <label>Email
        <input
            name= 'email'
            type= 'text'
            value= {values.email}
            onChange={onChange}
            placeholder= 'email@address.com'
        />
    </label>

    <label> Favorite Asana
        <select value= {values.favoriteAsana} name='favoriteAsana' onChange={onChange} >
            
            <option value= ''>--- Select Asana ---</option>
            <option value= 'Matsyasana'>Matsyasana</option>
            <option value= 'Sirsasana'>Sirsasana</option>
            <option value= 'Savasana'>Savasana</option>
            <option value= 'Halasana'>Halasana</option>
            <option value= 'Sarvangasana'>Sarvangasana</option>
            <option value= 'Bhujangasana'>Bhujangasana</option>
            <option value= 'Paschimothanasana'>Paschimothanasana</option>
            <option value= 'Salabhasana'>Salabhasana</option>
            <option value= 'Dhanurasana'>Dhanurasana</option>
            <option value= 'Kakasana'>Kakasana</option>
            <option value= 'Trikonasana'>Trikonasana</option>



        </select>
    </label>
    <div className='submit'>
        <button>
            submit
        </button>
    </div>
</div>
</form>
</Styles>
)

}

