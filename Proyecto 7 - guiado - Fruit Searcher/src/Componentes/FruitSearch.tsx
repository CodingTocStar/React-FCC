import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";

type Fruit = {
  name: string;
};

export function FruitsSearch() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`
        );

        const data: Fruit[] = await response.json();

        setResults(data.map((fruit) => fruit.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={handleChange}
        />
      </form>

      <div id="results">
        {query.trim() !== "" && results.length === 0 && (
          <p>No results found</p>
        )}

        {results.map((item) => (
          <p key={item} className="result-item">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}