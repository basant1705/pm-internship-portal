import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";

import {
  Search,
  FileText,
  Download,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  User,
  Briefcase,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Allocations = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${API}/applications`);
      setApplications(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const name = app.fullName || "";
      const email = app.email || "";
      const college = app.collegeName || "";

      return (
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [applications, searchTerm]);

  const statusCounts = useMemo(() => {
    return applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {});
  }, [applications]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Submitted":
        return <CheckCircle className="h-4 w-4 text-green-600" />;

      case "Draft":
        return <Clock className="h-4 w-4 text-yellow-500" />;

      default:
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Submitted":
        return "bg-green-600 text-white";

      case "Draft":
        return "bg-yellow-500 text-white";

      default:
        return "bg-red-500 text-white";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading Applications...
      </div>
    );
  }
    return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Applications Dashboard
          </h1>

          <p className="text-muted-foreground">
            View and manage all internship applications.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          {/* Total */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Applications
              </CardTitle>

              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold">
                {applications.length}
              </div>

              <p className="text-xs text-muted-foreground">
                Applications received
              </p>
            </CardContent>
          </Card>

          {/* Submitted */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Submitted
              </CardTitle>

              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {statusCounts.Submitted || 0}
              </div>

              <p className="text-xs text-muted-foreground">
                Successfully submitted
              </p>
            </CardContent>
          </Card>

          {/* Draft */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Draft
              </CardTitle>

              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">
                {statusCounts.Draft || 0}
              </div>

              <p className="text-xs text-muted-foreground">
                Saved as draft
              </p>
            </CardContent>
          </Card>

          {/* Search Result */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Showing
              </CardTitle>

              <User className="h-4 w-4 text-primary" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {filteredApplications.length}
              </div>

              <p className="text-xs text-muted-foreground">
                Filtered records
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Search */}
        <Card className="mb-6 bg-gradient-card border-0 shadow-card">
          <CardContent className="pt-6">

            <div className="flex flex-col md:flex-row gap-4 justify-between">

              <div className="relative w-full md:w-96">

                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  className="pl-10"
                  placeholder="Search by name, email or college..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

              </div>

              <div className="flex gap-2">

                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Report
                </Button>

                <Button variant="professional">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>

              </div>

            </div>

          </CardContent>
        </Card>
                {/* Applications List */}

        <div className="space-y-4">

          {filteredApplications.map((application) => (

            <Card
              key={application._id}
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all"
            >
              <CardContent className="p-6">

                {/* Top */}

                <div className="flex justify-between items-start mb-5">

                  <div>

                    <h2 className="text-xl font-semibold">
                      {application.fullName}
                    </h2>

                    <p className="text-muted-foreground">
                      {application.email}
                    </p>

                  </div>

                  <Badge
                    className={
                      application.status === "Submitted"
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }
                  >
                    {application.status}
                  </Badge>

                </div>

                {/* Information */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">

                    <p>
                      <strong>Phone :</strong>{" "}
                      {application.phoneNumber}
                    </p>

                    <p>
                      <strong>College :</strong>{" "}
                      {application.collegeName}
                    </p>

                    <p>
                      <strong>Degree :</strong>{" "}
                      {application.degree}
                    </p>

                    <p>
                      <strong>Branch :</strong>{" "}
                      {application.branch}
                    </p>

                    <p>
                      <strong>CGPA :</strong>{" "}
                      {application.cgpa}
                    </p>

                  </div>

                  <div className="space-y-2">

                    <p>
                      <strong>Gender :</strong>{" "}
                      {application.gender}
                    </p>

                    <p>
                      <strong>Category :</strong>{" "}
                      {application.category}
                    </p>

                    <p>
                      <strong>State :</strong>{" "}
                      {application.state}
                    </p>

                    <p>
                      <strong>District :</strong>{" "}
                      {application.district}
                    </p>

                    <p>
                      <strong>Pincode :</strong>{" "}
                      {application.pincode}
                    </p>

                  </div>

                </div>
                                {/* Internship Details */}

                <div className="mt-6">

                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Selected Internships
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {application.selectedInternships?.length > 0 ? (
                      (Array.isArray(application.selectedInternships)
  ? application.selectedInternships
  : []
).map((item, index) => (
                        <Badge key={index} variant="secondary">
                          {item}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-muted-foreground">
                        No Internship Selected
                      </span>
                    )}
                  </div>

                </div>

                {/* Resume */}

                {application.resume && (
                  <div className="mt-6">

                    <a
  href={`${API.replace("/api", "")}/${application.resume}`}
  target="_blank"
  rel="noreferrer"
>
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Resume
                      </Button>
                    </a>

                  </div>
                )}

              </CardContent>
            </Card>

          ))}

        </div>

        {/* Empty State */}

        {filteredApplications.length === 0 && (

          <Card className="shadow-card">

            <CardContent className="py-16 text-center">

              <Search className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />

              <h2 className="text-xl font-semibold mb-2">
                No Applications Found
              </h2>

              <p className="text-muted-foreground">
                No application matches your search.
              </p>

            </CardContent>

          </Card>

        )}

      </div>
    </div>
  );
};

export default Allocations;