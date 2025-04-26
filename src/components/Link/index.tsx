import React from 'react'
import style from './Link.module.css'

const Link = ({children, ...rest}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a className={style.link} {...rest}>{children}</a>
}

export default Link
