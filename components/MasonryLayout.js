"use client"
import { useState } from "react";
import { API_URL } from "@/app/constants/api.constant";
import InfiniteScroll from "react-infinite-scroll-component";

function MasonryLayout({ initialRows, total, nextOffset, paginated = false }) {
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
          <div
            className="masonry"
            style={{
              columnCount: 5,
              columnGap: "1rem",
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                style={{ breakInside: "avoid", marginBottom: "1rem" }}
              >
                <img
                  src={image.url}
                  alt="Best bridal makeup artist in mejia, durgapur, andal, barjora, raniganj"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div
          className="masonry"
          style={{
            columnCount: 5,
            columnGap: "1rem",
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              style={{ breakInside: "avoid", marginBottom: "1rem" }}
            >
              <img
                src={image.url}
                alt="Best bridal makeup artist in Bankura, Asansol, Illambazar"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MasonryLayout;
