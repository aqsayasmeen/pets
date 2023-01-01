import React from "react";

function Super() {
  React.useEffect(() => {
    fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(JSON.stringify(data.members[4].powers)));
  });
  const result = () => {
    fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(JSON.parse(JSON.stringify(data.members))));
  };
  return (
    <>
      <h1>Superheroes </h1>
      <button onClick={result}>Click</button>
    </>
  );
}

export default Super;