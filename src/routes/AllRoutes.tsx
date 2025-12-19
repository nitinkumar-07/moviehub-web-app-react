// import Genres from "@/components/Genres"
import MovieList from "@/components/MovieList"
import MoviePlayer from "@/components/MoviePlayer"
import SearchList from "@/components/SearchList"
import Trending from "@/components/Trending/Trending"
import TvShowList from "@/components/TvShowList"
import TvShowPlayer from "@/components/TvShowPlayer"
import { Route, Routes } from "react-router-dom"


const AllRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element = {<Trending/>}/>
        <Route path="/movies" element = {<MovieList/>}/>
        <Route path="/tvshows" element = {<TvShowList/>}/>
        <Route path="/search/:searchName/" element = {<SearchList />} />
        <Route path="/genres/movies" element={<MovieList />} />
        <Route path="/player/:playerId" element={<MoviePlayer/>}/>
        <Route path="/playerr/:playerId" element={<TvShowPlayer/>}/>
      </Route>
     </Routes>
  )
}

export default AllRoutes