import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Todo from "./components/Todo";
import Swapi from "./components/Swapi";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ minHeight: "80vh", mt: 4 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/swapi" element={<Swapi />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
