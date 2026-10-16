import React from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, data }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button className={styles.toggleText}>Collapse</button>
      </div>
      {data.length === 0 ? (
        <CircularProgress className={styles.loader} />
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
