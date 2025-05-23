import React from "react";
import styles from "./page.module.css";
import { FakeDataDetails } from "./fakeData";
import Image from "next/image";
import "./global.css";

const Home = ({ dataDetails }: any) => {
  return (
    <>
      <div className={styles.sectionthree_first_container_news}>
        <div className={styles.sectionthree_first_heading}>
          <span className={styles.sectionthree_line} title="breaking"></span>
          <p className={styles.sectionthree_first_heading_fnt}>Breaking News</p>
        </div>
        <div className={styles.sectionthree_main_container_news} id="scrollbar">
          {dataDetails?.map((data: any, i: any) => {
            return (
              <div
                className={styles.sectionthree_second_container_card}
                key={i}
              >
                <Image
                  src={data.thumbnail_image}
                  width={150}
                  height={150}
                  className={styles.section_three_image}
                  alt="thumbnail_image"
                />

                <div className={styles.sectionthree_content_container}>
                  <p
                    className={styles.sectionthree_content_first_fnt}
                    title="title"
                  >
                    {data.title}
                  </p>
                  <div className={styles.sectionthree_content_author_container}>
                    <p
                      className={styles.sectionthree_content_timing_fnt}
                      title="date"
                    >
                      {data.date}
                    </p>

                    <p
                      className={styles.sectionthree_content_timing_fnt}
                      title="day"
                    >
                      {data.day}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.button_container_news}>
          <button className={styles.button__}>Explore All News</button>
        </div>
      </div>
    </>
  );
};

export default Home;
