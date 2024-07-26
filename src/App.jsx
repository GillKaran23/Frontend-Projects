import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./HomeScreen"
import PizzaHomeScreen from "./PizzaHomeScreen";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/pizzie" element={<PizzaHomeScreen/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;