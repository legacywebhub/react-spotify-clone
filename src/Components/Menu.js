import React from 'react'

const Menu = ({title, menuObject}) => {
  return (
    <div className='menuContainer'>
        <p className='title'>{title}</p>

        <ul>
            {
                menuObject && menuObject.map((menu)=>(
                    <li className='menu' key={menu.id}>
                        <a href="javascript.void(0)">
                            <i className='menuIcon'>{menu.icon}</i>
                            <span className='menuName'>{menu.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu