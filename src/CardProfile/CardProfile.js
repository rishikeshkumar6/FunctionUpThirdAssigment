 import './cardProfile1.css'
 export function CardProfile(props){
    const {name,
           designation,
           jobDescription,
            source}=props
    return (
        <div class="parent">
            
            <div class="child">
              <img src={source}></img>
              <h3>{designation}</h3>
              <h2>{name}</h2>
              <h6>{jobDescription} </h6>
            </div>
        </div>
    )
 }