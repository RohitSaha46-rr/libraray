//import react from 'react';
import './user.css';
import login_image from './images/login.png';
import { Link } from 'react-router-dom';
function User(){
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
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link to={'/libraray/home'}><button type="submit" class="btn btn-primary">Submit</button></Link>
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