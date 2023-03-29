import style from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { Menu } from "css.gg/index";

const Menubar = () => {
  const route = useRouter();
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

  return (
    <div className={style.layout_left_menu_wrap}>
      {menu_title.map((val, index) => {
        return (
          <div className={style.layout_left_menu}>
            <div className={style.layout_left_menu_icon}>
              {/* <svg width="24" height="24">
                <use xlinkHref={SVG + "#gg-home"} />
              </svg> */}
              <Menu />
            </div>
            <div className={style.layout_left_menu_title}>{val}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menubar;
