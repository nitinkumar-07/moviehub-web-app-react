import useTvShowList from "@/hooks/useTvShow";
import TvShowCard from "./TvShowCard";

const TvShowList = () => {
  const { tvShowLists } = useTvShowList();

  return <div className="max-w-[1450px] p-2 mx-auto">
    <h1 className="text-2xl font-semibold p-3 py-2 text-[#cfc7f5]">TvShows</h1>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {tvShowLists?.map((tvshow) => (
        <div key={tvshow.id}>
          <TvShowCard tvShowRes={tvshow}/>
        </div>
      ))}
    </div>

  </div>
}

export default TvShowList