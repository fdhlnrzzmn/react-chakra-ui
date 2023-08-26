import { Heading, Checkbox, Container, Button, IconButton, Input } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import style from './todo.module.css'
import { useState } from 'react'

const Todo = () => {

    const [activity, setActivity] = useState('');
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');
    const [todoCount, setTodoCount] = useState(0);

    const toDoChecked = (isChecked) => {
        setTodoCount(isChecked ? todoCount + 1 : todoCount - 1);
    }

    const addTodoHandler = (e) => {

        if(!activity){
           return setMessage('Add Todo Before')
        }

        e.preventDefault();
        setTodos([...todos, {
            id: Date.now(),
            activity: activity
        }]);
        setActivity(' ');
    }

    const removeTodoHandler = (todoId) => {
        const filteredTodo = todos.filter((item) => {
            return item.id !== todoId;
        })
        
        setTodos(filteredTodo);
    }

    return (
                <Container color='white' bgColor={'#1a202d'} textAlign="center" pt={7} pb={7} pr={7} pl={7}>
                    <div>
                        <Heading as='h2' size='lg' color={'white'} mb={10}>Chores ToDo List</Heading>
                        <Heading as='h2' size='xm' color={'red'} mb={10}>{message}</Heading>
                        <div className={style.todoList}>
                            <ul>
                                {todos.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <Checkbox onChange={(e) => toDoChecked(e.target.checked)} borderColor={"#518b78"} colorScheme='white'>{item.activity}</Checkbox>
                                            <IconButton onClick={removeTodoHandler.bind(this, item.id)} variant={'outline'} borderColor={"#eeb8b9"} color={'#eeb8b9'} size='sm' icon={<DeleteIcon />}></IconButton>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={style.todoInput}>
                        <hr />
                        <Heading as='h4' size='lg' color={'white'} mt={6} mb={10} className={style.todoCount}>Done : {todoCount}</Heading>
                        <form onSubmit={addTodoHandler}>
                            <label>Add todo
                                <Input mt={2} value={activity} onChange={(e) => {
                                    setActivity(e.target.value);
                                }}/>
                            </label>
                            <Button type='submit' bgColor={'blue.200'} mt={5}>ADD TASK</Button>
                        </form>
                    </div>
                </Container>
    )
}

export default Todo;