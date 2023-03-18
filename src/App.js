import { tab } from '@testing-library/user-event/dist/tab';
import { useState } from 'react';
import './App.css';
import AddCheck from './components/Add-Check/AddCheck';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import SideMenu from './components/SideMenu/SideMenu';

const tableArr = [
  {
    id: 1,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Coupon',
    tiepDauNgu1: 'DEF',
    tiepDauNgu2: 'DE',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 2,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 3,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 4,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 5,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 6,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 7,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 8,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 9,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },

  {
    id: 10,
    tenCty: 'Rạng Đông',
    phanNhomCha: 'Voucher',
    tiepDauNgu1: 'ABC',
    tiepDauNgu2: 'AB',
    giaTri: '100,000',
    dienGiai: 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'
  },
]

function App() {

  let [table, setTable] = useState(tableArr)
  let [input, setInput] = useState("")

  const checkVoucher = (event) => {
    if (event.target.checked) {
      setTable(tableArr.filter(result => {
        return result.phanNhomCha == 'Voucher'
      }))
    }
    else {
      setTable(tableArr)
    }
  }

  const checkCoupon = (event) => {
    if (event.target.checked) {
      setTable(tableArr.filter(result => {
        return result.phanNhomCha == 'Coupon'
      }))
    }
    else {
      setTable(tableArr)
    }
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const deleteFilter = () => {
    setInput("")
    setTable(tableArr)
  }

  const searchFilter = (event) => {
    if (event.target) {
      if (input === 'Voucher' || input === 'voucher') {
        setTable(tableArr.filter(result => {
          return result.phanNhomCha === 'Voucher'
        }))
      }
      else if (input === 'Coupon' || input === 'coupon') {
        setTable(tableArr.filter(result => {
          return result.phanNhomCha === 'Coupon'
        }))
      }
      else if (input != "") {
        setTable(tableArr.filter(result => {
          return input === result.tiepDauNgu1 || input === result.tiepDauNgu2
        }))

      }
    }
  }
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <AddCheck checkVoucher={checkVoucher} checkCoupon={checkCoupon} />
      <Filter props={table} input={input} handleChange={handleChange}
        deleteFilter={deleteFilter} searchFilter={searchFilter} />
      <Pagination />
    </div>
  );
}

export default App;
