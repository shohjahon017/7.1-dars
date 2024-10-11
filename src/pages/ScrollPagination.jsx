import React, { useEffect, useState } from "react";
import http from "../../axios";

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

      http
        .get(`/photos?_page=${pages}&_limit=${limit}`)
        .then((res) => {
          setPhotos((prevPhotos) => [...prevPhotos, ...res]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    loadPhotos();
  }, [pages, loader]);

  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="font-medium justify-center text-[30px] flex mb-5">
        Food Blog
      </h1>
      <p className="flex justify-center mb-12    items-center text-center">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>

      <div className="flex flex-wrap justify-center  gap-5 mb-4">
        {photos &&
          photos.map((photo, index) => (
            <div className=" " key={index}>
              <img
                className="rounded-lg w-64"
                src={photo.url || defaultImage}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ScrollPagination;
