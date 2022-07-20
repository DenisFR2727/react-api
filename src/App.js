import Menu from "./components/Menu";
import Main from "./components/Main/Main";
import "./css/menu.css"
import "./App.css"
// import Cards from "./components/Cards/Cards";
function App() {
  return (
    <div className="App">
        <Menu />
        <Main />
        {/* <Cards /> */}
    </div>
  );
}

export default App;
