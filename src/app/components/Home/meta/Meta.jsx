import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
  abtTitle,
  abtType,
  abtUrl,
  abtImage,
  children,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={abtTitle} />
      <meta property="og:type" content={abtType} />
      <meta property="og:url" content={abtUrl} />
      <meta property="og:image" content={abtImage} />
      <meta charSet="utf-8" />
      <meta name="title" content="LangPal" />
      <meta
        name="description"
        content="LangPal is a language app."
      />
      <meta
        name="keywords"
        content="LangPal, learn Nigerian languages, Igbo, Hause, Yoruba, learn to speak igbo language, languages, language enthusiasts, Nigerians, African languages, learn hausa, learn yoruba, learn a Nigerian language while having fun, languages, linguists, language learners"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="14 days" />
      <meta name="author" content="https://www.xyz.com/" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={abtUrl} />
      <meta property="twitter:title" content={abtTitle} />
      <meta
        property="twitter:description"
        content="LangPal is a language learning app."
      />
      <meta property="twitter:image" content={abtImage} />
      <meta name="google-site-verification" content="xyz-verification-code" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.xyz.com/" />
      <meta
        property="og:title"
        content="LangPal"
      />
      <meta
        property="og:description"
        content="LangPal is a language learning app."
      />
      <meta
        property="og:image"
        content="www.xyz-image-link"
      />

      <link rel="icon" href="/favicon.ico"></link>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      <title>{title}</title>
      {children}
    </Head>
  );
};

export default Meta;
