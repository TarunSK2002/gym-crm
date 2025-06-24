import React from 'react';
import Layout from '../../components/Layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Search } from 'lucide-react';

const CandidateEnrollment = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Candidate Enrollment</h1>
          <p className="text-gray-600 mt-2">Manage candidate registrations and assignments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              Add New Candidate
            </CardTitle>
            <CardDescription>Register a new candidate in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter candidate's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trainer">Assign Trainer</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trainer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trainer1">John Smith - Fitness</SelectItem>
                    <SelectItem value="trainer2">Sarah Johnson - Yoga</SelectItem>
                  </SelectContent>
                </Select>
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
            <CardTitle>Current Candidates</CardTitle>
            <CardDescription>List of all registered candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search candidates..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by trainer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Trainers</SelectItem>
                  <SelectItem value="trainer1">John Smith</SelectItem>
                  <SelectItem value="trainer2">Sarah Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-center py-8 text-gray-500">
              No candidates enrolled yet. Start by adding a new candidate above.
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CandidateEnrollment;
