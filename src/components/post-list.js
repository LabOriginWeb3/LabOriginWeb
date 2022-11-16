/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostList = ({ data, key }) => (
  <article className="post-list">
    <div className="post-content">
        <Link
          to={data.frontmatter.slug}
          sx={{
            variant: "links.postLink",
          }}
          key={key}
        >
        <p className="title">
            {data.frontmatter.title}
        </p>
        <time>{data.frontmatter.date}</time>
        </Link>
    </div>
  </article>
)

export default PostList
