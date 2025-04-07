import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.actions";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="You" userId="user1" type="generate"></Agent>
    </>
  );
};

export default Page;
