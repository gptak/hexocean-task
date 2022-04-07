import axios from "axios";

const submit = async (values) => {
  // changing strings to numbers
  if (values.type === "pizza") {
    values.no_of_slices = parseInt(values.no_of_slices);
    values.diameter = parseFloat(values.diameter);
  } else if (values.type === "soup") {
    values.spiciness_scale = parseInt(values.spiciness_scale);
  } else if (values.type === "sandwich") {
    values.slices_of_bread = parseInt(values.slices_of_bread);
  }

  // order sending
  try {
    const response = await axios({
      method: "post",
      url: "https://frosty-wood-6558.getsandbox.com:443/dishes",
      headers: {
        "content-type": "application/json",
      },
      data: values,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
    return { ...error.response.data };
  }
};

export default submit;
