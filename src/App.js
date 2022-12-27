import './App.css';
import React ,{useState, useReducer} from "react";
import {useForm} from "react-hook-form";

function App() {
  const [counter, setCounter]= useState(0);

  const increment =()=>{
    setCounter(counter + 1);
  }
  const decrement =()=>{
    setCounter(counter - 1);
  }

  const [inputValue, SetInputvalue]= useState("harish");
  let onChange =(event)=>{
    const newValue = event.target.value;
    SetInputvalue(newValue);
  };
  const [username, SetInputvalues]= useState("*****");
  let changedname =(events)=>{
    const newName = events.target.value;
    SetInputvalues(newName);
  };
  const [gmail, SetInputemail]= useState("*****");
  let changedemail =(events)=>{
    const newEmail = events.target.value;
    SetInputemail(newEmail);
  };
  
 /* const [state, dispatch]= useReducer */
  const defaultValues={
    username:" ",
    gmail:" ",
    password:" ",
    confirmPassword:" "
  }
const {handleSubmit, register} = useForm({defaultValues});

 const onSubmit = (data)=>{
    console.log("first", data)
 }

  return (
    <div className='container'>
      <div className='row'>
            <div className='col-md-6' style={{"background":"rgb(211 100 120)", "display":"flex","justifyContent":"center "}}>
              <button onClick={increment}> + </button>
              {counter}
              <button onClick={(decrement)=>(counter===0 ? setCounter(0):setCounter(counter-1))}> - </button>
          
            </div>
            <div className='col-md-6' style={{"background":"rgb(211 155 150)", "display":"flex"}}>
              <input placeholder='enter something' onChange={onChange}/>
              {inputValue}
          
            </div>
            <div className='col-md-6 form-group' style={{"background":"rgb(211 155 150)", "display":"flex", "flexDirection":"column","justifyContent":"center "}}>
              <form onSubmit={handleSubmit(onSubmit)} style={{"display":"flex", "flexDirection":"column","justifyContent":"center "}}>
                  <h1>Register</h1> 
                  <input type="text" class="form-control" name="username" placeholder="Full Name" autocomplete="off" {...register("username")} onChange={changedname}></input>
                  <input type='text' className='form-control' name='gmail' placeholder="Gmail" autoComplete='off' {...register("gmail")} onChange={changedemail}/>
                  <input type='text' className='form-control' name='password' placeholder='password' autoComplete='off' {...register("password")}/>
                  <input type='text' className='form-control' name='confirmPassword' autoComplete='off'{...register("confirmPassword")}  placeholder='confirm Password'/>
                  <button type="submit"> Create Account </button>
                  <p>My name is {username} and my email is {gmail}</p>
              </form>
            </div>
            <div className='col-md-6 form-group' style={{"background":"rgb(211 100 120)", "display":"flex", "flexDirection":"column","justifyContent":"center "}}>
              <form  style={{"display":"flex", "flexDirection":"column","justifyContent":"center "}}>
                  <h1>login</h1>
                  <input type='text' className='form-control'  name='username' placeholder='Full Name' autoComplete='off' />
                  <input type='text' className='form-control' name='password' placeholder='password' autoComplete='off' />
                  <button type="submit"> Login </button>
                  
              </form>
            </div>
      </div>
    </div>
  );
}

export default App;
