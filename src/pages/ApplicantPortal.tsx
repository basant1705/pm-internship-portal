
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/enhanced-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { dummyInternships } from "@/data/dummyData";

import { useState } from "react";
import axios from "axios";

import {
  User,
  MapPin,
  GraduationCap,
  Award,
  Briefcase,
  Star,
  Clock,
  Building2,
  IndianRupee
} from "lucide-react";



const ApplicantPortal = () => {

const navigate = useNavigate();
const [selectedInternships,setSelectedInternships] = useState<string[]>([]);



const [formData,setFormData] = useState({

  fullName:"",
  email:"",
  phone:"",
  age:"",
  gender:"",
  category:"",
  location:"",

  education:"",
  cgpa:"",
  skills:"",
  experience:""

});



const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {

  const { id, value } = e.target;

  setFormData(prev => ({
    ...prev,
    [id]: value
  }));

};




const handleInternshipSelect=(internshipId:string)=>{


if(selectedInternships.includes(internshipId)){


setSelectedInternships(
prev=>prev.filter(id=>id!==internshipId)
);


}
else if(selectedInternships.length < 3){


setSelectedInternships(
prev=>[...prev,internshipId]
);


}


};





const saveDraft = async () => {
  console.log("API =", import.meta.env.VITE_API_URL);

  try {

    await axios.post(
      `${import.meta.env.VITE_API_URL}/applications/draft`,
      {
        ...formData,
        selectedInternships
      }
    );
    

    toast.success("Application saved as draft successfully");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);

  } catch(error:any) {
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log(error);

    toast.error(
      error.response?.data?.message ||
      "Draft Save Failed"
    );

  }

};




