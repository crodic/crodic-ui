import * as React from "react";
import { Carousel } from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Carousel>
        <span>Carousel Component</span>
      </Carousel>
    </div>
  );
}
