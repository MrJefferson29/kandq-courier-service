import React, { useRef, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import "../../Css/AddStory.css";

const AddStory = () => {
  const { config } = useContext(AuthContext);
  const imageEl = useRef(null);
  const editorEl = useRef(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [insurrance, setInsurrance] = useState("");
  const [slider, setSlider] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const clearInputs = () => {
    setTitle("");
    setContent("");
    setStatus("");
    setAddress("");
    setSlider("");
    setInsurrance("");
    setImage("");
    editorEl.current.editor.setData("");
    imageEl.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("image", image);
    formdata.append("content", content);
    formdata.append("status", status);
    formdata.append("address", address);
    formdata.append("slider", slider);
    formdata.append("insurrance", insurrance);

    try {
      const { data } = await axios.post("https://delivery-wheat.vercel.app/story/addstory", formdata, config, 
      { withCredentials: true }
      );
      setSuccess("Add story successfully ");

      clearInputs();
      setTimeout(() => {
        setSuccess("");
      }, 7000);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setError("");
      }, 7000);
      return false;
      // setError(error.response.data.error)
    }
  };
  return (
    <Container>
    <div className="Inclusive-addStory-page ">
      <Link to={"/tracking"}>
        <FiArrowLeft />
      </Link>
      <form onSubmit={handleSubmit} className="addStory-form">
        {error && <div className="error_msg">{error}</div>}
        {success && (
          <div className="success_msg">
            <span>{success}</span>
            <br />
            <Link to="/tracking">Back to Dashboard</Link>
          </div>
        )}

        <Row>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="title"
              required
              placeholder="Tracking ID"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus={true}
            />

            <input
              className="inp"
              type="text"
              required
              id="content"
              placeholder="Package Name"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
             <br />
                <br />
            <input
              className="slider"
              placeholder="how far is the package"
              type="range"
              id="slider"
              min="1"
              max="100"
              step="1"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </Col>
          <Col md="6">
            <select
              className="inp"
              id="status"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="">Select the current status...</option>
              <option value="pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="In progress">In Progress</option>
              <option value="paused">Paused</option>
              <option value="Denied">Denied</option>
            </select>

            <input
              className="inp"
              type="text"
              required
              id="insurrance"
              placeholder="How much is the insurrance fee"
              onChange={(e) => setInsurrance(e.target.value)}
              value={insurrance}
            />
          </Col>
        </Row>
        <textarea
          type="text"
          required
          placeholder="Receiver's Address"
          id="address"
          style={{ width: "100%", borderRadius: "2px", fontSize: "2rem" }}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <div class="StoryImageField">
          <AiOutlineUpload />
          <div class="txt">
            {image
              ? image.name
              : " Include a high-quality image in your story to make it more inviting to readers."}
          </div>
          <input
            name="image"
            type="file"
            ref={imageEl}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button
          style={{
            fontFamily: "Gaqire",
            fontSize: "1.5rem",
            background: "black",
          }}
          type="submit"
          disabled={image ? false : true}
          className={image ? "addStory-btn" : "dis-btn"}
        >
          Publish{" "}
        </button>
      </form>
    </div>
    </Container>
  );
};

export default AddStory;
