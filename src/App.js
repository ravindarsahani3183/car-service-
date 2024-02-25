import './App.css';
import FrontPage from './Component/First Page/FrontPage';
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/Search/Search';
import Service from './Component/Service/Service';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrontPage></FrontPage>
      <Search></Search>
      <Service></Service>
    </div>
  );
}

export default App;
