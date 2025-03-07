import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const AdminProductForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("image", data.image[0]);

      await axios.post("http://localhost:5000/api/products", formData);

      reset();
      setImagePreview(null);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className="bg-green-500 p-6 rounded-md">
      <h1 className="text-white text-2xl font-bold text-center mb-4">
        Add Product
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-md shadow-md space-y-4"
      >
        {/* Name */}
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          placeholder="Product Name"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <br />

        {/* Description */}
        <textarea
          {...register("description", { required: true })}
          name="description"
          placeholder="Product Description"
          className="border border-gray-300 p-2 rounded-md w-full"
        ></textarea>
        <br />

        {/* Price */}
        <input
          {...register("price", { required: true })}
          type="number"
          name="price"
          placeholder="Price"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <br />

        {/* Image Upload */}
        <input
          {...register("image", { required: true })}
          type="file"
          name="image"
          className="border border-gray-300 p-2 rounded-md w-[100px] h-[100px]"
          onChange={(e) => setImagePreview(URL.createObjectURL(e.target.files[0]))}
        />
        <br />

        {/* Image Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{height:"100px",width:"100px"}}
          />
        )}
        <br />
        

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
      
    </div>
  );
};

export default AdminProductForm;
