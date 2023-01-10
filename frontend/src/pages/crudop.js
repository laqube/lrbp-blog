import React, { useRef, useState, handleSubmit } from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

function CRUDOp(){
    const list=[
        {
            id: 1,
            username: "laqube",
            email:"example1@astanait.edu.kz",
            role:"admin",
            password: "Qqwerty1!"
        },
        {
            id:2,
            username: "homyak",
            email:"example2@astanait.edu.kz",
            role:"admin",
            password: "Qqwerty1!"
            
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
                            <td>{current.password}</td>
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
    const usernameRef = useRef()
    const emailRef = useRef()
    const roleRef = useRef()
    const passwordRef = useRef()


    function handleSubmit(event){
        event.preventDefault();
        const username = event.target.elements.username.value;
        const email = event.target.elements.email.value;
        const role = event.target.elements.role.value;
        const password = event.target.elements.password.value;
        const newlist ={
            id: 3,
            username,
            email,
            role,
            password
        }
        setList((prevList)=>{
            return prevList.concat(newlist)
        })
        usernameRef.current.value = ""
        emailRef.current.value = ""
        roleRef.current.value = ""
        passwordRef.current.value = ""
    }

    return(
        <form onSubmit={handleSubmit}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              type="text" name="username" placeholder='Enter Username' 
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="text" name="email" placeholder='Enter Email'
              autoComplete="email"
              autoFocus

            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="role"
              label="Role"
              type="text" name="role" placeholder='Enter The Role'
              autoComplete="role"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="text" name="passowrd" placeholder='Enter Password' 
              autoComplete=""
              autoFocus
            />
            
            <Button type="submit" 
                    onClick={"submit"}
                    variant="outlined" 
                    color="success"
                    sx={{mx: 1}}
                    >Add</Button> */}
            <input type="text" name="username" placeholder='Enter Username' ref={usernameRef}/>
            <input type="text" name="email" placeholder='Enter Email' ref={emailRef} />
            <input  type="text" name="role" placeholder='Enter The Role' ref={roleRef}/>
            <input type="text" name="passowrd" placeholder='Enter Password' ref={passwordRef}/>
            <button type="submit">add</button>
            
        </form>
    )
}

export default CRUDOp;