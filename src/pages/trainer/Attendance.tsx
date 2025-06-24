
import React from 'react';
import Layout from '../../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, CheckCircle } from 'lucide-react';

const Attendance = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Tracking</h1>
          <p className="text-gray-600 mt-2">Track attendance for your training sessions</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Mark Attendance
            </CardTitle>
            <CardDescription>Mark attendance for today's sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select session" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning Session (9:00 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon Session (2:00 PM)</SelectItem>
                  <SelectItem value="evening">Evening Session (6:00 PM)</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" />
              <Button>
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark Attendance
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Records</CardTitle>
            <CardDescription>View attendance history for your candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search by candidate name..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-center py-8 text-gray-500">
              No attendance records found. Start by marking attendance for your sessions.
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Attendance;
