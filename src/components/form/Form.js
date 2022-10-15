import React from "react";
import { Formik } from "formik";

function Form({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleReset }) => (
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {children}
        </form>
      )}
    </Formik>
  );
}

export default Form;
