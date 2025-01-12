import React, { useContext } from 'react'
import { Context } from '../index'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const Navbar = observer(() => {
	const { user } = useContext(Context)

	return (
		<nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
			<div className='container d-flex justify-content-between'>
				<a className='navbar-brand' href={SHOP_ROUTE}>
					КупиДевайс
				</a>
        {user.isAuth ?
        <div className='d-flex ms-auto'>
        <button
          className='btn btn-outline-light me-2'
          onClick={() => user.setIsAuth(true)}
        >
          Админ панель
        </button>
        <button className='btn btn-outline-light'>Выйти</button>
      </div>
      :
      <div className='d-flex ms-auto'>
					<button
						className='btn btn-outline-light me-2'
						onClick={() => user.setIsAuth(true)}
					>
						Авторизация
					</button>
				</div>
             }
				
			</div>
		</nav>
	)
})

export default Navbar
