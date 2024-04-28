import './App.css';
import Auction from './Component/Auction/Auction';
import FrontPage from './Component/First Page/FrontPage';
import Navbar from './Component/Navbar/Navbar';
import Rent from './Component/Rent/Rent';
import Search from './Component/Search/Search';
import Sell from './Component/Sell/Sell';
import Repair from './Component/Service/Repair';
import Service from './Component/Service/Service';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrontPage></FrontPage>
      <Search></Search>
      <Service></Service>
      <Sell></Sell>
      <Repair></Repair>
      <Rent></Rent>
      <Auction></Auction>
    </div>
  );
}

export default App;
