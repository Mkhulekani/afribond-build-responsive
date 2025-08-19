import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your inquiry!",
      description: "We will contact you within 24 hours to discuss your project.",
    });
    
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">Ready to start your project? Contact us today for a consultation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm sm:text-base">123 Site Street, Pretoria, Gauteng, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+27 81 503 1710</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-sm sm:text-base">info@afribondbuilders.co.za</p>
                    <p className="text-gray-600 text-sm sm:text-base">azania@afribondbuilders.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-soft">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Monday - Friday:</span>
                  <span className="text-gray-600">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Saturday:</span>
                  <span className="text-gray-600">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Sunday:</span>
                  <span className="text-gray-600">Emergency calls only</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-primary text-white p-4 rounded-xl text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold mb-1">Call Now</p>
                <p className="text-sm opacity-90">+27 81 503 1710</p>
              </div>
              <div className="bg-gradient-secondary text-white p-4 rounded-xl text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold mb-1">Email Us</p>
                <p className="text-sm opacity-90">Quick Response</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-medium">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Project Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Contact Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full"
                  placeholder="+27 xx xxx xxxx"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="projectType" className="text-sm font-medium text-gray-700 mb-2 block">
                  Type of Project *
                </Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Building</SelectItem>
                    <SelectItem value="commercial">Commercial Building</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                    <SelectItem value="tiling">Tiling & Paving</SelectItem>
                    <SelectItem value="painting">Painting & Roofing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                  Project Description
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full"
                  placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                />
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Book Consultation
              </Button>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Construction Services</h3>
          <p className="text-red-700 mb-4">For urgent construction emergencies outside business hours</p>
          <Button 
            variant="destructive" 
            size="lg"
            className="bg-red-600 hover:bg-red-700"
          >
            Emergency Hotline: +27 81 503 1710
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;