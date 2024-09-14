import { fetchProductById } from "@/actions";
import { auth } from "@/auth";
import AddToCartButton from "@/components/add-to-cart";
import { redirect } from "next/navigation";

async function ProductDetails({ params }) {
  const getSession = await auth();
  if (!getSession) {
    redirect("/unauth-page");
  }

  const getProductDetails = await fetchProductById(params.details);
  //console.log(getProductDetails);

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-11">
          <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
            <div className="bg-slate-500 w-4/5 rounded-xl mx-auto">
              <img
                src={getProductDetails?.thumbnail}
                alt={getProductDetails?.title}
                className="object-cover w-full rounded-lg"
              />
            </div>
            <hr className="border-black border-2 my-6" />
            <div className="flex flex-wrap gap-6 justify-center bg-gray-700 mx-auto">
              {getProductDetails?.images.map((imageItem) => (
                <div className=" w-24 h-24 bg-slate-300 flex items-center justify-center">
                  <img
                    key={imageItem}
                    src={imageItem}
                    alt={getProductDetails?.title}
                    className="object-cover h-24 cursor-pointer  rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">
              {getProductDetails?.title}
            </h2>
            <p className="mt-5 text-gray-800 text-xl">
              ${getProductDetails?.price}
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              {getProductDetails?.description}
            </h3>
            <AddToCartButton productItem={getProductDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
