export interface SendTodo {
  title: string;
  state: boolean;
}

export interface GotTodoApi extends SendTodo {
  id: string;
}

export interface ApiTodosList {
  [id: string]: SendTodo;
}

interface MainState {
  todos: GotTodoApi[],
  gettingTodos: boolean,
  sending: boolean,
  cancel: boolean,
}

interface ChangeTodo {
  id: string,
  state: boolean,
}