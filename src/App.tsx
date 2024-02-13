import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loder from "./components/Loder";


const Dashboard = lazy(()=>import("./pages/Dashboard"));

const Products = lazy(()=>import("./pages/Products"));
const Transctions = lazy(()=>import("./pages/Transactions"));
const Customer = lazy(()=>import('./pages/Customer'));

const Barchart = lazy(()=>import("./pages/Barchart"));
const Piehcart = lazy(()=>import("./pages/Piehcart"));
const LineChart = lazy(()=>import("./pages/Linechart"));

const NewProduct = lazy(()=>import("./pages/management/Newproduct"));
const Manageproduct = lazy(()=>import("./pages/management/Manageproduct"));
const Transactionmanagement = lazy(()=>import("./pages/management/Transactionmanagement"));

const StopWatch = lazy(()=>import("./pages/Apps/StopWatch"));
const Toss = lazy(()=>import("./pages/Apps/Toss"));
const Coupon = lazy(()=>import("./pages/Apps/Coupon"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loder/>}>
        
      <Routes>
        <Route path="/" element={
          <Link to="/admin/dashboard">
            <button>visit Dashboard</button>
          </Link>} 
        />

        <Route path = "/admin/dashboard" element={ <Dashboard/> }  />
        <Route path = "/admin/products" element={ <Products/> }  />
        <Route path = "/admin/transactions" element={ <Transctions/> }  />
        <Route path = "/admin/customer" element={ <Customer/> }  />

        {/* Charts  */}
        <Route path = "/admin/chart/bar" element={<Barchart/>} />
        <Route path = "/admin/chart/pie" element={<Piehcart/>}/>
        <Route path = "/admin/chart/line" element={<LineChart/>}  />

        {/* Apps  */}
        <Route path ="/admin/App/stopwatch" element ={<StopWatch/>} />
        <Route path ="/admin/App/toss" element ={<Toss/>} />
        <Route path ="/admin/App/coupon" element ={<Coupon/>} />

        {/* Management  */}
        <Route path="/admin/product/new" element={<NewProduct/>} />
        <Route path="/admin/product/:id" element={<Manageproduct/>} />
        <Route path="/admin/transaction/:id" element={<Transactionmanagement/>} />
        
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
