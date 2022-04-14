import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
const Login = ({ setIsOpen, open }) => {
  return (
    <div>
      {open ? (
        <>
          {" "}
          <div className={styles.darkBG} onClick={() => setIsOpen()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>Dialog</h5>
              </div>
              <button className={styles.closeBtn} onClick={() => setIsOpen()}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
              <div className={styles.modalContent}>
                Are you sure you want to delete the item?
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setIsOpen()}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setIsOpen()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Login;
