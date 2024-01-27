import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateTweet from "./pages/createtweet/CreateTweet";
import { TweetProvider } from "./store/context";

const App: React.FC = () => {
  return (
    <TweetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-tweet" element={<CreateTweet />} />
      </Routes>
    </TweetProvider>
  );
};

export default App;
