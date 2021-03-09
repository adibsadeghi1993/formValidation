import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./validation.css";

import{validationSchema,initialValues} from "./FormConstsnt"





const onSubmit = (values) => {
  console.log(values);
  console.log();
};

const FormValidation = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form">
 
 <h3>please Fill out the Form</h3>

          <div className="label">
            <div className="error">
              <label className="block"> firstname </label>
              <ErrorMessage name="firstname">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field type="text" id="firstname" name="firstname" />
          </div>

          <div className="label">
            <div className="error">
              <label className="block">lastname</label>

              <ErrorMessage name="lastname">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field type="text" id="lastname" name="lastname" />
          </div>

          <div className="label">
            <div className="error">
              <label className="block"> nationalcode </label>

              <ErrorMessage name="nationalcode">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field
              type="number"
              placeholder="+98"
              id="nationalcode"
              name="nationalcode"
            />
          </div>

          <div className="label">
            <div className="error">
              <label className="block"> mobile </label>

              <ErrorMessage name="mobile">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field
              type="number"
              placeholder="9186564008"
              id="mobile"
              name="mobile"
            />
          </div>

          <div className="label">
            <div className="error">
              {" "}
              <label className="block"> homephone</label>
              <ErrorMessage name="homephone">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field
              type="number"
              placeholder="9186564008"
              id="homephone"
              name="homephone"
            />
          </div>

          <div className="label">
            <div className="error">
              <label className="block">email</label>
              <ErrorMessage name="email">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field
              type="email"
              placeholder="john@example.com"
              id="email"
              name="email"
            />
          </div>

          <div className="label">
            <div className="error">
              <label className="block">password</label>
              <ErrorMessage name="password">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field type="password" id="password" name="password" />
          </div>

          <div className="label">
            <div className="error">
              <label className="block">confirmPassword </label>
              <ErrorMessage name="confirmPassword">
                {(error) => <div className="message">{error}</div>}
              </ErrorMessage>
            </div>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>

          <button type="submit" name="action" className="btn">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormValidation;
