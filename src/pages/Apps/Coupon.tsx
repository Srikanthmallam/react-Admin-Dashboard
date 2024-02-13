import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {

    const [size,setSize] = useState<number>(8);
    const [prefix,setPrifix] = useState<string>("");
    const [includechar,setIncludechar] = useState<boolean>(false);
    const [includenum,setIncludenum] = useState<boolean>(false);
    const [includesymbols,setIncludesymbols] = useState<boolean>(false);
    const [iscopied,setIscopied] = useState<boolean>(false);

    const [coupon,setCoupon] = useState<string>("");

    const copyText = async(coupon:string)=>{
        await window.navigator.clipboard.writeText(coupon);
        setIscopied(true);
    }

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!includenum && !includechar && !includesymbols){
            return alert("please select one at least");

        } 

        let result:string = prefix || "";
        const looplength:number =  size - result.length;

        for(let i=0; i<looplength;i++){
            let entireString = "";
            if(includechar) entireString+=allLetters;
            if(includenum) entireString+=allNumbers;
            if(includesymbols) entireString+=allSymbols;

            const randomNum:number = ~~(Math.random()*entireString.length);
            result += entireString[randomNum];
        }

        setCoupon(result);
    };
    useEffect(()=>{
        setIscopied(false);
    },[coupon]);


  return (
    <div className='adminContainer'>
      <AdminSidebar/>
      <main className='dashboardappcontainer'>
        <h1>Coupon</h1>
        <section>
            <form onSubmit={submitHandler} className="couponform">
                <input 
                    type="text" 
                    placeholder="text to include" 
                    value={prefix}
                    onChange={e=>setPrifix(e.target.value)}
                    maxLength={size}
                ></input>
                <input 
                    type="number" 
                    placeholder="coupon length" 
                    value={size}
                    onChange={e=>setSize(Number(e.target.value))}
                    min={8}
                    max={25}
                ></input>
                <fieldset>
                    <legend>Include</legend>
                    <input 
                        type="checkbox" 
                        checked={includenum}
                        onChange={()=>setIncludenum((prev) => !prev)}
                    ></input>
                    <span>Numbers</span>
                    <input 
                        type="checkbox" 
                        checked={includechar}
                        onChange={()=>setIncludechar((prev) => !prev)}
                    ></input>
                    <span>Charecters</span>
                    <input 
                        type="checkbox" 
                        checked={includesymbols}
                        onChange={()=>setIncludesymbols((prev) => !prev)}
                    ></input>
                    <span>Symbols</span>
                </fieldset>
                <button type="submit">Generate</button>
            </form>

            {
                coupon && <code>
                    {coupon} <span onClick={()=>copyText(coupon)}>{iscopied?"copied":"copy"}</span>
                </code>
            }
        </section>
      </main>
    </div>
  )
}

export default Coupon
