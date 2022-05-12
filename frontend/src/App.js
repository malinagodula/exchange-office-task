import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoggedUser } from "./store/auth/authSlice";
import Header from "./components/layout/header/Header";

// import Footer from "./components/layout/footer/Footer";
// import Main from "./components/pages/Main/Main";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Profile from "./components/pages/profile/Profile";
import ExternalApi from "./components/pages/external-api/ExternalApi";
import Homepage from "./components/pages/homepage/Homepage";
import Loader from "./components/ui/loader/Loader";
import Deals from "./components/pages/deals/Deals";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const { isLoading, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    try {
      getAccessTokenSilently().then((token) => dispatch(getLoggedUser(token)));
    } catch {}
  }, [getAccessTokenSilently, dispatch, isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App bg-slate-100 font-body">
      <Header />
      <main className="h-screen justify-center flex flex-row flex-wrap pt-2 md:pt-0">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/external-api" element={<ExternalApi />} />
          <Route path="/api/deals" element={<Deals />} />
        </Routes>
      </main>
      {/* <Footer /> */}

      <div className="fixed bottom-0 right-0 p-6 w-8 h-8 bg-white border flex justify-center items-center opacity-75">
        <div className="sm:hidden md:hidden lg:hidden hd:hidden">mob</div>
        <div className="hidden sm:block md:hidden lg:hidden hd:hidden">SM</div>
        <div className="hidden sm:hidden md:block lg:hidden hd:hidden">MD</div>
        <div className="hidden sm:hidden md:hidden lg:block hd:hidden">LG</div>
        <div className="hidden sm:hidden md:hidden lg:hidden hd:block">HD</div>
      </div>
    </div>
  );
}

export default App;
