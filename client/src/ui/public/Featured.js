import Icon1 from "../../../public/img/icon/feature-icon-1.svg";
import Icon2 from "../../../public/img/icon/feature-icon-2.svg";
import Icon3 from "../../../public/img/icon/feature-icon-3.svg";
import Icon4 from "../../../public/img/icon/feature-icon-4.svg";
import Icon5 from "../../../public/img/icon/feature-icon-5.svg";

const Featured = () => {
  const backgroundImage = "/img/shape/footer-shape-1.svg";

  return (
    <section
      className="feature-area mainfeature__bg pt-50 pb-40"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="mainfeature__border pb-15">
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <Icon1 />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Giao hàng nhanh chóng</h4>
                  <p>Toàn quốc</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <Icon2 />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Thanh toán an toàn</h4>
                  <p>100% thanh toán an toàn</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <Icon3 />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Giảm giá trực tuyến</h4>
                  <p>Thêm nhiều ưu đãi về giá</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <Icon4 />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Hỗ trợ nhanh chóng</h4>
                  <p>Hỗ trợ 24/7</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <Icon5 />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Chất lượng</h4>
                  <p>Sản phẩm được lựa chọn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
