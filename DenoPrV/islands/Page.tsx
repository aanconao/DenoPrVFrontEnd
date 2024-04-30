import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Create_Task } from "../Types.ts";

const Page: FunctionComponent = () => {
  const [task, setTask] = useState<Create_Task[]>([]);
  useEffect(() => {}, []);
  return (
    <div>
      <button>Crear</button>
    </div>
  );
};
