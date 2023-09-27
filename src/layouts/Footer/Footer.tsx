import { IconGithub } from "components/Icons";
import { PATH } from "constants/path";
import classNames from "utils/classNames";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classNames(styles.footer, "container")}>
        <span>&copy; 2023</span>
        <div className={styles.footerContact}>
          <span> </span>
          <a target="_blank" rel="noopener noreferrer" href={}>
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
