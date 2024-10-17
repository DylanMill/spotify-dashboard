"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AuthorizeButton = () => {
   const scopes: string[] = [
      "ugc-image-upload",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "app-remote-control",
      "streaming",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-follow-modify",
      "user-follow-read",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "user-library-modify",
      "user-library-read",
      "user-read-email",
      "user-read-private",
   ];

   const AUTH_URL = `${process.env.NEXT_PUBLIC_SPOTIFY_URL}/authorize`;

   const url = `${AUTH_URL}?client_id=${
      process.env.NEXT_PUBLIC_CLIENT_ID
   }&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scopes.join(
      " "
   )}`;

   return (
      <>
         <Button className="auth-button">
            <Link href={url}>Sign in to Spotify</Link>
         </Button>
      </>
   );
};

export default AuthorizeButton;
