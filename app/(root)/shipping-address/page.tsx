import React from "react";
import { auth } from "@/auth";
import { getMyCart } from "@/lib/actions/cart.actions";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ShippingAddress } from "@/types";
import { getUserById } from "@/lib/actions/user.actions";
import ShippingAddressForm from "./components/ShippingAddressForm/ShippingAddressForm";
import CheckoutSteps from "@/components/shared/CheckoutSteps/CheckoutSteps";

export const metadata: Metadata = {
  title: "Shipping Address",
};

const ShippingAddressPAge = async () => {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("No user IDs");

  const user = await getUserById(userId);

  return (
    <div>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </div>
  );
};

export default ShippingAddressPAge;
