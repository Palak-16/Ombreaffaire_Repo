"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Pencil, Plus, Trash2 } from "lucide-react";

type Address = {
  id: string;
  label: string;
  recipient_name: string;
  street: string;
  address2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone: string;
  is_default: boolean;
};

export default function AddressesTab() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // dialog state
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Address | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  // form fields
  const [form, setForm] = useState<Partial<Address>>({});
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    loadAddresses();
  }, []);

  async function loadAddresses() {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/account/addresses`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
      if (!res.ok) throw new Error(await res.text());
      setAddresses(await res.json());
    } finally {
      setLoading(false);
    }
  }

  function openAdd() {
    setEditing(null);
    setForm({});
    setOpen(true);
  }

  function openEdit(addr: Address) {
    setEditing(addr);
    setForm(addr);
    setOpen(true);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    const url = editing
      ? `${apiUrl}/api/account/addresses/${editing.id}`
      : `${apiUrl}/api/account/addresses`;
    const method = editing ? "PATCH" : "POST";
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setOpen(false);
      await loadAddresses();
    } finally {
      setSaving(false);
    }
  }

 async function remove(id: string) {
    if (!confirm("Delete this address?")) return;
    await fetch(`${apiUrl}/api/account/addresses/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    loadAddresses();
  }

   async function setDefault(id: string) {
    await fetch(`${apiUrl}/api/account/addresses/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ is_default: true }),
    });
    loadAddresses();
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Your Addresses</h2>
        <Button onClick={openAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add new address
        </Button>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((a) => (
            <Card key={a.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle>{a.label}</CardTitle>
                    {a.is_default && <CardDescription>Default</CardDescription>}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => openEdit(a)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => remove(a.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{a.recipient_name}</p>
                <p className="text-sm">{a.street}</p>
                {a.address2 && <p className="text-sm">{a.address2}</p>}
                <p className="text-sm">
                  {a.city}, {a.state} {a.postal_code}
                </p>
                <p className="text-sm">{a.country}</p>
                <p className="text-sm">{a.phone}</p>
              </CardContent>
              <CardFooter>
                {!a.is_default && (
                  <Button variant="outline" onClick={() => setDefault(a.id)}>
                    Set as default
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editing ? "Edit Address" : "Add Address"}
            </DialogTitle>
            <DialogDescription>
              {editing
                ? "Update your shipping address."
                : "Enter a new shipping address."}
            </DialogDescription>
          </DialogHeader>

          <form
            id="address-form"
            onSubmit={submit}
            className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Label</Label>
                <Input
                  required
                  value={form.label || ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, label: e.target.value }))
                  }
                />
              </div>
              <div className="flex items-end">
                <Label className="flex items-center space-x-2">
                  <Input
                    type="checkbox"
                    checked={!!form.is_default}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        is_default: e.target.checked,
                      }))
                    }
                  />
                  <span>Default</span>
                </Label>
              </div>
            </div>

            <div>
              <Label>Recipient Name</Label>
              <Input
                required
                value={form.recipient_name || ""}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    recipient_name: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <Label>Street</Label>
              <Input
                required
                value={form.street || ""}
                onChange={(e) =>
                  setForm((f) => ({ ...f, street: e.target.value }))
                }
              />
            </div>

            <div>
              <Label>Address</Label>
              <Input
                value={form.address2 || ""}
                onChange={(e) =>
                  setForm((f) => ({ ...f, address2: e.target.value }))
                }
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>City</Label>
                <Input
                  required
                  value={form.city || ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, city: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label>State</Label>
                <Input
                  required
                  value={form.state || ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, state: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label>ZIP</Label>
                <Input
                  required
                  value={form.postal_code || ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      postal_code: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div>
              <Label>Country</Label>
              <Input
                required
                value={form.country || ""}
                onChange={(e) =>
                  setForm((f) => ({ ...f, country: e.target.value }))
                }
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                required
                type="tel"
                value={form.phone || ""}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
              />
            </div>
          </form>

          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" form="address-form" disabled={saving}>
              {editing ? "Save" : "Add"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
