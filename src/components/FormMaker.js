import { Button } from "@chakra-ui/react";
import React from "react";
import FormParser from "../utils/FormParser";
import Form from "./form/Form";

function FormMaker({ form, onSubmit }) {
  const { fields, initialValues, validationSchema } = FormParser(form).parse();
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={this.onSubmit}
    >
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormMaker;
