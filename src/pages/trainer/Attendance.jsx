import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Calendar, Search, CheckCircle } from 'lucide-react';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [session, setSession] = useState('');
  const [date, setDate] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleMarkAttendance = () => {
    if (!session || !date) {
      alert("Please select session and date");
      return;
    }

    // Mock candidate list (this should come from DB in real app)
    const mockCandidates = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];

    const newRecords = mockCandidates.map(candidate => ({
      id: `${candidate.id}-${date}-${session}`,
      candidate: candidate.name,
      date,
      session,
      status: 'present'
    }));

    setAttendanceRecords(prev => [...prev, ...newRecords]);
    setSession('');
    setDate('');
  };

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.candidate.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
              <Select onValueChange={setSession} value={session}>
                <SelectTrigger>
                  <SelectValue placeholder="Select session" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning Session (9:00 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon Session (2:00 PM)</SelectItem>
                  <SelectItem value="evening">Evening Session (6:00 PM)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Button onClick={handleMarkAttendance}>
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
                <Input
                  placeholder="Search by candidate name..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Select onValueChange={setStatusFilter} value={statusFilter}>
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

            {filteredRecords.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No attendance records found. Start by marking attendance for your sessions.
              </div>
            ) : (
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Candidate</th>
                    <th className="text-left p-2">Session</th>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{record.candidate}</td>
                      <td className="p-2 capitalize">{record.session}</td>
                      <td className="p-2">{record.date}</td>
                      <td className="p-2 capitalize text-green-600">{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Attendance;
