// import { response } from "express";
import React from "react";
import "./App.css";

export default function List() {
  // let [input, setInput] = useState("");
  // let [tasks, setTasks] = useState([]);

  //   useEffect(() => {
  //     fetch("/api/todos")
  //       .then(res => res.json())
  //       .then(json => {
  //         // upon success, update tasks
  //         console.log(json);
  //         setTasks(json);
  //       })
  //       .catch(error => {
  //         // upon failure, show error message
  //         console.error('Error', error);
  //       });
  //   }, []);
  //
  //   const handleChange = event => {
  //     setInput(event.target.value);
  //   };
  //
  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  //
  //   const addTask = () => {
  //     fetch("/api/todos", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ input: input })
  //     })
  //     // Continue fetch request here
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setTasks(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error', error);
  //     })
  //   };
  //
  //   const updateTask = (id, completedOrNot) => {
  //     // update task from database
  //     // upon success, update tasks
  //     // upon failure, show error message
  //
  //     // event.target.classList.toggle("linethrough");
  //     fetch(`http://localhost:5001/api/todos/${id}`, {method: "PUT", body: JSON.stringify({complete:completedOrNot}), headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})  // (url, configuration object)
  //
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((updatedTasks) => {
  //       setTasks(updatedTasks)
  //     })
  //     .catch((error) => {
  //       console.error('Error', error)
  //
  //     });
  //   };
  //
  //   const deleteTask = id => {
  //     // delete task from database
  //     // upon success, update tasks
  //     // upon failure, show error message
  //     fetch(`http://localhost:5001/api/todos/${id}`, {method: "DELETE"}) // (url, configuration object)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((notDeletedTasks) => {
  //       setTasks(notDeletedTasks)
  //     });
  //   };
  // let completedTasks = tasks.filter( (task) => task.complete )
  // let incompleteTasks = tasks.filter( (task) => task)

  return (
    <div>
      <h1 className="center">Dönate, Sell, or Give Away</h1>
      <form className="center" onSubmit={e => handleSubmit(e)}>
        {/* <ul className="center">
        {tasks.map(task => (
          <li className="center">
          <span className={ !task.complete ? "" : "linethrough" }>
          {task.text}
          </span> 
          <button onClick={() => updateTask(task.id, task.complete ? 0 : 1) }>✅</button>
          <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul> */}
        <label className="center">
          Items(s):
          <input onChange={e => handleChange(e)} />
        </label>
        <button className="center" type="submit">
          {" "}
          Add{" "}
        </button>
      </form>
      <h2 className="center">✅🎉 Done! You're free from: </h2>
    </div>
  );
}
