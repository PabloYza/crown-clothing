import React from 'react'
import { sections } from '../../data/directory-sections'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

const Directory = () => {
  
  return (
    <div className="directory-menu" >
      {sections.map(({ title, imageUrl, id, linkUrl, size }) => (
        <MenuItem
          title={title}
          size={size}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          key={id}
          id={id}
        />
        ))}
    </div>
  )
}


export default Directory