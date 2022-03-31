import React from "react";

const Content = (props)=>{
    const contenRendered = props.productsSection.map((value)=>{

        return (
            <div className="card" key={value.id}>

                <div><img src={value.img}/></div>
                <span className="rating">{value.rating}<span>{value.price}</span></span> 
                <div><h6>{value.name}</h6></div>
                
                
        
            </div>
          
        )
  
      })
    return(
        <section className="productsSection">
            
            {contenRendered}
            
        </section>
    )
}

export default Content;