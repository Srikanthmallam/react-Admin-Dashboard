import AdminSidebar from '../components/AdminSidebar'
import { BarChart } from '../components/Charts';


const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Barchart = () => {
  return (
    <div className='adminContainer'>
      <AdminSidebar/>
      <main className='chartcontainer'>
        <h1>Bar charts</h1>
        <section>
           <BarChart 
              data_1={[200,444,343,556,778,455,990]}
              data_2={[300,144,433,655,237,755,190]}
              title_1='Products'
              title_2='Users'
              bgcolor_1={`hsl(260,50%,30%)`}
              bgColor_2={`hsl(360,90%,90%)`}
           />
           <h2>TOP SELLING PRODUCTS AND TOP CUSTOMERS</h2>
        </section>
        <section>
           <BarChart 
              horizontal={true}
              data_1={[200,444,343,556,778,990,444,122,334,890,909]}
              data_2={[]}
              title_1='Products'
              title_2=''
              bgcolor_1={`hsl(180,40%,50%)`}
              bgColor_2=""
              labels={months}
           />
           <h2>ORDERS THROUGHTOUT THE YEAR</h2>
        </section>
      </main>
    </div>
  )
}

export default Barchart