const handleSubmit = async (e) => {

  e.preventDefault();
  console.log("ENV =", import.meta.env);
  console.log("API =", import.meta.env.VITE_API_URL);

  try {

    await axios.post(
      `${import.meta.env.VITE_API_URL}/applications/submit`,
      {
        ...formData,
        selectedInternships
      }
    );


    toast.success("Application submitted successfully");


    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);


  } catch (error:any) {
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log(error);

    toast.error(
      error.response?.data?.message ||
      "Submission Failed"
    );

  }

};
return(
<div className="min-h-screen bg-background">


<div className="container mx-auto px-4 py-8">



<div className="mb-8 text-center">


<h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">

Apply for PM Internship Scheme

</h1>



<p className="text-lg text-muted-foreground max-w-2xl mx-auto">

Join India's flagship internship program and kickstart your career with leading organizations

</p>



</div>





<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">



<div className="lg:col-span-2 space-y-6">



<Card className="bg-gradient-card border-0 shadow-card">


<CardHeader>


<CardTitle className="flex items-center gap-2">

<User className="h-5 w-5 text-primary"/>

Personal Information

</CardTitle>


<CardDescription>

Please fill in your basic details

</CardDescription>


</CardHeader>





<CardContent className="space-y-4">


<div className="grid grid-cols-1 md:grid-cols-2 gap-4">


<div className="space-y-2">

<Label>
Full Name
</Label>


<Input

id="fullName"

placeholder="Enter your full name"

value={formData.fullName}

onChange={handleChange}

/>


</div>





<div className="space-y-2">


<Label>
Email Address
</Label>


<Input

id="email"

type="email"

placeholder="your.email@example.com"

value={formData.email}

onChange={handleChange}

/>


</div>


</div>





<div className="grid grid-cols-1 md:grid-cols-2 gap-4">


<div className="space-y-2">


<Label>
Phone Number
</Label>


<Input

id="phone"

placeholder="+91-XXXXXXXXXX"

value={formData.phone}

onChange={handleChange}

/>


</div>




<div className="space-y-2">


<Label>
Age
</Label>


<Input

id="age"

type="number"

placeholder="22"

value={formData.age}

onChange={handleChange}

/>


</div>


</div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-4">


<div className="space-y-2">

<Label>
Gender
</Label>


<Select
onValueChange={(value)=>
setFormData(prev=>({
...prev,
gender:value
}))
}

>


<SelectTrigger>

<SelectValue placeholder="Select gender"/>

</SelectTrigger>


<SelectContent>

<SelectItem value="male">
Male
</SelectItem>


<SelectItem value="female">
Female
</SelectItem>


<SelectItem value="other">
Other
</SelectItem>


</SelectContent>


</Select>


</div>




<div className="space-y-2">


<Label>
Category
</Label>



<Select

onValueChange={(value)=>
setFormData(prev=>({
...prev,
category:value
}))
}

>


<SelectTrigger>

<SelectValue placeholder="Select category"/>

</SelectTrigger>



<SelectContent>


<SelectItem value="general">
General
</SelectItem>


<SelectItem value="obc">
OBC
</SelectItem>


<SelectItem value="sc">
SC
</SelectItem>


<SelectItem value="st">
ST
</SelectItem>


<SelectItem value="ews">
EWS
</SelectItem>


</SelectContent>


</Select>


</div>


</div>





<div className="space-y-2">


<Label>
Current Location
</Label>


<Input

id="location"

placeholder="City, State"

value={formData.location}

onChange={handleChange}

/>


</div>


</CardContent>

</Card>







{/* Education Section */}



<Card className="bg-gradient-card border-0 shadow-card">


<CardHeader>


<CardTitle className="flex items-center gap-2">


<GraduationCap className="h-5 w-5 text-secondary"/>


Educational Background


</CardTitle>



<CardDescription>

Tell us about your academic qualifications

</CardDescription>



</CardHeader>





<CardContent className="space-y-4">





<div className="grid grid-cols-1 md:grid-cols-2 gap-4">


<div className="space-y-2">


<Label>
Highest Qualification
</Label>


<Input

id="education"

placeholder="B.Tech Computer Science"

value={formData.education}

onChange={handleChange}

/>


</div>





<div className="space-y-2">


<Label>
CGPA/Percentage
</Label>


<Input

id="cgpa"

type="number"

step="0.1"

placeholder="8.5"

value={formData.cgpa}

onChange={handleChange}

/>


</div>


</div>





<div className="space-y-2">


<Label>
Technical Skills
</Label>



<Textarea


id="skills"


placeholder="React, Node.js, Python, Machine Learning..."

rows={3}


value={formData.skills}


onChange={handleChange}


/>


</div>






<div className="space-y-2">


<Label>
Relevant Experience
</Label>



<Textarea


id="experience"


placeholder="Describe internships, projects, or work experience..."


rows={4}


value={formData.experience}


onChange={handleChange}


/>


</div>





</CardContent>


</Card>







{/* Internship Preferences */}



<Card className="bg-gradient-card border-0 shadow-card">


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Star className="h-5 w-5 text-accent"/>


Internship Preferences


</CardTitle>



<CardDescription>


Select up to 3 internships in order of preference


{
selectedInternships.length > 0 && (

<span className="ml-2 text-primary">

({selectedInternships.length}/3 selected)

</span>

)

}


</CardDescription>


</CardHeader>






<CardContent>


<div className="grid gap-4">



{
dummyInternships.slice(0,6).map((internship)=>(
<div
key={internship.id}

className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
selectedInternships.includes(internship.id)
?
'border-primary bg-primary/5 shadow-glow'
:
'border-border hover:border-primary/50 hover:shadow-card'
}`}

onClick={()=>handleInternshipSelect(internship.id)}

>


<div className="flex items-start justify-between">


<div className="flex-1">


<div className="flex items-center gap-2 mb-2">


<h3 className="font-semibold text-foreground">

{internship.title}

</h3>



{
selectedInternships.includes(internship.id) && (

<Badge variant="default">

Preference #
{
selectedInternships.indexOf(internship.id)+1
}

</Badge>

)

}


</div>




<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">


<div className="flex items-center gap-1">

<Building2 className="h-3 w-3"/>

{internship.company}

</div>




<div className="flex items-center gap-1">

<MapPin className="h-3 w-3"/>

{internship.location}

</div>





<div className="flex items-center gap-1">

<Clock className="h-3 w-3"/>

{internship.duration}

</div>




<div className="flex items-center gap-1">

<IndianRupee className="h-3 w-3"/>

₹{internship.stipend}

</div>


</div>




<div className="flex flex-wrap gap-1 mt-3">


{
internship.requiredSkills.map(skill=>(

<Badge 
key={skill}
variant="secondary"
className="text-xs"
>

{skill}

</Badge>

))

}


</div>



</div>


</div>


</div>

))

}


</div>


</CardContent>


</Card>





{/* Buttons */}


<div className="flex justify-end gap-4">


<Button

variant="outline"

size="lg"

onClick={saveDraft}

>

Save as Draft

</Button>





<Button
  variant="hero"
  size="lg"
  onClick={handleSubmit}
>

Submit Application

</Button>


</div>




</div>





{/* Sidebar */}


<div className="space-y-6">



<Card className="bg-gradient-card border-0 shadow-card">


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Award className="h-5 w-5 text-primary"/>


Application Tips


</CardTitle>


</CardHeader>



<CardContent>


<ul className="space-y-3 text-sm">


<li>
• Complete all sections properly
</li>


<li>
• Add technical skills for better matching
</li>


<li>
• Select internship preferences carefully
</li>


<li>
• Keep your information updated
</li>


</ul>


</CardContent>


</Card>







<Card className="bg-gradient-card border-0 shadow-card">


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Briefcase className="h-5 w-5 text-secondary"/>


Program Statistics


</CardTitle>


</CardHeader>



<CardContent>


<div className="grid grid-cols-2 gap-4 text-center">


<div>

<h2 className="text-2xl font-bold">

{dummyInternships.length}

</h2>

<p className="text-sm text-muted-foreground">

Programs

</p>

</div>




<div>

<h2 className="text-2xl font-bold">

{

dummyInternships.reduce(
(sum,item)=>sum+item.capacity,
0
)

}

</h2>


<p className="text-sm text-muted-foreground">

Positions

</p>


</div>



</div>


</CardContent>


</Card>






<Card className="bg-gradient-success border-0 shadow-card">


<CardContent className="pt-6">


<div className="text-center text-white">


<Award className="h-8 w-8 mx-auto mb-3"/>


<h3 className="text-lg font-semibold">

Apply Now!

</h3>



<p className="text-sm">

Join thousands of successful interns who launched their careers.

</p>


</div>


</CardContent>


</Card>



</div>



</div>


</div>



</div>

);

};


export default ApplicantPortal;

