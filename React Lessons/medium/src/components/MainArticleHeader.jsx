import CassieProfile from "../images/cassie-profile.svg";
import Icons from "./Icons";
export default function MainArticleHeader() {
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-md-7">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
              <div>
                <img src={CassieProfile} alt="img" />
              </div>
              <div>
                <div className="author-name">Cassie Kozyrkov</div>
                <div className="d-flex header-mini-text">
                  <div> Dec 27, 2022 </div>
                  <div> 9 min read </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="d-flex icons gap-2 my-3">
                <li>
                  <a href="#">
                    <Icons />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
