import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/home/Home';

function App() {
  return (
    <div>
       <Router>
         <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route exact path="/login" element={<Login/>}></Route>
           <Route exact path="/register" element={<Register/>}></Route>
         </Routes>
       </Router>  
    </div>
    
    // store={store}
    // <Provider >

      // <Router>
      //   <Routes>
      //     <Route exact path="/" element={<Login/>}></Route>
      //     <Route exact path="/register" element={<Register/>}></Route>
      //   </Routes>
      // </Router>      

    // </Provider>
  );
}

export default App;
