import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://jrprogramsofficial.github.io/Web_JR_Programs';

export function SEO({ title, description, image, path = '/', type = 'website' }) {
  const url = `${BASE_URL}${path}`;
  const img = image ? `${BASE_URL}${image}` : `${BASE_URL}/images/VentaBox.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content="JRPrograms" />
      <meta property="og:locale" content="es_ES" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}