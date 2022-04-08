import { useState } from "react";
import { Condition } from "./components/Condition";
import { FormTemplate } from "./components/FormTemplate";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import validate from "./components/validate";
import submit from "./components/submit";
import Success from "./components/Success";
import Error from "./components/Error";

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div className="App">
      <FormTemplate
        setShowError={setShowError}
        setShowSuccess={setShowSuccess}
        onSubmit={(values) => submit(values, setShowSuccess, setShowError)}
        validate={validate}
      >
        {(props) => (
          <>
            <Input
              name="name"
              placeholder="e.g. pizza maragarita"
              label="Dish name :"
            />
            <Input
              name="preparation_time"
              label="Preparation time:"
              type="time"
              step={2}
            />
            <Select
              name="type"
              label="Dish type:"
              options={["pizza", "soup", "sandwich"]}
            />
            <Condition when="type" is="pizza">
              <Input
                name="no_of_slices"
                type="number"
                min={1}
                label="Slices:"
              />
              <Input
                name="diameter"
                type="number"
                step={0.1}
                min={0.1}
                label="Diameter:"
              />
            </Condition>
            <Condition when="type" is="soup">
              <Input
                name="spiciness_scale"
                type="number"
                min={1}
                max={10}
                placeholder="1-10"
                label="Spiciness:"
              />
            </Condition>
            <Condition when="type" is="sandwich">
              <Input
                name="slices_of_bread"
                type="number"
                min={1}
                label="Bread slices:"
              />
            </Condition>
          </>
        )}
      </FormTemplate>
      {showSuccess && <Success />}
      {showError && <Error />}
    </div>
  );
}
