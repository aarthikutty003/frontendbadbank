

import {useContext,useState,useEffect} from 'react';
import userContext from './context.js';
import axios from 'axios'
import {Form,Button,Card,home} from 'react-bootstrap';


export default function Deposit(){

   const[name,setName] = useState('')
   const[pass,setPass]=useState('');
    const[deposit,setDeposit]=useState()
    var [total,setTotal]=useState()
    const[data,setData]=useState([]);
    const[id,setId]=useState();
    let[details,setDetails]=useState(false);

useEffect(()=>{
    async function fetchData(){
      await axios.get("https://serve-ad8f.onrender.com/data").then(res=>{
        setData(res.data)
        console.log(res.data);
        
      
    }
      )
    }
fetchData()

},[total]);

    function changeHandler(val, setter) {
        setter(val);
        deposit !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")
    }

    async function submitHandler(e) {
        e.preventDefault();
        try{
            if (isNaN(deposit) || deposit < 0) {
                alert("Please enter a valid amount....")
            }
            else {
              
                await axios.put(`https://serve-ad8f.onrender.com/update/${id}`, { amount: total + deposit }).then(setTotal(total + deposit)).then(alert(`amount ${deposit} is deposited successfully !`));
              setDeposit('')
            }
        }
        catch(err){
            console.log(err.message);
        }
// console.log(name);
      
    }



function userHandler(e){
    e.preventDefault()
   let currentUser = data.find((item)=>item.name === name && item.password === pass)
  console.log("currentUser",currentUser);
if(currentUser){
    console.log(currentUser);
    setTotal(currentUser.amount);
    setId(currentUser._id)
    setDetails(true);
}
else{
    alert("Enter correct details")
}
  
}

   
    return(<>
    
    <>

   {
        !details ?  <>
     <div id='form-div'>
        
     <div id="img">
        
           <>
                            <Card style={{width:"30%",height:"300px",backgroundColor:"transparent",padding:"70px",margin:"100px",textalign:"center", left:"390px",border:"solid 2px black"}}>
                   <Form className="form-inline" onSubmit={userHandler}>
                        <h3>User Details</h3>
                         <Form.Group className="mb-3">
                 <Form.Control type="text" placeholder="Enter userName" onChange={e=>setName(e.target.value)} />
             </Form.Group>
             <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)}/>
            </Form.Group>
                       
                       <Button type='submit' className='btn' style={{ backgroundColor: 'black', color: 'white', borderColor: 'white' }} disabled={name ==='' || pass ===''}>Enter</Button>
                    </Form>
                </Card> </>
                </div>
        </div>
      
        </> : <>
        <div id='form-div'>
        <div id="img">
            <>
                 
                <Card style={{width:"30%",height:"300px",backgroundColor:"transparent",padding:"70px",margin:"100px",textalign:"center", left:"390px",border:"solid 1px black"}}>
                   
                <h3>Account Balance:{total} </h3>
                    <Form className="form-inline" onSubmit={submitHandler}>
                         <h3>Deposit</h3>
                      
                         <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Enter amount" onChange={(e) => changeHandler(Number(e.target.value), setDeposit)} value={deposit}/>
                        </Form.Group>
                        <Button type='submit' className='create-btn disabled' style={{ backgroundColor: 'black', color: 'white', borderColor: 'white' }}>Deposit</Button>
                    </Form>
                </Card> </>
                </div>
        </div>
    
        </>
    }
      
   </>
    </>)
    
}

















// import { useContext, useState, useEffect } from 'react';
// import userContext from './context.js';
// import axios from 'axios'
// import { Form, Button, Card, home } from 'react-bootstrap';
// import './App.css'


// export default function Deposit() {

//     const [name, setName] = useState('')
//     const [pass, setPass] = useState('');
//     const [deposit, setDeposit] = useState(0)
//     var [total, setTotal] = useState()
//     const [data, setData] = useState([]);
//     const [id, setId] = useState();
//     let [details, setDetails] = useState(false);

//     useEffect(() => {
//         async function fetchData() {
//             await axios.get("http://localhost:8081/data").then(res => {
//                 setData(res.data)
//                 console.log(res.data);


//             }
//             )
//         }
//         fetchData()

//     }, [total]);

//     function changeHandler(val, setter) {
//         setter(val);
//         deposit !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")
//     }

//     async function submitHandler(e) {
//         e.preventDefault();
//         try {
//             if (isNaN(deposit) || deposit < 0) {
//                 alert("Please enter a valid amount....")
//             }
//             else {

//                 await axios.put(`http://localhost:8081/update/${id}`, { amount: total + deposit }).then(setTotal(total + deposit)).then(alert(`amount ${deposit} is deposited successfully !`));

//             }
//         }
//         catch (err) {
//             console.log(err.message);
//         }
//         // console.log(name);

//     }



//     function userHandler(e) {
//         e.preventDefault()
//         let currentUser = data.find((item) => item.name === name && item.password === pass)
//         console.log("currentUser", currentUser);
//         if (currentUser) {
//             console.log(currentUser);
//             setTotal(currentUser.amount);
//             setId(currentUser._id)
//             setDetails(true);
//         }
//         else {
//             alert("Enter correct details")
//         }

//     }


//     return (<>

//         <>

//             {





//                 !details ? <>

//                     <div id='form-div'>
//                         <div id="img">

//                             <>
//                                 <Card style={{ width: "30%", height: "300px", backgroundColor: "transparent", padding: "70px", margin: "100px", textalign: "center", left: "390px", border: "solid 2px black" }}>
//                                     <Form className="form-inline" onSubmit={userHandler} >
//                                         <h3 id="head">User Details</h3>
//                                         <Form.Group className="mb-3">
//                                             <Form.Control type="text" placeholder="Enter userName" onChange={e => setName(e.target.value)} />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3">
//                                             <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPass(e.target.value)} />
//                                         </Form.Group>

//                                         <Button type='submit' id='btn' disabled={name === '' || pass === ''}>Enter</Button>
//                                     </Form>
//                                 </Card> </>
//                         </div>
//                     </div>

//                 </> : <>
//                     <div id='form-div'>
//                         <div id="img">

//                             <>

//                                 <Card style={{ width: "30%", height: "300px", backgroundColor: "transparent", padding: "70px", margin: "100px", textalign: "center", left: "390px", border: "solid 1px black" }}>
//                                     <Form className="form-inline" onSubmit={submitHandler}>
//                                         <h3>Balance:{total} </h3>
//                                         <h3>Deposit</h3>

//                                         <Form.Group className="mb-3">
//                                             <Form.Control type="number" placeholder="Enter amount" onChange={(e) => changeHandler(Number(e.target.value), setDeposit)} style={{ backgroundColor: 'transparent' }} />
//                                         </Form.Group>
//                                         <Button type='submit' id="btn">Deposit</Button>
//                                     </Form>
//                                 </Card> </>
//                         </div>

//                     </div>




//                 </>
//             }

//         </>
//     </>)

// }
