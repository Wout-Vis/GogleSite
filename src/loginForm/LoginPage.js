import React from "react";
import * as Yup from "yup";

import { withFormik, Form, Field } from "formik";

import Progress from "../Progress";

const LoginTest = ({ values, errors, touched }) => (
  <div>
    <Form>
      <div>{touched.email && errors.email && <p>{errors.email}</p>}</div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <Field type="email " name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="password" />
      <button type="submit">Submit</button>
    </Form>
  </div>
)
  
  
export const FormikApp = withFormik({
  
  mapPropsToValues({ email, password, terms }) {
    return {
      email: email || "",
      password: password || "",
      terms: terms || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("email is not valid")
      .required("email is required"),
    password: Yup.string().required("password is required"),
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      if (
        values.email === "d.escudero@gogle.com" &&
        values.password === "Chewie"
      ) {
        resetForm();
        Progress.updateProgress('2');
      } else {
        setErrors({ email: "The combination is wrong" });
      }
      setSubmitting(false);
    }, 2000);
  },
})(LoginTest);
