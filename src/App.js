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
  const [showOverlay, setShowOverlay] = useState(false);

  //các chức năng click chuột

  const clickSearch = () => {
    setBackItem(true);
    setShowGoiY(true);
    setShowTimKiem(true);
    lockScroll();
  };
  //nhập nội dung tìm kiếm
  const timKiem = (event) => {
    setShowGoiY(false);
    const { value } = event.target;
    setKeyword(value);
  };

  //click gợi ý
  const clickGoiY = (event) => {
    const value = event.target.innerText;
    setKeyword(value);
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
    setShowOverlay(!showOverlay);
    setShowCart(!showCart);
  };

  const clickThemVaoGio = (id) => {
    const updateListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: 1,
        }
      } else {
        return item
      }
    })
    setListSanPham(updateListSanPham)
  };
  const clickGiamSoLuong = (id) => {
    const updateListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: item.order - 1,
        }
      } else {
        return item
      }
    })
    setListSanPham(updateListSanPham)


  };
  const clickTangSoLuong = (id) => {
    const updateListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: item.order + 1,
        }
      } else {
        return item
      }
    })
    setListSanPham(updateListSanPham)
  };
  const clickXoaOrder = () => {
    console.log("xoá");
  };
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
    setShowOverlay(!showOverlay);
    setShowCart(!showCart);
    unlockScroll();
  };

  const lockScroll = () => {
    // Khi bạn muốn khoá cuộn trang
    document.body.style.overflow = "hidden";
  };
  const unlockScroll = () => {
    // Khi bạn muốn mở khoá cuộn trang
    document.body.style.overflow = "auto";
  };

  // const capNhatGioHang = () => {
  //   const gioHang = JSON.parse(localStorage.getItem("gioHang"));
  //   if (gioHang) {
  //     setGioHang(gioHang);
  //   }
  // };

  // const capNhatLocal = (gioHang) => {
  //   localStorage.setItem("gioHang", JSON.stringify(gioHang));
  // };

  //dữ liệu gọi từ backend
  const data = [
    {
      id: 1,
      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 4500,
      giamGia: 20,
      gif: 1,
      order: 0,
    },
    {
      id: 2,

      hinhAnh:
        "https://cooponline.vn/wp-content/uploads/2022/06/bia-tiger-lon-330ml-2023227.jpg",
      tenSp: "Bia tiger lon 330ml",
      giaVon: 20000,
      giamGia: 22,
      gif: 0,
      order: 0,
    },
    {
      id: 3,

      hinhAnh:
        "https://dungculambanh.com.vn/wp-content/uploads/2020/11/duong-cat-bien-hoa-500gr.jpg",
      tenSp: "Đường cát trắng Biên hoà, bịch 1kg",
      giaVon: 28000,
      giamGia: 5,
      gif: 1,
      order: 0,
    },
    {
      id: 4,

      hinhAnh:
        "https://product.hstatic.net/200000548939/product/240-2_0773d428c19d4591b36804e244bf557c_ba4976017a8a4745af0a98bf7fb699b8_master.jpg",
      tenSp: "Nước mắm Thuận Phát, chai 1 lít",
      giaVon: 29000,
      giamGia: 8,
      gif: 0,
      order: 0,
    },
    {
      id: 5,

      hinhAnh:
        "https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/256191.jpg",
      tenSp: "Bột ngọt Vedan bịch 1kg",
      giaVon: 22000,
      giamGia: 0,
      gif: 0,
      order: 0,
    },
    {
      id: 6,

      hinhAnh: "https://alohay.vn/cdn/uploadv2/news/1596595864_13.jpg",
      tenSp: "Nước tương Chinsu chai 250ml",
      giaVon: 9000,
      giamGia: 10,
      gif: 0,
      order: 0,
    },
    {
      id: 7,

      hinhAnh:
        "https://product.hstatic.net/200000073345/product/tuong_ot_cholimex_pet_270gr_7e6adf3e97fc4f0aa3959b8e834abe9e_1024x1024.jpg",
      tenSp: "Tương ớt Cholimex chai 270g",
      giaVon: 7000,
      giamGia: 12,
      gif: 0,
      order: 0,
    },
    {
      id: 8,

      hinhAnh:
        "https://saphavi.eu/cdn/shop/products/8936017362331_1.jpg?v=1575477392",
      tenSp: "Nước mắm Chinsu chai 500ml",
      giaVon: 12000,
      giamGia: 3,
      gif: 1,
      order: 0,
    },
    {
      id: 9,

      hinhAnh:
        "https://product.hstatic.net/1000074072/product/bich_fino_sua_tuoi_-_khong_duong_c6990e9228e343b3b76885870916fec6_master.png",
      tenSp: "Sữa tươi Vinamilk bịch 220ml",
      giaVon: 7000,
      giamGia: 5,
      gif: 1,
      order: 0,
    },
    {
      id: 10,

      hinhAnh: "https://phuhuong.vn/watermark/sua/vnm-1l-duong.gif",
      tenSp: "Sữa tươi Vinamilk hộp 1 lít",
      giaVon: 89000,
      giamGia: 19,
      gif: 1,
      order: 0,
    },
    {
      id: 11,

      hinhAnh:
        "https://vietmartjp.com/wp-content/uploads/2020/09/tam-thai-tu-nhat-ca-gia-vi-viet-o-nhat-vietmart-99.jpg",
      tenSp: "Nước tương Tam Thái Tử chai 500ml",
      giaVon: 22000,
      giamGia: 29,
      gif: 1,
      order: 0,
    },
    {
      id: 12,

      hinhAnh:
        "https://cooponline.vn/wp-content/uploads/2020/10/mi-gau-do-ga-soi-pho-goi-63g.jpg",
      tenSp: "Mì Gấu đỏ",
      giaVon: 3600,
      giamGia: 6,
      gif: 1,
      order: 0,
    },
  ];

  const [listSanPham, setListSanPham] = useState(data);

  console.log(listSanPham);
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
            </div>
          </div>
        </div>
      ) : (
        <div id="main">
          <div className="container">
            <div className="content">
              {listSanPham?.map((item) => {
                let { id, hinhAnh, tenSp, giaVon, giamGia, gif, order } = item;
                let giaGiam = giaVon - (giaVon * giamGia) / 100;
                return (
                  <div className="proItem" key={id}>
                    <div className="hinhAnh">
                      <img src={hinhAnh} alt="hình" />
                    </div>
                    <div className="text">
                      <div className="tenSp">
                        <p>{tenSp}</p>
                      </div>
                      <div className="giaSp">
                        <p className="giaGiam">{giaGiam.toLocaleString()}đ</p>
                        <p className="giaAo">
                          {giamGia > 0 ? giaVon.toLocaleString() + "đ" : null}
                        </p>
                      </div>

                      {order > 0 ? (
                        <div className="order">
                          <div
                            className="giamSoLuong"
                            onClick={() => clickGiamSoLuong(id)}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </div>
                          <div className="soLuong">
                            <span>{order}</span>
                          </div>
                          <div
                            className="tangSoLuong"
                            onClick={() => clickTangSoLuong(id)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      ) : (
                        <div className="themVaoGio">
                          <button type="button" onClick={() => clickThemVaoGio(id)}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      )}

                      {giamGia > 0 ? (
                        <div className="giamGia">
                          <span>-{giamGia}%</span>
                        </div>
                      ) : null}

                      <div className="heart">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                      {gif === 1 ? (
                        <div className="gif">
                          <i className="fa-solid fa-gift"></i>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
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
      {showOverlay ? <div id="overlay" onClick={clickOverlay}></div> : ""}
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
            <button type="button" onClick={clickCart}>
              Đóng
            </button>
          </div>
          <div className="main"></div>
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
