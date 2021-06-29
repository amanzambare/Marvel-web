import React from 'react'

 const Data = (props) => {
    return (
        <div>
              <img src={props.src} alt={props.alt} />

                   <h4 style={{color:"white"}}>{props.heading}</h4>

                   <p style={{color:"white"}}>{props.para}</p>
                   
        </div>
    )
}
export default Data;