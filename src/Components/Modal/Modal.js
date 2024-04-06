import Styles from "./modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={Styles.Modal}>
      <div className={Styles.Overlay}></div>
      <div className={Styles.Content}>{children}</div>
    </div>
  );
};

export default Modal;
