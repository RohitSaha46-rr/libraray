
function Card(props){
    return(
        <>
       
    <div className='card-group'>
      <img src={props.imgsrc} className="w-75 h-75"/>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
    </div>
  
        </>
    );

}
export default Card;