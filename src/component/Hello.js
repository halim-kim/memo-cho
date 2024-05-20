import React, { useState } from 'react';
import UserName from './UserName';

export default function Hello({age}) {
    // console.log(props);
  // For Function Practice archive
  // function showName() {
  // console.log("Name: John Doe");
  // alert("Name: John Doe");
  // }
  // function showText(e) {
  // console.log(e.target.value);
  // }
  // let name = "John Doe";
  const [name, setName] = useState("John Doe");
  const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";
//   const [age, setAge] = useState(props.age);

//   function changeName() {
//     const newName = name === "John Doe" ? "Mike" : "John Doe";
    // console.log(name);
    // document.getElementById("name").innerHTML = name;
    // setName(newName)
//   }

  return (
    <div>
      {/* <h1>State</h1>
      <h2>컴포넌트의 속성값</h2> */}
      <h2 id="name">{name}
      ({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button onClick={() => {
        setName(name === "John Doe" ? "Mike" : "John Doe");
        // setAge(age + 1);
      }}    
      >Change</button>
      {/* practice function */}
      {/* <h1 style={{ color: "red", backgroundColor: "yellow", marginBottom: "20px", opacity: 0.5 }}>Hello, World!</h1>
      <p>Hello, World!</p>
      <button onClick={showName}>Show name</button>
      <button onClick={() => { console.log(30); alert("Age: 30"); }}>Show age</button>
      <input type="text" onChange={showText} placeholder="Enter your name" /> */}
    </div>
  )
}