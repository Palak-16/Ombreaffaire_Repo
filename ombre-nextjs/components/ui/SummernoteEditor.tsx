"use client";

import { useEffect, useRef } from "react";

export default function SummernoteEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically require jQuery + Bootstrap + Summernote JS/CSS
      const $ = require("jquery");

      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("summernote/dist/summernote-lite.js");
      require("summernote/dist/summernote-lite.css"); // ✅ Only loaded inside editor

      $(editorRef.current!).summernote({
        height: 200,
        tabsize: 2,
        toolbar: [
          ["style", ["bold", "italic", "underline", "clear"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["insert", ["link", "picture"]],
          ["view", ["codeview"]],
        ],
        callbacks: {
          onChange: function (contents: string) {
            onChange(contents);
          },
        },
      });

      $(editorRef.current!).summernote("code", value);

      return () => {
        $(editorRef.current!).summernote("destroy");
      };
    }
  }, []);

  return <div><div ref={editorRef} /></div>;
}
