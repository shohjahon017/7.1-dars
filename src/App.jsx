import React from "react";
import { Route, Routes } from "react-router";
import Pagination from "./pages/Pagination";
import ScrollPagination from "./pages/ScrollPagination";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pagination></Pagination>}></Route>
        <Route
          path="/spagination"
          element={<ScrollPagination></ScrollPagination>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
