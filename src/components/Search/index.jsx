import "./index.less";
import { Top_History } from "./Top-history/index";
import { SearchItems } from "./Search_Items/index";
import { createContext, useState, useEffect } from "react";
import { getSearchResult } from "../../api/index";

export const Search_Context = createContext({});
export const SearchPage = () => {
  const getSearchItems = async (name) => {
    const res = await getSearchResult(name);
    console.log(res);
  };
  return (
    <>
      <Search_Context.Provider value={{ getSearchItems }}>
        <Top_History></Top_History>
        <SearchItems></SearchItems>
      </Search_Context.Provider>
    </>
  );
};
