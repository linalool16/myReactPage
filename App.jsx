import { AppBar, Box, Button, Card, CardActions, CardContent, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import Header from "./header";
import Task from "./task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function HandleInput(event) {
    const inputText = event.target.value;
    setTaskName(inputText);
  }

  function HandleClick() {
    const newTask = {
      title : taskName,
      isDone : false,
    }
    const _tasks = [...tasks, newTask];
    setTasks(_tasks);
    setTaskName("");
  }

  return (
    <div>
      <Header/>
      <Container sx={{ paddingTop:10}}>
        <Stack sx={{marginBottom: 3, gap: 2}}>
          <TextField value={taskName} onChange={HandleInput} id="filled-basic" label="ToDoを入力" variant="filled" />
          <Button onClick={HandleClick} variant="contained">Create</Button>
        </Stack>
        <Stack sx={{gap:1}}>
        {
          tasks.map( (task, index) => {
            return (
              <Task id={index} name={task.title} key={index} />
            )
          })
        }
        </Stack>
      </Container>
    </div>
  );
}

export default App
