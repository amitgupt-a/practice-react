// Screen.tsx
import { useEffect, useState } from "react";
import type { paths } from "../../api-types";
import "../../styles/screen2.css"; // Assuming src/styles/screen2.css

type TimeResponse = paths["/api/time"]["get"]["responses"]["200"]["content"]["application/json"];

export function Screen() {
  const [data, setData] = useState<TimeResponse | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/time")
      .then((res) => res.json())
      .then(setData);
  }, []);

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
