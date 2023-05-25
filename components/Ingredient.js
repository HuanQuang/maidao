import { IngredientImage, PageLine } from '../image/index';
import Image from 'next/image';
function Ingredient() {
    return (
        <div className="my-4 tablet:my-10">
            <div className="text-[22px] tablet:text-[26px] text-primary flex items-center my-10  px-[15px]">
                <PageLine className="min-w-[22px] max-h-[34px] tablet:h-[34px]" />
                <h1 className="ml-5 font-bold">THÀNH PHẦN TỪ THIÊN NHIÊN</h1>
                <span className="border-[1px] border-solid border-primary grow hidden tablet:block"></span>
            </div>
            <div className="flex flex-wrap">
                {IngredientImage.map((item) => {
                    return (
                        <div className="w-full px-[15px] pb-7 tablet:w-1/2 laptop:w-1/3" key={item.name}>
                            <Image className="h-[225px]" src={item.url} alt="Nguyên liệu"></Image>
                            <div className="px-[10px] text-center py-5 text-primary">
                                <h1 className="my-[3px] text-2xl font-bold">{item.name}</h1>
                                <p className="text-[15px] my-[2px]">{item.des}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Ingredient;
