import React, { useState } from "react";
import { base_url, task_url } from "../../api/api_url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  let api_url = base_url + task_url;

  let navigate = useNavigate();

  let [state, setState] = useState({
    title: "",
    description: "",
    eta: "",
    status: "",
    error: {
      title: "",
      description: "",
      eta: "",
      status: "",
    },
  });

  let changeHandler = (event) => {
    let { name, value } = event.target;
    let err = state.error;
    setState({ ...state, [name]: value, errors: err });
    console.log("Validation Error", err);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted Values: ", state);
    let task = {
      title: state.title,
      description: state.description,
      eta: state.eta,
      status: state.status,
    };

    axios
      .post(api_url, task)
      .then((res) => {
        console.log("Axios Resolved: ", res);
        alert("Task added successfully...!");
        navigate("/view");
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>TASKS</h1>
        <div className="add_prod">
          <h3>Enter the tasks</h3>
          <p>It's easy and quick</p>
          <hr />
          <label style={{ alignItems: "left" }}>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="Title"
            className="full-width-input"
          />

          <br />
          <label>Description: </label>
          <br />
          <input
            type="text"
            name="description"
            onChange={changeHandler}
            placeholder="Description"
            className="full-width-input"
          />
          <br />
          <br />
          <label>Estimated Time of Completion: </label>
          <select name="eta" onChange={changeHandler}>
            <option value="1week">1 Week</option>
            <option value="2week">2 Week</option>
            <option value="3week">3 Week</option>
            <option value="1month">1 Month</option>
          </select>
          <br />
          <br />
          <label>Status: </label>
          <select name="status" onChange={changeHandler}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="notyetassigned">Not Yet Assigned</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Add Task" />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
