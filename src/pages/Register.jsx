import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup'

export default function Register() {

  let x = useNavigate();

  function handleSubmit(values) {
    x('/login');
  }

  

  let reg = /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<,>.?/\\|~-]).*$/;

  let validation = Yup.object({
    email: Yup.string().email("Please enter the right email format").required("email is required"),
    password: Yup.string().required("password is required").min(8,"password should be 8 characters at least").max(14).matches(reg,"password should contain at least one special character"),
    re_password: Yup.string().required("repassword is required").oneOf([Yup.ref("password")] , "Please enter the same password")
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      re_password: "",
    },

    validationSchema: validation,

    onSubmit: handleSubmit
  });

  return (
    <div className="loginBackGround w-100 vh-100">
      <div className="p-md-4 col-md-6 p-3 col-10  loginBox position-absolute start-50 top-50 translate-middle rounded-4">
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 py-md-4 py-3"
        >
          <h3 className="text-center text-white"> Sign Up Your Account</h3>
          <p className="text-center">
            Welcome to a smarter way to manage tasks and products. Our
            comprehensive suits is designed to steamlibe your workflow, enhance
            collaboration
          </p>
          <div className="d-flex flex-column gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              className="p-2 ps-2 input-color"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email? <div className="text-danger">{formik.errors.email}</div> : "" }
          </div>
          <div className="d-flex flex-column gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="p-2 ps-2 input-color"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password? <div className="text-danger">{formik.errors.password}</div> : "" }
          </div>
          <div className="d-flex flex-column gap-1">
            <label htmlFor="password">Repeat Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="re_password"
              className="p-2 ps-2 input-color"
              name="re_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.re_password && formik.touched.re_password? <div className="text-danger">{formik.errors.re_password}</div> : "" }
          </div>

          <button className="googleBtn sn p-2 mt-4">Sign up</button>
        </form>
      </div>
    </div>
  );
}
