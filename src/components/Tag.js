import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Tag = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=w9WqCHFlEBMYhVEMDaJHar67PY49eflF&tag=${tag}`;
    const { data } = await axios.get(url);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Generate own Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
