
import React from 'react';
import Layout from '../../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';

const Report = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">Generate reports and view analytics for your training sessions</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Generate Report
            </CardTitle>
            <CardDescription>Create custom reports for your training activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="attendance">Attendance Report</SelectItem>
                  <SelectItem value="progress">Progress Report</SelectItem>
                  <SelectItem value="payment">Payment Report</SelectItem>
                  <SelectItem value="performance">Performance Report</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" placeholder="Start date" />
              <Input type="date" placeholder="End date" />
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-500" />
                Session Analytics
              </CardTitle>
              <CardDescription>Overview of your training sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                No session data available. Analytics will appear here once you start conducting sessions.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                Monthly Summary
              </CardTitle>
              <CardDescription>Your monthly performance summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Sessions</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Candidates</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Earnings</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Attendance Rate</span>
                  <span className="font-medium">0%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
