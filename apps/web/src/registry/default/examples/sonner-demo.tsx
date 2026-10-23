import * as React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function SonnerDemo() {
  return (
    <div>
      <Toaster />
      <Button variant="outline" onClick={() => toast("Event has been created.")}>
        Show Toast
      </Button>
    </div>
  );
}
