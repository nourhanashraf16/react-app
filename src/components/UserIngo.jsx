import React from 'react';
import {useState , useEffect} from 'react';


export const UserIngo = () => {
    //component didUpdated
    const [name, setName] = useState("");
    useEffect(() => {
      console.log(`name is changed ${name}`);
  }, [name])
    
  return (
   <>
   <input
            placeholder="enter name"
            onChange={e => setName(e.target.value)}
        />
   <p>{name}</p>

   </>

  )
}
