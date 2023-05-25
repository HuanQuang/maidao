import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AxiosClient from '../util/Axios/Axios';
import { notifySuccess, notifyError } from '../util/Toast/Toast';
import { ToastContainer } from 'react-toastify';

function Register() {
    const schema = yup
        .object({
            username: yup.string().required('Vui lòng nhập trường này'),
            password: yup
                .string()
                .min(5, 'Mật khẩu phải dài ít nhất 5 kí tự')
                .max(20, 'Mật khẩu dài không quá 20 kí tự')
                .required('Vui lòng nhập trường này'),
            repassword: yup
                .string()
                .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp')
                .required('Vui lòng nhập trường này'),
        })
        .required();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
        await AxiosClient.post('account', {
            username: data.username,
            password: data.password,
        })
            .then((res) => {
                if (res.status === 201) {
                    notifySuccess(res.data);
                } else {
                    notifyError(res.data);
                }
            })
            .catch((err) => notifyError(err));
    };
    return (
        <div className="px-[30px] border-l-[1px] border-solid border-[#ececec]">
            <h1 className="text-xl mb-[10px] text-primary font-bold">ĐĂNG KÝ</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <div className="text-[14.4px] text-[#222] mb-[6px] font-bold">
                        Tên tài khoản hoặc địa chỉ email, số điện thoại
                        <span className="text-[red]">*</span>
                    </div>
                    <input
                        className="border-[1px] border-solid border-[#ddd] mb-1 px-3 h-[39px] bg-[#fff] text-[#333] w-full shadow-inner"
                        type="text"
                        {...register('username')}
                    ></input>
                    <p className="text-[#ff1717] text-xs mt-1  mb-4">{errors.username?.message}</p>
                </div>
                <div className="mb-2">
                    <div className="text-[14.4px] text-[#222] mb-[6px] font-bold">
                        Mật khẩu<span className="text-[red]">*</span>
                    </div>
                    <input
                        className="border-[1px] border-solid border-[#ddd] mb-1 px-3 h-[39px] bg-[#fff] text-[#333] w-full shadow-inner"
                        type="password"
                        {...register('password')}
                    ></input>
                    <p className="text-[#ff1717] text-xs mt-1 mb-4">{errors.password?.message}</p>
                </div>
                <div className="mb-2">
                    <div className="text-[14.4px] text-[#222] mb-[6px] font-bold">
                        Nhập lại mật khẩu<span className="text-[red]">*</span>
                    </div>
                    <input
                        className="border-[1px] border-solid border-[#ddd] mb-1 px-3 h-[39px] bg-[#fff] text-[#333] w-full shadow-inner"
                        type="password"
                        {...register('repassword')}
                    ></input>
                    <p className="text-[#ff1717] text-xs mt-1  mb-4">{errors.repassword?.message}</p>
                </div>

                <button
                    className="text-[#fff] text-base bg-[#069230] px-[18px] font-bold py-2 mb-2 hover:bg-[#057526]"
                    type="submit"
                >
                    ĐĂNG KÝ
                </button>
            </form>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default Register;
