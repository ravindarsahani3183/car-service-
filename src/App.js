import './App.css';
import FrontPage from './Component/First Page/FrontPage';
import Navbar from './Component/Navbar/Navbar';
import Rent from './Component/Rent/Rent';
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
      <Rent></Rent>
    </div>
  );
}

export default App;
