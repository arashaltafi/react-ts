import { useFormik } from 'formik';
import * as yup from 'yup'

const Formik = () => {

    const schema = yup.object().shape({
        firstName: yup.string().required('نام را وارد نمایید.'),
        lastName: yup.string().required('نام خانوادگی را وارد نمایید.'),
        email: yup.string().email('ایمیل را صحیح وارد نمایید.').required('ایمیل را وارد نمایید.'),
        age: yup.number().positive().min(18).max(100).integer().required('سن را وارد نمایید.'),
        password: yup.string().min(4).max(15).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('رمز عبور را وارد نمایید.'),
        confirmPassword: yup.string().min(4).max(15).oneOf([yup.ref('password')], 'رمز عبور با تکرار آن یکسان نیست.').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('تکرار رمز عبور را وارد نمایید.'),
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: schema,
        validateOnChange: true,
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const { values, touched, errors, setFieldValue } = formik;

    return (
        <>
            <div className='title mt-4'>Formik</div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 items-center justify-center p-16' autoComplete="off">
                <label className='subtitle' htmlFor="firstName">First Name</label>
                <input
                    className='px-4 py-6 text-center text-2xl font-bold bg-gray-200 border-2 border-black shadow-lg rounded-lg'
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder='Enter First Name ...'
                />
                {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}
                <label className='subtitle mt-12' htmlFor="lastName">Last Name</label>
                <input
                    className='px-4 py-6 text-center text-2xl font-bold bg-gray-200 border-2 border-black shadow-lg rounded-lg'
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder='Enter Last Name ...'
                />
                {errors.lastName && <p className='text-red-500'>{errors.lastName}</p>}
                <label className='subtitle mt-12' htmlFor="email">Email Address</label>
                <input
                    className='px-4 py-6 text-center text-2xl font-bold bg-gray-200 border-2 border-black shadow-lg rounded-lg'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Enter Email ...'
                />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
                <label className='subtitle mt-12' htmlFor="age">Age</label>
                <input
                    className='px-4 py-6 text-center text-2xl font-bold bg-gray-200 border-2 border-black shadow-lg rounded-lg'
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    placeholder='Enter Age ...'
                />
                {errors.age && <p className='text-red-500'>{errors.age}</p>}
                <label className='subtitle mt-12' htmlFor="password">Password</label>
                <input
                    className='px-4 py-6 text-center text-2xl font-bold bg-gray-200 border-2 border-black shadow-lg rounded-lg'
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Enter Password ...'
                />
                {errors.password && <p className='text-red-500'>{errors.password}</p>}
                <label className='subtitle mt-12' htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className='px-4 py-6 text-center text-2xl font-bold bg-gray-200 border-2 border-black shadow-lg rounded-lg'
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    placeholder='Enter Confirm Password ...'
                />
                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
                <button
                    className='btnSuccess bg-green-600 mt-8 py-4 px-6 text-2xl rounded-xl shadow-xl'
                    type="submit">
                    submit
                </button>
            </form>
        </>
    )
}

export default Formik