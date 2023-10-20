import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const Counter = () => {
    const [counter , setCounter] = useState(10);
    const handleIncrement =()=> {
        setCounter(counter+1);
    }
    const handleDecrement = ()=>{
        if(counter>0){
            setCounter(counter-1);
        }

    }
  return (
    <>
        <section className='counter py-5'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                <Button variant="danger" className='mx-5' onClick={handleIncrement}>Increment</Button>
                    <h3>{counter}</h3>
                    <Button variant="danger" className='mx-5' onClick={handleDecrement}>Decrement</Button>
                </div>
            </div>
        </section>
    </>

  )
}
