const validate = (values) => {
  const errors = {};

  //overall validation
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.preparation_time) {
    errors.preparation_time = "Required";
  }
  if (!values.type) {
    errors.type = "Required";
  }

  //pizza detail validation
  if (values.type === "pizza") {
    if (!values.no_of_slices) {
      errors.no_of_slices = "Required";
    }
    if (!values.diameter) {
      errors.diameter = "Required";
    }
  }

  //soup detail validation
  else if (values.type === "soup") {
    if (!values.spiciness_scale) {
      errors.spiciness_scale = "Required";
    }
  }

  //sandwich validation
  else if (values.type === "sandwich") {
    if (!values.slices_of_bread) {
      errors.slices_of_bread = "Required";
    }
  }

  return errors;
};

export default validate;
