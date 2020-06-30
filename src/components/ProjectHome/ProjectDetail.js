import React from 'react'
import Img from 'gatsby-image'

export default function ProjectDetail({ content, image, backgroundColor }) {
    return (
        <article className="project col-xs-12 col-md-9">
            <Img
                Tag="div"
                className="image__img_blog"
                fluid={image}
                backgroundColor={backgroundColor}
            />
            <div
                className="post-content"
                style={{ color: '#f2f2f2' }}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    )
}
