import axios from "axios";

const submit = async (values, form, setShowSuccess) => {
  // changin strings to numbers and removing of unnecessary values from request

  const requestBody = {
    name: values.name,
    preparation_time: values.preparation_time,
    type: values.type,
  };

  if (values.type === "pizza") {
    requestBody.no_of_slices = parseInt(values.no_of_slices);
    requestBody.diameter = parseFloat(values.diameter);
  } else if (values.type === "soup") {
    requestBody.spiciness_scale = values.spiciness_scale;
  } else if (values.type === "sandwich") {
    requestBody.slices_of_bread = parseInt(values.slices_of_bread);
  }

  // request sending
  try {
    await axios({
      method: "post",
      url: "https://frosty-wood-6558.getsandbox.com:443/dishes",
      headers: {
        "content-type": "application/json",
      },
      data: requestBody,
    });
    form.restart();
    setShowSuccess(true);
  } catch (error) {
    console.error(error);
    return { ...error.response.data };
  }
};

export default submit;
