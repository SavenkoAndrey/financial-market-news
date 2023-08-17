import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Articles from "./pages/Articles";
import Content from "./pages/Content";
import ErrorPage from "./pages/ErrorPage";

const HomePage = () => {
  return (
    <div>
      <Articles />
    </div>
  );
};

const ContentPage = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <Header />
          </nav>
          <Outlet />
          <div>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/news/:newsId" Component={ContentPage} />
              <Route path="*" Component={ErrorPage} />
            </Routes>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
