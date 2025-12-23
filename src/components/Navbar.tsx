// @ts-nocheck

import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import Genres from "./Genres";
import "../App.css";
import { useContext } from "react";
import { searchResultContext } from "@/context/searchResult.context";

const Navbar = () => {

  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(searchResultContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    navigate(`/search/${e.target.value}`)

    if (e.target.value.length === 0) {
      navigate("/")
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`)
  }


  return (
    <div className="max-w-[1500px]">

      <div className="navbar flex justify-between md:px-10 sm:px-5 items-center gap-3 text-xl] mb-5 ">
        <h1 onClick={() => navigate("/")} className="name text-red-500 text-3xl cursor-pointer">Filmy<span className="text-[#e6e6e6] ">Fy</span></h1>

        <div className=" searchAndcategories flex gap-3 items-center">

          <form className="w-full md:w-auto" onSubmit={handleSubmit}>
            <Input
              placeholder="What are u looking for ?"
              className="input-container p-4 bg-[#1A1630] text-[#c7bbf1] border-[#2a2445] rounded-2xl"
              value={searchText}
              onChange={handleChange}
            />
          </form>

          <div className="md:block category-div font-semibold ">
            <div className=" categories flex gap-6 items-center">
              <Genres />
              <Link to={'/movies'} onClick={() => {
                setGenres(null);
                setGenreName(null)
              }}>

                <div className={`text-[#cfc7f5]`}>
                  Movies
                </div>

              </Link>

              <Link to={'/tvshows'}>
                <div className="text-[#cfc7f5]">TvShows</div>
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