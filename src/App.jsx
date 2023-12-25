import "./App.css";
import MainArea from "./component/area";
import NavbarComponent from "./component/navbar";
// import { AreaChartComponent } from "./component/area";

function App() {
  return (
    <>
      <main className="flex items-center border-4 rounded-3xl m-5 h-fit ">
        <NavbarComponent />
        <MainArea />
      </main>
    </>
  );
}

export default App;
