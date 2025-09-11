import React from "react";
import MasonryLayout from "@/components/MasonryLayout";
import { API_URL } from "../constants/api.constant";

export default async function Works() {
  const response = await fetch(`${API_URL}/gallery/?category=gallery&limit=10`);
  const responseData = await response.json();
  const data = await responseData.data;
  const initialRows = data.images;
  const total = data.total;
  const nextOffset = data.limit; // as offset is 0 in the beginning, so the nextOffset is set to data.limit + offset

  return (
    <section className="container py-5" id="work">
      <h2 className="text-center mb-4 fw-bold">My All Works</h2>

      {/* Masonry Layout */}
      <MasonryLayout
        initialRows={initialRows}
        total={total}
        nextOffset={nextOffset}
        paginated={true}
      />
    </section>
  );
}
