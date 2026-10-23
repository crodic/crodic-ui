import * as React from "react";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <ButtonGroup>
        <span>Button Group Component</span>
      </ButtonGroup>
    </div>
  );
}
