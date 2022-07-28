import { Formik } from "formik";
import * as Yup from "yup";
import "./registration.css"

// Creating schema
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const schema = Yup.object().shape({
    name:Yup.string()
    .min(3, "Username must be at least 3 charecter long")
    .required("Required"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 8 characters")
    .matches(passwordRules,{message:"Should contain 1 UPPER case letter 1 special charecter,1number, and should be of 8 charecter"})

});

const Registration =() => {
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{name:"", email: "", password: "" }}
        onSubmit={(values,actions) => {
          // Alert the input values of the form that we filled
        //   new Promise((resolve) => setTimeout(resolve, 1000));
        //   alert(JSON.stringify(values));
        actions.resetForm();
        window.location.href="/dashboard"
    

      
        
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <h1>Login Form</h1>
                <input
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter your name"
                  className="form-control inp_text"
                  id="name"
                />
                {/* If validation is not passed show errors */}
                {errors.name && touched.name && <p className="error">{errors.name}</p>}


                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                {errors.email && touched.email && <p className="error">{errors.email}</p>}

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Registration;
