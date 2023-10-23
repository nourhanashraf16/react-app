import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import{increment , decrement } from '../../redux/slices/counterSlice';
export const Counter = () => {
 
    const globalCounter = useSelector((store)=>{
        console.log(store);
        return store.myCounter.initialCounter
    }
)
   const dispatch =useDispatch();
   const handleIncrementGlobal =()=>{
       dispatch(increment())
   }
   const handleDecrementGlobal =()=>{
    dispatch(decrement())
}
  
  return (
    <>
        <section className='counter py-5'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                <Button variant="danger" className='mx-5' onClick={handleIncrementGlobal}>Increment</Button>
                    <h3>Donate For us : {globalCounter} $</h3>
                    <Button variant="danger" className='mx-5' onClick={handleDecrementGlobal}>Decrement</Button>
                </div>
            </div>
        </section>
    </>

  )
}
