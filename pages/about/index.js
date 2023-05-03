import styles from '../../styles/About.module.css'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Headings'
import Image from 'next/image'
import Box from '../../components/Box'

const Home = ({ translations, transHeader }) => {
  const { seo, about } = translations
  const { title, boxes } = about

  return (
    <Layout trans={transHeader} seo={seo}>
      <section className={styles.about}>
        <H1>{title}</H1>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/assets/avatar.png"
              width={0.6}
              height={0.6}
              layout="responsive"
              alt=""
            />
          </div>
          <div className={styles.resume}>
            {boxes.map((box) => (
              <Box data={box} key={box.title} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => {
  const translations = await import(`../../locales/${locale}/about.json`)
  const transHeader = await import(`../../locales/${locale}/header.json`)

  return {
    props: {
      translations: translations.default,
      transHeader: transHeader.default,
    },
  }
}
