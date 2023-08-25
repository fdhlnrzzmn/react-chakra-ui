import { Heading, Checkbox, Container, Button, IconButton, Input } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import style from './todo.module.css'

const Todo = () => {
    return (
                <Container color='white' bgColor={'#1a202d'} textAlign="center" pt={7} pb={7} pr={7} pl={7}>
                    <div>
                        <Heading as='h2' size='lg' color={'white'} mb={10}>Chores ToDo List</Heading>
                        <div className={style.todoList}>
                            <Checkbox borderColor={"#518b78"} colorScheme='white'>Create Guest Experience mobile check-in</Checkbox>
                            <IconButton variant={'outline'} borderColor={"#eeb8b9"} color={'#eeb8b9'} size='sm' icon={<DeleteIcon />}></IconButton>
                        </div>
                        <div className={style.todoList}>
                            <Checkbox borderColor={"#518b78"} colorScheme='white'>Try to Sleep</Checkbox>
                            <IconButton variant={'outline'} borderColor={"#eeb8b9"} color={'#eeb8b9'} size='sm' icon={<DeleteIcon />}></IconButton>
                        </div>
                    </div>
                    <div className={style.todoInput}>
                        <hr />
                        <Heading as='h4' size='lg' color={'white'} mt={6} mb={10} className={style.todoCount}>Done : 0</Heading>
                        <form>
                            <label>Add todo
                                <Input mt={2}/>
                            </label>
                            <Button bgColor={'blue.200'} mt={5}>ADD TASK</Button>
                        </form>
                    </div>
                </Container>
    )
}

export default Todo;