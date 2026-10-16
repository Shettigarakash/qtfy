import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, data }) {
  // true = carousel ("Show all" button), false = full grid ("Collapse" button)
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </button>
      </div>
      {data.length === 0 ? (
        <CircularProgress className={styles.loader} />
      ) : carouselToggle ? (
        <Carousel
          data={data}
          renderComponent={(item) => <Card data={item} />}
        />
      ) : (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
