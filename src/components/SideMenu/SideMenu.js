import menuIcon from './menu-icon.svg'
import './SideMenu.css'

const SideMenu = () => {
    return <div className="side-menu">
        <hr></hr>
        <div className='sale'>
            <img src={menuIcon} />
            {/* <div className='img'><img src={menuIcon} /></div> */}
            <a href='#'>KHUYẾN MÃI</a>
        </div>
        <div className='web-info'>
            <img src={menuIcon} />
            <a href='#'>NỘI DUNG WEBSITE</a>
        </div>
        <div className='policies'>
            <div className='policy'>
                <img src={menuIcon} />
                <a href='#' id='policy'>CHÍNH SÁCH</a>
            </div>
            <div className='policy-children'>
                <a href='#' id='coupon'>Coupon</a>
                <a href='#'>Phân nhóm PMH/Coupon</a>
                <a href='#'>xxxxxxxxxxxxx</a>
                <a href='#'>xxxxxxxxxxxxx</a>
                <a href='#'>xxxxxxxxxxxxx</a>
                <a href='#'>xxxxxxxxxxxxx</a>
            </div>

        </div>
        <div className='excel-report'>
            <img src={menuIcon} />
            <a href='#'>BÁO CÁO EXCEL</a>
        </div>
    </div>
}

export default SideMenu;