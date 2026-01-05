// @ts-nocheck

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GenresContext } from "@/context/genres.context";
import { Input } from "./ui/input";
import Genres from "./Genres.tsx";
import "../App.css";
import { useContext, useEffect } from "react";
import { searchResultContext } from "@/context/searchResult.context";
import { ThemeContext } from "@/context/theme.context";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {

  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(searchResultContext);
  const location = useLocation();
  const { setGenres, setGenreName } = useContext(GenresContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    navigate(`/search/${e.target.value}`)

    if (e.target.value.length === 0) {
      navigate("/")
    } else {
      navigate(`/search/${value}`, { replace: true });
    }
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`)
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setGenres(null);
      setGenreName(null);
      setSearchText("");
    }

  }, [location.pathname]);


  return (
    <div className="max-w-[1500px]">

      <div className="navbar flex justify-between md:px-10 sm:px-5 items-center gap-3 text-xl] mb-5 ">
        <h1 onClick={() => navigate("/")} className="name text-red-500 text-3xl cursor-pointer font-medium">Filmy<span className="dark:text-[#e6e6e6] text-[#6D28D9] ">Fy</span></h1>

        <div className=" searchAndcategories flex gap-3 items-center">

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-[#2e1e75] dark:bg-[#281a66] text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <form className="w-full md:w-auto" onSubmit={handleSubmit}>
            <Input
              placeholder="What are u looking for ?"
              className="input-container p-4 dark:bg-[#1A1630] bg-[#adaed7] dark:placeholder:text-[#a696e6] placeholder:text-[#2d187f] dark:text-[#c7bbf1] border-[#2a2445] rounded-2xl"
              value={searchText}
              onChange={handleChange}
            />
          </form>

          <div className="md:block category-div font-semibold">
            <div className=" categories flex gap-6 items-center text-[#1d175c]">
              <Genres />
              <Link to={'/movies'} onClick={() => {
                setGenres(null);
                setGenreName(null);
                setSearchText("");
              }}>

                <div className={` dark:text-[#cfc7f5]`}>
                  Movies
                </div>

              </Link>

              <Link to={'/tvshows'} onClick={() => {
                setGenres(null);
                setGenreName(null);
                setSearchText("");
              }}>
                <div className=" dark:text-[#cfc7f5] ">TvShows</div>
              </Link>

            </div>
          </div>

        </div>

      </div>

    </div>

  )

}

export default Navbar

// onClick={()=> setGenreName(genre.name)}

//a69ad4 placeholder color