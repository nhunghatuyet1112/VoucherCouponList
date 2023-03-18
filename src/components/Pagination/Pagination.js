import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = () => {
    return <div className='pagination-container'>
        <div className='items-per-page'>
            <label for='items'>Hiển thị mỗi trang</label>
            <select name='items' id='items'>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
            </select>
        </div>
        <div className='page'>
            <a href='#' className='first-page'>Đầu</a>
            <span className='prev-page'>
                <a href='#' >
                    <FontAwesomeIcon className='prev-icon' icon={faChevronLeft}>
                    </FontAwesomeIcon></a>
            </span>
            <a href='#' id='active'>1</a>
            <a href='#'>2</a>
            <a href='#'>3</a>
            <a href='#'>4</a>
            <span className='next-page'>
                <a href='#' >
                    <FontAwesomeIcon className='next-icon' icon={faChevronRight}>
                    </FontAwesomeIcon></a>
            </span>
            <a href='#' className='last-page'>Cuối</a>
        </div>
    </div>
}

export default Pagination;