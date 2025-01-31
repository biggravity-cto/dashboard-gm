import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
  Users, Building2, MessageSquare, TrendingUp, Search,
  ArrowUpRight, ArrowDownRight, CircleDollarSign,
  Star, Activity, BedDouble, Heart, MapPin,
  BarChart2, Settings, BookOpen, Share2, PlusCircle,
  MessageCircle, SendHorizontal, ArrowUpCircle,
  Home, Eye, Target, Zap, X
} from 'lucide-react';

const Dashboard = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [showAIChat, setShowAIChat] = useState(false);
  const [showDirectBookingOptimizer, setShowDirectBookingOptimizer] = useState(false);

  const COLORS = ['#4CAF50', '#FF9800', '#2196F3'];

  const directBookingStats = {
    total: 1245,
    percentageIncrease: 28,
    revenueGenerated: 875000,
    conversionRate: 4.2
  };

  const bookingSourceData = [
    { source: 'Direct Website', value: 45 },
    { source: 'OTAs', value: 35 },
    { source: 'Travel Agents', value: 20 }
  ];

  const monthlyBookingData = [
    { month: 'Jan', direct: 280, ota: 420 },
    { month: 'Feb', direct: 300, ota: 400 },
    { month: 'Mar', direct: 350, ota: 380 },
    { month: 'Apr', direct: 380, ota: 360 },
    { month: 'May', direct: 420, ota: 340 },
    { month: 'Jun', direct: 450, ota: 320 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 pb-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Movenpick Resort Cam Ranh</h1>
            <p className="text-gray-600">AI-Powered Insights Dashboard</p>
          </div>
        </div>

        {/* Direct Booking Stats */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Direct Booking Performance</span>
              <Button variant="outline" onClick={() => setShowDirectBookingOptimizer(true)}>
                <Zap className="h-4 w-4 mr-2" />
                Optimize Direct Bookings
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Direct Bookings</span>
                  <span className="text-2xl font-bold">{directBookingStats.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Growth</span>
                  <span className="text-green-600 flex items-center">
                    +{directBookingStats.percentageIncrease}%
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Generated</span>
                  <span className="text-2xl font-bold">${directBookingStats.revenueGenerated.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="text-2xl font-bold">{directBookingStats.conversionRate}%</span>
                </div>
              </div>

              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={bookingSourceData}
                      dataKey="value"
                      nameKey="source"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      fill="#8884d8"
                      label
                    >
                      {bookingSourceData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Alert className="mb-8">
          <AlertTitle className="flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Direct Booking Opportunity
          </AlertTitle>
          <AlertDescription>
            AI analysis suggests adding Korean language support could increase direct bookings by 23%.
            <Button variant="link" className="ml-2 p-0 h-auto">View Details</Button>
          </AlertDescription>
        </Alert>

        {/* Booking Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Direct vs OTA Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyBookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="direct" stroke="#4CAF50" name="Direct Bookings" />
                    <Line type="monotone" dataKey="ota" stroke="#FF9800" name="OTA Bookings" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { channel: 'Direct', revenue: 580000 },
                    { channel: 'Booking.com', revenue: 420000 },
                    { channel: 'Expedia', revenue: 380000 },
                    { channel: 'Agoda', revenue: 320000 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#4CAF50" name="Revenue (USD)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Chat Modal */}
        {showAIChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      AI Concierge
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1">Your 24/7 hotel performance assistant</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowAIChat(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">Hello! I can help you with:</p>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Analyzing booking patterns and trends</li>
                          <li>Optimizing room rates and packages</li>
                          <li>Monitoring competitor pricing</li>
                          <li>Generating performance reports</li>
                          <li>Creating targeted marketing campaigns</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end mb-4">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">Show me today's booking performance.</p>
                      </div>
                    </div>

                    <div className="flex items-start mb-4">
                      <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm font-semibold mb-2">Today's Booking Performance:</p>
                        <div className="space-y-2 text-sm">
                          <p>• Direct Bookings: 12 (↑ 25% vs. last week)</p>
                          <p>• Total Revenue: $4,850 (↑ 15%)</p>
                          <p>• Average Daily Rate: $185 (↑ 5%)</p>
                          <p>• Korean Market Share: 35% of bookings</p>
                          <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                            View detailed analysis
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about your property's performance..."
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button>
                      <SendHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Target className="h-4 w-4 mr-2" />
                      Optimize Rates
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart2 className="h-4 w-4 mr-2" />
                      Market Analysis
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Guest Insights
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Direct Booking Optimizer */}
        {showDirectBookingOptimizer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Direct Booking Optimizer
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1">AI-powered booking optimization tools</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowDirectBookingOptimizer(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Quick Wins
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <ArrowUpCircle className="h-4 w-4 mr-2 text-green-600" />
                          Add Korean language booking engine (+23% potential)
                        </li>
                        <li className="flex items-center text-sm">
                          <ArrowUpCircle className="h-4 w-4 mr-2 text-green-600" />
                          Implement price comparison widget (+15% potential)
                        </li>
                        <li className="flex items-center text-sm">
                          <ArrowUpCircle className="h-4 w-4 mr-2 text-green-600" />
                          Add guest reviews to booking funnel (+10% potential)
                        </li>
                      </ul>
                      <Button className="mt-4 w-full">Implement Selected Changes</Button>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Current Performance</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Booking Engine Conversion</span>
                          <span className="font-semibold">2.8%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cart Abandonment Rate</span>
                          <span className="font-semibold">42%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Mobile Conversion Rate</span>
                          <span className="font-semibold">1.9%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Rate Strategy Optimizer</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Best Performing Rate Plans</p>
                          <ul className="text-sm space-y-2">
                            <li className="flex justify-between">
                              <span>Advance Purchase 30D</span>
                              <span className="font-medium">+45% conversion</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Stay & Dine Package</span>
                              <span className="font-medium">+32% conversion</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Korean Resident Rate</span>
                              <span className="font-medium">+28% conversion</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Recommended New Rate Plans</p>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center">
                              <PlusCircle className="h-4 w-4 mr-2 text-blue-600" />
                              Early Bird 60-Day Special
                            </li>
                            <li className="flex items-center">
                              <PlusCircle className="h-4 w-4 mr-2 text-blue-600" />
                              Korean Family Package
                            </li>
                            <li className="flex items-center">
                              <PlusCircle className="h-4 w-4 mr-2 text-blue-600" />
                              Extended Stay Discount
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 w-full">Create New Rate Plan</Button>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Automated Pricing Rules</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Last-Minute Discounts</span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Length of Stay Promotions</span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Mobile-Only Rates</span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex justify-between items-center relative py-2">
              <Button variant="ghost" className="flex flex-col items-center py-2">
                <Home className="h-6 w-6" />
                <span className="text-xs mt-1">Home</span>
              </Button>

              <Button variant="ghost" className="flex flex-col items-center py-2">
                <BarChart2 className="h-6 w-6" />
                <span className="text-xs mt-1">Analytics</span>
              </Button>

              {/* AI Concierge Button */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0">
                <Button 
                  className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
                  onClick={() => setShowAIChat(true)}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </Button>
              </div>

              <Button variant="ghost" className="flex flex-col items-center py-2">
                <Eye className="h-6 w-6" />
                <span className="text-xs mt-1">Monitor</span>
              </Button>

              <Button variant="ghost" className="flex flex-col items-center py-2">
                <Settings className="h-6 w-6" />
                <span className="text-xs mt-1">Settings</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
