"use client";
import Link from "next/link";
import useCachedFetch from "@/app/hooks/useCachedFetch";
import { API_URL } from "@/app/constants/api.constant";
import MasonryLayout from "./MasonryLayout";

function Portfolio() {
  const { data } = useCachedFetch(
    `${API_URL}/gallery/?category=gallery&limit=25`,
    "gallery_home_gallery"
  );
  return (
    <section className="container py-5" id="portfolio">
      <h2 className="text-center mb-4 fw-bold">My Recent Works</h2>

      {/* Masonry Layout */}
      {data ? <MasonryLayout initialRows={data} /> : <p>Loading...</p>}

      <div className="text-center mt-4">
        <Link
          href="/works"
          prefetch={false}
          className="btn btn-pink"
          style={{ backgroundColor: "#d63384", color: "white" }}
        >
          View All Works
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
