import './Filter.css'
import filterIcon from './filter-icon.svg'
import searchIcon from '../Header/search-icon.svg'
import searchIconWhite from './search-icon.svg'
import dotsIcon from './dots-icon.svg'

const Filter = ({ props, deleteFilter, handleChange, searchFilter, input }) => {
    return <div className='filter-table'>
        <div className='filter-container'>
            <div className='delete-filter'>
                <div>
                    <img src={filterIcon} />
                    <span>LỌC DỮ LIỆU</span>
                </div>
                <button className='delete-btn' onClick={(e) => deleteFilter(e)}>Xóa bộ lọc</button>
            </div>
            <div className='search-filter'>
                <label for='input-filter'>Tìm kiếm</label>
                <div className='input-container'>
                    <img src={searchIcon} />
                    <input type='text' id='input-filter' placeholder='Tìm theo tên phân nhóm, tiếp đầu ngữ'
                        autoComplete='off' value={input} onChange={(e) => handleChange(e)}></input>
                </div>
            </div>
            <div className='btn-container'>
                <i><img src={searchIconWhite} /></i>
                <button onClick={(e) => searchFilter(e)}>Tìm</button>
            </div>
        </div>
        <table className='table-container'>
            <tr className='table-head'>
                <th className='group-th'>Phân nhóm</th>
                <th className='tdn-th'>Tiếp đầu ngữ</th>
                <th className='value-th'>Giá trị PMH/coupon</th>
                <th className='description-th'>Diễn giải</th>
                <th className='btn-th'></th>
            </tr>
            {props.map(row => {
                return <tr>
                    <td>
                        <div className='cell1'>
                            <td>{row.tenCty}</td>
                            <td><i>Phân nhóm cha | </i>{row.phanNhomCha}</td>
                        </div>
                    </td>
                    <td>
                        <div className='cell2'>
                            <td>{row.tiepDauNgu1}</td>
                            <td><i>{row.tiepDauNgu2}</i></td>
                        </div>
                    </td>
                    <td className='cell3'>
                        <div>
                            <span>{row.giaTri}</span>
                        </div>

                    </td>
                    <td className='cell4'>{row.dienGiai}</td>
                    <td className='cell5'>
                        <button onClick={() => console.log(row)} className='dots-btn'><img src={dotsIcon} /></button>
                    </td>
                </tr>
            })}
        </table>
    </div>

}

export default Filter