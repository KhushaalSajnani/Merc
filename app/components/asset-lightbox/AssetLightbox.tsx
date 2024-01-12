'use client'
import React, { useState } from "react";
import AssetLightboxData from "./AssetLightboxData";

import AssetLightboxApi from "./assetLightboxApi";

import "./lightbox.css"

interface AssetLightboxProps {}

const AssetLightbox: React.FC<AssetLightboxProps> = () => {
  const [assetLightboxData] = useState(AssetLightboxApi);

  return (
    <>
      <section className="sectionAssetLightbox !gap-x-4 !gap-y-4 grid smTablet:grid-cols-2 lgTablet:grid-cols-2 max709px:grid-cols-1 grid-cols-3 m-auto max-parent-grid-container-width p-0">
        <AssetLightboxData lightboxData={assetLightboxData} />
      </section>
    </>
  );
};

export default AssetLightbox;
