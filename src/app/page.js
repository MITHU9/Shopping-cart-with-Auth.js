import { fetchAllProducts } from "@/actions";
import ProductCart from "../components/product-cart";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession = await auth();
  //console.log(getSession);

  if (!getSession?.user) {
    redirect("/unauth-page");
  }

  const getAllProducts = await fetchAllProducts();
  //console.log(getAllProducts);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto p-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length
          ? getAllProducts.data.map((productItem) => (
              <ProductCart item={productItem} />
            ))
          : null}
      </div>
    </div>
  );
}
