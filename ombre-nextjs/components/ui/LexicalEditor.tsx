"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import ToolbarPlugin from "./ToolbarPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

import { EditorState } from "lexical";
import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

// ✅ Nodes
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode } from "@lexical/rich-text";
import { QuoteNode } from "@lexical/rich-text";
import { ParagraphNode, TextNode } from "lexical";
import { $convertToMarkdownString } from "@lexical/markdown";
import dynamic from "next/dynamic";

// ✅ Types
import { useEffect } from "react";



type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function LexicalEditor({ value, onChange }: Props) {
  const initialConfig = {
    namespace: "LexicalEditor",
    theme: {
      text: {
        bold: "font-bold",
        italic: "italic",
        underline: "underline",
      },
      list: {
        nested: {
          listitem: "pl-4",
        },
        ol: "list-decimal list-inside",
        ul: "list-disc list-inside",
        listitem: "ml-2",
      },
      paragraph: "mb-2",
    },
    onError(error: Error) {
      console.error(error);
    },
    nodes: [
      ListNode,
      ListItemNode,
      HeadingNode,
      QuoteNode,
      ParagraphNode,
      TextNode,
    ],
  };

  // Exports HTML from editorState
  function HTMLExportPlugin() {
    const [editor] = useLexicalComposerContext();

    return (
      <OnChangePlugin
        onChange={(editorState: EditorState) => {
          editorState.read(() => {
            const html = $generateHtmlFromNodes(editor, null);
            onChange(html); // send updated HTML to parent
          });
        }}
      />
    );
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <ListPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="prose border p-2 min-h-[150px] rounded bg-white" />
        }
        placeholder={
          <div className="absolute top-2 left-3 text-gray-400 pointer-events-none">
            Enter product description...
          </div>
        }
        ErrorBoundary={() => <div>Something went wrong.</div>}
      />
      <HistoryPlugin />
      <HTMLExportPlugin />
    </LexicalComposer>
  );
}
