import { SongListTop } from "./PlayListTop/index";
import { Playltems } from "./PlayList_Items/index";
import { createContext, useEffect, useState, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getSongList } from "../../api/index.js";
import { Context_App } from "../../App";

export const Context = createContext({});
export const PlayList = () => {
  const Location = useLocation();
  const [SongList, SetSongList] = useState([]);
  useEffect(() => {
    if (SongList.length === 0) {
      //状态中没有数据才填充，防止多次渲染
      getdata();
      async function getdata() {
        const res = await getSongList(Location.state?.id);
        SetSongList(res.data?.playlist);
      }
    } else {
      return;
    }
  });

  const aa = () => {
    console.log(111);
  };
  return (
    <>
      <Context.Provider value={{ SongList, aa }}>
        <SongListTop></SongListTop>
        <Playltems></Playltems>
      </Context.Provider>
    </>
  );
};
