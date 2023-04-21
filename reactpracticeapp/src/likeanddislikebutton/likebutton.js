import React, { Fragment, useState } from"react";

function Counter(){
 

  const [like,setlike] = useState(0);
  const [dislike,setdislike] = useState(0);


return(

<div className="counter-container">

<button onClick={()=>setlike(like+1)} className="bt-sz-lg">
👍{like}
</button> 


<button onClick={()=>setdislike(dislike+1)} className="bt-sz-lg">
👎{dislike}
</button>                                           


</div>


)
}










export default Counter;