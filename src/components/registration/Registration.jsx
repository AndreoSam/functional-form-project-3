import React, { useState } from "react";
import axios from "axios";
import { base_url, reg_url } from "../../api/api_url";

const Registration = () => {
  let api_url = base_url + reg_url;
  let [input, setInput] = useState({ name: "" });
  const [img, setImg] = useState();

  const handleChange = (event) => {
    event.persist();
    let { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleImage = (file) => {
    // console.log(file);
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      // console.log("Image: ", fileReader.result);
      setImg(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Values: ", input, img);
    let data = {
      name: input.name,
      pro_img: img,
    };
    // console.log("Data to be sent: ", data);
    axios
      .post(api_url, data)
      .then((res) => {
        console.log("Axios Resolved: ", res);
        alert("Task added successfully...!");
        // navigate("view");
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br /> <br />
        <label>Full Name: </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          onChange={handleChange}
        />
        <br /> <br />
        <label>Profile Image: </label>
        <input
          type="file"
          name="image"
          onChange={(event) => handleImage(event.target.files[0])}
          accept="image/*"
        />
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
    </div>
  );
};

export default Registration;
