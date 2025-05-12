"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Pencil, Plus, Trash2 } from "lucide-react"

// Mock address data
const addresses = [
  {
    id: "addr1",
    type: "Home",
    default: true,
    firstName: "Jane",
    lastName: "Doe",
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
    phone: "(123) 456-7890",
  },
  {
    id: "addr2",
    type: "Work",
    default: false,
    firstName: "Jane",
    lastName: "Doe",
    address1: "456 Market Street",
    address2: "",
    city: "New York",
    state: "NY",
    postalCode: "10002",
    country: "United States",
    phone: "(123) 456-7890",
  },
]

export default function AddressesTab() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentAddress, setCurrentAddress] = useState<(typeof addresses)[0] | null>(null)

  const openAddDialog = () => {
    setCurrentAddress(null)
    setIsDialogOpen(true)
  }

  const openEditDialog = (address: (typeof addresses)[0]) => {
    setCurrentAddress(address)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Your Addresses</h2>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Add new address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <Card key={address.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-base">{address.type}</CardTitle>
                  {address.default && <CardDescription>Default Address</CardDescription>}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => openEditDialog(address)}>
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p>
                  {address.firstName} {address.lastName}
                </p>
                <p>{address.address1}</p>
                {address.address2 && <p>{address.address2}</p>}
                <p>
                  {address.city}, {address.state} {address.postalCode}
                </p>
                <p>{address.country}</p>
                <p>{address.phone}</p>
              </div>
            </CardContent>
            <CardFooter>
              {!address.default && (
                <Button variant="outline" size="sm" className="w-full">
                  Set as default
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{currentAddress ? "Edit Address" : "Add New Address"}</DialogTitle>
            <DialogDescription>
              {currentAddress
                ? "Update your shipping address information."
                : "Add a new shipping address to your account."}
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="addressType">Address Type</Label>
                <Input id="addressType" defaultValue={currentAddress?.type || "Home"} />
              </div>
              <div className="space-y-2 flex items-end">
                <Label htmlFor="default" className="flex items-center space-x-2">
                  <Input
                    id="default"
                    type="checkbox"
                    className="h-4 w-4"
                    defaultChecked={currentAddress?.default || false}
                  />
                  <span>Make this my default address</span>
                </Label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue={currentAddress?.firstName || ""} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue={currentAddress?.lastName || ""} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address1">Address Line 1</Label>
              <Input id="address1" defaultValue={currentAddress?.address1 || ""} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address2">Address Line 2 (Optional)</Label>
              <Input id="address2" defaultValue={currentAddress?.address2 || ""} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue={currentAddress?.city || ""} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" defaultValue={currentAddress?.state || ""} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">ZIP/Postal Code</Label>
                <Input id="postalCode" defaultValue={currentAddress?.postalCode || ""} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" defaultValue={currentAddress?.country || "United States"} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue={currentAddress?.phone || ""} required />
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{currentAddress ? "Save changes" : "Add address"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
