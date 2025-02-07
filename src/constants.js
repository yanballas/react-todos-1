const date1 = new Date(2024, 6, 18, 10, 24);
const date2 = new Date(2024, 6, 19, 14, 24);

export const initialTodos = [
	{
		title: 'Learn React',
		desc: 'faster',
		image: '',
		done: true,
		createdAt: date1.toLocaleString(),
		key: date1.getTime()
	},
	{
		title: 'Learn js',
		desc: 'slowly',
		image: '',
		done: false,
		createdAt: date2.toLocaleString(),
		key: date2.getTime()
	},
]