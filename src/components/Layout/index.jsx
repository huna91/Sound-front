import style from "@/styles/Home.module.css";
import Image from "next/image";
import { Menubar } from "./components";

const Layout = (props) => {
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
          <Menubar />
        </div>
        <div className={style.layout_right}>
          <div className={style.layout_right_header}></div>
        </div>
      </div>
      <div>{props.children}</div>
    </main>
  );
};

export default Layout;
