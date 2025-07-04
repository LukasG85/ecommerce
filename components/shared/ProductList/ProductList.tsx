import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "@/types";

export type ProductListProps = {
  data: Product[];
  title?: string;
  limit?: number;
};

export const ProductList = ({ data, title, limit }: ProductListProps) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};
