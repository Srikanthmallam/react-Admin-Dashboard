import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell, FaUser } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

function Dashboard() {
  return (
    <div className="adminContainer">
      
      <AdminSidebar/>

      <main className="dashboard">
        
        <div className="searchbar" >
          <BsSearch/>
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell/>
          <FaUser/>
        </div>

        <section className="widget-container">
          <Widgetitem 
            heading="Revenue"
            percent={40}
            amount={true}
            value={340000}
            color="rgb(0,115,255)" 
          />
          <Widgetitem 
            heading="Users"
            percent={-14}
            value={400}
            color="rgb(0,198,202)" 
          />
          <Widgetitem 
            heading="Transactions"
            percent={80}
            value={23000}
            color="rgb(255 196 0) " 
          />
          <Widgetitem 
            heading="Products"
            percent={30}
            value={100000}
            color="rgb( 76 0 255 )" 
          />
        </section>

        <section className="graphcontainer">
          <div className="revenue-chart">
            <h2> Revenue & Transaction</h2>
            <BarChart 
              data_2={[200,444,343,556,778,455,990]}
              data_1={[300,144,433,655,237,755,190]}
              title_1="Revenue"
              title_2="Transaction"
              bgcolor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,235,0.8)"
              />
          </div>
          <div className="inventory">
            <h2>inventory</h2>
            <div>
              {
                data.categories.map(i=>(
                  <InventoryItem
                   key={i.heading}
                    heading={i.heading}
                    value={i.value}
                    color={`hsl(${i.value*4},${i.value}%,50%)`}
                  />

                ))
              }
            </div>
          </div>
        </section>

        <section className="transactioncontainer">
          <div className="genderchart">
            <h2>Gender Ratio</h2>
              <DoughnutChart
                labels={["Female","Male"]}
                data={[12,19]}
                backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}
                cutout={90}
              />
            <p><BiMaleFemale/></p>
          </div>
          <DashboardTable data={data.transaction}/>
        </section>

      </main>

    </div>
  )
};

interface widgetItemProps {
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;
}

const Widgetitem = ({ 
    heading,
    value,
    percent,
    color,
    amount=false,
  }:widgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}`: value}</h4>
      {
        percent>0 ? (
          <span className="green">
            <HiTrendingUp/> +{percent}%{" "}
          </span>
        ):(
          <span className="red">
            <HiTrendingDown/>  {percent}%{" "}
          </span>
        )
      }
    </div>
    <div className="widgetcircle" style={{
      background:`conic-gradient(
        ${color} ${Math.abs(percent)/100*360}deg,
        rgb(255,255,255)0
      )`
    }}>
      <span style={{color}} >{percent}%</span>

    </div>
  </article>
);

interface inventoryItemProps{
  color:string;
  value:number;
  heading:string;
}

const InventoryItem = ({color,value,heading}:inventoryItemProps)=>(
  <div className="inventoryitem">
    <h5>{heading}</h5>
   <div>
     <div style={{
        backgroundColor:color,
        width:`${value}%`
        }}>
      </div>
   </div>
    <span>
      {value}%
    </span>
  </div>
)

export default Dashboard;
