import { Route, Routes } from "react-router-dom";

import UsersContextProvider from "./ContextApi/UsersContext";

import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import Posts from "./components/Posts/Posts";
import Gallery from "./components/Gallery/Gallery";
import ToDo from "./components/Todo/Todo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="homepage/:id" element={<HomePage />} />
          <Route path="post" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<ToDo />} />
        </Routes>
      </UsersContextProvider>
    </div>
  );
}

export default App;
