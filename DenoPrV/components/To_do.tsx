import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Create_Task } from "../Types.tsx";

type Props = {
  To_Do_props: Signal<Create_Task[]>;
};

const To_Do_State: FunctionComponent<Props> = ({ To_Do_props }) => {
  return <div></div>;
};

export default To_Do_State;
