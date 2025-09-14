import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  image = "https://res.cloudinary.com/die12ywpb/image/upload/v1687240262/Yellow_White_Modern_Furniture_Ad_Facebook_Cover_qwvec5.png",
  url = "https://mest-technologies.netlify.app/",
  type = "website"
}) => {
  const siteTitle = "Mest Technologies"
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Agricultural Equipment Ghana`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Helmet>
  )
}

export default SEO