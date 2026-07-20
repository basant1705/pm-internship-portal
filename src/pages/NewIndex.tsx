import { Button } from "@/components/ui/enhanced-button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Link } from "react-router-dom";


import {
  Brain,
  Target,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  GraduationCap,
  Briefcase,
  BarChart3,
  Building2,
  UserCheck
} from "lucide-react";



const NewIndex = () => {



const features=[

{
icon:Brain,
title:"AI Internship Matching",
description:
"Find best internship opportunities using skills, education and preferences."
},

{
icon:Target,
title:"Smart Allocation",
description:
"Automated internship allocation with transparent workflow."
},

{
icon:Shield,
title:"Fair Selection",
description:
"Secure and unbiased selection process for every applicant."
},

{
icon:Zap,
title:"Fast Processing",
description:
"Manage thousands of applications quickly."
}

];



const stats=[

{
icon:Users,
value:"10K+",
title:"Students"
},

{
icon:Briefcase,
value:"500+",
title:"Internships"
},

{
icon:Building2,
value:"200+",
title:"Companies"
},

{
icon:Award,
value:"95%",
title:"Success Rate"
}

];



return (

<div className="min-h-screen bg-white text-gray-900">



{/* ================= HERO ================= */}


<section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">


<div className="container mx-auto text-center">


<div className="max-w-5xl mx-auto">


<Badge className="mb-6 bg-blue-100 text-blue-700 border-none">

<Sparkles className="h-4 w-4 mr-2"/>

AI Powered PM Internship Portal

</Badge>





<h1 className="text-5xl lg:text-7xl font-bold mb-6">


<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

Smart Internship

</span>


<br/>


Allocation Platform


</h1>





<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">


A complete digital platform connecting students,
companies and administrators through smart matching,
application management and transparent allocation.


</p>





{/* ========== MULTIPLE BUTTONS ========== */}



</div>


</div>


</section>
{/* ================= FEATURES SECTION ================= */}

<section className="py-20 px-4 bg-white">

<div className="container mx-auto">


<div className="text-center mb-12">

<h2 className="text-4xl font-bold text-gray-900">
Powerful Features
</h2>

<p className="text-gray-600 mt-4 text-lg">
Everything you need to manage internship applications
efficiently with smart technology.
</p>

</div>



<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


<Card className="border shadow-md hover:shadow-xl transition bg-white">

<CardHeader className="text-center">

<div className="mx-auto bg-blue-100 rounded-full p-4 w-fit">

<Brain className="h-8 w-8 text-blue-600"/>

</div>


<CardTitle className="mt-4">
AI Smart Matching
</CardTitle>


</CardHeader>


<CardContent>

<CardDescription className="text-center">

Matches students with suitable internships
based on skills, education and preferences.

</CardDescription>


</CardContent>


</Card>





<Card className="border shadow-md hover:shadow-xl transition bg-white">


<CardHeader className="text-center">


<div className="mx-auto bg-green-100 rounded-full p-4 w-fit">

<Target className="h-8 w-8 text-green-600"/>

</div>



<CardTitle className="mt-4">

Smart Allocation

</CardTitle>


</CardHeader>



<CardContent>


<CardDescription className="text-center">

Automated allocation system with transparent
selection process.

</CardDescription>


</CardContent>


</Card>







<Card className="border shadow-md hover:shadow-xl transition bg-white">


<CardHeader className="text-center">


<div className="mx-auto bg-purple-100 rounded-full p-4 w-fit">


<Shield className="h-8 w-8 text-purple-600"/>


</div>



<CardTitle className="mt-4">

Secure Platform

</CardTitle>


</CardHeader>



<CardContent>


<CardDescription className="text-center">

Secure applicant data management with
authentication system.

</CardDescription>


</CardContent>


</Card>







<Card className="border shadow-md hover:shadow-xl transition bg-white">


<CardHeader className="text-center">


<div className="mx-auto bg-orange-100 rounded-full p-4 w-fit">


<Zap className="h-8 w-8 text-orange-600"/>


</div>



<CardTitle className="mt-4">

Fast Processing

</CardTitle>


</CardHeader>



<CardContent>


<CardDescription className="text-center">

Process thousands of applications quickly
and efficiently.

</CardDescription>


</CardContent>


</Card>




</div>


</div>


</section>





{/* ================= PLATFORM STATS ================= */}


<section className="py-16 bg-gray-50">


<div className="container mx-auto px-4">


<div className="grid grid-cols-2 md:grid-cols-4 gap-6">


<Card className="text-center shadow">

<CardContent className="pt-6">


<Users className="mx-auto text-blue-600 mb-3"/>


<h2 className="text-3xl font-bold">
10000+
</h2>


<p className="text-gray-600">
Students
</p>


</CardContent>


</Card>





<Card className="text-center shadow">


<CardContent className="pt-6">


<Briefcase className="mx-auto text-green-600 mb-3"/>


<h2 className="text-3xl font-bold">
500+
</h2>


<p className="text-gray-600">
Internships
</p>


</CardContent>


</Card>





<Card className="text-center shadow">


<CardContent className="pt-6">


<Building2 className="mx-auto text-purple-600 mb-3"/>


<h2 className="text-3xl font-bold">
200+
</h2>


<p className="text-gray-600">
Companies
</p>


</CardContent>


</Card>






<Card className="text-center shadow">


<CardContent className="pt-6">


<Award className="mx-auto text-orange-600 mb-3"/>


<h2 className="text-3xl font-bold">
95%
</h2>


<p className="text-gray-600">
Success Rate
</p>


</CardContent>


</Card>




</div>


</div>


</section>
{/* ================= WHY CHOOSE SECTION ================= */}


<section className="py-24 px-4 bg-white">


<div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">


<div>


<Badge className="mb-4 bg-blue-100 text-blue-700">
Why Choose Us
</Badge>



<h2 className="text-4xl font-bold text-gray-900 mb-6">

Complete Internship Management Solution

</h2>



<p className="text-gray-600 text-lg mb-8">

Our platform helps students apply for internships,
administrators manage applications and organizations
find the right candidates through a transparent process.

</p>





<div className="space-y-5">


<div className="flex gap-3 items-center">

<CheckCircle className="text-green-600 h-6 w-6"/>

<span className="font-medium">
Easy online application process
</span>

</div>




<div className="flex gap-3 items-center">

<CheckCircle className="text-green-600 h-6 w-6"/>

<span className="font-medium">
Real-time application tracking
</span>

</div>





<div className="flex gap-3 items-center">

<CheckCircle className="text-green-600 h-6 w-6"/>

<span className="font-medium">
Secure authentication system
</span>

</div>





<div className="flex gap-3 items-center">

<CheckCircle className="text-green-600 h-6 w-6"/>

<span className="font-medium">
Admin analytics dashboard
</span>

</div>





<div className="flex gap-3 items-center">

<CheckCircle className="text-green-600 h-6 w-6"/>

<span className="font-medium">
Smart internship recommendations
</span>

</div>



</div>





<div className="flex flex-wrap gap-4 mt-10">


<Button
asChild
variant="hero"
size="xl"
>

<Link to="/apply">

<GraduationCap className="mr-2 h-5 w-5"/>

Start Application

<ArrowRight className="ml-2 h-5 w-5"/>

</Link>


</Button>





<Button
asChild
variant="outline"
size="xl"
>


<Link to="/analytics">

<BarChart3 className="mr-2 h-5 w-5"/>

View Analytics

</Link>


</Button>



</div>



</div>









{/* RIGHT CARD */}


<div className="grid gap-6">



<Card className="shadow-xl border">


<CardContent className="p-8 text-center">


<div className="bg-blue-100 p-5 rounded-full w-fit mx-auto mb-5">


<Brain className="h-12 w-12 text-blue-600"/>


</div>



<h3 className="text-2xl font-bold mb-3">

AI Powered Platform

</h3>



<p className="text-gray-600">

Built with modern technologies like React,
Node.js, Express and MongoDB.

</p>



</CardContent>


</Card>







<div className="grid grid-cols-2 gap-5">



<Card className="shadow-md">


<CardContent className="p-6 text-center">


<TrendingUp className="mx-auto h-8 w-8 text-green-600 mb-3"/>


<h3 className="text-2xl font-bold">

90%

</h3>


<p className="text-gray-600">

Match Accuracy

</p>


</CardContent>


</Card>






<Card className="shadow-md">


<CardContent className="p-6 text-center">


<Users className="mx-auto h-8 w-8 text-purple-600 mb-3"/>


<h3 className="text-2xl font-bold">

10K+

</h3>


<p className="text-gray-600">

Applicants

</p>


</CardContent>


</Card>



</div>



</div>



</div>


</section>







{/* ================= CALL TO ACTION ================= */}



<section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">


<div className="container mx-auto text-center text-white">



<h2 className="text-5xl font-bold mb-6">

Ready To Find Your Internship?

</h2>



<p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">

Join thousands of students and explore
career opportunities with PM Internship Portal.

</p>





<div className="flex justify-center flex-wrap gap-5">



<Button
asChild
size="xl"
variant="secondary"
>


<Link to="/apply">

Apply Now

<ArrowRight className="ml-2"/>

</Link>


</Button>







<Button
asChild
size="xl"
variant="outline"
className="border-white text-white hover:bg-white hover:text-blue-600"
>


<Link to="/register">

Create Account

</Link>


</Button>






<Button
asChild
size="xl"
variant="outline"
className="border-white text-white hover:bg-white hover:text-blue-600"
>


<Link to="/login">

Login

</Link>


</Button>



</div>



</div>


</section>
{/* ================= FOOTER ================= */}


<footer className="bg-white border-t py-10 px-4">


<div className="container mx-auto">


<div className="grid md:grid-cols-4 gap-8">



{/* Logo Section */}

<div>


<h3 className="text-2xl font-bold text-gray-900 mb-3">

PM Internship Portal

</h3>


<p className="text-gray-600">

Smart digital platform for internship
application, matching and allocation.

</p>


</div>





{/* Quick Links */}

<div>


<h4 className="font-bold text-lg mb-4">

Quick Links

</h4>



<div className="space-y-3 text-gray-600">


<Link 
to="/"
className="block hover:text-blue-600"
>
Home
</Link>



<Link 
to="/apply"
className="block hover:text-blue-600"
>
Apply Internship
</Link>



<Link 
to="/dashboard"
className="block hover:text-blue-600"
>
Dashboard
</Link>



<Link 
to="/analytics"
className="block hover:text-blue-600"
>
Analytics
</Link>


</div>


</div>







{/* Services */}


<div>


<h4 className="font-bold text-lg mb-4">

Features

</h4>


<div className="space-y-3 text-gray-600">


<p>
AI Matching
</p>


<p>
Smart Allocation
</p>


<p>
Application Tracking
</p>


<p>
Secure Portal
</p>


</div>


</div>








{/* Contact */}


<div>


<h4 className="font-bold text-lg mb-4">

Technology

</h4>


<div className="space-y-3 text-gray-600">


<p>
React.js
</p>


<p>
Node.js
</p>


<p>
Express.js
</p>


<p>
MongoDB
</p>


</div>


</div>



</div>







<div className="border-t mt-10 pt-6 text-center text-gray-600">


<p>

© 2026 PM Internship Portal. All Rights Reserved.

</p>


<p className="mt-2 text-sm">

Built with React + Node.js + MongoDB

</p>


</div>





</div>


</footer>




</div>

);

};



export default NewIndex;