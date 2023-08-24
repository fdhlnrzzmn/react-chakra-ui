import { ChakraProvider } from '@chakra-ui/react'
import Todo from "./components/templates/Todo/Todo"
import './App.css'

function App() {

  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  )
}

export default App;
