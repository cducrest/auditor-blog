/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

import Blog from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog"

export type MBHomepageProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

export default Blog  // tricks to lend directly to Blog-looking page

export const Head: HeadFC = () => <Seo />
