import { useState } from "react";
import { Link } from "react-router-dom";

const figuras = [
  "Figura1",
  "Figura2",
  "Figura3",
  "Figura4",
  "Figura5",
  "Figura6",
  "Figura7",
  "Figura8",
  "Figura9",
  "Figura10",
  "Figura11",
  "Figura12",
  "Figura13",
  "Figura14",
  "Figura15",
  "Figura16",
  "Figura17",
  "Figura18",
  "Figura19",
  "Figura20",
  "Figura21",
  "Figura22",
  "Figura23",
  "Figura24",
  "Figura25",
  "Figura26",
  "Figura27",
  "Figura28",
  "Figura29",
  "Figura30",
  "Figura31",
  "Figura32",
  "Figura33",
  "Figura34",
  "Figura35",
  "Figura36",
  "Figura37",
  "Figura38",
];

const Header = () => {
  const [query, setQuery] = useState("");

  const figurasFiltradas = figuras.filter((figura) =>
    figura.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-blue-400">
          Inicio
        </Link>
      </nav>

      <div className="relative">
        <input
          type="text"
          placeholder="Buscar figura..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <ul className="absolute bg-gray-800 text-white w-full mt-2 rounded-lg shadow-lg">
            {figurasFiltradas.map((figura) => (
              <li key={figura}>
                <Link
                  to={`/figuras/${figura}`}
                  className="block p-2 hover:bg-gray-700"
                  onClick={() => setQuery("")}
                >
                  {figura}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
