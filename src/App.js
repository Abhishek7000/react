import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MyComponent from './MyComponent'
import MyComponentb from './MyComponentb'
import Form from './Form'
import AddForm from './AddForm'
 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
 
  <Switch>
    <Route path="/user">
      <MyComponentb />
    </Route>
    <Route path="/addform">
      <AddForm />
    </Route>
    <Route path="/form">
      <Form />
    </Route>
    <Route path="/" exact>
      <MyComponentb />
    </Route>
  </Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
