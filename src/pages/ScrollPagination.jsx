import React, { useEffect, useState } from "react";
import http from "../../axios";
import Navbar from "../components/Navbar";
import { FadeLoader } from "react-spinners";

function ScrollPagination() {
  const [pages, setPages] = useState(1);
  const [limit] = useState(20);
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);

  const defaultImage =
    "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";

  useEffect(() => {
    const loadPhotos = () => {
      if (loader) return;

      setLoader(true);

      http
        .get(`/photos?_page=${pages}&_limit=${limit}`)
        .then((res) => {
          setPhotos((Photos) => [...Photos, ...res]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoader(false);
        });
    };

    loadPhotos();
  }, [pages]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentScroll =
        e.target.documentElement.scrollTop + window.innerHeight;

      if (currentScroll + 1 >= scrollHeight) {
        setPages((prevPages) => prevPages + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-6 container mx-auto bg-white rounded-lg">
      <Navbar />
      <h1 className="font-medium justify-center text-[30px] text-red-600 flex mb-5">
        Food Blog
      </h1>
      <p className="flex justify-center mb-12 items-center text-center">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mb-4">
        {photos &&
          photos.map((photo, index) => (
            <div key={index}>
              <img
                className="rounded-lg w-64 hover:shadow-lg transition-all duration-200"
                src={photo.url && photo.url !== "" ? photo.url : defaultImage}
                alt="Food"
              />
            </div>
          ))}
      </div>
      {loader && (
        <div className="flex justify-center">
          <FadeLoader></FadeLoader>
        </div>
      )}
    </div>
  );
}

export default ScrollPagination;
