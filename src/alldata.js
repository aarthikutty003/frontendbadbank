import userContext from './context.js';
import {useContext} from'react';
import {useState,useEffect} from "react";
import {Table} from 'react-bootstrap';
import axios from 'axios';
import {Form,Button,Card,home} from 'react-bootstrap';
import './App.css'



export default function Alldata(){

  const[data,setData]=useState([]);

  useEffect(()=>{

    async function fetchData(){
      await axios.get("https://serve-ad8f.onrender.com/data").then(res=>{
        setData(res.data)
        console.log(res.data);
         
    }
      )
    }
  fetchData()
  
  },[])


    
    const url="https://serve-ad8f.onrender.com/data"

    async function handleClick(){
        try{
            await axios(url).then(res=>setData(res.data))
        }
        catch(e){
        console.log(e.message);
        }   

    }


    function handleDelete(id){
     
axios.delete(`https://serve-ad8f.onrender.com/delete/${id}`).then(handleClick())
    }


    return(<> {<div id="img">
    {/* <h1> Welcome to bad bank</h1> */}
    
    
    <Card style={{width:"950px",height:"450px",background:"transparent",padding:"60px",textalign:"center", Right:"100px", left:"320px",border:"solid 2px black" , position:"absolute"}}>
        
    <h3 id="head">All Data</h3>
        
        {/* <button id='fetch' onClick={handleClick}>Fetch/Refresh</button> */}

        {/* {data.map((item)=><li>{item.name}-{item.amount}</li>)} */}
        <Table id='out' striped bordered hover>
     
      <thead>
        
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Amount</th>
         <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item)=>{
                return(
                    <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.amount}</td>
                    <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
                  </tr>
                )
                
            })
        }
        
       
      </tbody>
    </Table>
    </Card>
</div>}

        </>)
   
}