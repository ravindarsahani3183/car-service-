import './App.css';
import FrontPage from './Component/First Page/FrontPage';
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/Search/Search';
import Repair from './Component/Service/Repair';
import Service from './Component/Service/Service';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrontPage></FrontPage>
      <Search></Search>
      <Service></Service>
      <Repair></Repair>
    </div>
  );
}

export default App;
