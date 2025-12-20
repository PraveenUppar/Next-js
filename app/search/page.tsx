"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/results?q=${query}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
