//import react from 'react';
import './user.css';
import login_image from './images/login.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function User(){
  const state=useState();
  const[initial_user,final_user]=useState("");
  const[initial_pass,final_pass]=useState("");
  const temp_user=[
    {
    email1:"saharohit158@gmail.com",
    pass1:"12345"
    },
    {
      email2:"sudipchatterjee441@gmail.com",
      pass2:"Sudip@2000"
      },
      {
        email3:"souvikxyz@gmail.com",
        pass3:"idontknow"
        },
  ];
  
  const newpage=(e)=>{
    e.preventDefault();
    //console.log("hi"+initial);
    if(initial_user=="" || initial_pass==""){
      alert("Email or Password is empty");
     //e.preventDefault();
    }
    else if(temp_user.email1==e.target.value && temp_user.pass1==e.target.value){
      alert(`Welcome ${initial_user}`);
      window.open('/libraray/user/home');
      final_user("");
      final_pass("");
    }
    else if(temp_user.email2==e.target.value && temp_user.pass2==e.target.value){
      alert(`Welcome ${initial_user}`);
      window.open('/libraray/user/home');
      final_user("");
      final_pass("");
    }
    else if(temp_user.email3==e.target.value && temp_user.pass3==e.target.value){
      alert(`Welcome ${initial_user}`);
      window.open('/libraray/user/home');
      final_user("");
      final_pass("");
    }
    else{
      alert("Email or password is incorrect");
      final_user("");
      final_pass("");
    }

  }
  const changeinput=(e)=>{
    final_user(e.target.value);
  }
  const changeinput1=(e)=>{
    final_pass(e.target.value);
  }
    return(
        <>
        <div className='user'>
        <div className="container h-75">
            <div className="row h-100">
            <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 left">
            <h1 className='pb-5 pe-4'>Library</h1>
                <img src={login_image} className='w-75 h-50' alt=''></img>
                </div>
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 right">
                
                
                <h1 className='pb-5'>Welcome!</h1>
                <form onSubmit={newpage}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={initial_user} onChange={changeinput}></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={initial_pass} onChange={changeinput1}></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  {/* <Link to={'/libraray/home'}>*/}<button type="submit" class="btn btn-primary">Submit</button>
</form>
<div className="d-grid gap-2 col-6 mx-auto">
  
<Link to={'/libraray/sign'} className='link'><button className="btn btn-primary mt-5 w-100" type="button">Create New Account</button></Link>
</div>
                

                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default User;