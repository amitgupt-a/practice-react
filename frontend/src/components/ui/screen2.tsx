// Screen.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import type { paths } from "../../api-types";
import "../../styles/screen2.css"; // Assuming src/styles/screen2.css

type TimeResponse = paths["/api/time"]["get"]["responses"]["200"]["content"]["application/json"];



 
export function Screen() {
  const [data, setData] = useState<TimeResponse | null>(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/time")
  //     .then((res) => res.json())
  //     .then(setData);
  // }, []);

 useEffect(() => {
    axios
      .get("http://localhost:3001/api/time") // Replace with your endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("time",data);
  

  return (
    <div className="screen-container">
      <h1 className="screen-title">Hello World</h1>
      {data ? (
        <p className="screen-time">Time is {data.message}</p>
      ) : (
        <p className="screen-loading">Loading time...</p>
      )}
    </div>
  );
}
