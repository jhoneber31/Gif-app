import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setimages] = useState([]);
  const [isLoading, seIsLoading] = useState(false);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setimages(newImages);
    seIsLoading(false);
  }
  
  useEffect(()=> {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}
