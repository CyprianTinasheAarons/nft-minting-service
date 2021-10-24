import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://nftschool.dev" target="_blank" rel="noopener noreferrer">
      <PageHeader title="NFT Minting Service" subTitle="visit cyprian.topiax.tech" style={{ cursor: "pointer" }} />
    </a>
  );
}
