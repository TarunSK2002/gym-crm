import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Search } from 'lucide-react';

const CandidateEnrollment = () => {
  const [candidates, setCandidates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: ''
  });
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleEnroll = () => {
    const { name, email, phone, program } = formData;

    if (!name || !email || !phone || !program) {
      alert("All fields are required!");
      return;
    }

    const newCandidate = {
      id: Date.now(),
      ...formData
    };

    setCandidates(prev => [...prev, newCandidate]);
    setFormData({ name: '', email: '', phone: '', program: '' });
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(search.toLowerCase())
  );

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
                <Input id="name" value={formData.name} onChange={handleInputChange} placeholder="Enter candidate's name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Training Program</Label>
                <Input id="program" value={formData.program} onChange={handleInputChange} placeholder="Select program type" />
              </div>
            </div>
            <Button className="mt-4" onClick={handleEnroll}>
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
                <Input
                  placeholder="Search candidates..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {filteredCandidates.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No candidates enrolled yet. Start by enrolling a new candidate above.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCandidates.map(candidate => (
                  <Card key={candidate.id} className="p-4 shadow-sm border">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{candidate.name}</p>
                        <p className="text-sm text-gray-500">{candidate.email}</p>
                        <p className="text-sm text-gray-500">{candidate.phone}</p>
                        <p className="text-sm text-gray-600">Program: {candidate.program}</p>
                      </div>
                      <span className="text-green-600 font-medium">Enrolled</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CandidateEnrollment;
