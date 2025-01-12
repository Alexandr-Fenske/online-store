import React, { useContext } from 'react'
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { REGISTRATION_ROUTE } from '../utils/consts'

const Auth = observer(() => {
	const { user } = useContext(Context)

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 57 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>Авторизация</h2>
				<Form className='d-flex flex-column'>
					<Form.Control className='mt-3' placeholder='Введите ваш email...' />
					<Form.Control className='mt-3' placeholder='Введите ваш пароль...' />
					<Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
						<div>
							Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{ textDecoration: 'underline'}}>Зарегистрируйтесь!</NavLink>
						</div>
						<Button className='mt-3 align-self-end' variant={'outline-success'}>
							Войти
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
})

export default Auth
