import styles from "./styles/main.module.css";
import Skills from "./components/skills";
import Projects from "./components/projects";



export default function Home() {
  return (
    <main className={styles.main_container}>
      
       

      <Skills/>
      <Projects/>

    </main>
  );
}
