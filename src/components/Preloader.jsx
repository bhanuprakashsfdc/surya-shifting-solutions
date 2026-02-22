import React from 'react';
import { PRELOADER_TEXT } from "@/constants/constants";

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="animation-preloader">
        <div className="spinner" />
        <div className="txt-loading" aria-label="Loading">
          {PRELOADER_TEXT.brand.split("").map((letter, index) => (
            <span key={`${letter}-${index}`} data-text-preloader={letter} className="letters-loading">
              {letter}
            </span>
          ))}
        </div>
        <p className="text-center">
          {PRELOADER_TEXT.sublineTop} <br /> {PRELOADER_TEXT.sublineBottom}
        </p>
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Loading
        </p>
      </div>
      <div className="loader" aria-hidden="true">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;