import { useLocation } from "react-router-dom";

export const DetailsLyrics = () => {
  const location = useLocation();
  if (location.params.id === undefined) {
    alert("请您先选择一首歌曲");
  }
  console.log(location);
  return 111;
};
