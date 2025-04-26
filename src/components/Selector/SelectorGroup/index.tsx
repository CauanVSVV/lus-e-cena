import React from 'react'
import style from './SelectorGroup.module.css'

interface SelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
}

const SelectorGroup = ({icon, children, ...rest }: SelectorGroup) => {
    return (
        <div className={style.container}>
            {icon && <div className={style.icone}>{icon}</div>}
            <select className={style.selector} {...rest}>{children}</select>
        </div>
    )
}

export default SelectorGroup