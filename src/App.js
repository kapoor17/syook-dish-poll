import React, { useState } from "react"
import MainApp from "./components/MainApp"
import LoginForm from "./components/LoginForm"

function App(){
  const [isSubmitted, setSubmitted] = useState(false)
  const [error, setError] = useState({})
  const [form, setFormData] = useState({username : "", password:""})

  const users = 
    [
      {
        "id": 1,
        "username": "amar",
        "password": "amar123"
      },
      {
        "id": 2,
        "username": "akbar",
        "password": "akbar123"
      },
      {
        "id": 3,
        "username": "antony",
        "password": "antony123"
      },
      {
        "id": 4,
        "username": "john",
        "password": "john123"
      },
      {
        "id": 5,
        "username": "paul",
        "password": "paul123"
      }
    ]


  const handleSubmit = (e)=>{
    e.preventDefault()

    const {username:uname, password:pass} = form
    
    const user = users.find(user=> user.username === uname)
    if(user){
      if(user.password !== pass){
        setError({name:"password", error:"The password does not match"})
      }
      else{
        setSubmitted(true)
      }

    }else{
      setError({name:"username", error:"The user does not exist"})
    }
  }

  const handleChange = (event)=>{
    setFormData(prevData => {
      return{
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  const renderErrorMessage=(name)=>(name === error.name && (<div className="error">{error.error}</div>))

  return(
    <div className="app">
        {isSubmitted ? <MainApp/> : <LoginForm renderErrorMessage={renderErrorMessage} handleChange={handleChange} handleSubmit={handleSubmit}/>}
    </div>
  )
}

export default App