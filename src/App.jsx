import "./App.css";
import Header from "./components/header/Header";
// import Menu from "./components/header/menu/Menu";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
