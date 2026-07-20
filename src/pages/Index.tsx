import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Clock,
  Lock,
  Gauge
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Matching",
      description: "AI-powered algorithm matches students with ideal internship opportunities based on skills and preferences."
    },
    {
      icon: Target,
      title: "Fair Allocation",
      description: "Transparent and equitable allocation system ensuring every candidate gets fair consideration."
    },
    {
      icon: Shield,
      title: "Secure System",
      description: "Enterprise-grade security protecting all applicant data and personal information."
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Process thousands of applications efficiently with our powerful digital platform."
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Monitor your application status in real-time with instant notifications and updates."
    },
    {
      icon: Gauge,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools for administrators and stakeholders."
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", title: "Students" },
    { icon: Briefcase, value: "500+", title: "Internships" },
    { icon: Building2, value: "200+", title: "Companies" },
    { icon: Award, value: "95%", title: "Success Rate" }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Online application system" },
    { icon: CheckCircle, text: "Smart internship recommendations" },
    { icon: CheckCircle, text: "Real-time application tracking" },
    { icon: CheckCircle, text: "Transparent allocation workflow" },
    { icon: CheckCircle, text: "Secure data management" },
    { icon: CheckCircle, text: "Admin dashboard monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="py-24 px-4 border-b">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 inline-flex">
            <Sparkles className="mr-2 h-4 w-4" />
            PM Internship Scheme Portal
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Smart Internship Allocation
            </span>
            <br />
            <span className="text-foreground">Platform</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-10">
            A modern digital platform connecting students with internship opportunities through intelligent application management, smart matching, and fair allocation.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild variant="hero" size="xl">
              <Link to="/apply">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="professional" size="xl">
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                Admin Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="pt-8 text-center">
                    <Icon className="mx-auto h-10 w-10 text-primary mb-4" />
                    <h2 className="text-4xl font-bold">{item.value}</h2>
                    <p className="text-muted-foreground mt-2">{item.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need for efficient internship management
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-lg transition">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Our Platform?</h2>
              <div className="grid gap-4">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-1 bg-success/10 rounded">
                        <Icon className="h-5 w-5 text-success" />
                      </div>
                      <span className="text-lg">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">For Students</h3>
                    <p className="text-muted-foreground">
                      Find and apply for internships that match your skills and career goals. Track your applications in real-time and receive personalized recommendations.
                    </p>
                  </div>
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/apply">Start Application</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-hero text-white border-0 shadow-glow">
            <CardContent className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have successfully secured internships through our platform.
              </p>
              <Button asChild variant="secondary" size="xl">
                <Link to="/apply">
                  Begin Your Internship Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;