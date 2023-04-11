import styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.sectionAbout}>

      <article className={styles.aboutMe}>
        <h3>A bit about me</h3>
        <p>My name is Lucas Navarro and I am a junior full stack developer. I am self-taught and have a passion for learning new technologies and programming languages.</p>
        <p>Being an autodidact has allowed me to develop a strong work ethic and determination to succeed. I am excited to continue learning and growing as a developer, and I believe I have the skills and drive to be a valuable asset to any team.</p>

        <h3>About the project</h3>
        <p>This project is a open source project centered around the popular TV series "Rick and Morty". The project is being coded as part of the curriculum at Henry bootcamp.</p>
      </article>

      <article className={styles.imageAbout}>
        <img src='https://media.licdn.com/dms/image/C4E03AQF5iKCv_0g5Hw/profile-displayphoto-shrink_800_800/0/1648563234646?e=1685577600&v=beta&t=dHljKoSNAbgDOfhhpE0tw5ShBcA_Nlp2B10wOKVCxSI' alt='about me' />
      </article>

    </section>
  )
}

export default About
