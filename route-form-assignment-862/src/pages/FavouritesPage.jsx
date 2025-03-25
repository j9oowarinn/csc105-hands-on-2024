
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const formSchema = z.object({
  number: z.coerce.number().min(1, "Number must be at least 1").max(100, "Number must be 100 or less"),
  q: z.enum(["love", "like"], { errorMap: () => ({ message: "Select either 'love' or 'like'" }) }),
  size: z.enum(["small", "medium", "large"], { errorMap: () => ({ message: "Select a valid size" }) }),
});

export default function FavouritesPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Favourites Page</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Number Input */}
            <div>
              <label className="block font-medium mb-1">Number:</label>
              <input
                type="number"
                {...register("number")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
              {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
            </div>

            {/* Q */}
            <div>
              <label className="block font-medium mb-1">Q:</label>
              <select
                defaultValue=""
                {...register("q")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              >
                <option value="" disabled>Select</option>
                <option value="love">love</option>
                <option value="like">like</option>
              </select>
              {errors.q && <p className="text-red-500 text-sm">{errors.q.message}</p>}
            </div>

            {/* Size */}
            <div>
              <label className="block font-medium mb-1">Size:</label>
              <select
                defaultValue=""
                {...register("size")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              >
                <option value="" disabled>Select</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
              {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
