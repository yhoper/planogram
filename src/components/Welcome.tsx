import { redirect } from "react-router-dom";

const Welcome = () => {
  const useNavigate = redirect("/dashboard");
  return (
    <div>
      <div id="visual-logo" className="visual__top">
        <div className="landing-visual__scrolldown">
          <a href="/dashboard">
            <button type="button" className="landing-visual__scrolldown__btn">
              Scroll Down
            </button>
          </a>
        </div>
        <div className="visual-innner">
          <div className="download_assets">
            <img
              style={{ width: "100%" }}
              src="https://www.lg.com/content/dam/lge/global/our-brand/src/mocks/bs0002/lg_electronics_logo_visual_background.png"
              alt=""
              className="download_assets__thumb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;