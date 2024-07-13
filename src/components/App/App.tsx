import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../consts";
import Students from "../../pages/Students-page/Students-page";
import "../../general-style/index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Students} element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;
