import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiDocumentDuplicate } from "react-icons/hi";
import { GrChapterNext } from "react-icons/gr";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, taskToComplete, deleteTodo, duplicateTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input onChange={() => taskToComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => taskToComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
      <button onClick={() => duplicateTodo(todo)}>{<HiDocumentDuplicate />}</button> 
      <button onClick={() => duplicateTodo(todo)}>{<GrChapterNext />}</button> 

    </li>
  );
};

export default Todo;
