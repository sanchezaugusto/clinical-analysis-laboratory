import Image from "next/image";
import React from "react";
import LoginButton  from "../components/buttons/login";
import RegisterButton from "../components/buttons/register";
import Footer from "@/components/footer";

export default function Home() {
  return (
  
 <div>
  
  <LoginButton />
  <RegisterButton />
  
 </div>
   
  );
}
