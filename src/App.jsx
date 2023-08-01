import Title from "./components/Title";
import "./axios/global";

import FirstRequest from "./examples/1-first-request";
import Headers from "./examples/2-headers";
import PostRequest from "./examples/3-post-request";

const App = () => {
  return (
    <div>
      <Title />
      <PostRequest />
    </div>
  );
};

export default App;
