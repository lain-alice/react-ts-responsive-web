import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Gnb /> */}
        {/* <GlobalStyle /> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
