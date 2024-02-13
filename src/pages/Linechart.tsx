
import AdminSidebar from '../components/AdminSidebar'
import { LineChart } from '../components/Charts'

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

const Linechart = () => {
  return (
    <div className='adminContainer' >
        <AdminSidebar/>
      <main className='chartcontainer'>
        <h1>Line charts</h1>
        <section>
           <LineChart 
              data = {[
                200,444,444,556,455,990,1444,256,447,1000,1200,
              ]}
              label='Users'
              backgroundColor="rgb(53,162,255,0.5)"
              borderColor='rgb(53,162,255)'
              labels={months}
           />
           <h2>Active Users</h2>
        </section>
        <section>
           <LineChart 
              data = {[
                  40,60,75,244,143,567,44,35,125,443,120,88
              ]}
              label="Products"
              backgroundColor="hsl(269,80%,40%,0.4)"
              borderColor='hsl(269,80%,40%)'
              labels={months}
           />
           <h2>Total Products (SKU)</h2>
        </section>
        <section>
           <LineChart 
              data = {[
                24000,14400,24100,34300,90000,25600,44700,99000,144400,10000,120000
              ]}
              label='Revenue'
              backgroundColor="hsl(129,80%,40%,0.4)"
              borderColor='hsl(129,80%,40%)'
              labels={months}
           />
           <h2>Total Revenue</h2>
        </section>
        <section>
           <LineChart 
              data = {[
                9000,12000,12000,8000,1500,2600,6000,4000,8000,1500,800
              ]}
              label='Discount'
              backgroundColor="hsl(29,80%,40%,0.4)"
              borderColor='hsl(29,80%,40%)'
              labels={months}
           />
           <h2>Discount Alloted</h2>
        </section>
      </main>
      
    </div>
  )
}

export default Linechart
