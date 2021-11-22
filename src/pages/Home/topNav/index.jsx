import "./index.less";
import { useHistory } from "react-router-dom";
const TopNav = () => {
  const History = useHistory();
  return (
    <div className="topNav">
      <div className="NavList">
        <svg
          t="1637118234991"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1398"
          width="200"
          height="200"
        >
          <path
            d="M98.357122 818.73194c-14.213723 0-25.764803 11.532661-25.764803 25.76071 0 14.233166 11.55108 25.770943 25.764803 25.770943M922.866648 818.73194 98.128925 818.73194c-14.21884 0-25.770943 11.532661-25.770943 25.76071 0 14.233166 11.552104 25.770943 25.770943 25.770943l824.737724 0c14.213723 0 25.764803-11.538801 25.764803-25.770943C948.633498 830.262554 937.081395 818.73194 922.866648 818.73194zM98.357122 483.770052c-14.213723 0-25.764803 11.537777-25.764803 25.76992 0 14.229073 11.55108 25.764803 25.764803 25.764803M922.866648 483.770052 98.128925 483.770052c-14.21884 0-25.770943 11.537777-25.770943 25.76992 0 14.229073 11.552104 25.764803 25.770943 25.764803l824.737724 0c14.213723 0 25.764803-11.537777 25.764803-25.764803C948.633498 495.307829 937.081395 483.770052 922.866648 483.770052zM98.357122 148.815327c-14.213723 0-25.764803 11.539824-25.764803 25.768897 0 14.227026 11.55108 25.76378 25.764803 25.76378M98.128925 200.346981l824.737724 0c14.213723 0 25.764803-11.536754 25.764803-25.76378 0-14.229073-11.55108-25.768897-25.764803-25.768897L98.128925 148.814304c-14.21884 0-25.770943 11.539824-25.770943 25.768897C72.359005 188.81125 83.911108 200.346981 98.128925 200.346981z"
            p-id="1399"
          ></path>
        </svg>
      </div>
      <div className="NavCenter">
        <div>我的</div>
        <div className="active">发现</div>
        <div>云村</div>
        <div>视频</div>
      </div>
      <div className="NavSearch">
        <svg
          t="1637118096590"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1267"
          width="200"
          height="200"
          onClick={() => {
            History.push("/search");
          }}
        >
          <path
            d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"
            p-id="1268"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export { TopNav };
