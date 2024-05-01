import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Create_Task, States } from "../Types.ts";

const Page: FunctionComponent = () => {
  const [task, setTask] = useState<Create_Task[]>([]);

  return (
    <div>
      <button class="buttonCreate">Create</button>

      <div class="Rectangle">To Do</div>
    </div>
  );
};

export default Page;
