import style from "@/styles/Home.module.css";

const Layout = (props) => {
  return (
    <main className={style.layout_wrap}>
      <div>Home</div>
      <div>{props.children}</div>
    </main>
  );
};

export default Layout;
