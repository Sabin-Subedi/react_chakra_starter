import * as yup from "yup";

class FormParser {
  constructor(data) {
    this.form = data.form;
    this.subscribe_url = data.subscribe_url;
  }

  async parse() {
    const initialValues = {};
    const validations = {};
    const fields = [];

    await this.asyncForEach(this.form, async (field) => {
      initialValues[fields.api_key] = field.defaultValue || "";
      validations[fields.api_key] = this.setValidations(field);

      fields.push(field);
    });

    return {
      initialValues,
      validationSchema: yup.object().shape(validations),
      fields,
    };
  }

  async asyncForEach(array, callback) {
    array.forEach(
      async (arrayItem, index) => await callback(arrayItem, index, array)
    );
  }

  setValidations(field) {
    let validator = yup;

    if (field.field_type === "number") {
      validator = validator.number().label(field.label || field.name);
    } else {
      validator = validator.string().label(field.label || field.name);
    }

    if (field.required) {
      validator = validator.required();
    }

    if (field.length) {
      validator = validator.max(
        "max",
        `${field.label} length should not be greater than ${field.length}`
      );
    }

    if (Array.isArray(field.validation)) {
      field.validation.forEach(
        (validation) =>
          (validator =
            validation.pattern &&
            validator.matches(validation.pattern, validation?.error_message))
      );
    }

    return validator;
  }
}

export default FormParser;
