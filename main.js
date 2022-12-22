let validation = new JustValidate('#form')

let selector = document.querySelector('#phone')
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

validation.addField("#name", [
	{
		rule: 'required',
		errorMessage : 'Введите имя'
	},
	{
		rule: 'minLength',
		value: 2,
		errorMessage : 'Минимум 2 символа'
	},
]) 

.addField("#email", [
	{
		rule: 'required',
		errorMessage : 'Введите почту'
	},
	{
		rule: 'email',
		errorMessage : 'Ошибка ввода'
	},
])

.addField("#phone", [
	{
		validator: (value) => {
			const phone = selector.inputmask.unmaskedvalue();
			return Boolean(Number(phone) && phone.length > 9)
		},
		errorMessage : 'Введите номер телефона'
	},
])
