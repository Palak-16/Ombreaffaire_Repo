"use client";

import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

type BrandOption = { label: string; value: string };

export default function BrandSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  
  const [options, setOptions] = useState<BrandOption[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const apiUrl =  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
        const res = await fetch(`${apiUrl}/api/admin/brand`);
        const data = await res.json();
        const formatted = data.brands.map((brand: string) => ({
          label: brand.charAt(0).toUpperCase() + brand.slice(1),
          value: brand,
        }));
        setOptions(formatted);
      } catch (err) {
        console.error("Failed to load brands", err);
      }
    };

    fetchBrands();
  }, []);

 const handleChange = (selected: BrandOption | null) => {
  onChange(selected ? selected.value : "");
};


  return (
    <CreatableSelect
      placeholder="Select or type brand"
      isClearable
      onChange={handleChange}
      value={value ? { label: value, value } : null}
      options={options}
    />
  );
}
