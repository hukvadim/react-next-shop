import CardProduct from '@/components/catalog/CardProduct';

export default function Home() {
    return (
        <>
            <div className="catalog" id="catalog">
                <div className="container">
                    <div className="catalog__header">
                        <div className="catalog__select-category dropdown" id="dropdown-category-list">
                            <h3 className="dropdown-btn" data-box-toggle="#dropdown-category-list">
                                Вибрати категорію
                            </h3>
                            <div className="dropdown-content" id="category-list">
                                <a href="0" className="dropdown-item">Скинути вибір</a>
                                <a href="1" className="dropdown-item">Apple</a>
                                <a href="2" className="dropdown-item">Macbook</a>
                                <a href="3" className="dropdown-item">Apple watch</a>
                                <a href="4" className="dropdown-item">iPad</a>
                            </div>
                        </div>
                        <h3 className="catalog__products-summ">Знайдено товарів: <span id="view-count-products">9</span></h3>
                    </div>

                    <div className="catalog__content" id="catalog-products">
                        
                        <CardProduct />

                    </div>
                </div>
            </div>

        </>
    );
}
