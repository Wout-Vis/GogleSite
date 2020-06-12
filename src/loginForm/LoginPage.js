import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";

import { withFormik, Form, Field } from "formik";

const LoginTest = ({ values, errors, touched }) => (
  <div>
    <Form>
      <div>{touched.email && errors.email && <p>{errors.email}</p>}</div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>

      <Field type="email " name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="password" />
      <label>
        <Field type="checkbox" name="terms" checked={values.terms} />
        Accept the terms of use
      </label>
      <button type="submit">submit</button>
    </Form>
  </div>
);

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
        values.email === "jason.zeng@gmail.com" &&
        values.password === "test"
      ) {
        resetForm();
      } else {
        setErrors({ email: "The combination is wrong" });
      }
      setSubmitting(false);
    }, 2000);
  },
})(LoginTest);
