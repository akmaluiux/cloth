import Navbar from "./component/Navbar"
import Customcontent from "./component/CustomContent"
import styles from './page.module.css'
import CollectionContent from "./component/CollectionContent";
import AboutContent from '@/app/component/AboutContent'

const page = () =>  {
  return(
    <>
      <Navbar />
      <main className={styles.container}>
        <section id="collect" className={styles.page1}>
          <CollectionContent />
        </section>
        <section id="custom" className={styles.page}>
          <Customcontent />
        </section>
        <section id="about" className={styles.page}>
          <AboutContent />
        </section>
      </main>
    </>
  )
};

export default page
