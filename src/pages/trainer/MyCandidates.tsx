
import React from 'react';
import Layout from '../../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Search, Eye, Edit } from 'lucide-react';

const MyCandidates = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Candidates</h1>
          <p className="text-gray-600 mt-2">Manage and track your assigned candidates</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              Candidate Overview
            </CardTitle>
            <CardDescription>Search and filter your candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search candidates..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="fitness">Fitness Training</SelectItem>
                  <SelectItem value="yoga">Yoga Classes</SelectItem>
                  <SelectItem value="cardio">Cardio Programs</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Candidates List</CardTitle>
            <CardDescription>Your assigned candidates and their progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Program</th>
                    <th className="text-left p-2">Start Date</th>
                    <th className="text-left p-2">Progress</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 text-center" colSpan={6}>
                      No candidates assigned yet. Candidates will appear here once enrolled.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MyCandidates;
