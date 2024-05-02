export type Create_Task = {
  nameTask: string;
  states: States;
};

export type States = {
  To_Do: string[];
  In_Progress: string[];
  In_Review: string[];
  Done: string[];
};
