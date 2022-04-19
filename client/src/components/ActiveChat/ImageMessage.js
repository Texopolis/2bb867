import React from 'react'

function ImageMessage(props) {
  return (
    <>
        <img src={props.url} style={{width:'50px'}} alt="img message"/>    
    </>
  )
}

export default ImageMessage