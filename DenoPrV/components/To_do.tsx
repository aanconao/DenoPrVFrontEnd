import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

type Props = {
  To_Do_props: Signal<[]>;
};

const To_Do_State: FunctionComponent<Props> = ({ To_Do_props }) => {
  return <div></div>;
};

export default To_Do_State;
