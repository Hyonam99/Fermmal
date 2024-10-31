import Nav from "../components/Nav";
import styles from "./homepage.module.css";
import balance from "../assets/justicebalance.png";
import statistics from "../assets/statistics.svg";
import lightgrey from "../assets/lightGrey.svg";
import darkgrey from "../assets/darkGrey.svg";
import yellow from "../assets/yellow.svg";
import video from "../assets/video.mp4"

export default function Homepage() {
  return (
    <div>
      <Nav />

      {/* first section for signup and login */}
      <section className={styles.section_one}>
        <h1 className={styles.section_one_header}>
          Let's Combat Malaria <br /> Together
        </h1>
        <h5 className={styles.section_one_subeading}>
          Malaria is a life threatening illness, commonly faced by Nigerians,
          it’s caused by bites of infected female Anopheles mosquitoes.
        </h5>
        <div className={styles.section_one_buttons}>
          <button className={styles.section_one_login_button}>Log in</button>
          <button className={styles.section_one_signup_button}>Sign Up</button>
        </div>
      </section>

      {/* second section with value Proposition */}
      <section className={styles.section_two}>
        <button className={styles.value_proposition}>Value Proposition</button>
        <img className={styles.balance_icon} src={balance} alt="balance" />
        <h5 className={styles.section_two_subheading}>
          Empowering communities in the fight against malaria with free testing,
          life-saving medications, and protective mosquito nets. Together, we
          can create a healthier, malaria-free future.
        </h5>
      </section>

      {/* third section with "why fermmal" */}
      <section className={styles.section_three}>
        <button className={styles.why_fermmal}>Why Fermmal?</button>
        <h5 className={styles.section_three_subheading}>
          Fermmal is an agency that offers free testing, drugs and mosquito nets
          to help combat/curb malaria.
        </h5>
        <div className={styles.section_three_write_ups}>
          <div className={styles.write_up_container}>
            <div className={styles.top_write_up}> Free testing</div>
            <div className={styles.bottom_write_up}>
              Our website is dedicated to providing free malaria testing to
              communities at risk.
            </div>
          </div>
          <div className={styles.write_up_container}>
            <div className={styles.top_write_up}>Free anti-malaria drugs</div>
            <div className={styles.bottom_write_up}>
              We offers free malaria drugs to those in need, especially in
              endemic regions.
            </div>
          </div>
          <div className={styles.write_up_container}>
            <div className={styles.top_write_up}>Mosquito nets</div>
            <div className={styles.bottom_write_up}>
              By distributing free mosquito nets, we empower families to protect
              themselves
            </div>
          </div>
        </div>
      </section>

      {/* fourth section with statistics */}
      <section className={styles.section_four}>
        <button className={styles.statistic}>Statistic</button>
        <div className={styles.section_four_stats}>
          <img src={statistics} alt="" id={styles.statistic_image} />
          <div className={styles.statistics_write_up}>
            <div className={styles.statistics_write_up_images}>
              <img src={lightgrey} alt="" />
              <img src={yellow} alt="" />
              <img src={darkgrey} alt="" />
            </div>
            <div className={styles.statistics_write_ups}>
              <h5>
                2,000 insecticide-treated mosquito nets distributed to families
                in rural areas.
              </h5>
              <h5>5,000 doses of anti-malarial drugs distributed in 2022.</h5>
              <h5>Over 10,000 free testing for malaria in the past year.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* fifth section with video */}
      <section className={styles.section_five}>
        <h3>Hear the Latest from Our Outreach Efforts</h3>
        <video width="1232" height="496" controls className={styles.video}>
          <source src={video} type="video/mp4" />
        </video>
      </section>
    </div>
  );
}
