import { useState } from 'react';
import './car.css'

function App() {
const [color,setColor]=useState("grey");
 

  return (
    <>
    <h1>clr picker</h1>
    <div style={{height:"150px" ,width:"150px",border:"2px solid black ",
  backgroundColor:color}} >

    </div>
    <button onClick={()=>setColor ("black")} style={{backgroundColor:"Black",color:"white"}}>black</button>
    <button onClick={()=>setColor ("beige")}style={{backgroundColor:"Beige",color:"black"}}>beige</button>
    <button onClick={()=>setColor ("red")}style={{backgroundColor:"Red",color:"white"}}>red</button>
    <button onClick={()=>setColor ("blue")}style={{backgroundColor:"Blue",color:"white"}}>blue</button>
    <button onClick={()=>setColor ("grey")} style={{padding:"2px"}}>default</button>
    </>
  )
}

export default App
