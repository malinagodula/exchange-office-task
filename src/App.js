import "./App.css";
import Header from "./components/layout/header/Header";
// import Footer from "./components/layout/footer/Footer";
import Main from "./components/pages/Main/Main";

function App() {
  return (
    <div className="App bg-slate-100 font-body">
      <Header />
      <Main />
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
