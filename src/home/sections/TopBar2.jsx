import React, { useState, useEffect } from "react";

import { debounce, classList } from "../../utils";

import { Icon, IconButton } from "@mui/material";

import ScrollTo from "../common/ScrollTo";

const TopBar2 = () => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="./assets/images/nsi_logo.png" alt="NSI" />
        </div>
        <ul className="navigation">
          <li>
            <ScrollTo to="intro2" onScroll={close}>
              Home
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="partners" onScroll={close}>
              Partners
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="service2" onScroll={close}>
              Service
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="details" onScroll={close}>
              Details
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="footer1" onScroll={close}>
              Contact
            </ScrollTo>
          </li>
        </ul>
        <div className="m-auto" />
        <ul className="navigation">
          <li>
            <a href="/admin/" target="_self">
              <Icon className="mr-4">person</Icon> Admin
            </a>
          </li>
        </ul>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar2;
