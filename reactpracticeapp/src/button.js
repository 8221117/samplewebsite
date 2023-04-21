import React, { Fragment } from"react";

const Button =(props)=>{

  let buttonName = props.myname ? props.myname : "Toggle description";

return(
  <Fragment>
    {/* <button>{props.myname ? props.myname : "kutty"}</button> */}
    <button>{buttonName}</button>

    {/* {props.myname} ? {props.myname} : "submit" */}
  </Fragment>



);
 



};

export default Button;