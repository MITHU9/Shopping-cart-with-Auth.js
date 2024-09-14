"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  //console.log(cart?.cartItems);

  const dispatch = useDispatch();

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  useEffect(() => {
    let amount = 0;
    cart?.cartItems?.forEach((item) => {
      amount += item.price;
    });
    setTotalAmount(amount);
  }, [cart?.cartItems]);

  if (!cart?.cartItems.length) {
    return (
      <h2 className="text-3xl font-bold flex w-52 mx-auto mt-10">
        Cart is empty
      </h2>
    );
  }

  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
        <div className="overflow-y-auto ">
          <table className="mt-10 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap">
              <tr className="text-gray-800 ">
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Remove</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y">
              {cart?.cartItems?.map((item, index) => (
                <tr className="font-bold" key={index}>
                  <td className="px-6 py-4 text-md">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-500">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <Button onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-xl ml-auto mt-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Total Amount: <span className="font-bold">${totalAmount}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
