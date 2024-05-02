import React, { useEffect, useState } from "react";
import { base_url, task_url } from "../../api/api_url";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();

  let api_url = base_url + task_url;
  let [state, setState] = useState({
    movie_name: "",
    IMDB_rating: "",
    year: "",
    genre: "",
  });

  let { id } = useParams();
  console.log("Recieved ID: ", id);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edited Values: ", state);
    axios
      .put(`${api_url}/${id}`, state)
      .then((res) => {
        console.log("Updated Response: ", res.state);
        alert("Updated Sucessfully...!");
        navigate("/view");
      })
      .catch((err) => {
        console.log("Update Error: ", err);
        alert("Error to Update!");
      });
  };

  useEffect(() => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        console.log("Axios Receieved: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Rejected: ", err);
      });
  }, [setState, api_url]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>TASKS</h1>
        <div className="add_prod">
          <h3>Enter the tasks</h3>
          <p>It's easy and quick</p>
          <hr />
          <label style={{ alignItems: "left" }}>Title: </label>
          <br />
          <input
            type="text"
            value={state.title}
            name="title"
            placeholder="Title"
            onChange={(event) =>
              setState((prev) => ({ ...prev, title: event.target.value }))
            }
            className="full-width-input"
          />

          <br />
          <label>Description: </label>
          <br />
          <input
            type="text"
            value={state.description}
            name="description"
            onChange={(event) =>
              setState((prev) => ({ ...prev, description: event.target.value }))
            }
            className="full-width-input"
          />
          <br />
          <br />
          <label>Estimated Time of Completion: </label>
          <select
            name="eta"
            onChange={(event) =>
              setState((prev) => ({ ...prev, eta: event.target.value }))
            }
          >
            <option value="1week">1 Week</option>
            <option value="2week">2 Week</option>
            <option value="3week">3 Week</option>
            <option value="1month">1 Month</option>
          </select>
          <br />
          <br />
          <label>Status: </label>
          <select
            name="status"
            onChange={(event) =>
              setState((prev) => ({ ...prev, status: event.target.value }))
            }
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="notyetassigned">Not Yet Assigned</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Update" />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
