import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { base_url, task_url } from "../../api/api_url";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  let api_url = base_url + task_url;
  let [state, setState] = useState([]);

  let { id } = useParams();
  console.log("Sub ID: ", id);

  useEffect(() => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        console.log("Axios Receieved: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  }, [setState, api_url]);

  return (
    <div>
      <br />
      <br />
      <Card.Body>
        <Card.Text>
          <b>Task Title:</b> {state.title} <br />
          <b>Description:</b> {state.description} <br />
          <b>Estimated Time of Submission:</b> {state.eta} <br />
          <b>Status:</b> {state.status}
        </Card.Text>
      </Card.Body>
      <Link to={`/edit/${id}`}>
        <Button>Edit</Button>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default SingleProduct;
