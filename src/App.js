import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/auth/Admin";
import EditUser from "./components/auth/EditUser";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import AddProduct from "./components/products/AddProduct";



function App() {
  return <div className="app">

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/product/create" component={AddProduct} />
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/admin/:id' component={EditUser}/>

        {/* admin route */}
        {/* <Route exact path="/admin" component={Index}></Route> */}
      </Switch>
    </BrowserRouter>
  </div>
}

export default App;
