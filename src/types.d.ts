export interface SendTodo {
  title: string;
  status: boolean;
}

export interface GotTodoApi extends SendTodo {
  id: string;
}

export interface ApiTodosList {
  [id: string]: SendTodo;
}

interface ChangeTodo {
  id: string,
  task: GotTodoApi,
}