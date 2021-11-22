import "../src/App.less";
import "antd/dist/antd.css";
import { Home } from "./pages/Home/index.jsx";
import { PlayList } from "./pages/PlayList/index.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Play_Control } from "./components/Play_Control/index";
import { createContext, useState, useEffect } from "react";
import { SearchPage } from "./components/Search";
export const Context_App = createContext();
const App = () => {
  const [SongThis_detailed, SetSongThis_detailed] = useState({});
  const callback = (data) => {
    SetSongThis_detailed(data);
  }; //接受孙组件通过事件参数传递的数据,并且设置为状态绑定到上下文就对象中
  return (
    <div>
      <Router>
        <Context_App.Provider value={{ SongThis_detailed, callback }}>
          {/* 默认路由匹配时，重定向到/home这个页面 */}
          {/* <Route exact path="/"></Route> */}
          {/* 默认路由匹配Home这个组件 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/playlist" exact component={PlayList}></Route>
          <Route path="/search" exact component={SearchPage}></Route>
          <Play_Control></Play_Control>
        </Context_App.Provider>
      </Router>
    </div>
  );
};
export default App;
