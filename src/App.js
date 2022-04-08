import { useState } from "react";
import { Condition } from "./components/Condition";
import { FormTemplate } from "./components/FormTemplate";
import { Input } from "./components/Input";
import { OptionSelect } from "./components/Select";
import validate from "./components/validate";
import submit from "./components/submit";
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
            <Input
              name="name"
              placeholder="e.g. pizza maragarita"
              label="Dish name"
            />
            <Input
              name="preparation_time"
              label="Preparation time"
              type="number"
              step={2}
            />
            <OptionSelect
              name="type"
              label="Dish type"
              options={["pizza", "soup", "sandwich"]}
            />

            <Condition when="type" is="pizza">
              <Input name="no_of_slices" type="number" min={1} label="Slices" />
              <Input
                name="diameter"
                type="number"
                step={0.1}
                min={0.1}
                label="Diameter"
              />
            </Condition>
            <Condition when="type" is="soup">
              <Input
                name="spiciness_scale"
                type="number"
                min={1}
                max={10}
                placeholder="1-10"
                label="Spiciness"
              />
            </Condition>
            <Condition when="type" is="sandwich">
              <Input
                name="slices_of_bread"
                type="number"
                min={1}
                label="Bread slices"
              />
            </Condition>
          </>
        )}
      </FormTemplate>
      {showSuccess && <Success />}
    </div>
  );
}
