import react from 'react';
import logo from './images/lms.png';
import './home.css';
import Card from './Card';
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import book3 from './images/book3.jpg';
import book4 from './images/book4.jpg';
import book5 from './images/book5.jpg';
import book6 from './images/book6.jpg';
function Home(){
    return(
        <>
        <div className="home">
        <div className="head1">
 <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <img src={logo} className="logo ms-5" alt=''></img>
    <a className="navbar-brand ps-3" href="#">Library</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
        <li className="nav-item pe-3">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link active" aria-current="page" href="#">My books</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link active" aria-current="page" href="#">My profile</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
     
    </div>
  </div>
</nav>
</div>
<div className='content1'>
  <h1>
PLUNGE INTO THE WONDERFUL
WORLD OF READING</h1>
<p>Improvise your knowledge</p>
<a href='#popular'><i className="fas fa-arrow-alt-circle-down pt-5"></i></a>
</div>
<div className='content2' id='popular'>
<div className='heading'>
  <h1 className='text-center'>Most Popular</h1>
  </div>
  <div className='container mt-3'>
    <div className='row'>
      <div className='col-4 col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12'>
      <Card imgsrc={book1}
      title="How Beautiful We Were"
      author="Imbolo Mbue"
  />
      </div>
      <div className='col-4 col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12'>
      <Card imgsrc={book2}
       title="Intimacies"
       author="Katie Kitamura"
  />
      </div>
      <div className='col-4 col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12'>
      <Card imgsrc={book3}
      title="The Love Songs"
       author="Honoree Fanonne Jeffers"
  />
      </div>
    </div>
  </div>
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-4 col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12'>
      <Card imgsrc={book4}
      title="Invisible Child"
       author="Andrea Elliott"
  />
      </div>
      <div className='col-4 col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12'>
      <Card imgsrc={book5}
      title="On Juneteenth"
       author="Annette Gordon-Reed"
  />
      </div>
      <div className='col-4 col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12'>
      <Card imgsrc={book6}
      title="Copenhagen Trilogy"
       author="Tove Ditlevsen"
  />
      </div>
    </div>
  </div>
 

  
</div>
</div>
        </>
    )
}
export default Home;
