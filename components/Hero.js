"use client";

import Link from "next/link";
import Image from "next/image";
import useCachedFetch from "@/app/hooks/useCachedFetch";
import { API_URL } from "@/app/constants/api.constant";

function Hero() {
  const { data } = useCachedFetch(
    `${API_URL}/gallery?category=hero&limit=1`,
    "gallery_home_hero"
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            {/* <h1 className="fw-bold display-5">
              Timeless <span className="text-danger">Bridal</span> Looks for
              Your Big Day
            </h1>
            <p className="mt-3 text-muted">
              Durgapur · Andal · Mejia · Barjora · Asansol · All over WB — premium bridal,
              reception, and party makeup.
            </p> */}
            <h1 className="fw-bold display-5">
              Professional <span className="text-danger">Bridal & Party</span>{" "}
              Makeup Artist in{" "}
              <span className="text-info">Bankura, Durgapur & Asansol</span>
            </h1>
            <p className="mt-3 text-muted">
              Looking for the best{" "}
              <strong>bridal makeup artist in Bankura</strong>? Kankana&apos;s
              Makeover offers stunning{" "}
              <strong>wedding, reception, haldi and party makeovers</strong>{" "}
              across <strong>Bankura, Durgapur, and Asansol</strong>. From
              traditional Bengali bridal styles to modern HD and Waterproof
              looks, we ensure you shine on your special day.
            </p>
            <div className="d-flex gap-2 mt-4">
              <Link href="#work" className="btn btn-dark">
                View Portfolio
              </Link>
              <Link href="#contact" className="btn btn-outline-secondary">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            {data ? (
              <Image
                src={data.url}
                alt="Kankana's Makeover, best makeup artist in mejia, barjora, durgapur"
                className="img-fluid rounded shadow"
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
