
import React from 'react';
import Layout from '../../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Search } from 'lucide-react';

const CandidateEnrollment = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Candidate Enrollment</h1>
          <p className="text-gray-600 mt-2">Enroll new candidates to your programs</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              Enroll New Candidate
            </CardTitle>
            <CardDescription>Add a new candidate to your training program</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Candidate Name</Label>
                <Input id="name" placeholder="Enter candidate's name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Training Program</Label>
                <Input id="program" placeholder="Select program type" />
              </div>
            </div>
            <Button className="mt-4">
              <Users className="h-4 w-4 mr-2" />
              Enroll Candidate
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Enrolled Candidates</CardTitle>
            <CardDescription>Candidates currently enrolled in your programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search candidates..." className="pl-10" />
              </div>
            </div>
            <div className="text-center py-8 text-gray-500">
              No candidates enrolled yet. Start by enrolling a new candidate above.
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CandidateEnrollment;
