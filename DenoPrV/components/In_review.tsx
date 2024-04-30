import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

type Props = {
  In_review_props: Signal<[]>;
};

const In_review: FunctionComponent<Props> = ({ In_review_props }) => {
  return <div></div>;
};

export default In_review;
