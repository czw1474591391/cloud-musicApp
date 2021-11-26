import "./index.less";
import { useState, useEffect, useContext, useRef } from "react";
import { Context_App } from "../../App";
import PubSub from "pubsub-js";
import { getPlayList } from "../../api/index";
import { useHistory } from "react-router";

export const Play_Control = () => {
  const [SongThis, SetSongThis] = useState({
    al: {
      //初始化状态数据
      id: 129433117,
      name: "用心聆听好音乐",
      pic: 109951166114463340,
      picUrl: "http://p4.music.126.net/6d5ctwIiZNrIBfI9HkASGA==/109951166114463346.jpg",
      pic_str: "109951166114463346",
    },
    ar: [{ id: 48576789, name: "香菜", tns: Array(0), alias: Array(0) }],
  });
  const [playBtnIsShow, SetplayBtnIsShow] = useState(true); //设置播放暂停按钮的切换显示
  const History = useHistory();
  const AppCallback = useContext(Context_App); //接受根组件上下文对象传递的当前歌曲信

  useEffect(() => {
    if (Object.keys(AppCallback.SongThis_detailed).length === 0) {
      //当上下文传递的是空对象时，这结束语句
      return;
    } else {
      //数据请求回来了，在进行渲染
      SetSongThis(AppCallback.SongThis_detailed); //将当前歌曲信息设置到状态中
    }
  });
  const audio_Cpm = useRef(null);
  const play = () => {
    if (audio_Cpm.current.paused) {
      //音频如果是暂停则返回true
      SetplayBtnIsShow(false);
      audio_Cpm.current.play();
    } else {
      SetplayBtnIsShow(true); //设置两个图标按钮的切换
      audio_Cpm.current.pause();
    }
  };

  PubSub.publish("emitPlay", play); //使用pubsub-js发布play方法(兄弟组件通信)
  PubSub.subscribe("Search_Play", (msg, data) => {
    SetSongThis(data);
    play();
  });
  const isRenderAuthor = () => {
    //判断数组数据是否存在并返回相关的数据
    // return Object.keys(SongThis).length === 0 ? "暂无数据" : SongThis?.ar[0]?.name;
  };

  const ShowLyrics = (id) => {
    History.push({
      pathname: "/detailslyrics",
      params: {
        id,
      },
    });
  };
  return (
    <>
      <div
        className="play_control"
        onClick={() => {
          ShowLyrics(SongThis?.id);
        }}
      >
        <div className="play_control_left">
          <img src={SongThis.al?.picUrl} alt="" />
          <div className="title">
            <p>
              {SongThis?.name?.length > 8
                ? SongThis?.name?.substring(0, 7) + "..."
                : SongThis?.name}
            </p>
            {/* <p>{isRenderAuthor()}</p> */}
            {/* <p>{SongThis?.ar[0]?.name}</p> */}
            {/* <p>{SongThis?.ar[0]?.name == null ? SongThis.ar[0].name : ""}</p> */}
          </div>
        </div>
        <div className="play_control_right">
          <svg
            t="1634525634146"
            className="icon"
            viewBox="0 0 1024 1024"
            p-id="1305"
            width="200"
            height="200"
            onClick={play}
            style={{ display: playBtnIsShow ? "inline-block" : "none" }}
          >
            <path
              d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
              p-id="1306"
            ></path>
            <path
              d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
              p-id="1307"
            ></path>
          </svg>

          <svg
            t="1637502827589"
            className="icon"
            viewBox="0 0 1048 1024"
            p-id="1267"
            width="200"
            height="200"
            style={{ display: !playBtnIsShow ? "inline-block" : "none", marginRight: "10px" }}
            onClick={play}
          >
            <path
              d="M524.272128 0.018022C241.513165 0.018022 12.288102 229.245952 12.288102 512.005018c0 112.734003 36.43904 216.957952 98.17897 301.537997l38.667981-40.258048C97.458176 699.230003 67.143168 609.158963 67.143168 512.005018 67.143168 259.540992 271.807078 54.872986 524.272128 54.872986c252.45696 0 457.120973 204.668006 457.120973 457.132032 0 252.460954-204.664013 457.118003-457.120973 457.118003-96.240026 0-185.530982-29.744026-259.189043-80.53504l-34.539008 42.797978c83.150029 58.344038 184.437965 92.596019 293.728973 92.596019 282.758963 0 511.984026-229.220966 511.984026-511.976038C1036.256154 229.245952 807.031091 0.018022 524.272128 0.018022zM615.693107 256.011981l0 511.987 54.855 0L670.548107 256.012 615.693128 256.012zM377.996083 256.011981l0 511.987 54.855 0L432.851083 256.012 377.996128 256.012z"
              p-id="1268"
            ></path>
          </svg>

          <svg
            t="1634525663872"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1448"
            width="200"
            height="200"
          >
            <path
              d="M197.746222 0.076154h-63.99468A97.911861 97.911861 0 0 0 32 96.068174v63.994681A97.911861 97.911861 0 0 0 131.191755 256.054875h63.99468a97.911861 97.911861 0 0 0 101.751542-95.99202v-63.994681A97.911861 97.911861 0 0 0 197.746222 0.076154z m32.637287 159.986701a32.637287 32.637287 0 0 1-33.277233 31.99734h-63.994681A32.637287 32.637287 0 0 1 95.99468 160.062855v-63.994681a32.637287 32.637287 0 0 1 35.197075-31.99734h63.99468a32.637287 32.637287 0 0 1 33.277234 31.99734zM197.746222 384.044236h-63.99468A97.911861 97.911861 0 0 0 32 480.036257v63.99468A97.911861 97.911861 0 0 0 131.191755 640.022958h63.99468a97.911861 97.911861 0 0 0 101.751542-95.992021v-63.99468A97.911861 97.911861 0 0 0 197.746222 384.044236z m32.637287 159.986701a32.637287 32.637287 0 0 1-33.277233 31.997341h-63.994681A32.637287 32.637287 0 0 1 95.99468 544.030937v-63.99468a32.637287 32.637287 0 0 1 35.197075-31.99734h63.99468a32.637287 32.637287 0 0 1 33.277234 31.99734zM197.746222 768.012319h-63.99468A97.911861 97.911861 0 0 0 32 864.00434v63.99468A97.911861 97.911861 0 0 0 131.191755 1023.991041h63.99468a97.911861 97.911861 0 0 0 99.191755-95.992021v-63.99468A97.911861 97.911861 0 0 0 197.746222 768.012319z m33.277234 159.986701a32.637287 32.637287 0 0 1-33.277234 31.99734h-63.99468a32.637287 32.637287 0 0 1-37.756862-31.99734v-63.99468a32.637287 32.637287 0 0 1 33.277234-31.997341h63.994681a32.637287 32.637287 0 0 1 33.277234 31.997341zM439.646114 96.068174h518.996859A32.637287 32.637287 0 0 0 991.920207 64.070834a32.637287 32.637287 0 0 0-33.277234-31.99734H439.646114a32.637287 32.637287 0 0 0-33.277233 31.99734 32.637287 32.637287 0 0 0 33.277233 31.99734zM958.642973 330.928652H439.646114a31.99734 31.99734 0 1 0 0 63.99468h518.996859a31.99734 31.99734 0 1 0 0-63.99468zM958.642973 629.143862H439.646114a31.99734 31.99734 0 1 0 0 63.994681h518.996859a31.99734 31.99734 0 1 0 0-63.994681zM958.642973 927.99902H439.646114a31.99734 31.99734 0 1 0 0 63.994681h518.996859a31.99734 31.99734 0 1 0 0-63.994681z"
              fill=""
              p-id="1449"
            ></path>
          </svg>
        </div>

        <audio
          // controls="controls"
          ref={audio_Cpm}
          src={`https://music.163.com/song/media/outer/url?id=${SongThis?.id}.mp3`}
        ></audio>
      </div>
    </>
  );
};
