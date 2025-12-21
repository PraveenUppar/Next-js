// app/dashboard/page.tsx (Server Component)
import { Stats } from "./components/Stats"; // Server
import { Charts } from "./components/Charts"; // Client

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Stats />
      <Charts />
    </div>
  );
}

// app/dashboard/components/Stats.tsx (Server)
export async function Stats() {
  const data = await fetch("https://api.example.com/stats").then((res) =>
    res.json()
  );

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Users: {data.users}</p>
      <p>Total Revenue: ${data.revenue}</p>
    </div>
  );
}

// app/dashboard/components/Charts.tsx (Client)
("use client");

import { useState } from "react";

export function Charts() {
  const [chartType, setChartType] = useState("bar");

  return (
    <div>
      <h2>Charts</h2>
      <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
        <option>bar</option>
        <option>line</option>
        <option>pie</option>
      </select>
      <p>Showing {chartType} chart</p>
    </div>
  );
}
