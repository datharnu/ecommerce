import React, { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle } from "lucide-react";

// Define a type for the countries and their states
type Country = "United States" | "Canada" | "Australia";

// Define states for each country
const countries: Record<Country, { value: string; label: string }[]> = {
  "United States": [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ],
  Canada: [
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "MB", label: "Manitoba" },
    { value: "NB", label: "New Brunswick" },
    { value: "NL", label: "Newfoundland and Labrador" },
    { value: "NS", label: "Nova Scotia" },
    { value: "ON", label: "Ontario" },
    { value: "PE", label: "Prince Edward Island" },
    { value: "QC", label: "Quebec" },
    { value: "SK", label: "Saskatchewan" },
  ],
  Australia: [
    { value: "NSW", label: "New South Wales" },
    { value: "QLD", label: "Queensland" },
    { value: "SA", label: "South Australia" },
    { value: "TAS", label: "Tasmania" },
    { value: "VIC", label: "Victoria" },
    { value: "WA", label: "Western Australia" },
  ],
};

const ShippingForm = () => {
  // Change the type of `country` to be a union of valid country strings
  const [formData, setFormData] = useState({
    email: "",
    newsletter: false,
    country: "United States" as Country, // Type is now Country, not string
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const [states, setStates] = useState(countries[formData.country]);

  useEffect(() => {
    setStates(countries[formData.country]);
  }, [formData.country]);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (value: Country) => {
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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-4 ">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="p-6">
            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="lg:text-2xl text-lg font-bold">Contact</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email or mobile phone number"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300"
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
              <h2 className="lg:text-2xl text-lg font-bold mb-6">Delivery</h2>

              <div className="space-y-4">
                <Select
                  value={formData.country}
                  onValueChange={handleCountryChange}
                >
                  <SelectTrigger className="w-full bg-white border-gray-300 ">
                    <SelectValue placeholder="Country/Region" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                </div>

                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300"
                  required
                />

                <Input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                    required
                  />
                  <Select
                    value={formData.state}
                    onValueChange={(value) =>
                      handleInputChange({ target: { name: "state", value } })
                    }
                  >
                    <SelectTrigger className="bg-white border-gray-300">
                      <SelectValue placeholder="State/Province" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      {states.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                    required
                  />
                </div>

                <div className="relative">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                  <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Shipping Method Section */}
            <div className="mt-8 ">
              {/* <h2 className="lg:text-2xl text-lg font-bold mb-6">
                Shipping method
              </h2> */}
              <div className="bg-yellow-50 p-2 rounded-md border-2 ">
                <p className="text-gray-600 text-xs lg:text-sm">
                  Enter your shipping address to view available shipping
                  methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
