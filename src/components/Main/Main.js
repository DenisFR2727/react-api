import React from "react";
import Cards from "../Cards/Cards";
import "../Main/main.css"

const Main =()=>{
    return(<div className="main">
           <div className="main_img">
           <div className="text_img">
               <div className="text_2block">
               <h1>Test assignment for front-end developer</h1>
               <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
               </div>
             <div className="button_block_img">
                <button className="button_img" type="submit">Sign up</button>
             </div>
              
           </div>
           </div>
        
             <Cards />
          </div>
             
         
    )
}
export default Main;