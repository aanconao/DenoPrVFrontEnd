import { FunctionComponent } from "preact";
import FormButtonComponent from "../components/FormButtonComponent.tsx";

const Page: FunctionComponent = () => {
  const showInformation = () => {
    return (
      <>
        <ul>
          <li>({})</li>
        </ul>
      </>
    );
  };

  return (
    <div class="boxPage">
      <div class="buttonForm">
        <FormButtonComponent />
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
