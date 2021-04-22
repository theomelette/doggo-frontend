
import './App.css';
import Header from "./Header"
import Feed from "./Feed"
import Pictures from "./Pictures"
import Friends from "./Friends"
import { Switch, Route, Link } from "react-router-dom";
import posts from "./PostContainer"
import NewPostForm from './NewPostForm';


function App() {
  return (
    <div className="App">
      <div>
   
          <Header />
    
          <Feed />
          
          {/* <NewPostForm /> */}
     
       
      </div>
    </div>
   
  );
}

export default App;
