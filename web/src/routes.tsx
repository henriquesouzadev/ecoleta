import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreatePoint from "./pages/CreatePoint"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact={true} />
      <Route component={CreatePoint} path="/create-point" exact={true} />
    </BrowserRouter>
  )
}

export default Routes