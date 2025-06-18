"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type ProductImagesProps = {
  images: string[];
};

export const ProductImages = ({ images }: ProductImagesProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500"
            )}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt="image" height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};
