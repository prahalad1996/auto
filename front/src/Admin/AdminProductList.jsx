import { useEffect, useState } from "react";
import axios from "axios";
// import bgImage from "../assets/Images/adminBg.webp"

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-center text-3xl font-bold bg-black text-white py-3 rounded-md mb-4">
        Product List
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Description</th>
              <th className="p-3 border border-gray-300">Price</th>
              <th className="p-3 border border-gray-300">Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center bg-white hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{product.name}</td>
                <td className="p-3 border border-gray-300">{product.description}</td>
                <td className="p-3 border border-gray-300">${product.price}</td>
                <td className="p-3 border border-gray-300">
                  <img
                    src={`/uploads/${product.image}`}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md mx-auto"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p></p>
    </div>


    //  <div className="flex justify-center items-center h-screen"> 


    // {/* //  style={{
    // //   backgroundImage: `url(${bgImage})`,
    // //   backgroundSize: "cover",
    // //   backgroundRepeat: "no-repeat",
    // //   minHeight: "100vh",
    // //   width: "100%",
    // // }} */}



    //   <h1 className="text-center">Product List</h1>
    //   <table  >
    //     <thead style={{border:"solid 2px black "}}>
    //       <tr>
    //         <th className="">Name</th>
    //         <th className="">Description</th>
    //         <th className="">Price</th>
    //         <th className="">Image</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {products.map((product) => (
    //         <tr key={product.id} className="text-center"> 
    //           <td className="border p-2">{product.name}</td>
    //           <td className="border p-2">{product.description}</td>
    //           <td className="border p-2">${product.price}</td>
    //           <td className="border p-2">
    //             <img src={`/uploads/${product.image}`} alt={product.name} className="w-20 h-20 object-cover" />
    //           </td>
    //           <td className="border p-2">
    //             <button className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default AdminProductList;
