import "./index.less";
import { Top_History } from "./Top-history/index";
import { SearchItems } from "./Search_Items/index";
import { createContext, useState, useEffect, useContext } from "react";
import { getSearchResult } from "../../api/index";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Context_App } from "../../App";

export const Search_Context = createContext({});
export const SearchPage = () => {
  const [SearchData, SetSearchData] = useState({});
  const getSearchItems = async (name) => {
    //搜索方法由子组件触发
    const res = await getSearchResult(name);
    SetSearchData(res.data.result);
    // History.replace("/search/items"); //此处单纯使用push无法刷新页面，所以下方SearchItems组件无法呈现
    // History.go(0); //重新渲染刷新页面
  };
  return (
    <>
      <Router>
        <Search_Context.Provider value={{ getSearchItems, SearchData }}>
          <Top_History></Top_History>
          <SearchItems></SearchItems>
          {/* <Route path="/search/items" component={SearchItems}></Route> */}
        </Search_Context.Provider>
      </Router>
    </>
  );
};
