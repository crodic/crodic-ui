import { Spinner } from "@/components/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className="size-6 text-primary" />
      <span className="text-sm text-muted-foreground">Loading components...</span>
    </div>
  );
}
