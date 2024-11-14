import React, { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle } from "lucide-react";

interface FormData {
  email: string;
  newsletter: boolean;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

const ShippingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    newsletter: false,
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      country: value,
    }));
  };

  const handleNewsletterChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      newsletter: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="p-6">
            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Contact</h2>
                <Button variant="link" className="text-gray-600">
                  Log in
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email or mobile phone number"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={handleNewsletterChange}
                  />
                  <Label htmlFor="newsletter">
                    Email me with news and offers
                  </Label>
                </div>
              </div>
            </div>

            {/* Delivery Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Delivery</h2>

              <div className="space-y-4">
                <Select
                  value={formData.country}
                  onValueChange={handleCountryChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Country/Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Mexico">Mexico</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />

                <Input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <Select
                    value={formData.state}
                    onValueChange={(value) =>
                      handleInputChange({
                        target: { name: "state", value },
                      } as ChangeEvent<HTMLInputElement>)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="relative">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Shipping Method Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Shipping method</h2>
              <div className="bg-yellow-50 p-4 rounded-md">
                <p className="text-gray-600">
                  Enter your shipping address to view available shipping
                  methods.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ShippingForm;
