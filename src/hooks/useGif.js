import axios from "axios";
import React, { useEffect, useState } from "react";

const url = `https://api.giphy.com/v1/gifs/random?api_key=w9WqCHFlEBMYhVEMDaJHar67PY49eflF`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
