import { FunctionComponent } from "preact";
import To_Do_State from "../components/To_do.tsx";
import { useSignal } from "@preact/signals";

const Page: FunctionComponent = () => {
  const To_Do_signal = useSignal<>;
  return <To_Do_State />;
};
