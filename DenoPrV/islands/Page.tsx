import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import FormButtonComponent from "../components/FormButtonComponent.tsx";
import { Task, TaskStates } from "../Types.ts";

const Page: FunctionComponent = () => {
  return (
    <div class="boxPage">
      <div class="buttonForm">
        <FormButtonComponent propTask={(newTask: Task) => {}} />
      </div>
      <div class="spaceBtwColumns">
        <div class="column">
          <h2>To Do</h2>
        </div>
        <div class="column">
          <h2>In Progress</h2>
        </div>
        <div class="column">
          <h2>In Review</h2>
        </div>
        <div class="column">
          <h2>Done</h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
