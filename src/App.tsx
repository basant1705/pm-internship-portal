import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Landing Page
import NewIndex from "./pages/NewIndex";

import Dashboard from "./pages/Dashboard";
import ApplicantPortal from "./pages/ApplicantPortal";
import Allocations from "./pages/Allocations";
import SimpleAnalytics from "./pages/SimpleAnalytics";
import NotFound from "./pages/NotFound";


// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";


// Navbar
import Navbar from "./components/Navbar";


const queryClient = new QueryClient();



const App = () => (

  <QueryClientProvider client={queryClient}>

    <TooltipProvider>

      <Toaster />

      <Sonner />


      <BrowserRouter>


        {/* Navbar */}
        <Navbar />



        <Routes>


          {/* Authentication */}

          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/register"
            element={<Register />}
          />




          {/* Landing Page */}

          <Route
            path="/"
            element={<NewIndex />}
          />



          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />



          {/* Applicant */}

          <Route
            path="/apply"
            element={<ApplicantPortal />}
          />


          <Route
            path="/applicants"
            element={<ApplicantPortal />}
          />



          {/* Allocation */}

          <Route
            path="/allocations"
            element={<Allocations />}
          />



          {/* Analytics */}

          <Route
            path="/analytics"
            element={<SimpleAnalytics />}
          />



          {/* Internship */}

          <Route
            path="/internships"
            element={<Dashboard />}
          />



          {/* 404 */}

          <Route
            path="*"
            element={<NotFound />}
          />


        </Routes>



      </BrowserRouter>


    </TooltipProvider>


  </QueryClientProvider>

);



export default App;