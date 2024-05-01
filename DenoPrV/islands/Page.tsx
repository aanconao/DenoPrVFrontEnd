import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Create_Task, States } from "../Types.ts";

const Page: FunctionComponent = () => {
  const [task, setTask] = useState<Create_Task[]>([]);

  return (
    <div>
      <div class="buttonForm">
        <button
          onClick={() => {
            <form></form>;
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Page;
