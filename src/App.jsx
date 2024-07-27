import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./HomeScreen"
import PizzaHomeScreen from "./PizzaHomeScreen";
import MioraHomeScreen from "./MioraHomeScreen";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/pizzie" element={<PizzaHomeScreen/>}></Route>
        <Route path="/miora" element={<MioraHomeScreen/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;