import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import { Button } from "@/components/ui/enhanced-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Users,
  FileCheck,
  FileClock,
  RefreshCcw,
  Database,
} from "lucide-react";

interface Application {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  education: string;
  cgpa: string;
  location: string;
  skills: string;
  status: string;
  createdAt: string;
}

const Dashboard = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/applications`
      );

      if (res.data.success) {
        setApplications(res.data.data);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const stats = useMemo(() => {
    const total = applications.length;

    const submitted = applications.filter(
      (item) => item.status === "Submitted"
    ).length;

    const draft = applications.filter(
      (item) => item.status === "Draft"
    ).length;

    return {
      total,
      submitted,
      draft,
    };
  }, [applications]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-6 py-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Admin Dashboard
            </h1>

            <p className="text-muted-foreground">
              Internship Portal Management
            </p>

          </div>

          <Button
            variant="outline"
            onClick={fetchApplications}
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh
          </Button>

        </div>
                {/* Statistics Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">

              <CardTitle>Total Applications</CardTitle>

              <Database className="h-6 w-6 text-blue-600" />

            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold">
                {stats.total}
              </h2>

              <p className="text-muted-foreground">
                Total applications received
              </p>

            </CardContent>

          </Card>



          <Card>

            <CardHeader className="flex flex-row items-center justify-between">

              <CardTitle>Submitted</CardTitle>

              <FileCheck className="h-6 w-6 text-green-600" />

            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold text-green-600">
                {stats.submitted}
              </h2>

              <p className="text-muted-foreground">
                Successfully submitted
              </p>

            </CardContent>

          </Card>



          <Card>

            <CardHeader className="flex flex-row items-center justify-between">

              <CardTitle>Draft</CardTitle>

              <FileClock className="h-6 w-6 text-yellow-600" />

            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold text-yellow-600">
                {stats.draft}
              </h2>

              <p className="text-muted-foreground">
                Saved as draft
              </p>

            </CardContent>

          </Card>

        </div>



        {/* Recent Applications */}

        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">

              <Users className="h-5 w-5" />

              Recent Applications

            </CardTitle>

            <CardDescription>

              Latest applications submitted by students

            </CardDescription>

          </CardHeader>

          <CardContent>

            <div className="overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>

                  <tr className="border-b">

                    <th className="text-left p-3">Name</th>

                    <th className="text-left p-3">Email</th>

                    <th className="text-left p-3">Phone</th>

                    <th className="text-left p-3">Education</th>

                    <th className="text-left p-3">CGPA</th>

                    <th className="text-left p-3">Status</th>

                  </tr>

                </thead>

                <tbody>

                  {applications.map((app) => (

                    <tr
                      key={app._id}
                      className="border-b hover:bg-muted/40"
                    >

                      <td className="p-3 font-medium">
                        {app.fullName}
                      </td>

                      <td className="p-3">
                        {app.email}
                      </td>

                      <td className="p-3">
                        {app.phone}
                      </td>

                      <td className="p-3">
                        {app.education}
                      </td>

                      <td className="p-3">
                        {app.cgpa}
                      </td>

                      <td className="p-3">

                        <Badge
                          variant={
                            app.status === "Submitted"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {app.status}
                        </Badge>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
                          {applications.length === 0 && (

                <div className="text-center py-10">

                  <h2 className="text-xl font-semibold">
                    No Applications Found
                  </h2>

                  <p className="text-muted-foreground mt-2">
                    No applications have been submitted yet.
                  </p>

                </div>

              )}

            </CardContent>

        </Card>

      </div>

    </div>

  );

};

export default Dashboard;