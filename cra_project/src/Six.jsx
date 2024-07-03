import React, { useEffect, useState } from "react";

const Six = () => {
  const [data, SetData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => SetData(json));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>Title : {data.title}</h1>
          <h2>Id : {data.id}</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Six;
