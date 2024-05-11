import './Design.css'
import Header from '../../../components/header/header';
import img1 from '../../../assets/rickowensleatherpilotjacket.png';
function Store() {
  return (
    <div><Header />
      <div className='StorePagestyles'>
    
      <div className='store-container'>
        <div className='filters'>
       
        </div>
        <div className='products'>
          <div className='product-item'>
            <a href='#'><img src={img1} alt='Product 1' /></a>
            <h3>Product 1</h3>
            <p>$100</p>
          </div>
          <div className='product-item'>
            <a href='#'><img src={img1} alt='Product 2' /></a>
            <h3>Product 2</h3>
            <p>$200</p>
          </div>
          <div className='product-item'>
            <a href='#'><img src={img1} alt='Product 3' /></a>
            <h3>Product 3</h3>
            <p>$300</p>
          </div>
          <div className='product-item'>
            <a href='#'><img src={img1} alt='Product 4' /></a>
            <h3>Product 4</h3>
            <p>$400</p>
          </div>
          <div className='product-item'>
            <a href='#'><img src={img1} alt='Product 5' /></a>
            <h3>Product 5</h3>
            <p>$500</p>
          </div>
          <div className='product-item'>
            <a href='#'><img src={img1} alt='Product 6' /></a>
            <h3>Product 6</h3>
            <p>$600</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Store;