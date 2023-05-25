import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AxiosClient from '../util/Axios/Axios';
import { notifyError, notifySuccess } from '../util/Toast/Toast';
import jwt_decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

function Login() {
    const router = useRouter();
    const schema = yup
        .object({
            username: yup.string().required('Vui lòng nhập trường này'),
            password: yup
                .string()
                .min(5, 'Mật khẩu phải dài ít nhất 5 kí tự')
                .max(20, 'Mật khẩu dài không quá 20 kí tự')
                .required('Vui lòng nhập trường này'),
        })
        .required();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
        console.log(data);
        // await AxiosClient.post("account/login", {
        //   username: data.username,
        //   password: data.password,
        // })
        //   .then((res) => {
        //     if (res.status === 200) {
        //       notifySuccess(res.data.message);
        //       const token = res.data.token;
        //       localStorage.setItem("accessToken", token);
        //       let decoded = jwt_decode(token);
        //       dispatch(isLogin(decoded));
        //       setTimeout(() => {
        //         router.push("/shop");
        //       }, 2000);
        //   } else if (res.status === 202) {
        //     notifyError(res.data.message);
        //   }
        // })
        // .catch((err) => notifyError(err));
    };
    return (
        <div className="px-[30px]">
            <h1 className="text-xl mb-[10px] text-primary font-bold">ĐĂNG NHẬP</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <div className="text-[14.4px] text-[#222] mb-[6px] font-bold">
                        Tên tài khoản hoặc địa chỉ email, số điện thoại <span className="text-[red]">*</span>
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
                        Mật khẩu <span className="text-[red]">*</span>
                    </div>
                    <input
                        className="border-[1px] border-solid border-[#ddd] mb-1 px-3 h-[39px] bg-[#fff] text-[#333] w-full shadow-inner"
                        type="password"
                        {...register('password')}
                    ></input>
                    <p className="text-[#ff1717] text-xs mt-1  mb-4">{errors.password?.message}</p>
                </div>
                <div className="flex mb-[6px]">
                    <input className="mt-[3px] mr-[10px] mb-4 ml-1" type="checkbox" id="rememberMe"></input>
                    <label htmlFor="rememberMe" className="text-[14.4px] text-[#222] font-bold">
                        Ghi nhớ đăng nhập
                    </label>
                </div>
                <button
                    className="text-[#fff] text-base bg-[#069230] px-[18px] font-bold py-2 mb-2 hover:bg-[#057526]"
                    type="submit"
                >
                    ĐĂNG NHẬP
                </button>
                <p className="text-primary text-base hover:text-[red] cursor-pointer">Quên mật khẩu</p>
            </form>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default Login;
