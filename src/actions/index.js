"use server";

import { signIn, signOut } from "@/auth";

//Get all products

export async function fetchAllProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return {
      success: true,
      message: "Products fetched successfully",
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch products",
      data: null,
    };
  }
}

// Get a product by id

export async function fetchProductById(productId) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch product",
      data: null,
    };
  }
}

export async function loginAction() {
  await signIn("github");
}
export async function logoutAction() {
  await signOut();
}
