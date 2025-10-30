"use client";

import React, { useState } from "react";
import Profile from "./profile";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(40);
  const [name, setName] = useState("sara");
  const [todos, setTodos] = useState(() => createTodos());

  function createTodos() {
    return ["Reading book ", " waching tv"];
  }

  function handleUpdate() {
    setAge(28);
    setName("taylor");
    setTodos(["practice swiming,go to school"]);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <p>Count: {count} </p>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-primary py-1 px-2 text sm rounded 2xl:"
      >
        increamnet
      </button>
      <Profile />
      <div className="bg-green-200 p-6 rounded">
        <h2 className="font-bold text-lg">Use stateHook : </h2>
        <ul>
          <li>age : {age}</li>
          <li>name : {name}</li>
          <li>todos : {todos.join(" ,")}</li>
        </ul>

        <button
          onClick={handleUpdate}
          className="bg-primary rounded text-sm px-4 py-2 cursor-pointer"
        >
          updateUser
        </button>
      </div>
    </div>
  );
}
