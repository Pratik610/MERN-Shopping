import bcrypt from 'bcryptjs'
const users = [
	{
		name: 'Admin User',
		email: 'admin@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Pratik',
		email: 'pratik@gmail.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Supekar',
		email: 'supekar@gmail.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
