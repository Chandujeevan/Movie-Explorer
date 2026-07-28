import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [ searchQuery, setSrarchQuery ]   = useState("");
  const movies = [
    {
      id: 1,
      title: "rahul",
      release_date: "2005",
    },
    {
      id: 2,
      title: "ramesh",
      release_date: "2015",
    },
    {
      id: 3,
      title: "rajesh",
      release_date: "2000",
    },
  ];
  const handleSearch = (e) =>{
    e.preventDefault()
    alert(searchQuery)
    setSrarchQuery("")
  };

  return (
    <div className="home">
        <form onClick={handleSearch} className="search-form" >
            <input type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSrarchQuery(e.target.value)}
             />
             <button type="submit" className="search-btn">Search</button>
        </form>
      <div className="movies-grid">
        {movies.map((movie) => 
         (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
