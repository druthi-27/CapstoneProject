// import UserProduct from "../src/Pages/DashBoard/UserProduct"
// import Slider from "../src/Pages/DashBoard/UserDash"
import "./index.css"
import SalesTable from "../src/Pages/Sales/Sales"
import  StockTable from "../src/Pages/Stocks/Stock"
import AboutInfo from "./Pages/About/About";
function App() {
  return (
    <div>
       {/* <Slider></Slider>
      <Provider store={store}>
        <UserProduct></UserProduct>
    </Provider>   */}
     
    {/* <h2  className="ss-head">Stock Report</h2>
      <StockTable></StockTable>  */}
      <AboutInfo></AboutInfo>
     {/* <SalesTable></SalesTable>  */}
    </div>
  );
}

export default App;
