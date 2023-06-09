import React from "react";
import { formateAgo } from "./util/data";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, type }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={isList ? "flex gap-1 ml-5 mb-3 " : ""}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? "w-44 mr-2 rounded-xl" : "w-full rounded-xl"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="my-2 font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="mb-5 text-sm opacity-80">{formateAgo(publishedAt)}</p>
      </div>
    </li>
  );
};
export default VideoCard;
