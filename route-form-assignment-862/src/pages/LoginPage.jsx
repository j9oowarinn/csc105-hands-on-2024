import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = () => navigate("/");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
      <input {...register("email")} placeholder="Email" className="w-full p-2 border" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="Password" className="w-full p-2 border" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>

      <p className="mt-2">Don’t have an account? <Link to="/signup" className="text-blue-500 underline">SignUp</Link></p>
    </form>
  );
};

export default LoginPage;
