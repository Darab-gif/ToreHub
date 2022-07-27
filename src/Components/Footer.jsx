import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer_wrapper}>
      <div className={style.footer_container}>
        <div className={style.footer_card}>
          <span></span>
          <div>
            <h1>Mail Here</h1>
            <p>abc@mail.com</p>
            <p>abc@mail.com</p>
          </div>
        </div>
        <div className={style.footer_card}>
          <span></span>
          <div>
            <h1>Visit Here</h1>
            <p>abc@mail.com</p>
            <p>abc@mail.com</p>
          </div>
        </div>
        <div className={style.footer_card}>
          <span></span>
          <div>
            <h1>Call Here</h1>
            <p>abc@mail.com</p>
            <p>abc@mail.com</p>
          </div>
        </div>
      </div>
      <p>
        &copy; All right reserved by{" "}
        <span>
          <a href="/">DarabCode</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
