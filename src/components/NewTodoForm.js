import React, { useState } from "react";

function NewTodoForm(props) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addToDo(description, assigned);
      setDescription("");
      setAssigned("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label for="" className="form-label">
            Assigned
          </label>
          <input
            type="text"
            className="form-control"
            required
            name=""
            value={assigned}
            onChange={(e) => setAssigned(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Description
          </label>
          <textarea
            rows={3}
            cols=""
            className="form-control"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
