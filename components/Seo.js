import Head from 'next/head'

const Seo = ({ seo }) => {
    const { title, description, ogTitle, ogDescription, ogUrl } = seo
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property='og:title' content={ogTitle} />
            <meta property='og:description' content={ogDescription} />
            <meta property='og:image' />
            <meta property='og:url' content={ogUrl} />
            <meta property='og:type' content='website' />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo