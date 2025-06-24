
import React from 'react';
import Layout from '../../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, TrendingUp, Plus } from 'lucide-react';

const HealthProgress = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Health & Progress Tracking</h1>
          <p className="text-gray-600 mt-2">Monitor candidate health metrics and progress</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-green-500" />
              Add Health Record
            </CardTitle>
            <CardDescription>Record new health measurements for candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select candidate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="candidate1">John Doe</SelectItem>
                  <SelectItem value="candidate2">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Metric type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight">Weight</SelectItem>
                  <SelectItem value="bmi">BMI</SelectItem>
                  <SelectItem value="body-fat">Body Fat %</SelectItem>
                  <SelectItem value="muscle-mass">Muscle Mass</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Input placeholder="Value" />
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Progress Overview
            </CardTitle>
            <CardDescription>View health progress for your candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search candidates..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Metrics</SelectItem>
                  <SelectItem value="weight">Weight</SelectItem>
                  <SelectItem value="bmi">BMI</SelectItem>
                  <SelectItem value="body-fat">Body Fat %</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-center py-8 text-gray-500">
              No health records found. Start by adding health measurements for your candidates.
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default HealthProgress;
