import Navbar from "./components/Navbar"
import AllRoutes from "./routes/AllRoutes"

function App() {

  return (
    <div className="w-full  min-h-screen p-4 bg-[#b7c4e9] dark:bg-[#070016] dark:text-[#fefefe] text-[#1E1B3A]">
      <Navbar/>
      <AllRoutes/>     
    </div>
  )
}

export default App
