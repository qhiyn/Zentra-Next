"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`${styles.header} ${isScrolled ? styles["header-scrolled"] : ""}`}>
      <div className={styles["header-content"]}>
        <a href="#" className={styles["header-logo"]}>
          <img src="/zentra-icon-color.svg" alt="Zentra" className={styles["header-logo-icon"]} />
        </a>
        <Button as="a" href="https://app.zentra.pw/" target="_blank" rel="noopener noreferrer">
          Join Beta
        </Button>
      </div>
    </header>
  );
}
