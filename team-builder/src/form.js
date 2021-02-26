import React from 'react'

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
<form className= 'form container' onSubmit={onSubmit}>
<div className='form-group inputs'>

    <label>Name
        <input
            name= 'name'
            type= 'text'
            value={values.teamMateName}
            onChange={onChange}
            placeholder='type name or leave'
        />
    </label>

    <label>Title
        <input
            name= 'status'
            type= 'text'
            value= {values.status}
            onChange={onChange}
            placeholder= 'type title or leave'
        />
    </label>

    <label>Email
        <input
            name= 'email'
            type= 'text'
            value= {values.email}
            onChange={onChange}
            placeholder= 'type email or leave'
        />
    </label>

    <label> Favorite Asana
        <select value= {values.favoriteAsana} name='Favorite Asana' onChange={onChange} >
            
            <option value= ''>--- Select Asana.. ---</option>
            <option value= 'MATSYASANA'>matsyasana</option>
            <option value= 'SIRSASANA'>sirsasana</option>
            <option value= 'SAVASANA'>savasana</option>
            <option value= 'HALASANA'>halasana</option>

        </select>
    </label>
    <div className='submit'>
        <button>
            submit
        </button>
    </div>
</div>
</form>
)

}

