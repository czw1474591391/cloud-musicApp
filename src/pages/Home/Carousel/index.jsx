import { Carousel } from "antd";
import { useState, useEffect } from "react";
import { getBanner } from "../../../api/index.js";
// import img1 from "../../../assets/1";
// import img2 from "../../assets/2.jpg";
// import img3 from "../../assets/3.jpg";
// import img4 from "../../assets/4.jpg";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CompCaeousel = () => {
  const [lunboImg, SetlunboImg] = useState([
    // { imageUrl: img1 },
    // { imageUrl: img2 },
    // { imageUrl: img3 },
    // { imageUrl: img4 },
  ]); //初始化图片避免异步加载，无法取得数据得问题
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getBanner(0);
    SetlunboImg(res.data.banners);
  }, []);
  function RenderLunbo() {
    return lunboImg.map((items, i) => (
      <div key={i}>
        <img src={items.imageUrl} alt="" style={contentStyle} />
      </div>
    ));
  }

  return <Carousel autoplay>{RenderLunbo()}</Carousel>;
};
export { CompCaeousel };
