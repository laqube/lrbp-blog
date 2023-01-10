import React, { useState } from 'react';
import Button from '@mui/material/Button';

function CRUDOp(){
    const list=[
        {
            id: 1,
            username: "laqube",
            email:"example1@astanait.edu.kz",
            password: "Qqwerty1!",
            role:"admin"
        },
        {
            id:2,
            username: "homyak",
            email:"example2@astanait.edu.kz",
            password: "Qqwerty1!",
            role:"admin"
        },
        {
            id:103,
            username: "John Doe",
            email:"example3@astanait.edu.kz",
            password: "Doe667",
            role:"user"
        }
    ]
     
    const [lists, setList] = useState(list)
    
    return(
        <div>
            <AddList setList = {setList}/>
            <table>
                {
                    list.map((current)=>(
                        <tr sx={{ height: '100%' }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <td>{current.username}</td>
                            <td>{current.email}</td>
                            <td>{current.role}</td>
                            <td>
                                <Button variant="outlined" color="success" sx={{ mx: 0.5 }}>Edit</Button>
                                <Button variant="outlined" color="error" sx={{ mx: 0.5 }}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            
        </div>    
        
    )
} 

function AddList({setList}){
    function handleSubmit(event){
        event.preventDefault();
        const username = event.target.elements.username.value;
        const email = event.target.elements.email.value;
        const role = event.target.elements.role.value;
        const password = event.target.elements.password.value;
        const newlist ={
            id: 104,
            username,
            email,
            role,
            password
        }
        setList((prevList)=>{
            return prevList.concat(newlist)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='Enter Username'sx={{m: 1}}/>
            <input type="text" name="email" placeholder='Enter Email'/>
            <input type="text" name="role" placeholder='Enter The Role'/>
            <input type="text" name="passowrd" placeholder='Enter Password'/>
            <button type="submit">Add</button>
            
        </form>
    )
}

export default CRUDOp;