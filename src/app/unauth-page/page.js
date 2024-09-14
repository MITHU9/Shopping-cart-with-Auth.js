import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function UnAuthPage() {
  // Check if user is authenticated
  const isAuthenticated = await auth();

  // If user is authenticated, redirect to dashboard
  if (isAuthenticated?.user) {
    redirect("/");
  }

  return (
    <div className="p-20">
      <h2 className="text-6xl font-extrabold">
        You are not login.Please login!
      </h2>
    </div>
  );
}

export default UnAuthPage;
