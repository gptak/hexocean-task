import axios from "axios";

const submit = async (values, form, setShowSuccess) => {
  // changin strings to numbers and removing of unnecessary values from request
  if (values.type === "pizza") {
    values.no_of_slices = parseInt(values.no_of_slices);
    values.diameter = parseFloat(values.diameter);
    delete values.spiciness_scale;
    delete values.slices_of_bread;
  } else if (values.type === "soup") {
    values.spiciness_scale = parseInt(values.spiciness_scale);
    delete values.no_of_slices;
    delete values.diameter;
    delete values.slices_of_bread;
  } else if (values.type === "sandwich") {
    values.slices_of_bread = parseInt(values.slices_of_bread);
    delete values.spiciness_scale;
    delete values.diameter;
    delete values.no_of_slices;
  }

  // request sending
  try {
    await axios({
      method: "post",
      url: "https://frosty-wood-6558.getsandbox.com:443/dishes",
      headers: {
        "content-type": "application/json",
      },
      data: values,
    });
    form.restart();
    setShowSuccess(true);
  } catch (error) {
    console.error(error);
    return { ...error.response.data };
  }
};

export default submit;
