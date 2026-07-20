import { Link } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import {
  GraduationCap,
  LogIn,
  UserPlus,
  LayoutDashboard,
  FileCheck,
  BarChart3
} from "lucide-react";


const Navbar = () => {

  return (

    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">


      <div className="container mx-auto px-4 py-4">


        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">



          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">


            <div className="bg-blue-100 p-2 rounded-full">

              <GraduationCap className="h-7 w-7 text-blue-600"/>

            </div>


            <div>

              <h1 className="text-xl font-bold text-gray-900">
                PM Internship Portal
              </h1>

              <p className="text-xs text-gray-500">
                Smart Allocation System
              </p>

            </div>


          </Link>






          {/* Top Buttons */}

          <nav className="flex flex-wrap justify-center gap-3">



            {/* Apply */}

            <Button
              asChild
              variant="hero"
            >

              <Link to="/apply">

                Apply Internship

              </Link>

            </Button>






            {/* Student Login */}

            <Button
              asChild
              variant="outline"
            >

              <Link to="/login">

                <LogIn className="h-4 w-4 mr-2"/>

                Student Login

              </Link>

            </Button>







            {/* Register */}

            <Button
              asChild
              variant="outline"
            >

              <Link to="/register">

                <UserPlus className="h-4 w-4 mr-2"/>

                Register

              </Link>

            </Button>







            {/* Admin Dashboard */}

            <Button
              asChild
              variant="professional"
            >

              <Link to="/dashboard">

                <LayoutDashboard className="h-4 w-4 mr-2"/>

                Admin Dashboard

              </Link>

            </Button>







            {/* Allocation Result */}

            <Button
              asChild
              variant="outline"
            >

              <Link to="/allocations">

                <FileCheck className="h-4 w-4 mr-2"/>

                Allocation Result

              </Link>

            </Button>








            {/* Analytics */}

            <Button
              asChild
              variant="outline"
            >

              <Link to="/analytics">

                <BarChart3 className="h-4 w-4 mr-2"/>

                Analytics

              </Link>

            </Button>





          </nav>


        </div>


      </div>


    </header>


  );

};


export default Navbar;