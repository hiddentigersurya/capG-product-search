import React,{ useState} from "react";
import Listitem from '../Listitem'
import './index.css'

const products = [
    {
      productId: 1,
      name: 'Laptop',
      price: 75000,
      category: 'Electronics'
    },
    {
      productId: 2,
      name: 'Smartphone',
      price: 50000,
      category: 'Electronics'
    },
    {
      productId: 3,
      name: 'T-shirt',
      price: 500,
      category: 'Apparel'
    },
    {
      productId: 4,
      name: 'Refrigerator',
      price: 40000,
      category: 'Home Appliances'
    },
    {
      productId: 5,
      name: 'Running Shoes',
      price: 3000,
      category: 'Footwear'
    },
    {
        productId: 6,
        name: 'Coffee Maker',
        price: 2000,
        category: 'Home Appliances'
      },
      {
        productId: 7,
        name: 'Bluetooth Headphones',
        price: 1500,
        category: 'Electronics'
      },
      {
        productId: 8,
        name: 'Desk Chair',
        price: 5000,
        category: 'Furniture'
      },
      {
        productId: 9,
        name: 'Yoga Mat',
        price: 1000,
        category: 'Fitness'
      },
      {
        productId: 10,
        name: 'Water Bottle',
        price: 300,
        category: 'Accessories'
      }
  ];

const Home=()=>{
    const [search, setSearch]=useState("");
    return(
        <>
        <div className="home">
            <h1>Welcome</h1>
        <input type="search" placeholder="search" onChange={(event)=>setSearch(event.target.value)} className="search"/>
        <div className="items-container">
        <table border="2px">
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {search === "" ? (
                products.map((item)=>(
                    <Listitem key={item.productId} item={item} />
                ))
            ) : (
                 
                products.map((item) => {
                    if(item.name.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <Listitem key={item.productId} item={item} />
                        );
                    }
                }
                      )
                
            )}
        </tbody>
        </table>
        </div>

        </div>
        </>
    )
}

export default Home;