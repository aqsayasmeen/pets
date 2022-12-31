import axios from 'axios'
import { useState } from 'react';
// import './App.css'
function App(){
  // const [shown,setShown]=useState(false)
  const [data,setData]=useState([])
  // const[loc,setLoc]=useState("")
  const test=()=>{
    try{
    let res=axios.get(`https://learnwebcode.github.io/json-example/animals-1.json`)
    .then((response)=>setData(response.data));
  }
    catch{
      console.log("error");
    }
  }
  console.log(data);
  return(
   <>
   <div className='style'>
   <h1>PETS</h1>
        {/* <input type={'search'} value={loc} onChange={(e)=>setLoc(e.target.value)}/> */}
   <button className='button' onClick={test}>click me</button>
   {/* <br/>
   <button className='button' onClick={()=>setShown(true)}> show result</button>{
    shown==true? */}
    <>
    {/* <p>{data.location.country}</p>
    <p>{data.location.region}</p>
    <img src={data.current.condition.icon} alt="Loading Error" />
        <p>{data.current.condition.text}</p>
        <p>{data.current.temp_c}  </p>  */}
    </>
    :null
    
   {/* } */}

   </div>
   </>
   
  )
}


export default App;