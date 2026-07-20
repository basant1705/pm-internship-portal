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
import { Progress } from "@/components/ui/progress";

import {
  TrendingUp,
  Users,
  Target,
  Award,
  MapPin,
  GraduationCap,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const SimpleAnalytics = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${API}/applications`);

      setApplications(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const analyticsData = useMemo(() => {
    const skillsCount = {};
    const categoryCount = {};
    const genderCount = {};
    const locationCount = {};

    applications.forEach((app) => {
      // Skills
      if (app.skills) {
        const skills = Array.isArray(app.skills)
          ? app.skills
          : app.skills.split(",");

        skills.forEach((skill) => {
          const s = skill.trim();

          if (!s) return;

          skillsCount[s] = (skillsCount[s] || 0) + 1;
        });
      }

      // Category
      if (app.category) {
        categoryCount[app.category] =
          (categoryCount[app.category] || 0) + 1;
      }

      // Gender
      if (app.gender) {
        genderCount[app.gender] =
          (genderCount[app.gender] || 0) + 1;
      }

      // Location
      if (app.location) {
        locationCount[app.location] =
          (locationCount[app.location] || 0) + 1;
      }
    });

    return {
      topSkills: Object.entries(skillsCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8),

      categoryData: Object.entries(categoryCount).map(
        ([name, value]) => ({
          name,
          value,
        })
      ),

      genderData: Object.entries(genderCount).map(
        ([name, value]) => ({
          name,
          value,
        })
      ),

      locationData: Object.entries(locationCount).map(
        ([name, value]) => ({
          name,
          value,
        })
      ),
    };
  }, [applications]);

  const keyMetrics = useMemo(() => {
    const totalApplicants = applications.length;

    const submitted = applications.filter(
      (app) => app.status === "Submitted"
    ).length;

    const draft = applications.filter(
      (app) => app.status === "Draft"
    ).length;

    const submissionRate =
      totalApplicants === 0
        ? 0
        : Math.round((submitted / totalApplicants) * 100);

    return {
      totalApplicants,
      submitted,
      draft,
      submissionRate,
    };
  }, [applications]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Analytics...
      </div>
    );
  }
    return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Analytics Dashboard
          </h1>

          <p className="text-muted-foreground">
            Live analytics fetched from MongoDB applications.
          </p>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Total Applications */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Applications
              </CardTitle>

              <Users className="h-4 w-4 text-primary" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold">
                {keyMetrics.totalApplicants}
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                Total records in database
              </p>
            </CardContent>
          </Card>

          {/* Submitted */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Submitted
              </CardTitle>

              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {keyMetrics.submitted}
              </div>

              <Progress
                value={keyMetrics.submissionRate}
                className="mt-3"
              />

              <p className="text-xs text-muted-foreground mt-2">
                {keyMetrics.submissionRate}% Submitted
              </p>
            </CardContent>
          </Card>

          {/* Draft */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Draft Applications
              </CardTitle>

              <Award className="h-4 w-4 text-yellow-500" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">
                {keyMetrics.draft}
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                Saved but not submitted
              </p>
            </CardContent>
          </Card>

          {/* Success Rate */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>

              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {keyMetrics.submissionRate}%
              </div>

              <Progress
                value={keyMetrics.submissionRate}
                className="mt-3"
              />

              <p className="text-xs text-muted-foreground mt-2">
                Submission success
              </p>
            </CardContent>
          </Card>

        </div>
                {/* Skills & Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Top Skills */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Top Skills
              </CardTitle>

              <CardDescription>
                Most common skills among applicants
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">

                {analyticsData.topSkills.length === 0 ? (
                  <p className="text-muted-foreground">
                    No skills found.
                  </p>
                ) : (

                  analyticsData.topSkills.map(([skill, count]) => (

                    <div
                      key={skill}
                      className="flex items-center justify-between"
                    >

                      <Badge variant="secondary">
                        {skill}
                      </Badge>

                      <div className="flex items-center gap-3">

                        <div className="w-28 bg-muted rounded-full h-2">

                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{
                              width: `${
                                (count /
                                  keyMetrics.totalApplicants) *
                                100
                              }%`,
                            }}
                          />

                        </div>

                        <span className="font-semibold w-8 text-right">
                          {count}
                        </span>

                      </div>

                    </div>

                  ))

                )}

              </div>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Category Distribution
              </CardTitle>

              <CardDescription>
                Reservation category analysis
              </CardDescription>
            </CardHeader>

            <CardContent>

              <div className="space-y-4">

                {analyticsData.categoryData.length === 0 ? (

                  <p className="text-muted-foreground">
                    No category data found.
                  </p>

                ) : (

                  analyticsData.categoryData.map(
                    ({ name, value }) => (

                      <div
                        key={name}
                        className="flex items-center justify-between"
                      >

                        <span className="font-medium">
                          {name}
                        </span>

                        <div className="flex items-center gap-3">

                          <div className="w-24 bg-muted rounded-full h-2">

                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{
                                width: `${
                                  (value /
                                    keyMetrics.totalApplicants) *
                                  100
                                }%`,
                              }}
                            />

                          </div>

                          <Badge>
                            {value}
                          </Badge>

                        </div>

                      </div>

                    )
                  )

                )}

              </div>

            </CardContent>
          </Card>

        </div>
                {/* Gender & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Gender Distribution */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Gender Distribution
              </CardTitle>

              <CardDescription>
                Applicants by gender
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">

                {analyticsData.genderData.length === 0 ? (
                  <p className="text-muted-foreground">
                    No gender data found.
                  </p>
                ) : (

                  analyticsData.genderData.map(({ name, value }) => (

                    <div
                      key={name}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">
                        {name}
                      </span>

                      <div className="flex items-center gap-3">

                        <div className="w-24 bg-muted rounded-full h-2">

                          <div
                            className="bg-secondary h-2 rounded-full"
                            style={{
                              width: `${
                                (value / keyMetrics.totalApplicants) * 100
                              }%`,
                            }}
                          />

                        </div>

                        <Badge>
                          {value}
                        </Badge>

                      </div>
                    </div>

                  ))

                )}

              </div>
            </CardContent>
          </Card>

          {/* Location Distribution */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location Distribution
              </CardTitle>

              <CardDescription>
                Applicants by location
              </CardDescription>
            </CardHeader>

            <CardContent>

              <div className="space-y-4">

                {analyticsData.locationData.length === 0 ? (
                  <p className="text-muted-foreground">
                    No location data found.
                  </p>
                ) : (

                  analyticsData.locationData.map(({ name, value }) => (

                    <div
                      key={name}
                      className="flex items-center justify-between"
                    >

                      <span className="font-medium">
                        {name}
                      </span>

                      <div className="flex items-center gap-3">

                        <div className="w-24 bg-muted rounded-full h-2">

                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{
                              width: `${
                                (value / keyMetrics.totalApplicants) * 100
                              }%`,
                            }}
                          />

                        </div>

                        <Badge>
                          {value}
                        </Badge>

                      </div>

                    </div>

                  ))

                )}

              </div>

            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
};

export default SimpleAnalytics;