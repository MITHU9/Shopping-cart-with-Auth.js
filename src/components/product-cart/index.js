"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

function ProductCart({ item }) {
  const router = useRouter();

  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="object-cover h-full w-full rounded-xl object-top"
          />
        </div>
        <div>
          <CardTitle className="text-lg font-bold text-gray-900">
            {item?.title}
          </CardTitle>
        </div>
        <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
          <p className="text-lg font-extrabold text-gray-800">${item?.price}</p>
          <div>
            <Button onClick={() => router.push(`/${item.id}`)}>Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCart;
