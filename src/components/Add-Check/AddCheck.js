import './AddCheck.css'
import checkIcon from './checkmark-icon.svg'
import addIcon from './add-icon.svg'
import arrowIcon from './arrow-down-icon.svg'

const AddCheck = ({ checkVoucher, checkCoupon }) => {
    return <div className="add-check">
        <div className="check">
            <div className="check-voucher">
                <label className='voucher-label'>Phiếu mua hàng
                    <input className='voucher' id="voucher" type='checkbox' onChange={(e) => checkVoucher(e)}></input>
                    <span className='checkmark'><img src={checkIcon} /></span>
                </label>
            </div>
            <div className="check-coupon">
                <label className='coupon-label'>Coupon
                    <input className='coupon' id="coupon" type='checkbox' onChange={(e) => checkCoupon(e)}></input>
                    <span className='checkmark'><img src={checkIcon} /></span>
                </label>
            </div>
        </div>
        <div className="add">
            <span className='add-icon'><img src={addIcon} /></span>
            <button onClick={() => alert('Success')} className="add-btn">TẠO MỚI
            </button>
            <span className='arrow-icon'><img src={arrowIcon} /></span>
        </div>
    </div>
}

export default AddCheck;