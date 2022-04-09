import { useState } from "react";
import Condition from "./components/Condition";
import FormTemplate from "./components/FormTemplate";
import Input from "./components/Input";
import OptionSelect from "./components/Select";
import validate from "./functions/validate";
import submit from "./functions/submit";
import Success from "./components/Success";

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="App">
      <FormTemplate
        setShowSuccess={setShowSuccess}
        onSubmit={(values, form) => submit(values, form, setShowSuccess)}
        validate={validate}
      >
        {(props) => (
          <>
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
                inputProps={{ min: 1 }}
                label="Slices"
              />
              <Input
                name="diameter"
                type="number"
                step={0.1}
                min={0.1}
                label="Diameter"
                inputProps={{ min: 0.1, step: 0.1 }}
              />
            </Condition>
            <Condition when="type" is="soup">
              <Input
                name="spiciness_scale"
                type="number"
                inputProps={{ min: 1, max: 10 }}
                placeholder="1-10"
                label="Spiciness"
              />
              <OptionSelect
               name="spiciness_scale"
              label="Dish type"
              options={["pizza", "soup", "sandwich"]}
            />
            </Condition>
            <Condition when="type" is="sandwich">
              <Input
                name="slices_of_bread"
                type="number"
                inputProps={{ min: 1 }}
                label="Bread slices"
              />
            </Condition>
          </>
        )}
      </FormTemplate>
      <Success showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </div>
  );
}
