import React from "react"
import styled from "styled-components"

import { author, title } from "../../../../blog-config"

const FooterWrapper = styled.footer`
  margin-top: 32px;
  padding: 40px 0;
  border-top: 1px solid ${props => props.theme.colors.divider};
  text-align: center;
  font-size: 11pt;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondaryText};

  & > a {
    color: ${props => props.theme.colors.text};
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      © copyright 2025. {author} all rights reserved.
    </FooterWrapper>
  )
}

export default Footer
