import React, {Component} from 'react';
import './modal.scss'

class Modal extends Component{
   render(){
     return(
         <div className="modal">
             <h2>Modal Title</h2>
             <div>Modal Body</div>
             <button onClick={(e)=> console.log(e)}> click me</button>
         </div>

     )
 }
}

export default Modal