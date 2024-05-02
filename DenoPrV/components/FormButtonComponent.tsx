import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Create_Task } from "../Types.ts";
import { States } from "../Types.ts";

const FormButtonComponent: FunctionComponent = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [state, setState] = useState<States>();

  const closeDialog = () => {
    setDialog(!dialog);
  };

  const CreateTask = () => {
    const newTask: Create_Task = {
      nameTask: name,
      states: {
        To_Do: [],
        In_Progress: [],
        In_Review: [],
        Done: [],
      },
    };
  };

  /**
   * Para el dialog me he servido de ayuda:
   * https://www.youtube.com/watch?v=ZMhEVSvSwwk como crear una ventana modal (popUp)
   * https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog
   * y el stopPropagation de:
   * https://stackoverflow.com/questions/387736/how-to-stop-event-propagation-with-inline-onclick-attribute
   */

  return (
    <div class="buttonForm">
      <button onClick={() => setDialog(true)}>Create</button>
      {dialog && (
        <div class="modalBackground" onClick={closeDialog}>
          <dialog open onClick={(e) => e.stopPropagation()}>
            <form method="dialog">
              <label>
                Name Task
                <input type="text" value={name} />
              </label>
            </form>

            <label>States</label>
            <select>
              <option value="To_Do">To Do</option>
              <option value="In_Progess">In Progress</option>
              <option value="In_Review">In Review</option>
              <option value="Done">Done</option>
            </select>

            <div class="buttonCloseForm">
              <button onClick={() => setDialog(false)}>Create Task</button>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default FormButtonComponent;
