const validate = ({
  type,
  slices_of_bread,
  no_of_slices,
  preparation_time,
  diameter,
  name,
  spiciness_scale,
}) => {
  const errors = {};
  //overall validation
  if (!name) {
    errors.name = "Required";
  }
  if (!preparation_time) {
    errors.preparation_time = "Required";
  }
  if (!type) {
    errors.type = "Required";
  }

  //pizza details validation
  if (type === "pizza") {
    if (!no_of_slices) {
      errors.no_of_slices = "Required";
    }
    if (no_of_slices % 1 !== 0) {
      errors.no_of_slices = "Must be a natural number";
    }
    if (no_of_slices <= 0) {
      errors.no_of_slices = "Must be a positivenumber";
    }

    if (!diameter) {
      errors.diameter = "Required";
    }
    if (diameter <= 0) {
      errors.diameter = "Must be a positive number";
    }
  }

  //soup detail validation
  else if (type === "soup") {
    if (!spiciness_scale) {
      errors.spiciness_scale = "Required";
    }
  }

  //sandwich detail validation
  else if (type === "sandwich") {
    if (!slices_of_bread) {
      errors.slices_of_bread = "Required";
    }
    if (slices_of_bread % 1 !== 0 || slices_of_bread <= 0) {
      errors.slices_of_bread = "Must be a natural number";
    }
    if (slices_of_bread <= 0) {
      errors.slices_of_bread = "Must be a positive number";
    }
  }

  return errors;
};

export default validate;
