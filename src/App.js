import Login from "./components/Login";
import Register from "./components/Auth/Register"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
      
    </Provider>
    
  );
}

export default App;
