import Product from '../../components/Product';
import LayoutShop from '../../components/LayOut/LayoutShop';
import { data } from '../../util/Jsondata';
function TangCan() {
    const list = data.filter((item) => item.category === 'Tăng Cân');
    return (
        <LayoutShop props={1}>
            <div className="w-full flex flex-wrap">
                {list.map((item, i) => {
                    return (
                        <div className="w-1/3" key={i}>
                            <Product data={item} />
                        </div>
                    );
                })}
            </div>
        </LayoutShop>
    );
}

export default TangCan;
