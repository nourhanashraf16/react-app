import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

export const Login = () => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
        
    const onFormSubmit = (data)=>{
          console.log(data);
          console.log(errors);
    }
  return (
    <section className='login py-5'>
        <div className="container">
            <div className="row justify-content-center">
               <div className='col-sm-8 col-md-6 col-lg-4'>    
               <Form className='mx-auto shadow p-4' onSubmit={handleSubmit(onFormSubmit)} noValidate>
               <h3 className='text-center mb-2'>Login</h3>
                <p className='text-center text-muted login_description mb-4'>Enter Login details to get access</p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fs-5 text-start text-muted'>Email address</Form.Label>
                <Form.Control type="email" name="email" {...register("email" ,{
                    required:true,
                })} />
                {errors?.email?.type==="required" && (<h6 className='text-danger '>email is required .</h6>) }
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label className='fs-5 text-muted'>Password</Form.Label>
                <Form.Control type="password" name="password" {...register("password" ,{
                    required:true,
                    minLength:8
                })}  />
                {errors?.password?.type==="required" && (<h6 className='text-danger' >password is required .</h6>)}
                {errors?.password?.type==="minLength" && (<h6 className='text-danger' > Please enter at least 8 characters.</h6>)}
                </Form.Group>
                <div className='d-flex justify-content-center my-4' >
                <button className='btn login_btn' type='submit'>login</button>
                </div>
                <p className='text-center text-muted login_description mb-4'>Don't have an account ? <Link to="/register">Sign Up</Link></p>


            </Form>
               </div>
            </div>

        </div>
  
  </section>
  )
}
