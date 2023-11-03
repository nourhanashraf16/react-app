import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
    // console.log(errors?.email?.message);
    navigate("/cart");
  };
  const myPassword = watch("password");
  console.log(myPassword);
  return (
    <>
      <section className="register py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <Form
                className="mx-auto shadow p-4"
                onSubmit={handleSubmit(onFormSubmit)}
                noValidate
              >
                <h3 className="text-center mb-2">Sign Up</h3>
                <p className="text-center text-muted login_description mb-4">
                  Create your account to get full access
                </p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-5 text-start text-muted">
                    User Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    {...register("userName", {
                      required: true,
                      pattern: /^\S*$/,
                    })}
                  />
                  {errors?.userName?.type === "required" && (
                    <h6 className="text-danger">username is required .</h6>
                  )}
                  {errors?.userName?.type === "pattern" && (
                    <h6 className="text-danger">
                      Please enter username without spaces, starting with a
                      capital letter.
                    </h6>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="fs-5 text-start text-muted">
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                  />
                  {errors?.email?.type === "required" && (
                    <h6 className="text-danger">email is required .</h6>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <h6 className="text-danger">email is not valid .</h6>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label className="fs-5 text-muted">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                    })}
                  />
                  {errors?.password?.type === "required" && (
                    <h6 className="text-danger">password is required .</h6>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <h6 className="text-danger">
                      {" "}
                      Please enter at least 8 characters.
                    </h6>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
                  <Form.Label className="fs-5 text-muted">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === myPassword || "Passwords do not match",
                    })}
                  />
                  {errors?.confirmPassword?.type === "required" && (
                    <h6 className="text-danger">field is required .</h6>
                  )}
                  {errors?.confirmPassword?.message && (
                    <h6 className="text-danger">
                      {errors?.confirmPassword?.message}
                    </h6>
                  )}
                </Form.Group>
                <div className="d-flex justify-content-center my-4">
                  <button className="btn login_btn" type="submit">
                    Sign Up
                  </button>
                </div>
                <p className="text-center text-muted login_description mb-4">
                  Already have an account? <Link to="/login"> Login </Link> here
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
