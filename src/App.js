import './App.css';
import FrontPage from './Component/First Page/FrontPage';
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrontPage></FrontPage>
      <Search></Search>
    </div>
  );
}

export default App;
