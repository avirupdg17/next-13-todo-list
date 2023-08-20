"use client";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};
export function TodoItem(props: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={props.id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={props.completed}
        onChange={(e) => props.toggleTodo(props.id, e.target.checked)}
      />
      <label
        htmlFor={props.id}
        className="cursor-pointer 
      peer-checked:line-through peer-checked:text-slate-500"
      >
        {props.title}
      </label>
    </li>
  );
}
