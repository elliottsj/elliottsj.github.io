import React from 'react'
import { RouteHandler, Link } from 'react-router'
import sortBy from 'lodash/collection/sortBy'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class extends React.Component {
  static data() {
    return {
      yo: true
    }
  }
  render() {
    let i, len, page, pageLinks, ref, ref1, ref2, rhythm, title
    rhythm = this.props.typography.rhythm
    pageLinks = []
    ref = sortBy(this.props.pages, (page) => {
      let ref
      return (ref = page.data) != null ? ref.date : void 0
    }).reverse()
    for (i = 0, len = ref.length; i < len; i++) {
      page = ref[i]
      title = ((ref1 = page.data) != null ? ref1.title : void 0) || page.path
      if (page.path !== link("/") && !((ref2 = page.data) != null ? ref2.draft : void 0)) {
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4)
            }}
          >
            <Link to={page.path}>{title}</Link>
          </li>
        )
      }
    }
    return (
      <DocumentTitle title={this.props.config.blogTitle}>
        <div>
          <p
            style={{
              marginBottom: rhythm(2.5)
            }}
          >
            Lorem ipsum
          </p>
          <ul>
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
