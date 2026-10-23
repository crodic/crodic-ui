import * as React from "react";
import { Table } from "@/components/ui/table";

export default function TableDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Table>
        <span>Table Component</span>
      </Table>
    </div>
  );
}
