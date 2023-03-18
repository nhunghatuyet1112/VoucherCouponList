import './Header.css'
import proficePic from './avatar.svg'
import notification from './noti-icon.svg'
import searchIcon from './search-icon.svg'

const Header = () => {
    const headerContent = ['CẤU HÌNH', 'MUA HÀNG', 'KHO HÀNG', 'MARKETING', 'E-COMMERCE', 'KINH DOANH', 'NHÂN SỰ', 'BÁO CÁO']
    return <div className="header">
        <div className='header-menu'>
            {headerContent.map(content => {
                return <div className='menu'>
                    <div className='content'>
                        <a href='#'>{content}</a>
                        <div className='hor-line'></div>
                    </div>
                    <div className='ver-line'></div>
                </div>
            })}

        </div>
        <div className='profile-container'>
            <div className='box1'>
                <img src={searchIcon} />
            </div>
            <div className='box2'>
                <span className='noti-no'>15</span>
                <img src={notification} />
            </div>
            <div className='box3'>
                <span className='activity'></span>
                <img src={proficePic} />
            </div>
        </div>
    </div>
}

export default Header;