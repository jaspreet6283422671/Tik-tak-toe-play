import React from 'react'

function Box(props){
  return (
    <div onClick={props.onClick} className="one-box">
      {props.value}
    </div>
  );
}

export default Box;
