import "./App.css";
import NavbarComponent from "./component/navbar";
// import { AreaChartComponent } from "./component/area";

function App() {
  return (
    <>
      <main className="flex items-center border-4 rounded-3xl m-5 h-fit ">
        <NavbarComponent />
        <div className="basis-[80%]  h-screen ">main-container</div>
      </main>
    </>
  );
}

export default App;
