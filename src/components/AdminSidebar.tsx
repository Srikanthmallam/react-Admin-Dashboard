import { Link, useLocation,Location } from "react-router-dom";
import { RiCoupon3Fill, RiDashboardFill,RiShoppingBag3Fill } from "react-icons/ri";
import {AiFillFileText} from "react-icons/ai"
import {IoIosCloseCircle, IoIosPeople} from "react-icons/io"
import { IconType } from "react-icons";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

function AdminSidebar() {
  const location = useLocation();

  const [showModel,setShowModel] = useState<boolean>(false);
  const [phoneActive,setPhoneActive]=useState<boolean>(
    window.innerWidth < 1100
  );

  const resizehandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(()=>{
    window.addEventListener("resize",resizehandler);
    return ()=>{
      window.removeEventListener("resize",resizehandler);
    };
  });


  return (
  <>
  {phoneActive && (<button id="hamburger" onClick={()=>setShowModel(true)}>
      <HiMenu/>
  </button>
  )}
  <aside 
  style={
    phoneActive
    ?{
    width:"20rem",
    height:"100vh",
    position:"fixed",
    top:0,
    left:showModel?"0":"-20rem",
    transition:"all 0.5s",
    }:{

    }
  }>
    <div style={{
      marginTop:"1rem",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <h2>LOGO.</h2>
    {phoneActive && <IoIosCloseCircle  id="closesidebar" onClick={()=>setShowModel(false)}/>}
    </div>

    <Divone location={location}/>
    <DivTwo location={location}/>
    <DivThree location={location}/>

  </aside>
  </>
  );
};
const Divone = ({location} : {location:Location}) =>(
  <div>
      <h5>Dashboard</h5>
      <ul>
       <Li
            url="/admin/dashboard" 
            text="Dashboard" 
            Icon = {RiDashboardFill} 
            location={location} 
        />
       <Li
            url="/admin/products" 
            text="Products" 
            Icon = {RiShoppingBag3Fill} 
            location={location} 
        />
       <Li
            url="/admin/customer" 
            text="Customers" 
            Icon = {IoIosPeople} 
            location={location} 
        />
       <Li
            url="/admin/transactions" 
            text="Transactions" 
            Icon = {AiFillFileText} 
            location={location} 
        />
      </ul>
    </div>
);

const DivTwo = ({location} : {location :Location}) => (
  <div>
      <h5>Charts</h5>
      <ul>
       <Li
            url="/admin/chart/bar" 
            text="Bar" 
            Icon = {FaChartBar} 
            location={location} 
        />
       <Li
            url="/admin/chart/pie" 
            text="Pie" 
            Icon = {FaChartPie} 
            location={location} 
        />
       <Li
            url="/admin/chart/line" 
            text="Line" 
            Icon = {FaChartLine} 
            location={location} 
        />
      </ul>
    </div>
);

const DivThree = (
  {location}:
  {location :Location,}) => (
  <div>
  <h5>Apps</h5>
  <ul>
   <Li
        url="/admin/app/stopwatch" 
        text="Stopwatch" 
        Icon = {FaStopwatch} 
        location={location} 
    />
   <Li
        url="/admin/app/coupon" 
        text="Coupon" 
        Icon = {RiCoupon3Fill} 
        location={location} 
    />
   <Li
        url="/admin/app/toss" 
        text="Toss" 
        Icon = {FaGamepad} 
        location={location} 
    />
  </ul>
  
</div>
)

interface LiProps{
  url:string,
  text:string,
  location:Location,
  Icon:IconType,
}

const Li = ({url,location,Icon,text}:LiProps) => (
  <li style={{
      backgroundColor:location.pathname.includes(url) 
        ? "rgba(0,115,225,0.1" 
        : "white"
    }}> 
    <Link to={url} 
    style={{
      color:location.pathname.includes(url)
        ? "rgb(0,115,225)" 
        : "black"
    }}>
      <Icon/>
      {text}
    </Link>
  </li>
)

export default AdminSidebar
