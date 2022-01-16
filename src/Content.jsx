import { Link } from 'react-router-dom'
import './content.css';
import './media.css';
//import image from './images/1.jpg';
import arrow from './images/arrow.jpg';
import userHover from './images/userhover.jpg';
import adminHover from './images/adminhover.jpg';
import admin from './images/admin.jpg';
import { useState } from 'react';
function Content(){
    const [over, setOver] = useState(true);
    const [over1, setOver1] = useState(true);
const mouseOver=()=>{
    setOver(false);
}
const mouseLeave=()=>{
    setOver(true);
}
const mouseOver1=()=>{
    setOver1(false);
}
const mouseLeave1=()=>{
    setOver1(true);
}
const open=()=>{
    window.open("/libraray/librarian");
}
const cssStyle={};
const cssStyle2={};
    
cssStyle.backgroundImage=`url(${admin})`;
cssStyle.transition="0.2s linear";
cssStyle2.backgroundImage=`url(${adminHover})`;
cssStyle2.transition="0.2s linear";
    
    
    return(
        <>
        <div className='content'>
            <div className="container">
            <div className="row">
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 left pe-5">
                
                <img src={over ? arrow : userHover} className="image_box" onMouseOver={mouseOver} onMouseLeave={mouseLeave} className="w-50 h-75" alt=''></img>
                {/*<img src={image}></img>*/}
            
                <Link to={'/libraray/user'} className='link'> <h1 className='text-light'>User</h1></Link>

                </div>
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 left ps-5">
                <div className="w-50 h-75 box"    style={over1? cssStyle : cssStyle2} onMouseOver={mouseOver1} onMouseLeave={mouseLeave1} onClick={open}></div>
                    {/*<img src={over1 ? admin : adminHover} className="image_box" onMouseOver={mouseOver1} onMouseLeave={mouseLeave1} className="w-50 h-75" alt=''></img>*/}
                    <Link to={'/libraray/librarian'} className='link'> <h1 className='text-light'>Librarian</h1></Link>
                    </div>
            </div>

            </div>
            </div>
        </>
    );
}
export default Content;