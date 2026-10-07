import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(1);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h1>Name : {props.name}</h1>
      <h2>Location : Hyderabad</h2>
      <h3>Contact : Hello@123</h3>
    </div>
  );
};

export default User;
