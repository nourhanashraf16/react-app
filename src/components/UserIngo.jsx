import React from 'react'

export const UserIngo = (props) => {
    console.log(props)
    
  return (
   <>
   <ul >
    <li>name:{props.name}</li>
    <li>phone:{props.phone}</li>
   </ul>
   </>

  )
}
