import Todo from "../Todo";

const TodoList = ({todos, taskToComplete, deleteTodo, style, duplicateTodo, completed}) => {
    return <>
    <ul>
          {todos.filter(x => x.completed === completed).map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              taskToComplete={taskToComplete}
              deleteTodo={deleteTodo}
              duplicateTodo={duplicateTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}</>
}

export default TodoList;