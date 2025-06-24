import React from 'react';
import Layout from '../../components/Layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  FileText,
  Download,
  BarChart3,
  Calendar
} from 'lucide-react';

const Report = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">
            Generate and view comprehensive reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Revenue Report */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <BarChart3 className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Revenue Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Monthly and yearly revenue analytics
              </p>
              <Button className="w-full mt-3" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </CardContent>
          </Card>

          {/* Attendance Report */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Attendance Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Detailed attendance statistics
              </p>
              <Button className="w-full mt-3" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </CardContent>
          </Card>

          {/* Progress Report */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <FileText className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Progress Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Candidate progress tracking
              </p>
              <Button className="w-full mt-3" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </CardContent>
          </Card>

          {/* Custom Report */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <BarChart3 className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Custom Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Create custom analytics reports
              </p>
              <Button className="w-full mt-3" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Report Generator */}
        <Card>
          <CardHeader>
            <CardTitle>Report Generator</CardTitle>
            <CardDescription>
              Generate custom reports with specific parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue Report</SelectItem>
                  <SelectItem value="attendance">Attendance Report</SelectItem>
                  <SelectItem value="progress">Progress Report</SelectItem>
                  <SelectItem value="trainer">Trainer Performance</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Report;
