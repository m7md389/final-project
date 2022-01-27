import React, { useState } from "react";
import authService from "../services/userService";
import "../styles/login.css";

const Register = () => {
  let [inputs, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    linkedin: "",
    course: "default",
    cohort: "default",
    status: "default"
  });
  let [isdropdownCourseOpened, setIsdropdownCourseOpened] = useState(false);

  const handleChange = (event) => {
    setInput({ ...inputs, [event.target.id]: event.target.value });
  };

  const doSubmit = async () => {
    await authService.register(inputs);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent" className="register-content">
        <div className="title">
          <h4 className="fadeIn first">Register</h4>
        </div>

        <div className="form">
          <div className="inputs-container">
            <input
              type="text"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
              id="name"
              className="input fadeIn second"
            />
            <input
              type="text"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChange}
              id="email"
              className="input fadeIn third"
            />
            <input
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
              id="password"
              className="input fadeIn fourth"
            />
            <input
              type="text"
              placeholder="Phone"
              value={inputs.phone}
              onChange={handleChange}
              id="phone"
              className="input fadeIn fifth"
            />
            <input
              type="text"
              placeholder="City"
              value={inputs.city}
              onChange={handleChange}
              id="city"
              className="input fadeIn sixth"
            />
            <input
              type="text"
              placeholder="LinkedIn"
              value={inputs.linkedin}
              onChange={handleChange}
              id="linkedin"
              className="input fadeIn seventh"
            />
            <select
              className="input fadeIn ninth"
              name="course"
              onChange={handleChange}
              id="course"
              value={inputs.course}
            >
              <option className="defult-value" value="default" disabled>
                Course
              </option>
              <option value="full-stack">full-stack</option>
            </select>
            <select
              className="input fadeIn tenth"
              name="cohort"
              onChange={handleChange}
              id="cohort"
              value={inputs.cohort}
            >
              <option className="defult-value" value="default" disabled>
                Cohort
              </option>
              <option value="cohort-22">cohort-22</option>
              <option value="cohort-11">cohort-11</option>
            </select>
            <select
              className="input fadeIn eleventh"
              name="status"
              onChange={handleChange}
              id="status"
              value={inputs.status}
            >
              <option className="defult-value" value="default" disabled>
                Status
              </option>
              <option value="stydying">Studying</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="LinkedIn"
            value={inputs.linkedin}
            onChange={handleChange}
            id="linkedin"
            className="fadeIn eighth"
          />
          <input
            type="text"
            placeholder="Cohort"
            value={inputs.cohort}
            onChange={handleChange}
            id="cohort"
            className="fadeIn ninth"
          />
          <input
            type="text"
            placeholder="Status"
            value={inputs.status}
            onChange={handleChange}
            id="status"
            className="fadeIn tenth"
          />

          <input
            type="button"
            value="register"
            onClick={doSubmit}
            className="submit fadeIn twelfth"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
