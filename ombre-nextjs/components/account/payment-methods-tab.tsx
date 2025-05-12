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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Mock payment methods data
const paymentMethods = [
  {
    id: "card1",
    type: "Visa",
    default: true,
    cardNumber: "•••• •••• •••• 3456",
    expiryDate: "05/25",
    cardholderName: "Jane Doe",
  },
  {
    id: "card2",
    type: "Mastercard",
    default: false,
    cardNumber: "•••• •••• •••• 8765",
    expiryDate: "09/24",
    cardholderName: "Jane Doe",
  },
]

export default function PaymentMethodsTab() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState<(typeof paymentMethods)[0] | null>(null)

  const openAddDialog = () => {
    setCurrentPaymentMethod(null)
    setIsDialogOpen(true)
  }

  const openEditDialog = (paymentMethod: (typeof paymentMethods)[0]) => {
    setCurrentPaymentMethod(paymentMethod)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Your Payment Methods</h2>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Add new card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paymentMethods.map((paymentMethod) => (
          <Card key={paymentMethod.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-base">{paymentMethod.type}</CardTitle>
                  {paymentMethod.default && <CardDescription>Default Payment Method</CardDescription>}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => openEditDialog(paymentMethod)}>
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
                <div className="flex items-center space-x-4">
                  <div
                    className={`h-10 w-16 rounded-md flex items-center justify-center text-white font-bold ${
                      paymentMethod.type === "Visa"
                        ? "bg-gradient-to-r from-blue-600 to-blue-800"
                        : "bg-gradient-to-r from-red-600 to-orange-600"
                    }`}
                  >
                    {paymentMethod.type.toUpperCase()}
                  </div>
                  <p>{paymentMethod.cardNumber}</p>
                </div>
                <p className="mt-2">Expires: {paymentMethod.expiryDate}</p>
                <p>Cardholder: {paymentMethod.cardholderName}</p>
              </div>
            </CardContent>
            <CardFooter>
              {!paymentMethod.default && (
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
            <DialogTitle>{currentPaymentMethod ? "Edit Payment Method" : "Add New Payment Method"}</DialogTitle>
            <DialogDescription>
              {currentPaymentMethod
                ? "Update your payment method information."
                : "Add a new payment method to your account."}
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardType">Card Type</Label>
              <RadioGroup defaultValue={currentPaymentMethod?.type || "Visa"} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Visa" id="visa" />
                  <Label htmlFor="visa" className="flex items-center space-x-2">
                    <div className="h-8 w-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <span>Visa</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Mastercard" id="mastercard" />
                  <Label htmlFor="mastercard" className="flex items-center space-x-2">
                    <div className="h-8 w-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      MC
                    </div>
                    <span>Mastercard</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                defaultValue={currentPaymentMethod?.cardNumber.includes("•") ? "" : currentPaymentMethod?.cardNumber}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-1">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" placeholder="MM/YY" defaultValue={currentPaymentMethod?.expiryDate} required />
              </div>
              <div className="space-y-2 md:col-span-1">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
              <div className="space-y-2 md:col-span-1">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" placeholder="10001" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name</Label>
              <Input id="cardholderName" defaultValue={currentPaymentMethod?.cardholderName} required />
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Input
                id="defaultCard"
                type="checkbox"
                className="h-4 w-4"
                defaultChecked={currentPaymentMethod?.default}
              />
              <Label htmlFor="defaultCard">Make this my default payment method</Label>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{currentPaymentMethod ? "Save changes" : "Add payment method"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
