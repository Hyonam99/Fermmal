import image from "../assets/FERMMAL.svg"
import styles from "./nav.module.css"
export default function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navbar_left}>
            <img src={image} alt="" />
        </div>
        <div className={styles.navbar_center}> 
            <ul className={styles.nav_links}>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Hospital</a></li>
                <li><a href="">Blogs</a></li>
            </ul>
        </div>
        <div className={styles.login}>
            <button className={styles.login_button}>Log in</button>
        </div>
      </nav>
    </div>
  );
}
