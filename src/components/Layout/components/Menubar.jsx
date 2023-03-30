import style from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Menubar = () => {
  const route = useRouter();
  const [curMenu, setCurMenu] = useState(0);
  const menu_title = [
    ["Home", "home"],
    ["스토리", "story"],
    ["그림", "image"],
    ["음악", "music"],
    ["영상", "video"],
    ["PPT", "announcement"],
    ["프로그램", "program"],
    ["Menu7", "menu7"],
  ];

  const navi = (_index) => {
    setCurMenu(_index);
    route.push(`/${menu_title[_index][1]}`);
    console.log(_index);
  };

  return (
    <div className={style.layout_left_menu_wrap}>
      {menu_title.map((val, index) => {
        return (
          <div
            className={`${
              curMenu === index
                ? style.layout_left_menu + style.layout_left_menu_active
                : style.layout_left_menu
            }`}
            onClick={() => {
              navi(index);
            }}
          >
            <div className={style.layout_left_menu_icon}></div>
            <div className={style.layout_left_menu_title}>{val[0]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menubar;
