import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetailsPage from "./Pages/ShowDetailsPage";
import ShowsListPage from "./Pages/ShowsListPage";

function App() {
  return ( 
      <div className="mx-auto max-w-6xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowsListPage />} />
            <Route path="show/:showId" element={<ShowDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div> 

  )
}

export default App;