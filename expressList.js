const express = require('express')
const app = express()
const port = 3000

// middleware to read JSON data
app.use(express.json())

// simple task list (acts like a database)
let tasks = [
  { id: 1, title: "Learn Express" },
  { id: 2, title: "Build CRUD app" }
]

/* =====================
   CREATE – Add a task
   ===================== */
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  }
  tasks.push(newTask)
  res.send(newTask)
})

/* =====================
   READ – Get all tasks
   ===================== */
app.get('/tasks', (req, res) => {
  res.send(tasks)
})

/* =====================
   UPDATE – Update a task
   ===================== */
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasks.find(t => t.id === id)

  if (!task) {
    return res.send("Task not found")
  }

  task.title = req.body.title
  res.send(task)
})

/* =====================
   DELETE – Delete a task
   ===================== */
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  tasks = tasks.filter(t => t.id !== id)
  res.send("Task deleted")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
