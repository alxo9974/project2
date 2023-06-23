import "./App.css";

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BoardListPage from "./pages/board/BoardListPage";
import Layout from "./pages/layout/Layout";

import Button from "./components/common/Button";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<BoardListPage />} />
      </Routes>
      <Button />
    </>
  );
}

export default App;
