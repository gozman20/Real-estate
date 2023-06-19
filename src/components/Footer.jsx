import React from "react";
import styles from "./styles";

export default function Footer() {
  return (
    <div className={`bg-black text-white ${styles.padding} text-center`}>
      {" "}
      <div>Copyright &copy; 2023. All right reserved</div>
    </div>
  );
}
