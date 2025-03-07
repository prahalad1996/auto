import AdminProductForm from "../Admin/AdminProductForm";
import AdminProductList from "../Admin/AdminProductList";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    
    <div className="flex">
        
      <button
        className="p-2 bg-blue-600 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>
      

      {isOpen && (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-2"><a href="/AdminProductForm" className="hover:underline">AdminProductForm</a></li>
            <li className="mb-2"><a href="/AdminProductList" className="hover:underline">AdminProductList</a></li>
            
          </ul>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
