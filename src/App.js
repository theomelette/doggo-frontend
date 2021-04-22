
import './App.css';
import Header from "./Header"
import Feed from "./Feed"
import NewPostForm from './NewPostForm';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <NewPostForm />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
