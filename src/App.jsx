import {useState} from 'react';
import './App.css'

function App() {

  const [name,setName] = useState("")
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")

  const [submitData,setSubmitData] = useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const data={name};

    setSubmitData(data);
    setName("");
    setMail("");
    setPassword("");
  }


  return(
    <>
    <form onSubmit={handleSubmit}>
      <label>Name : </label>
      <input type="text" value={name} onChange={(e)=>
        setName(e.target.value)} />
        <br /><br />

      <label>Email : </label>
      <input type="email" value={mail} onChange={(e)=>
        setMail(e.target.value)} />
        <br /><br />


      <label>Password : </label>
      <input type="password" value={password} onChange={(e)=>
        setPassword(e.target.value)} />


        <br />
        <br />

        <button type='submit'>Submit</button>

    </form>
    {submitData &&<div>
      <h2>Submitted Data</h2>
      <p>Name: {submitData.name}</p>
      <p>Email: {submitData.mail}</p>
      <p>Password: {submitData.password}</p>
    </div>}
    
    </>
  )

}

export default App
