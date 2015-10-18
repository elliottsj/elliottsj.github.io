import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import Typography from 'typography'
import { link } from 'gatsby-helpers'

const typography = new Typography()
const { rhythm, fontSizeToMS } = typography

import '../css/styles.css'

export default class extends React.Component {
  render () {
    let header
    if (this.props.state.path === link('/')) {
      header = (
        <h1
          style={{
            fontSize: fontSizeToMS(2.5).fontSize,
            lineHeight: fontSizeToMS(2.5).lineHeight,
            marginBottom: rhythm(1.5)
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={link('/')}
          >
            {this.props.config.blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={link('/')}
          >
            {this.props.config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(2)} ${rhythm(1/2)}`
        }}
      >
        {header}
        <RouteHandler typography={typography} {...this.props}/>
      </Container>
    )
  }
}
