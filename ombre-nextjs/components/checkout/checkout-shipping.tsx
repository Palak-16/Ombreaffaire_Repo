"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Clock } from "lucide-react"

type ShippingInfo = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  saveAddress: boolean
  shippingMethod: string
}

type CheckoutShippingProps = {
  shippingInfo: ShippingInfo
  onSubmit: (data: ShippingInfo) => void
}

export default function CheckoutShipping({ shippingInfo, onSubmit }: CheckoutShippingProps) {
  const [formData, setFormData] = useState<ShippingInfo>(shippingInfo)
  const [errors, setErrors] = useState<Partial<Record<keyof ShippingInfo, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is edited
    if (errors[name as keyof ShippingInfo]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name as keyof ShippingInfo]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ShippingInfo, string>> = {}

    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone number is required"
    if (!formData.address) newErrors.address = "Address is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.zip) newErrors.zip = "ZIP code is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  // Mock saved addresses
  const savedAddresses = [
    {
      id: "addr1",
      name: "Home",
      address: "123 Main St, Apt 4B, New York, NY 10001",
    },
    {
      id: "addr2",
      name: "Work",
      address: "456 Market St, New York, NY 10002",
    },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Shipping Information</CardTitle>
          <CardDescription>Enter your shipping details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Saved Addresses */}
          {savedAddresses.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Saved Addresses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedAddresses.map((address) => (
                  <div
                    key={address.id}
                    className="border rounded-md p-4 cursor-pointer hover:border-primary transition-colors"
                    onClick={() => {
                      // In a real app, this would populate the form with the saved address
                    }}
                  >
                    <p className="font-medium">{address.name}</p>
                    <p className="text-sm text-muted-foreground">{address.address}</p>
                  </div>
                ))}
                <div className="border border-dashed rounded-md p-4 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer">
                  <span>+ Add new address</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? "border-red-500" : ""}
              />
              {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={errors.state ? "border-red-500" : ""}
              />
              {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP Code</Label>
              <Input
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className={errors.zip ? "border-red-500" : ""}
              />
              {errors.zip && <p className="text-xs text-red-500">{errors.zip}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="saveAddress"
              name="saveAddress"
              checked={formData.saveAddress}
              onCheckedChange={(checked) => setFormData({ ...formData, saveAddress: checked === true })}
            />
            <Label htmlFor="saveAddress" className="text-sm">
              Save this address for future orders
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Shipping Method</CardTitle>
          <CardDescription>Select your preferred shipping method</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={formData.shippingMethod}
            onValueChange={(value) => handleSelectChange("shippingMethod", value)}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex flex-1 items-center cursor-pointer">
                <div className="ml-2 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 mr-2" />
                      <span className="font-medium">Standard Shipping</span>
                    </div>
                    <span className="font-medium">
                      {formData.shippingMethod === "standard" &&
                      formData.country === "United States" &&
                      (formData.state === "NY" || formData.state === "CA")
                        ? "$10.00"
                        : "Free"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Delivery in 3-5 business days</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express" className="flex flex-1 items-center cursor-pointer">
                <div className="ml-2 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-medium">Express Shipping</span>
                    </div>
                    <span className="font-medium">$15.00</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Delivery in 1-2 business days</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Button type="submit" className="w-full">
          Continue to Payment
        </Button>
      </div>
    </form>
  )
}
