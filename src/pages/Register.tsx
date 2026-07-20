import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Register = () => {

  const navigate = useNavigate();


  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");

  const [error,setError] = useState<string>("");



  const handleRegister = async(
    e: React.FormEvent<HTMLFormElement>
  ) => {


    e.preventDefault();


    try {


      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password
        }
      );


      alert("Registration Successful");

      navigate("/login");


    } catch(err:any) {


      setError(
        err.response?.data?.message ||
        "Registration Failed"
      );

    }


  };



  return (

    <div className="flex justify-center items-center min-h-screen">


      <div className="w-96 p-6 shadow-lg rounded">


        <h2 className="text-2xl font-bold mb-4">
          Register
        </h2>



        {
          error && (
            <p className="text-red-500">
              {error}
            </p>
          )
        }



        <form onSubmit={handleRegister}>


          <input
            className="border p-2 w-full mb-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />



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
            className="bg-green-600 text-white px-4 py-2 w-full"
            type="submit"
          >
            Register
          </button>


        </form>



        <p className="mt-3">

          Already have account?

          <Link
            className="text-blue-600 ml-2"
            to="/login"
          >
            Login
          </Link>


        </p>


      </div>


    </div>

  );
};


export default Register;