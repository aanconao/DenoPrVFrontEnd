import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Create_Task } from "../Types.ts";
import { useRef } from "preact/hooks";

const Page: FunctionComponent = () => {
  const [task, setTask] = useState<Create_Task[]>([]);

  const ref = useRef<HTMLDialogElement>();

  return (
    <div class="boxPage">
      <div class="buttonForm">
        <button
          onClick={() => {
            ref.current?.showModal();
          }}
        >
          Create
        </button>
      </div>
      <div class="spaceBtwColumns">
        <div class="column">To Do</div>
        <div class="column">In Progress</div>
        <div class="column">In Review</div>
        <div class="column">Done</div>
      </div>
    </div>
  );
};

export default Page;
