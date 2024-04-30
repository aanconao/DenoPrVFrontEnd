export type Create_Task = {
  NameTask: string;
  States: States;
};

export enum States {
  TO_DO = "To Do",
  IN_PROGRESS = "In Progress",
  IN_REVIEW = "In Review",
  DONE = "Done",
}
