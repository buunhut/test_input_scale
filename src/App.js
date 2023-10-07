import "./app.scss";
import React, { useState } from "react";

function App() {
  //khai báo giá trị ban đầu
  //search
  const [backItem, setBackItem] = useState(false);
  const [showGoiY, setShowGoiY] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [ketQuaTimKiem, setKetQuaTimKiem] = useState([]);
  const [showTimKiem, setShowTimKiem] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showTrangChu, setShowTrangChu] = useState(false);
  const [showDanhMuc, setShowDanhMuc] = useState(false);
  const [showThuongHieu, setShowThuongHieu] = useState(false);
  const [showThongBao, setShowThongBao] = useState(false);
  const [showTaiKhoan, setShowTaiKhoan] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false)

  //các chức năng click chuột

  const clickSearch = () => {
    setBackItem(true);
    setShowGoiY(true);
    setShowTimKiem(true);
    lockScroll()
  };
  //nhập nội dung tìm kiếm
  const timKiem = (event) => {
    setShowGoiY(false);
    const { value } = event.target;
    setKeyword(value);
  };

  //click gợi ý
  const clickGoiY = (event) => {
    const value = event.target.innerText
    setKeyword(value)
    setShowGoiY(false);


  };

  const clearKeyword = () => {
    setKeyword("");
  };

  const clickBack = () => {
    setBackItem(false);
    setShowGoiY(false);
    setShowTimKiem(false);
    setKeyword("");

  };

  const clickCart = () => {
    setShowOverlay(!showOverlay)
    setShowCart(!showCart)
    lockScroll()
  }
  const clickTrangChu = () => {
    console.log("click trang chủ");
  };

  const clickDanhMuc = () => {
    console.log("click danh mục");
  };

  const clickThuongHieu = () => {
    console.log("click thương hiệu");
  };

  const clickThongBao = () => {
    console.log("click thông báo");
  };

  const clickTaiKhoan = () => {
    console.log("click tài khoản");
  };

  const clickOverlay = () => {
    setShowOverlay(false)
    setShowCart(!showCart)
    unlockScroll()
  }


  const lockScroll = () => {
    // Khi bạn muốn khoá cuộn trang
    document.body.style.overflow = "hidden";

  }
  const unlockScroll = () => {
    // Khi bạn muốn mở khoá cuộn trang
    document.body.style.overflow = "auto";

  }


  return (
    <div className="App">
      <div id="header">
        <div className="container">
          <div className="content">
            <div className="contentItem">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="contentItem">
              <p>Bách hoá HÂN HÂN</p>
            </div>
            <div className="contentItem">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="content">
            {backItem ? (
              <div className="backItem" onClick={clickBack}>
                <i className="fa-solid fa-angle-left"></i>
              </div>
            ) : (
              ""
            )}

            <div className="inputItem">
              <input
                id="search"
                name="search"
                value={keyword}
                type="text"
                placeholder="Tìm kiếm sản phẩm,..."
                onClick={clickSearch}
                onChange={timKiem}
              />
              <i className="fa-solid fa-magnifying-glass myGlass"></i>
              {keyword !== "" ? (
                <i
                  className="fa-solid fa-circle-xmark myClose"
                  onClick={clearKeyword}
                ></i>
              ) : (
                ""
              )}
            </div>
            <div className="cart" onClick={clickCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>

      {showTimKiem ? (
        <div id="main" className="timKiem">
          <div className="container">
            <div className="content" onClick={unlockScroll}>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
              <div className="proItem">
                <p>Kết quả tìm kiếm: {keyword}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="main">
          <div className="container">
            <div className="content">
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
              <div className="proItem">
                <p>trang chủ</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="footer">
        <div className="container">
          <div className="content">
            <div className="footerItem">
              <i className="fa-solid fa-house"></i>
              <p>Trang chủ</p>
            </div>
            <div className="footerItem">
              <i className="fa-solid fa-layer-group"></i>
              <p>Danh mục</p>
            </div>
            <div className="footerItem">
              <i className="fa-solid fa-bag-shopping"></i>
              <p>Thương hiệu</p>
            </div>
            <div className="footerItem">
              <i className="fa-solid fa-bell"></i>
              <p>Thông báo</p>
            </div>
            <div className="footerItem">
              <i className="fa-solid fa-user"></i>
              <p>Tài khoản</p>
            </div>
          </div>
        </div>
      </div>

      {/* dùng chung */}
      {
        showOverlay ? (
          <div id="overlay" onClick={clickOverlay}></div>
        ) : ""
      }
      {showGoiY ? (
        <div id="goiY">
          <div className="container">
            <p>Tìm kiếm phổ biến</p>
            <div className="content">
              <span onClick={clickGoiY}>bia</span>
              <span onClick={clickGoiY}>sữa tươi</span>
              <span onClick={clickGoiY}>đường</span>
              <span onClick={clickGoiY}>nước mắm</span>
              <span onClick={clickGoiY}>mi</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div id="gioHang" className={showCart ? "show" : ""}>
        <div className="content">
          <div className="title">
            <p>Giỏ hàng của bạn (10)</p>
            <button type="button" onClick={clickCart}>Đóng</button>


          </div>
          <div className="main">

          </div>
          <div className="bottom">
            <p>Tổng: 17,900,000đ</p>
            <button type="button">Đặt hàng ngay</button>

          </div>
        </div>

      </div>




    </div>
  );
}

export default App;
