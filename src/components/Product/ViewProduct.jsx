import React, { useState, useEffect } from "react";
import { base_url, task_url } from "../../api/api_url";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./ViewProduct.css"

const ViewProduct = () => {
  let api_url = base_url + task_url;
  let [state, setState] = useState([]);

  let fetch_item = () => {
    axios
      .get(api_url)
      .then((res) => {
        console.log("Axios Resolved: ", res);
        setState(res.data);
      })
      .catch((err) => console.log("Axios Error: ", err));
  };

  const deleteItem = (val_id) => {
    console.log("ID to be deleted: ", val_id);
    axios
      .delete(`${api_url}/${val_id}`)
      .then((res) => {
        console.log("Axios Receieved: ", res);
        fetch_item(res.data);
      })
      .catch((err) => console.log("Axios Error: ", err));
  };

  // useEffect(() => {
  //     axios
  //       .get(api_url)
  //       .then((res) => {
  //         console.log("Axios Receieved: ", res);
  //         setState(res.data);
  //       })
  //       .catch((err) => console.log("Axios Error: ", err));
  //   }, [setState, api_url]);

  useEffect(() => {
    fetch_item();
  }, [setState, api_url]);

  return (
    <Container>
      <h1>TASK RECORDS</h1>
      <Table striped bordered hover className="table_content">
        <thead>
          <tr>
            <th>Task:</th>
            <th>Description:</th>
            <th>Estimated Time:</th>
            <th>Status:</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {state.map((val) => (
            <tr key={val.id}>
              <td>{val.title}</td>
              <td>{val.description}</td>
              <td>{val.eta}</td>
              <td>{val.status}</td>
              <td>
                <Link to={`/singpro/${val.id}`}>
                  <Button>More Details</Button>
                </Link> {" "}
                <Button
                  onClick={() => {
                    deleteItem(val.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewProduct;
