"use client";
import AuthorizeButton from "@/components/AuthorizeButton";
import { useEffect, useState } from "react";

export default function Home() {
   const [token, setToken] = useState(null);
   const [code, setCode] = useState<string | null>(null);

   useEffect(() => {
      const getCodeFromURL = () => {
         const urlParams = new URLSearchParams(window.location.search);
         const code = urlParams.get("code");

         if (code) {
            setCode(code);
         }
      };

      getCodeFromURL();
   }, []);

   return (
      <main className="flex min-h-screen items-center justify-center">
         <AuthorizeButton></AuthorizeButton>
         <p>{code}</p>
      </main>
   );
}
