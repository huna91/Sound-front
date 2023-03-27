import style from "@/styles/Home.module.css";
import Image from "next/image";

const Layout = (props) => {
  const menu = [
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
    <main className={style.layout_main}>
      <div className={style.layout_wrap}>
        <div className={style.layout_left}>
          <div className={style.layout_left_user}>
            <div className={style.layout_left_userImage_wrap}>
              <Image
                className={style.layout_left_userImage}
                src="/images/user_default_image.png"
                width={160}
                height={160}
              ></Image>
            </div>
            <div className={style.layout_left_userName}>{"유저네임"}</div>
          </div>
          <div className={style.layout_left_menu}>
            {menu.map((val, index) => {
              return (
                <div className={style.layout_left_userName_menu}>{val}</div>
              );
            })}
          </div>
        </div>
        <div className={style.layout_right}></div>
      </div>
      <div>{props.children}</div>
    </main>
  );
};

export default Layout;
