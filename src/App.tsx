import Navbar from "./components/Navbar"
import AllRoutes from "./routes/AllRoutes"

function App() {

  return (
    <div className="w-full  min-h-screen  bg-[#070016] p-4 text-[#fefefe]">
      <Navbar/>
      <AllRoutes/>     
    </div>
  )
}

export default App
