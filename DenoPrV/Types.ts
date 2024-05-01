export type Create_Task = {
  nameTask: string;
  states: {
    To_Do: string[];
    In_Progress: string[];
    In_Review: string[];
    Done: string[];
  };
};
