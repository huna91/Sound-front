import style from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Menubar = () => {
  const route = useRouter();
  const menu_title = [
    "Home",
    "그림",
    "음악",
    "PPT",
    "스토리",
    "프로그램",
    "Menu6",
    "Menu7",
  ];

  return (
    <div className={style.layout_left_menu}>
      {menu_title.map((val, index) => {
        return <div className={style.layout_left_userName_menu}>{val}</div>;
      })}
    </div>
  );
};

export default Menubar;
