import LayoutShop from '../../components/LayOut/LayoutShop';
import Product from '../../components/Product';
import { data } from '../../util/Jsondata';
function Shop() {
    return (
        <LayoutShop>
            <div className="w-full flex flex-wrap">
                {data.map((item) => {
                    return (
                        <div className="w-1/2 tablet:w-1/3" key={item._id}>
                            <Product data={item} />
                        </div>
                    );
                })}
            </div>
        </LayoutShop>
    );
}

export default Shop;
