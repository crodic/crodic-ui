import * as React from "react";
import { Field } from "@/components/ui/field";

export default function FieldDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Field>
        <span>Field Component</span>
      </Field>
    </div>
  );
}
