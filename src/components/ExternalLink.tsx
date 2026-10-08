import type { ReactNode } from 'react'
import type { LinkConfig } from '../types/portfolio'

interface ExternalLinkProps {
  link: LinkConfig
  children?: ReactNode
  className?: string
}

export function ExternalLink({ link, children, className = '' }: ExternalLinkProps) {
  if (!link.configured || !link.href) {
    return (
      <span className={`${className} link-disabled`} title={`${link.label} URL is not configured`} aria-label={`${link.label} link not yet configured`}>
        {children ?? link.label}
      </span>
    )
  }

  const isMail = link.href.startsWith('mailto:')
  return (
    <a className={className} href={link.href} target={isMail ? undefined : '_blank'} rel={isMail ? undefined : 'noreferrer'}>
      {children ?? link.label}
    </a>
  )
}
