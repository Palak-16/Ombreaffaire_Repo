"use client";

import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";

import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";

import { $patchStyleText } from "@lexical/selection";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, _activeEditor) => {
        // You can update UI state here if needed
        return false;
      },
      1
    );
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-100">
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        className="font-bold"
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        className="italic"
      >
        I
      </button>
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        className="underline"
      >
        U
      </button>

      <button
        type="button"
        onClick={() =>
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
        }
        className="px-2"
      >
        • Bullet
      </button>

      <button
        type="button"
        onClick={() =>
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
        }
        className="px-2"
      >
        1. Numbered
      </button>


      <button
        type="button"
        onClick={() => editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)}
        className="px-2 text-red-600"
      >
        ✖ Remove List
      </button>
    </div>
  );
}
