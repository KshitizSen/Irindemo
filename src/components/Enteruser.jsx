import axios from 'axios';
import React, { useState} from 'react'
import './Entetuser.css';


function Enteruser() {
const url="http://localhost:4000/api/informations"
const [data,setData]=useState({
  Firstname:"",
  Lastname:"",
  Email:"",
  DOB:""
})


const clearInput = (e) => {
setData({
Firstname:"",
  Lastname:"",
  Email:"",
  DOB:""
})

} 

function submit(e){
  e.preventDefault();
  axios.post(url, {
    Firstname:data.Firstname,
  Lastname:data.Lastname,
  Email:data.Email,
  DOB:data.DOB
  })
  .then(res =>{
    console.log(res.data)
    window.location.reload(true)
  })
}

function handle(e){
const newdata={...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)
}

  return (
 <div className="body">

        <div className="a1"><h1>Enter User Details</h1></div>

 <form onSubmit={(e)=> submit(e)} >
    <div className="a2">First Name<input required onChange={(e)=>handle(e)} id="Firstname" value={data.name} type="text" className='s1'/> </div>
    <div className="a2">Last Name <input required onChange={(e)=>handle(e)} id="Lastname" value={data.name} type="text"  className='s2'/> </div>
    <div className="a2">Email<input required onChange={(e)=>handle(e)} id="Email" value={data.name} type="text" className='s3'/> </div>
    <div className="a2">DOB<input required onChange={(e)=>handle(e)} id="DOB" value={data.name} type="text"  className='s4'/> </div>
    {/* <div> <input type="button" value="Sumbit your request" className="s5"/> </div> */}
    <div> </div>
    <button type="reset" onClick={clearInput} title="clear" className="s6">Clear</button> 
    <button className='s5' type="submit" value="Sumbit your request">Submit your request</button>

 </form> 
  
 </div>
  )
}

export default Enteruser