import style from "./footer.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiTwotoneBank } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={style.footer_wrapper}>
      <div className={style.footer_container}>
        <div className={style.footer_card}>
          <span className={style.icon}>
            <AiOutlineMail />
          </span>
          <div>
            <h1>Mail Here</h1>
            <p>abc@mail.com</p>
            <p>abc@mail.com</p>
          </div>
        </div>
        <div className={style.footer_card}>
          <span className={style.icon}>
            <AiTwotoneBank />
          </span>
          <div>
            <h1>Visit Here</h1>
            <p>Iseyin, Oyo</p>
            <p>Nigeria</p>
          </div>
        </div>
        <div className={style.footer_card}>
          <span className={style.icon}>
            <AiOutlinePhone />
          </span>
          <div>
            <h1>Call Here</h1>
            <p>+2348********</p>
            <p>+2348********</p>
          </div>
        </div>
      </div>
      <p className={style.footer_info}>
        &copy; All right reserved by{" "}
        <span>
          <a href="/">DarabCode</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
