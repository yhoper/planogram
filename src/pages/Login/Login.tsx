import { Link } from "react-router-dom";
import bg from "../../assets/lg_bg.avif";
const Login = () => {
  return (
    <div>
      <div id="visual-logo" className="visual__top">
        <div className="landing-visual__scrolldown">
          <Link to="/lg/dashboard">
            <button type="button" className="landing-visual__scrolldown__btn">
              Scroll Down
            </button>
          </Link>
        </div>
        <div className="visual-innner">
          <div className="download_assetss">
            <img
              style={{ width: "100%" }}
              src={bg}
              alt=""
              className="download_assets__thumb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
