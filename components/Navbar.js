"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
  const hideNavLinks = pathname === "/works";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <span className="fs-3 me-2">
            <Image
              src="/assets/kankana.png"
              alt="logo"
              width={48}
              height={48}
            />
          </span>
          <span className="fw-bold">Kankana's Makeover</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex w-100 align-items-center">
            {!hideNavLinks && (
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link smooth="true" className="nav-link" href="/#portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth="true" className="nav-link" href="/#about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth="true" className="nav-link" href="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
            <Link
              href="https://wa.me/918016127841?text=Hi%20I'd%20like%20to%20inquire%20about%20bridal%20makeup"
              target="_blank"
              rel="noreferrer"
              className="ms-auto btn btn-pink"
              style={{ backgroundColor: "#d63384", color: "white" }}
            >
              Book via WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar