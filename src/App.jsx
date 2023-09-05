// App.jsx
import React from "react";
import { HeaderWrp, MainWrp, AppWrp } from "./App-styles.jsx";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import SingleListCreator from "./Pages/SingleListCreator/SingleListCreator.jsx";
import { ShoppingListProvider } from "./Components/Context/ShoppingListContext.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { Button } from "./Components/CustomButton/CustomButton-styles.jsx";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { listTitle } = useParams();

  const showReturnButton = location.pathname !== "/";

  const returnToHome = () => {
    navigate("/");
  };

  return (
    <AppWrp>
      <HeaderWrp>
        <h1>Listy 🛒</h1>
      </HeaderWrp>
      <ShoppingListProvider>
        <MainWrp>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-list" element={<SingleListCreator />} />
            <Route
              path="/custom-list/:listTitle"
              element={<SingleListCreator />}
            />
          </Routes>
        </MainWrp>
        {showReturnButton && (
          <Button variant="return" onClick={returnToHome}>
            ⬅️ Return
          </Button>
        )}
      </ShoppingListProvider>
      <Footer />
    </AppWrp>
  );
};

export default App;
