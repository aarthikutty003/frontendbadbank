import{useState} from 'react';
import axios from 'axios';
import {Form,Button,Card,home} from 'react-bootstrap';
import './create.css'


export default function Create(){

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

   function handleSubmit(e){
    e.preventDefault();
    if(name !=='' && email!=='' &&password !==''){
       axios.post('https://serve-ad8f.onrender.com/create',{name,email,password,amount:0}).then(()=>{

    alert("Created Successfully !");
   
  })
  setName('');
  setEmail('');
  setPassword('');
   }
  
}

    return(<>
{<div id="img">/


    <Card style={{width:"30%",height:"450px",backgroundColor:"transparent",padding:"60px",margin:"100px",textalign:"center", left:"390px",border:"solid 2px black" }}>
    
    <Form onSubmit={handleSubmit} className='form'>
  
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name..." onChange={(e)=>setName(e.target.value)} value={name}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email..." onChange={(e)=>setEmail(e.target.value)} value={email}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password..." onChange={e=>setPassword(e.target.value)} value={password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
     <Button  type="submit" className='btn'>
        Create
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="primary" type="submit" id='btn-id'>
       Add Account
      </Button>
    </Form>
    </Card>
    </div>}
    
    </>)
}