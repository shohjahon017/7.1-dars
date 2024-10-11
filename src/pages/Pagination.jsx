import React, { useEffect, useState } from "react";
import http from "../../axios";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { RingLoader } from "react-spinners";

function Pagination() {
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(40);
  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);
  const defaultImage =
    "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";

  useEffect(() => {
    setLoader(true);
    http
      .get(`/photos?_page=${pages}&_limit=${limit}`)
      .then((res) => {
        setPhotos(res);
        setTotal(5000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [pages, limit]);

  function handlePage(e) {
    setPages(e);
  }

  return (
    <div className="p-6 bg-white rounded-lg ">
      {loader && (
        <div className=" flex  justify-center">
          <RingLoader></RingLoader>
        </div>
      )}
      <h1 className="font-medium justify-center text-[30px] flex mb-5">
        Food Blog
      </h1>
      <p className="flex justify-center mb-12    items-center text-center">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>

      <div className="flex flex-wrap justify-center  gap-5 mb-4">
        {photos &&
          photos.map((photo) => (
            <div className=" " key={photo.id}>
              <img
                className="rounded-lg w-64"
                src={photo.url || defaultImage}
              />
            </div>
          ))}
      </div>

      <ResponsivePagination
        current={pages}
        total={Math.ceil(total / limit)}
        onPageChange={handlePage}
        maxWidth={500}
      />
    </div>
  );
}

export default Pagination;
