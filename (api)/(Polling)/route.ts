// Simple polling approach
"use client";

import { useState, useEffect } from "react";

export function RealtimeData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      setData(data);
    }, 1000); // Poll every second

    return () => clearInterval(interval);
  }, []);

  return <div>{data}</div>;
}
