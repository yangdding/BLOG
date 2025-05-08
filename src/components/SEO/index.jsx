import React from "react"
import { Helmet } from "react-helmet"
import { siteUrl } from "../../../blog-config"

const SEO = ({ title, description, url }) => {
  const fullUrl = url || siteUrl

  return (
    <Helmet>
      {/* 기본 SEO */}
      <title>{title}</title>
      <meta name="description" content={description || "기술 블로그입니다."} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (SNS 공유용) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || "기술 블로그입니다."} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: "양진영의 블로그",
  description: "웹 해킹과 보안에 대한 기술 블로그입니다.",
  url: siteUrl,
}

export default SEO

