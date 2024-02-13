import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Newproduct = () => {

        const [name,setName] = useState<string>("");
        const [price,setPrice] = useState<number>();
        const [stock,setStock] = useState<number>();
        const [photo,setPhoto] = useState<string>("");

    const changeImageHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        const file:File|undefined = e.target.files?.[0];

        const reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onloadend =()=>{
                if(typeof reader.result === "string" )setPhoto(reader.result);
            }
        }
    }

  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="productmanagement"> 
        <article>
            <form>
                <h2>New Product</h2>
                <div>
                    <label>Name</label>
                    <input 
                        required
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        required
                        type="number" 
                        placeholder="Price" 
                        value={price} 
                        onChange={(e)=>setPrice(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Stock</label>
                    <input 
                        required
                        type="number" 
                        placeholder="Name" 
                        value={stock} 
                        onChange={(e)=>setStock(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Photo</label>
                    <input 
                        required
                        type="file" 
                        onChange={changeImageHandler}
                    />
                </div>
                {
                    photo && <img src={photo} alt="newImage"/>
                }
                <button type="submit">Create</button>
            </form>
        </article>
      </main>
    </div>
  )
}

export default Newproduct;
