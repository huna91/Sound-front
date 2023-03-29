import style from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Menubar = () => {
  const route = useRouter();
  const [curMenu, setCurMenu] = useState(0);
  const menu_title = [
    "Home",
    "스토리",
    "그림",
    "음악",
    "영상",
    "PPT",
    "프로그램",
    "Menu7",
  ];

  const navi = (_index) => {
    setCurMenu(_index);
    console.log(_index);
  };

  return (
    <div className={style.layout_left_menu_wrap}>
      {menu_title.map((val, index) => {
        return (
          <div
            className={style.layout_left_menu}
            onClick={() => {
              navi(index);
            }}
          >
            <div className={style.layout_left_menu_icon}></div>
            <div className={style.layout_left_menu_title}>{val}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menubar;
