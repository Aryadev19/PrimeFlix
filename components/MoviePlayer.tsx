"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function MoviePlayer({ movieId, movieName }: any) {
  const blackvid = `https://blackvid.space/embed?tmdb=${movieId}`;
  const vidsrc = `https://vidsrc.to/embed/movie/${movieId}/`;
  const superEmbed = ` https://multiembed.mov/directstream.php?video_id=${movieId}&tmdb=1`;
  const vidplay = `https://vidsrc.xyz/embed/movie?tmdb=${movieId}`;
  const tvembed = `https://tvembed.cc/movie/${movieId}`;
  const moviesApi = `https://moviesapi.club/movie/${movieId}`
  const gomovies = `https://playerhost.net/movie/${movieName}`
  const smashystream = `https://embed.smashystream.com/playere.php?tmdb=${movieId}`
  const [streamLink, setStreamLink] = useState(vidsrc);
  let isActive = (provider: any) => streamLink.includes(`${provider}`);
  return (
    <div className="flex flex-col m-2 justify-around lg:flex-row">
      <div>
        <iframe
          src={streamLink}
          className="border-slate-700 border-1 w-[21rem] h-[14rem] md:w-[60rem] md:h-[34rem] mx-auto"
          allowFullScreen
        ></iframe>
        <h1 className="mt-2 p-2 font-medium text-teal-300">
          Choose a Provider!
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Button
            onPress={() => {
              setStreamLink(vidsrc);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("vidsrc.to") ? "success" : "default"}
          >
            VidSrc
          </Button>
          <Button
            onPress={() => {
              setStreamLink(moviesApi);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("moviesapi") ? "success" : "default"}
          >
            MoviesApi
          </Button>
          <Button
            onPress={() => {
              setStreamLink(superEmbed);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("multiembed") ? "success" : "default"}
          >
            SuperEmbed
          </Button>
          
          <Button
            onPress={() => {
              setStreamLink(vidplay);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("vidsrc.xyz") ? "success" : "default"}
          >
            VidPlay
          </Button>
          <Button
            onPress={() => {
              setStreamLink(blackvid);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("blackvid") ? "success" : "default"}
          >
            Blackvid
          </Button>
          <Button
            onPress={() => {
              setStreamLink(gomovies);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("playerhost") ? "success" : "default"}
          >
            Gomovies
          </Button>
          <Button
            onPress={() => {
              setStreamLink(tvembed);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("tvembed") ? "success" : "default"}
          >
            TvEmbed
          </Button>
          <Button
            onPress={() => {
              setStreamLink(smashystream);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("smashystream") ? "success" : "default"}
          >
            SmashyStream
          </Button>
        </div>
      </div>
    </div>
  );
}