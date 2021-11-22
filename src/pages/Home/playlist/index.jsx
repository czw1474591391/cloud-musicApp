import { getPlayList } from "../../../api/index.js";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.css";
import "./index.less";

export const PlayList = () => {
  const [PlayListData, SetPlayList] = useState([]);
  const History = useHistory();

  useEffect(() => {
    if (PlayListData.length === 0) {
      getdata();
      async function getdata() {
        const res = await getPlayList();
        SetPlayList(res.data.result);
      }
    }
    new Swiper(".swiper-container", {
      // loop: true, // 循环模式选项
      // autoplay: {
      //   delay: 5000,
      // },
      slidesPerView: 3,
      spaceBetween: 10,
      // 如果需要分页器
      // pagination: {
      //   el: ".swiper-pagination",
      // },
    });
  });
  return (
    <>
      <h3 style={{ paddingLeft: "5px" }}>
        <b>推荐歌单</b>
      </h3>
      <div className="Playitems">
        <div className="swiper-container mySwiper">
          <div className="swiper-wrapper">
            {PlayListData.map((items) => (
              <div
                key={items.id}
                className="swiper-slide"
                onClick={() => {
                  History.push({
                    pathname: "/playlist",
                    state: { id: items.id },
                  });
                }}
              >
                <img src={items.picUrl} alt="" width="120px" />
                <p>{items.name}</p>
                <div className="Playitems_count">
                  <svg
                    t="1637225272626"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1267"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                      p-id="1268"
                    ></path>
                    <path
                      d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                      p-id="1269"
                    ></path>
                  </svg>
                  <span className="Playitems_count_text">{items.playCount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};
