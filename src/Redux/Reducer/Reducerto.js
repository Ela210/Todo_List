import { ADD, DELETE_TODO, EDIT, DONE } from "../ActionTypes";
//state initial
const initialState = {
  Task: [
    { text: "Learn Redux", id: Math.random(), done: false },
    { text: "Learn React", id: Math.random(), done: false },
    { text: "Learn HTML", id: Math.random(), done: false },
  ],
};
//pure function:reducer
//reducer:initial state+action=updated state 
export const Reducer_todo = (state = initialState, action) => {
    //Destructuring 
  let { type, payload } = action;
  switch (type) {
    case ADD:
      return { ...state, Task: [...state.Task, payload] };
    case DELETE_TODO:
      return {
        ...state,
        Task: state.Task.filter((el) => el.id !== payload),
      };

    case DONE:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id == payload ? { ...el, done: !el.done } : el
        ),
      };

    case EDIT:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id == payload.id ? { ...el, text: payload.item } : el
        ),
      };
    default:
      return state;
  }
};
