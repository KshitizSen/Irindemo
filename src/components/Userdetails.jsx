import React, { useEffect, useState } from 'react'
import './Userdetails.css';
import edit from "./image/edit.png";
import deleteimg from "./image/delete.png"
import axios from 'axios';



function Userdetails() {

  
  const [userData, setUserData] = useState([]);
  const [input,setInput] = useState(false);
  const [clickId , setClickId] = useState("")

  useEffect(() => {
    getUserData();
  }, []);

  //
  const url="http://localhost:4000/api/informations"
const [data,setData]=useState({
  Firstname:"",
  Lastname:"",
  Email:"",
  DOB:""
}) 

function submitdata(e){

  e.preventDefault();
  axios.put(`http://localhost:4000/api/informations/${clickId}`, {
    Firstname:data.Firstname,
  Lastname:data.Lastname,
  Email:data.Email,
  DOB:data.DOB
  })
  .then(res =>{
    setInput(!input)
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

  const getUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/informations`);
      console.log(res.data)
      setUserData(res.data)
    } catch (error) {
      console.log(error);
    }
  };


  
  //for delete on click
function deleteuser(index){
  fetch(`http://localhost:4000/api/informations/${index}`,{
    method:'DELETE'
  }).then ((result) => {
    result.json.then((res) => {
      console.warn(res)
    })
  }) 
}

    return (
      <div className="background">
   <div className="body2">
  
          <div className="x1"><h1>User Details</h1></div>
  
  
          <form>
{
  userData.map((user,index) => {

    return(
      <div className="usercontainer" key={index}>
        {
          !input || !(user._id==clickId)?<div className="x4">{user.Firstname} </div>:<input required onChange={(e)=>handle(e)} id="Firstname" value={data.name} type="text" className='s1'/>
        }

      {
        !input || !(user._id==clickId)?<div className="x4">{user.Email} </div>: <input required onChange={(e)=>handle(e)} id="Email" value={data.name} type="text" className='s3'/>
      }
      {
       ! input?
        <button onClick={(e)=>{setInput(!input)
          setClickId(user._id)
          setData({
            Firstname:`${user.Firstname}`,
            Lastname:`${user.Lastname}`,
            Email:`${user.Email}`,
            DOB:`${user.DOB}`
          }) 
      
          e.preventDefault()}} className="x4"><img src={edit} /> 
          </button>
          :<button onClick={submitdata}
            
          >Done</button>
      }
    

      <button onClick={() => deleteuser(user._id)} className="x4"><img src={deleteimg} /> </button>
    </div>

    )
  })
}

       

        {/* <div class="z3">

          <div class="x4">Name </div>
          <div class="x4">Email </div>
          <div class="x4"><img src={edit} /> </div>



        </div>

        <div class="z4">

            <div class="x4">Name </div>
            <div class="x4">Email </div>
            <div class="x4"><img src={edit} /> </div>



        </div>

        <div class="z5">

            <div class="x4">Name </div>
            <div class="x4">Email </div>
            <div class="x4"><img src={edit} /> </div>



          </div>

      <div class="z6">

          <div class="x4">Name </div>
          <div class="x4">Email </div>
          <div class="x4"><img src={edit} /> </div>



      </div> */}

<div> <input type="button" value="Load More" className="x5"/></div>


</form>    
   </div>

   </div>
    )
  }

export default Userdetails