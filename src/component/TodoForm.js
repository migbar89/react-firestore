import { AiOutlinePlus } from 'react-icons/ai';

const TodoForm = ({createTodo, style, input, setInput})=>{
return (<>
<form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add Todo'
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
</>)
}

export default TodoForm;