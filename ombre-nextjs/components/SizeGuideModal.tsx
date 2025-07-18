"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";

type Row = Record<string, string|number>;

export default function SizeGuideModal({
  brand,
  open,
  onClose,
}: {
  brand: string;
  open: boolean;
  onClose: () => void;
}) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch(`${apiUrl}/api/size-charts/${encodeURIComponent(brand)}`)
      .then((r) => r.json())
      .then((data: Row[]) => setRows(data))
      .finally(() => setLoading(false));
  }, [brand, open]);

  // collect all unique headers from your JSON objects
  const columns = Array.from(
    new Set(rows.flatMap((r) => Object.keys(r)))
  );

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Size Guide — {brand}</DialogTitle>
        </DialogHeader>

        {loading ? (
          <p>Loading…</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col}>{col.toUpperCase()}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  {columns.map((col) => (
                    <TableCell key={col}>{row[col]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DialogContent>
    </Dialog>
  );
}
