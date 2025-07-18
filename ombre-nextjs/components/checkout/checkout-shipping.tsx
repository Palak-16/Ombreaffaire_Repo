"use client"

import React, { useState, useEffect, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CardFooter } from "@/components/ui/card"

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
  addressId: string // optional, if using saved address
}

type Address = {
  id: string
  label: string
  recipient_name: string
  street: string
  address2: string | null
  city: string
  state: string
  postal_code: string
  country: string
  phone: string
  is_default: boolean
}

type Props = {
  shippingInfo: ShippingInfo
  onSubmit: (data: ShippingInfo) => void
}

export default function CheckoutShipping({ shippingInfo, onSubmit }: Props) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""
  const token = typeof window !== "undefined" && localStorage.getItem("token")

  // we'll keep formData so we know what address got selected
  const [formData, setFormData] = useState<ShippingInfo>({...shippingInfo, addressId: ""})

  // SAVED ADDRESSES
  const [addresses, setAddresses] = useState<Address[]>([])
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingAddr, setEditingAddr] = useState<Address | null>(null)
  const [addrForm, setAddrForm] = useState<Partial<Address>>({})
  const [savingAddr, setSavingAddr] = useState(false)
  const [selectedAddressId, setSelectedAddressId] = useState<string>("")

  useEffect(() => {
    loadAddresses()
  }, [])

  async function loadAddresses() {
    setLoading(true)
    try {
      const res = await fetch(`${apiUrl}/api/account/addresses`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data: Address[] = await res.json()
      setAddresses(data)

      // auto-select the default if none chosen yet
      if (!selectedAddressId) {
        const def = data.find((a) => a.is_default)
        if (def) selectAddress(def.id, def)
      }
    } finally {
      setLoading(false)
    }
  }

  function selectAddress(id: string, a?: Address) {
    setSelectedAddressId(id)
    // if they click on it, fill out formData so onSubmit has the right shape
    const addr = a || addresses.find((x) => x.id === id)!
    setFormData((f) => ({
      ...f,
      firstName: addr.recipient_name.split(" ")[0] || "",
      lastName: addr.recipient_name.split(" ")[1] || "",
      email: f.email,      // keep whatever email they typed in—or blank
      phone: addr.phone,
      address: addr.street,
      city: addr.city,
      state: addr.state,
      zip: addr.postal_code,
      country: addr.country,
      saveAddress: f.saveAddress,
      shippingMethod: f.shippingMethod,
      addressId: addr.id, // set the addressId to the selected address
    }))
  }

  function openAdd() {
    setEditingAddr(null)
    setAddrForm({})
    setDialogOpen(true)
  }
  function openEdit(a: Address) {
    setEditingAddr(a)
    setAddrForm(a)
    setDialogOpen(true)
  }

  async function submitAddress(e: FormEvent) {
    e.preventDefault()
    setSavingAddr(true)
    const url = editingAddr
      ? `${apiUrl}/api/account/addresses/${editingAddr.id}`
      : `${apiUrl}/api/account/addresses`
    const method = editingAddr ? "PATCH" : "POST"
    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addrForm),
    })
    setDialogOpen(false)
    await loadAddresses()
    setSavingAddr(false)
  }

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Saved Addresses</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((a) => (
                <div
                  key={a.id}
                  className={`p-4 rounded cursor-pointer transition ${
                    selectedAddressId === a.id
                      ? "border-2 border-primary"
                      : "border hover:border-primary"
                  }`}
                  onClick={() => selectAddress(a.id, a)}
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">{a.label}</h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        openEdit(a)
                      }}
                    >
                      ✏️
                    </Button>
                  </div>
                  <p className="text-sm">
                    {a.recipient_name}
                    <br />
                    {a.street}
                    {a.address2 && `, ${a.address2}`}
                    <br />
                    {a.city}, {a.state} {a.postal_code}
                    <br />
                    {a.country}
                    <br />
                    📞 {a.phone}
                  </p>
                </div>
              ))}

              {/* — Add New Address */}
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-full flex items-center justify-center"
                    onClick={openAdd}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add new address
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>
                      {editingAddr ? "Edit Address" : "Add Address"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingAddr
                        ? "Update your shipping address."
                        : "Enter a new shipping address."}
                    </DialogDescription>
                  </DialogHeader>

                  {/* reuse your address-form from AddressesTab: */}
                  <form
                    id="address-form"
                    onSubmit={submitAddress}
                    className="space-y-4 max-h-[60vh] overflow-y-auto"
                  >
                    {/* Label */}
                    <div>
                      <Label>Label</Label>
                      <Input
                        required
                        value={addrForm.label || ""}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            label: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {/* Recipient */}
                    <div>
                      <Label>Recipient Name</Label>
                      <Input
                        required
                        value={addrForm.recipient_name || ""}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            recipient_name: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {/* Street */}
                    <div>
                      <Label>Street</Label>
                      <Input
                        required
                        value={addrForm.street || ""}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            street: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {/* Address2 */}
                    <div>
                      <Label>Address 2</Label>
                      <Input
                        value={addrForm.address2 || ""}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            address2: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {/* City / State / ZIP */}
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label>City</Label>
                        <Input
                          required
                          value={addrForm.city || ""}
                          onChange={(e) =>
                            setAddrForm((f) => ({
                              ...f,
                              city: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label>State</Label>
                        <Input
                          required
                          value={addrForm.state || ""}
                          onChange={(e) =>
                            setAddrForm((f) => ({
                              ...f,
                              state: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label>ZIP Code</Label>
                        <Input
                          required
                          value={addrForm.postal_code || ""}
                          onChange={(e) =>
                            setAddrForm((f) => ({
                              ...f,
                              postal_code: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    {/* Country */}
                    <div>
                      <Label>Country</Label>
                      <Input
                        required
                        value={addrForm.country || ""}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            country: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <Label>Phone</Label>
                      <Input
                        required
                        type="tel"
                        value={addrForm.phone || ""}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            phone: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {/* Default */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={!!addrForm.is_default}
                        onCheckedChange={(c) =>
                          setAddrForm((f) => ({
                            ...f,
                            is_default: c === true,
                          }))
                        }
                      />
                      <Label>Default</Label>
                    </div>
                  </form>

                  <CardFooter className="mt-4 flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      form="address-form"
                      disabled={savingAddr}
                    >
                      {editingAddr ? "Save" : "Add"}
                    </Button>
                  </CardFooter>
                </DialogContent>
              </Dialog>
            </div>
         
        )}
      </CardContent>
      </Card>

      {/* ─── Continue to Payment ─────────────────────────── */}
      <Button
        className="w-full"
        disabled={!selectedAddressId}
        onClick={() => onSubmit(formData)}
      >
        Continue to Payment
      </Button>
    </>
  )
}
