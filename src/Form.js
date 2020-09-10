import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./styles.css";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();

  const [n, setNumbers] = useState({
    num1: "1",
    num2: "2"
  });
  const onSubmit = (data) => {
    setNumbers(data);
  };
  return (
    <div className="formContainer">
      <form onChange={handleSubmit(onSubmit)} className="formStyle">
        <input
          type="text"
          name="num1"
          id="name"
          maxLength="1"
          placeholder="1"
          ref={register({ required: true, maxLength: 1 })}
        />
        <input
          type="text"
          name="num2"
          id="name"
          maxLength="1"
          placeholder="2"
          ref={register({ required: true, maxLength: 1 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
      </form>
      {/*       Number Generation
       */}
      <div className="numContainer">
        <div className="leftNums">
          <h1>
            {n.num1}
            {n.num1}
            {n.num1}
            {n.num1}
          </h1>
          <h1>
            {n.num1}
            {n.num1}
            {n.num2}
            {n.num1}
          </h1>
          <h1>
            {n.num1}
            {n.num2}
            {n.num1}
            {n.num1}
          </h1>
          <h1>
            {n.num1}
            {n.num2}
            {n.num2}
            {n.num1}
          </h1>
          <h1>
            {n.num1}
            {n.num1}
            {n.num1}
            {n.num1}
          </h1>
          <h1>
            {n.num2}
            {n.num1}
            {n.num1}
            {n.num1}
          </h1>
          <h1>
            {n.num2}
            {n.num1}
            {n.num2}
            {n.num1}
          </h1>
          <h1>
            {n.num2}
            {n.num2}
            {n.num1}
            {n.num1}
          </h1>
        </div>

        <div className="rightNums">
          <h1>
            {n.num1}
            {n.num1}
            {n.num1}
            {n.num2}
          </h1>
          <h1>
            {n.num1}
            {n.num1}
            {n.num2}
            {n.num2}
          </h1>
          <h1>
            {n.num1}
            {n.num2}
            {n.num1}
            {n.num2}
          </h1>
          <h1>
            {n.num1}
            {n.num2}
            {n.num2}
            {n.num2}
          </h1>
          <h1>
            {n.num2}
            {n.num1}
            {n.num1}
            {n.num2}
          </h1>
          <h1>
            {n.num2}
            {n.num1}
            {n.num2}
            {n.num2}
          </h1>
          <h1>
            {n.num2}
            {n.num2}
            {n.num1}
            {n.num2}
          </h1>
          <h1>
            {n.num2}
            {n.num2}
            {n.num2}
            {n.num2}
          </h1>
        </div>
      </div>
    </div>
  );
}
