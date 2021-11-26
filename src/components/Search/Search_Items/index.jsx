import "./index.less";
import { useState, useContext, useEffect } from "react";
import { Search_Context } from "../index";
import "../index.less";
import PubSub from "pubsub-js";
export const SearchItems = () => {
  const context = useContext(Search_Context);
  const [SearchRenderData, SetSearchRenderData] = useState([]);
  useEffect(() => {
    if (context?.SearchData?.songs !== undefined) {
      //上下文对象传递得数据不为undefind时，填充当前组件的状态
      SetSearchRenderData(context?.SearchData?.songs);
    }
  });

  const Search_Play = (data) => {
    // 搜索结果右侧按钮点击
    // PubSub.subscribe("Search_Play", (fn, data) => {
    //   data(111);
    // }); //使用pubsub方法订阅兄弟组件的发布，并执行方法
    PubSub.publish("Search_Play", data);
  };
  return (
    <div className="Search_Box">
      {SearchRenderData.map((items, index) => (
        <div key={items.id} className="Search_Items">
          <div>
            <p>{items.name}</p>
            <p>{items.artists[0].name}</p>
          </div>
          <div
            onClick={() => {
              Search_Play(items);
            }}
          >
            <svg
              t="1637741005081"
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
          </div>
        </div>
      ))}
    </div>
  );
};
