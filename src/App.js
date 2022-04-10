import { useState } from "react";
import { Form } from "react-final-form";
import { Grid } from "@mui/material";
import Condition from "./components/Condition";
import Input from "./components/Input";
import OptionSelect from "./components/OptionSelect";
import validate from "./functions/validate";
import submit from "./functions/submit";
import Success from "./components/Success";
import Buttons from "./components/Buttons";
import NumberSlider from "./components/NumberSlider";

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="App">
      <Form
        initialValues={{ spiciness_scale: 1 }}
        onSubmit={(values, form) => submit(values, form, setShowSuccess)}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, form }) => (
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "80vh" }}
          >
            <Grid item xs={3}>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input name="name" placeholder="e.g. pizza" label="Dish name" />
                <Input
                  name="preparation_time"
                  label="Preparation time"
                  type="time"
                  inputProps={{ step: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <OptionSelect
                  name="type"
                  label="Dish type"
                  options={["pizza", "soup", "sandwich"]}
                />

                <Condition when="type" is="pizza">
                  <Input
                    name="no_of_slices"
                    type="number"
                    inputProps={{
                      min: 1,
                      form: {
                        autoComplete: "off",
                      },
                    }}
                    label="Slices"
                  />
                  <Input
                    name="diameter"
                    type="number"
                    label="Diameter"
                    inputProps={{
                      min: 1,
                      step: "any",
                      form: {
                        autoComplete: "off",
                      },
                    }}
                  />
                </Condition>

                <Condition when="type" is="soup">
                  <NumberSlider
                    name="spiciness_scale"
                    step={1}
                    min={1}
                    max={10}
                    marks
                    valueLabelDisplay="auto"
                    label="Spiciness"
                  ></NumberSlider>
                </Condition>

                <Condition when="type" is="sandwich">
                  <Input
                    name="slices_of_bread"
                    type="number"
                    inputProps={{ min: 1 }}
                    label="Bread slices"
                  />
                </Condition>

                <Buttons />
              </form>
            </Grid>
          </Grid>
        )}
      />
      <Success showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </div>
  );
}
