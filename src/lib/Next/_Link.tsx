import React, { ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = {
  href: NextLinkProps['href']
  className?: string
  children: ReactNode
}

export const Link = ({
  href,
  className = '',
  children
}: LinkProps): JSX.Element => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
