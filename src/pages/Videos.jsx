import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
// import { search } from "../api/youtube";
// import FakeYoutube from "../api/fakeYoutube";
// import Youtube from "../api/youtube";
import { useYoutubApi } from "../context/YoutubeApiContext";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>;
      {isLoading && <p>Loading...</p>}
      {error && <p>(only default export is available)Something is wrong😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
