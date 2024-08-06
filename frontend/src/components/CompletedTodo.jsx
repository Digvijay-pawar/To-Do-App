import { Todo } from "./Todos"
export function CompletedTodo(props) {
    return (
        <div className="mt-3">
            <h3>Completed Task</h3>
            <hr />
            {props.todos.map((todo)=>{
                return <Todo id={todo._id} title={todo.title} description={todo.body} status={todo.completed}></Todo>
            })}
        </div>
    )
}