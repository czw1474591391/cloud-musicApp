import { useHistory } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { getSearchSuggest } from "../../../api/index";
import { Search_Context } from "../index.jsx";
import "./index.less";

export const Top_History = () => {
  const History = useHistory();
  const usecontext = useContext(Search_Context);
  const Ipt_Ref = useRef(null); //获取原生的DomInput节点
  const [SearchSuggest, SetSearchSuggest] = useState({});
  const Ipt_Change = async (e) => {
    if (e.target.value !== "") {
      //将输入的关键字作为请求参数
      const res = await getSearchSuggest(e.target.value);
      SetSearchSuggest(res.data.result?.allMatch);
    }
  };
  //渲染搜索建议列表
  const RenderSuggest = () => {
    console.log(Object.keys(SearchSuggest).length);
    if (Object.keys(SearchSuggest).length !== 0) {
      return (
        <ul className="Suggest_Itmes">
          {SearchSuggest.map((items, index) => (
            <li
              key={index}
              onClick={() => {
                //点击列表时，将建议列表选中的值赋值给搜索框
                Ipt_Ref.current.value = items.keyword;
                usecontext.getSearchItems(items.keyword);
              }}
            >
              {items.keyword}
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <div className="Search_Header">
      <svg
        t="1637562849214"
        className="icon"
        viewBox="0 0 1024 1024"
        p-id="1267"
        width="200"
        height="200"
        onClick={() => {
          History.go(-1);
        }}
      >
        <path
          d="M513.753 64.947c-238.627 0-432.77 196.2-432.77 437.351 0 241.153 194.143 437.353 432.77 437.353 238.627 0 432.772-196.202 432.772-437.353 0-241.15-194.143-437.351-432.772-437.351z m0 820.035c-208.804 0-378.675-171.665-378.675-382.684 0-211.013 169.871-382.68 378.675-382.68S892.43 291.285 892.43 502.298c0 211.02-169.871 382.684-378.677 382.684z m216.385-410.017H362.666L478.782 357.62c10.563-10.677 10.563-27.976 0-38.654a26.849 26.849 0 0 0-38.251 0l-162.288 164.01c-10.567 10.675-10.567 27.975 0 38.651l162.288 164.012c5.283 5.337 12.205 8.004 19.124 8.004 6.924 0 13.841-2.667 19.127-8.004 10.563-10.679 10.563-27.974 0-38.654l-116.116-117.35h367.472c14.953 0 27.047-12.225 27.047-27.336 0-15.107-12.092-27.333-27.047-27.333z"
          p-id="1268"
        ></path>
      </svg>
      <input
        type="text"
        className="Search_Ipt"
        placeholder="想听点什么"
        ref={Ipt_Ref}
        onKeyUp={(e) => {
          Ipt_Change(e);
        }}
      />
      {RenderSuggest()}
    </div>
  );
};
