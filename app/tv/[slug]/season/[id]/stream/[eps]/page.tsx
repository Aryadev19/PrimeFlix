import { Button, Code } from "@nextui-org/react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";
import TvPlayer from "@/components/TvPlayer";
import { findTV, getAnimeInfo, watchAnime } from "@/utils/Fetcher";
import AnimePlayer from "@/components/AnimePlayer";
export default async function StreamMovies({
  params,
}: {
  params: { slug: string; id: string; eps: string };
}) {
  const result = await findTV(params.slug);
  let aniInfo,
    animeId,
    animeSeason,
    animeEps,
    animeLink,
    animeStreamLink,
    animeDownloadLink;
  if (result.languages[0] === "ja") {
    aniInfo = await getAnimeInfo(params.slug);
    animeId = aniInfo.id;
    animeSeason = aniInfo.seasons[Number(params.id) - 1];
    animeEps = animeSeason.episodes[Number(params.eps) - 1].id;
    animeLink = await watchAnime(animeEps, animeId);
    animeStreamLink = animeLink.headers.Referer;
    animeDownloadLink = animeLink.sources;
  }

  let name = result.name;
  name = name.toLowerCase().replaceAll(" ", "-");
  return (
    <div>
      <Nav />
      <div className="ml-6">
        <Link href={`/tv/${params.slug}/season/${params.id}`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      {result.languages[0] === "ja" ? (
        <AnimePlayer
          animeLink={animeStreamLink}
          downloadLinks={animeDownloadLink}
        />
      ) : (
        <TvPlayer
          tvId={params.slug}
          seasonId={params.id}
          epsId={params.eps}
          tvName={name}
        />
      )}
      <div className="flex justify-center m-2">
        <Tips />
      </div>
    </div>
  );
}
