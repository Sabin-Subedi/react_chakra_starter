import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  Select,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { Field, useFormikContext } from "formik";
import React from "react";

const getFormComponentByType = (type) => {
  switch (type) {
    case "text":
      return Input;
    case "select":
      return Select;
    case "radio":
      return Radio;
    case "switch":
      return Switch;
    case "textArea":
      return Textarea;
    default:
      return Input;
  }
};

function FormField({
  name,
  value,
  as,
  type,
  required,
  size,
  isReadOnly = false,
  variant,
  label,
  helpText,
  ...props
}) {
  const { errors, touched } = useFormikContext();
  return (
    <FormControl
      isRequired={required}
      isInvalid={touched[name] && errors[name]}
      isReadOnly={isReadOnly}
      variant={variant}
      size={size}
      {...props}
    >
      <FormLabel>{label}</FormLabel>
      <Field
        as={as || getFormComponentByType(type)}
        required={required}
        name={name}
        id={name}
      />
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
      {errors[name] && <FormErrorMessage>{errors[name]}</FormErrorMessage>}
    </FormControl>
  );
}

export default FormField;
