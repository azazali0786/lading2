import React from "react";
import { Icon, Card, Divider } from "@mui/material";
import Carousel from "../common/Carousel";

const Portfolio2 = () => {
  const portfoioList = [
    {
      imageUrl: "./assets/images/ceat.png",
      name: "CEAT",
      icon: "verified",
      description: `A trusted brand delivering durable, high-performance tyres for every road and every rider.`,
    },
    {
      imageUrl: "./assets/images/maxxis.png",
      name: "Maxxis",
      icon: "workspace_premium",
      description: `Known for premium quality and long life, offering reliable tyres across multiple segments.`,
    },
    {
      imageUrl: "./assets/images/bedrock.png",
      name: "Bedrock",
      icon: "military_tech",
      description: `Strong, dependable tyres designed for heavy load, daily use, and tough conditions.`,
    },
    {
      imageUrl: "./assets/images/ceat.png",
      name: "CEAT",
      icon: "verified",
      description: `A trusted brand delivering durable, high-performance tyres for every road and every rider.`,
    },
  ];

  return (
    <section className="section" id="partners">
      <div className="container">
        <div className="section__header">
          <h2>Our Partners</h2>
          <p>
            We are in distribution with leading tyre brands to ensure trusted quality,
            smooth distribution, and reliable support for our entire dealer
            network.
          </p>
        </div>

        <Carousel carouselId="portfolio-2">
          {portfoioList.map((portfolio, index) => (
            <Card className="relative h-full card" key={index}>
              <img className="w-full" src={portfolio.imageUrl} alt="portfolio" />

              <div className="flex-column justify-between">
                <div className="px-4 pt-4">
                  <h5 className="m-0 text-16 font-bold flex items-center gap-2">
                    <Icon className="text-primary">{portfolio.icon}</Icon>
                    {portfolio.name}
                  </h5>

                  <p className="mb-4">{portfolio.description}</p>
                  <Divider />
                </div>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio2;
