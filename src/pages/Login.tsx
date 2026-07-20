import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );


      localStorage.setItem(
        "token",
        data.token
      );


      alert("Login Successful");

      navigate("/");


    } catch (err:any) {

      setError(
        err.response?.data?.message || 
        "Invalid email or password"
      );

    }

  };


  return (

    <div className="flex justify-center items-center min-h-screen">

      <div className="w-96 p-6 shadow-lg rounded">


        <h2 className="text-2xl font-bold mb-4">
          Login
        </h2>


        {
          error && (
            <p className="text-red-500">
              {error}
            </p>
          )
        }


        <form onSubmit={handleLogin}>


          <input
            className="border p-2 w-full mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />



          <input
            className="border p-2 w-full mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />



          <button
            className="bg-blue-600 text-white px-4 py-2 w-full"
            type="submit"
          >
            Login
          </button>


        </form>



        <p className="mt-3">

          Don't have account?

          <Link 
            className="text-blue-600 ml-2"
            to="/register"
          >
            Register
          </Link>

        </p>


      </div>

    </div>

  );
};


export default Login;