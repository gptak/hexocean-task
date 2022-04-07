import React from "react";
import { Condition } from "./components/Condition";
import { FormTemplate } from "./components/Form";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import validate from "./components/validate";
import submit from "./components/submit";

export default function App() {
  return (
    <div className="App">
      <FormTemplate onSubmit={submit} validate={validate}>
        {(props) => (
          <>
            <div>
              <label>Dish name:</label>
              <Input name="name" placeholder="e.g. pizza maragarita" />
            </div>

            <div>
              <label>Preparation time:</label>
              <Input name="preparation_time" type="time" step={2} />
            </div>

            <div>
              <label>Dish type:</label>
              <Select
                name="type"
                options={[
                  "-- please choose an option --",
                  "pizza",
                  "soup",
                  "sandwich",
                ]}
              />
            </div>

            <Condition when="type" is="pizza">
              <div>
                <label>Number of slices:</label>
                <Input name="no_of_slices" type="number" min={1} />
              </div>
              <div>
                <label>Diameter:</label>
                <Input name="diameter" type="number" step={0.1} min={0.1} />
              </div>
            </Condition>

            <Condition when="type" is="soup">
              <label>Spiciness:</label>
              <Input
                name="spiciness_scale"
                type="number"
                min={1}
                max={10}
                placeholder="1-10"
              />
            </Condition>

            <Condition when="type" is="sandwich">
              <label>Slices of bread:</label>
              <Input name="slices_of_bread" type="number" min={1} />
            </Condition>
          </>
        )}
      </FormTemplate>
    </div>
  );
}
