import * as React from "react";
import { Pagination } from "@/components/ui/pagination";

export default function PaginationDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Pagination>
        <span>Pagination Component</span>
      </Pagination>
    </div>
  );
}
