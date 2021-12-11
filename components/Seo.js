import Head from 'next/head'

const Seo = ({ seo }) => {
    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo