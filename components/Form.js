import { useState, useEffect } from 'react';
import Product2 from './Product2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpinLoading from './SpinLoading';
function Form({ state, data, func }) {
    const [loading, setLoading] = useState(false);
    // validate phone number
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const schema = yup
        .object({
            tel: yup
                .string()
                .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
                .required('Vui lòng nhập số điện thoại'),
            name: yup.string().required('Vui lòng nhập tên của bạn'),
            province: yup.string().required('Vui lòng chọn tỉnh/ thành phố'),
            district: yup.string().required('Vui lòng chọn huyện/ thị xã'),
            ward: yup.string().required('Vui lòng chọn phường/ xã'),
            street: yup.string().required('Vui lòng nhập địa chỉ nhà'),
            pay: yup.mixed().required('Vui lòng chọn hình thức thanh toán'),
        })
        .required();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [listCity, setlistCity] = useState([]);
    const [cityName, setCityName] = useState();
    const [districtName, setDistrictName] = useState();
    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => setlistCity(response.data));
    }, []);
    const listDistrict = listCity.find((city) => city.Name === cityName)?.Districts;
    const listWards = listDistrict ? listDistrict.find((district) => district.Name === districtName)?.Wards : [];
    const [quantity, setValue] = useState(1);
    const handleIncrement = () => {
        setValue(Number(quantity) + 1);
    };
    const totalPrice = (quantity * data?.price).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const handleDecrement = () => {
        if (quantity > 1) {
            setValue(Number(quantity) - 1);
        }
    };
    const handleCloseModal = () => {
        func(false);
    };
    const notifySuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const onSubmit = async (value) => {
        setLoading(true);
        const database = {
            name: `${value.gender} ${value.name}`,
            address: `${value.street}, ${value.ward} - ${value.district} - ${value.province}`,
            tel: value.tel,
            email: value.email,
            quantity: `số lượng ${quantity}`,
            productName: data.name,
            pay: value.pay,
            note: value.note,
            total: totalPrice,
        };
        try {
            await axios.post('https://maidaoserver.vercel.app/api/order', database).then((res) => {
                handleCloseModal();
                notifySuccess(res.data);
                console.log(res.data);
            });
        } catch (error) {
            notifyError(error);
            console.log(error);
        }
        setLoading(false);
    };
    return (
        <div
            className={`fixed z-50 top-0 bottom-0 right-0 left-0 bg-[#00000098] ${
                state ? 'flex items-center justify-center' : 'hidden'
            } text-primary`}
            onClick={handleCloseModal}
        >
            <div
                className="w-[95%] max-h-4/5 tablet:max-h-none max-w-[750px] mx-auto min-h-[500px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative bg-primary">
                    <h1 className="bg-primary whitespace-nowrap text-base pl-5 pr-10 uppercase text-[#fff] h-[42px] leading-[42px] rounded-t-md overflow-hidden text-ellipsis w-[96%]">
                        Đơn hàng {data?.name}
                    </h1>
                    <div
                        onClick={handleCloseModal}
                        className="absolute right-[10px] top-[10px] text-[white] hover:rotate-90 duration-200 flex"
                    >
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{
                                color: '#ffffff',
                                width: 21,
                                height: 21,
                            }}
                        ></FontAwesomeIcon>
                    </div>
                </div>
                <div className="p-[10px] flex-col tablet:flex-row w-full flex bg-[#fff]">
                    <div className="w-full tablet:w-1/2 relative tablet:pr-5">
                        <div className="h-none">
                            <Product2 data={data} />
                        </div>
                        <div className="flex justify-center absolute right-[10px] bottom-4">
                            <button className="px-[10px] border-[1px] border-solid" onClick={handleDecrement}>
                                -
                            </button>
                            <input
                                className="max-w-[32px] text-base border-y-[1px] border-solid no-spin text-center pr-1"
                                type="number"
                                value={quantity}
                                min="1"
                                onChange={(e) => setValue(e.target.value)}
                            ></input>
                            <button className="px-[10px] border-[1px] border-solid" onClick={handleIncrement}>
                                +
                            </button>
                        </div>
                    </div>
                    <form className="w-full tablet:w-1/2 tablet:pl-[10px] " onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="mb-[15px] text-base font-bold">Thông tin người mua</h1>
                        <div className="flex text-xs mb-[6px]">
                            <label className="mr-6 flex items-center">
                                <input className="mr-1" type="radio" value="Anh" {...register('gender')}></input> Anh
                            </label>
                            <label className=" flex items-center">
                                <input className="mr-1" type="radio" value="Chị" {...register('gender')}></input> Chị
                            </label>
                        </div>
                        <div>
                            <section>
                                <div className="flex text-xs w-full mb-[2px]">
                                    <input
                                        className="grow mr-1 w-1/2 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px]"
                                        type="text"
                                        placeholder="Họ và tên"
                                        {...register('name')}
                                    ></input>
                                    <input
                                        className="grow py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px]"
                                        type="tel"
                                        placeholder="Số điện thoại"
                                        {...register('tel')}
                                    ></input>
                                </div>
                                {(errors.name && <p className="text-xs text-[red]">{errors.name.message} </p>) ||
                                    (errors.tel && <span className="text-xs text-[red]">{errors.tel.message} </span>)}
                            </section>
                        </div>
                        <input
                            className="grow text-xs w-full mt-1 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px]"
                            type="email"
                            placeholder="Địa chỉ email (Không bắt buộc)"
                            {...register('email')}
                        ></input>
                        <section>
                            <div className="flex mb-[2px]">
                                <select
                                    className="grow text-xs w-full mt-1 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px] outline-none"
                                    {...register('province')}
                                    onChange={(e) => setCityName(e.target.value)}
                                >
                                    <option value="">Chọn tỉnh thành</option>
                                    {listCity.map((city) => {
                                        return (
                                            <option value={city.Name} key={city.Id}>
                                                {city.Name}
                                            </option>
                                        );
                                    })}
                                </select>
                                <select
                                    className="grow text-xs w-full mt-1 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px] outline-none"
                                    {...register('district')}
                                    onChange={(e) => setDistrictName(e.target.value)}
                                >
                                    <option value="">Chọn quận huyện</option>
                                    {listDistrict?.map((district) => {
                                        return (
                                            <option value={district.Name} key={district.Id}>
                                                {district.Name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            {(errors.province && <p className="text-xs text-[red]">{errors.province.message} </p>) ||
                                (errors.district && (
                                    <span className="text-xs text-[red]">{errors.district.message} </span>
                                ))}
                        </section>
                        <section>
                            <select
                                className="mb-[2px] grow text-xs w-full mt-1 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px] outline-none"
                                {...register('ward')}
                            >
                                <option value="">Chọn phường xã</option>
                                {listWards?.map((ward) => {
                                    return (
                                        <option value={ward.Name} key={ward.Id}>
                                            {ward.Name}
                                        </option>
                                    );
                                })}
                            </select>
                            {errors.ward && <p className="text-xs text-[red]">{errors.ward.message} </p>}
                        </section>
                        <section>
                            <input
                                className="mb-[2px] grow text-xs w-full mt-1 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px]"
                                type="text"
                                placeholder="Số nhà, tên đường"
                                {...register('street')}
                            ></input>
                            {errors.street && <p className="text-xs text-[red]">{errors.street.message} </p>}
                        </section>
                        <textarea
                            className="outline-none grow text-xs w-full mt-1 py-[2px] px-[5px] border-[1px] border-solid border-[#ccc] h-[26px]"
                            type="text"
                            placeholder="Ghi chú đơn hàng (Không bắt buộc)"
                            {...register('note')}
                        ></textarea>
                        <h1 className="mb-[15px] text-base font-bold">Hình thức thanh toán</h1>
                        <section>
                            <div className="flex text-xs mb-[6px] flex-wrap">
                                <label htmlFor="" className="mr-6 flex items-center">
                                    <input
                                        className="mr-1"
                                        type="radio"
                                        value="Thanh toán khi nhận hàng"
                                        {...register('pay')}
                                    ></input>{' '}
                                    Thanh toán khi nhận hàng
                                </label>
                                <label htmlFor="" className=" flex items-center">
                                    <input
                                        className="mr-1"
                                        type="radio"
                                        value="Thanh toán qua Internet Banking"
                                        {...register('pay')}
                                    ></input>{' '}
                                    Thanh toán qua Internet Banking
                                </label>
                            </div>
                            {errors.pay && <p className="text-xs text-[red]">{errors.pay.message} </p>}
                        </section>
                        <div className="text-base font-bold">
                            Tổng: <span className="">{totalPrice}</span>
                        </div>
                        <button
                            className="bg-primary text-[#fff] w-full h-9 text-base rounded hover:bg-[#054812] my-5"
                            type="submit"
                        >
                            ĐẶT HÀNG NGAY
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
            {loading && <SpinLoading />}
        </div>
    );
}

export default Form;
