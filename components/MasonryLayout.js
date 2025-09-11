"use client";
import { useState } from "react";
import { API_URL } from "@/app/constants/api.constant";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Image from "next/image";

function MasonryLayout({ initialRows, total, nextOffset, paginated = false }) {
  const breakpointColumnsObj = {
    default: 5, // 5 columns on desktop
    768: 4, // 4 columns on mobile/tablets
  };
  const [images, setImages] = useState(initialRows);
  const [offset, setOffset] = useState(nextOffset);

  const fetchMorePosts = async () => {
    const res = await fetch(
      `${API_URL}/gallery/?category=gallery&limit=25&offset=${offset}`
    );
    const responseData = await res.json();
    const data = responseData.data;

    setImages((prev) => [...prev, ...data.images]);
    setOffset(offset + data.limit);
  };
  return (
    <>
      {paginated ? (
        <InfiniteScroll
          dataLength={images.length}
          next={fetchMorePosts}
          hasMore={images.length < total}
          loader={<h6>Loading more images...</h6>}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {images.map((image) => (
              <div key={image.id} className="mb-3">
                <Image
                  src={image.url}
                  alt="Best bridal makeup artist in mejia, durgapur, andal, barjora, raniganj"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {images.map((image) => (
            <div key={image.id} className="mb-3">
              <Image
                src={image.url}
                alt="Best bridal makeup artist in Bankura, Asansol, Illambazar"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </Masonry>
      )}
    </>
  );
}

export default MasonryLayout;
