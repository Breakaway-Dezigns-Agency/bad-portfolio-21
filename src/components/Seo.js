import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export const Seo = ({ title, description, keywords, image, url, author }) => {
  return(
    <StaticQuery
      query={detailQuery}
      render={data => {
        const metaTitle = title || data.site.siteMetadata.title
        const metaDescription = description || data.site.siteMetadata.description
        const metaKeywords = keywords || ["Gatsby blog", "Gatsby BAD blog"]
        const metaImage = image || data.site.siteMetadata.image
        const metaUrl = url || data.site.siteMetadata.url
        const metaAuthor = author || data.site.siteMetadata.author
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: `og:title`,
                content: metaTitle
              },
              {
                name: `og:description`,
                content: metaDescription
              },
              {
                name: `og:type`,
                content: `website`
              },
              {
                name: `og:image`,
                content: metaImage
              },
              {
                name: `og:url`,
                content: metaUrl
              },
              {
                name: `twitter:creator`,
                content: metaAuthor
              },
              {
                name: `twitter:title`,
                content: metaTitle
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
              {
                name: `twitter:image`,
                content: metaImage
              }
            ].concat(
              metaKeywords && metaKeywords.length > 0 ? {
                name: `keywords`,
                content: metaKeywords.join(`, `)
              } : []
            )
          }
          />
        )
      }}
    />
  )
}

const detailQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
        author
      }
    }
  }
`