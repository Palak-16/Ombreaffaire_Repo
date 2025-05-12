"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Wallet } from "lucide-react"

type PaymentInfo = {
  cardNumber: string
  cardName: string
  expiry: string
  cvc: string
  saveCard: boolean
  billingAddressSame: boolean
}

type CheckoutPaymentProps = {
  paymentInfo: PaymentInfo
  onSubmit: (data: PaymentInfo) => void
  onBack: () => void
}

export default function CheckoutPayment({ paymentInfo, onSubmit, onBack }: CheckoutPaymentProps) {
  const [formData, setFormData] = useState<PaymentInfo>(paymentInfo)
  const [errors, setErrors] = useState<Partial<Record<keyof PaymentInfo, string>>>({})
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is edited
    if (errors[name as keyof PaymentInfo]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const validateForm = () => {
    const newErrors: Partial<Record<keyof PaymentInfo, string>> = {}

    if (paymentMethod === "card") {
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required"
      if (!formData.cardName) newErrors.cardName = "Cardholder name is required"
      if (!formData.expiry) newErrors.expiry = "Expiry date is required"
      if (!formData.cvc) newErrors.cvc = "CVC is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  // Mock saved cards
  const savedCards = [
    {
      id: "card1",
      type: "Visa",
      last4: "4242",
      expiry: "05/25",
    },
    {
      id: "card2",
      type: "Mastercard",
      last4: "8765",
      expiry: "09/24",
    },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Select your preferred payment method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={paymentMethod}
            onValueChange={(value: "card" | "paypal") => setPaymentMethod(value)}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center cursor-pointer">
                <CreditCard className="h-5 w-5 mr-2" />
                <span>Credit / Debit Card</span>
              </Label>
            </div>

            <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                <Wallet className="h-5 w-5 mr-2" />
                <span>PayPal</span>
              </Label>
            </div>
          </RadioGroup>

          {paymentMethod === "card" && (
            <div className="space-y-6 pt-4">
              {/* Saved Cards */}
              {savedCards.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Saved Cards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedCards.map((card) => (
                      <div
                        key={card.id}
                        className="border rounded-md p-4 cursor-pointer hover:border-primary transition-colors"
                        onClick={() => {
                          // In a real app, this would select the saved card
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`h-8 w-12 rounded-md flex items-center justify-center text-white text-xs font-bold ${
                                card.type === "Visa"
                                  ? "bg-gradient-to-r from-blue-600 to-blue-800"
                                  : "bg-gradient-to-r from-red-600 to-orange-600"
                              }`}
                            >
                              {card.type.toUpperCase()}
                            </div>
                            <span className="ml-2">•••• {card.last4}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">Expires {card.expiry}</span>
                        </div>
                      </div>
                    ))}
                    <div className="border border-dashed rounded-md p-4 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer">
                      <span>+ Add new card</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={errors.cardNumber ? "border-red-500" : ""}
                />
                {errors.cardNumber && <p className="text-xs text-red-500">{errors.cardNumber}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={handleChange}
                  className={errors.cardName ? "border-red-500" : ""}
                />
                {errors.cardName && <p className="text-xs text-red-500">{errors.cardName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                    className={errors.expiry ? "border-red-500" : ""}
                  />
                  {errors.expiry && <p className="text-xs text-red-500">{errors.expiry}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    placeholder="123"
                    value={formData.cvc}
                    onChange={handleChange}
                    className={errors.cvc ? "border-red-500" : ""}
                  />
                  {errors.cvc && <p className="text-xs text-red-500">{errors.cvc}</p>}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="saveCard"
                  name="saveCard"
                  checked={formData.saveCard}
                  onCheckedChange={(checked) => setFormData({ ...formData, saveCard: checked === true })}
                />
                <Label htmlFor="saveCard" className="text-sm">
                  Save this card for future purchases
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="billingAddressSame"
                  name="billingAddressSame"
                  checked={formData.billingAddressSame}
                  onCheckedChange={(checked) => setFormData({ ...formData, billingAddressSame: checked === true })}
                />
                <Label htmlFor="billingAddressSame" className="text-sm">
                  Billing address is same as shipping address
                </Label>
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="pt-4 text-center">
              <p className="text-muted-foreground mb-4">You will be redirected to PayPal to complete your payment.</p>
              <div className="bg-blue-500 text-white py-3 px-4 rounded-md inline-flex items-center justify-center font-bold">
                PayPal
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back to Shipping
        </Button>
        <Button type="submit">Continue to Review</Button>
      </div>
    </form>
  )
}
