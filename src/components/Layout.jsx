import style from "@/styles/Home.module.css";

const Layout = (props) => {
  return (
    <main className={style.layout_main}>
      <div className={style.layout_wrap}>
        <div className={style.layout_left}></div>
        <div className={style.layout_right}></div>
      </div>
      <div>{props.children}</div>
    </main>
  );
};

export default Layout;
