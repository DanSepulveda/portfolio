import Head from 'next/head'

const Seo = ({ seo }) => {
    const { title, description, ogUrl } = seo

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content='/assets/icon.jpg' />
            <meta property='og:url' content={ogUrl} />
            <meta property='og:type' content='website' />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo