import { Empty, EmptyTitle, EmptyDescription } from "@/components/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty className="border border-dashed rounded-lg p-8 max-w-sm">
      <EmptyTitle>No items found</EmptyTitle>
      <EmptyDescription>Try adjusting your search criteria to find relevant elements.</EmptyDescription>
    </Empty>
  );
}
