import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  faGem,
  faChevronUp,
  faChevronDown,
  faThLarge,
  faBuilding,
  faUser,
  faFileLines,
  faChartBar,
  faCommentDots,
  faCoins,
  faUsers,
  faFolderOpen,
  faGear,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <div className="p-3 h-100 w-25">
        <span className="text-white fs-5 opacity-100">Rentify</span>
        <hr className="text-white" />
        <span className="text-white fs-6 opacity-75 d-flex align-items-center">
          <FontAwesomeIcon icon={faGem} /> &nbsp;&nbsp; Grand Citra Tower{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="d-flex flex-column ms-2 ">
            <FontAwesomeIcon icon={faChevronUp} />
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </span>
        <hr className="text-white" />

        <div className="d-flex flex-column">
          <Link className="text-decoration-none ">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faThLarge} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Overview</span>
            </div>
          </Link>
          <Link className="text-decoration-none my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faBuilding} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">My Unit</span>
            </div>
          </Link>
          <Link className="text-decoration-none my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faUser} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Client Data</span>
            </div>
          </Link>
          <Link className="text-decoration-none  my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faFileLines} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Tower Report</span>
            </div>
          </Link>
          <Link className="text-decoration-none my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faChartBar} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Analytics</span>
            </div>
          </Link>
          <Link className="text-decoration-none  my-1">
            <div className="hover-effect">
              <FontAwesomeIcon
                className="text-white ms-1"
                icon={faCommentDots}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Messages</span>
            </div>
          </Link>
          <Link className="text-decoration-none  my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faCoins} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Finance</span>
            </div>
          </Link>

          <hr className="text-white" />

          <Link className="text-decoration-none  my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faUsers} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">CRM</span>
            </div>
          </Link>
          <Link className="text-decoration-none  my-1">
            <div className="hover-effect">
              <FontAwesomeIcon
                className="text-white ms-1"
                icon={faFolderOpen}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Report</span>
            </div>
          </Link>
          <Link className="text-decoration-none  my-1">
            <div className="hover-effect">
              <FontAwesomeIcon className="text-white ms-1" icon={faGear} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-white opacity-50">Settings</span>
            </div>
          </Link>
        </div>

        <div
          className="d-flex align-items-center text-white  p-2 rounded-pill border border-light-subtle"
          style={{ marginTop: "117%" }}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            alt="User Avatar"
            className="rounded-circle me-2 "
            width={50}
            height={50}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold">Alex Martin</span>
            <span className="opacity-50">Free Account</span>
          </div>
          <FontAwesomeIcon
            className="text-white ms-auto"
            icon={faSignOutAlt}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="bg-black mt-2 opacity-75 rounded-4    mb-3 p-3 mx-auto"
          style={{ width: "100%", height: "81vh" }}
        >
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <span className="text-white ms-3 mt-2">
                Hello,&nbsp;&nbsp;
                <strong className="text-white">Alex Martin</strong>
              </span>
              <p className="ms-3 mb-0 text-white">
                Here is your quick overview
              </p>
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              alt="User Avatar"
              className="rounded-circle ms-auto me-3"
              width={50}
              height={50}
            />
          </div>
          <div class="container-fluid text-white py-4">
            <div class="row">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <h5 class="fw-bold">Analytics Overview</h5>
                <div>
                  <button class="btn btn-outline-light btn-sm me-2">
                    <i class="bi bi-gear"></i>
                  </button>
                  <button class="btn btn-outline-light btn-sm">
                    <i class="bi bi-box-arrow-up-right"></i>
                  </button>
                </div>
              </div>

              <div class="col-md-8">
                <div class="row g-2">
                  <div class="col-lg-6 col-md-6">
                    <div
                      class="card text-white rounded-4 shadow"
                      style={{ backgroundColor: "#D4C4BA", height: "120px" }}
                    >
                      <div class="card-body ">
                        <div class="d-flex justify-content-between">
                          <span class="badge h-25 bg-success text-dark">
                            +2.5%
                          </span>
                          <i class="bi bi-arrow-up-circle rounded-circle p-1 bg-secondary text-white "></i>
                        </div>
                        <h6 class="fw-bold ">Total Sales</h6>
                        <h2 class="fw-bold text-black">$123.456</h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div
                      class="card text-dark rounded-4 shadow"
                      style={{ backgroundColor: "#CAA9A3", height: "120px" }}
                    >
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <span class="badge bg-warning h-25 text-dark">
                            +2%
                          </span>
                          <i class="bi bi-graph-up-arrow  rounded-circle p-1 bg-secondary text-white"></i>
                        </div>
                        <h6 class="fw-bold">Future Funds</h6>
                        <h2 class="fw-bold text-black">$123.456</h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div
                      class="card text-white rounded-4 shadow"
                      style={{ backgroundColor: "#E09B6B", height: "120px" }}
                    >
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <span class="badge bg-dark h-25 text-white">
                            -1.5%
                          </span>
                          <i class="bi bi-exclamation-circle rounded-circle p-1 bg-secondary text-white"></i>
                        </div>
                        <h6 class="fw-bold">Property Viewer</h6>
                        <h2 class="fw-bold text-black">$123.456</h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div
                      class="card text-dark rounded-4 shadow"
                      style={{ backgroundColor: "#849FA8", height: "120px" }}
                    >
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <span class="badge bg-primary h-25 text-white">
                            +2%
                          </span>
                          <i class="bi bi-tools rounded-circle p-1 bg-secondary text-white"></i>
                        </div>
                        <h6 class="fw-bold">Maintenance Cost</h6>
                        <h2 class="fw-bold text-black">$123.456</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-2">
                  <div
                    class="card bg-secondary rounded-4 text-white shadow"
                    style={{ height: "172px" }}
                  >
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h6 class="fw-bold">Messages</h6>
                        <a href="#" class="text-warning small">
                          View All
                        </a>
                      </div>
                      <ul class="list-group list-group-flush">
                        <div class="row">
                          <li class="list-group-item border-0 col-6 bg-secondary text-white d-flex align-items-center border-white">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                              alt="Avatar"
                              class="rounded-circle me-3"
                              style={{ width: "35px", height: "35px" }}
                            />
                            <div>
                              <strong>Rachel Green</strong>
                              <p class="mb-0 small">Hey! How are you?</p>
                            </div>
                          </li>
                          <li class="list-group-item border-end-0 col-6 bg-secondary text-white d-flex align-items-center border-white">
                            <img
                              src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?ga=GA1.1.64896669.1685076045&semt=ais_hybrid"
                              alt="Avatar"
                              class="rounded-circle me-3"
                              style={{ width: "35px", height: "35px" }}
                            />
                            <div>
                              <strong>Monica Geller</strong>
                              <p class="mb-0 small">Sent you $500.</p>
                            </div>
                          </li>
                        </div>

                        <div class="row">
                          <li class="list-group-item border-start-0 border-bottom-0 col-6 bg-secondary text-white d-flex align-items-center border-white">
                            <img
                              src="https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.64896669.1685076045&semt=ais_hybrid"
                              alt="Avatar"
                              class="rounded-circle me-3"
                              style={{ width: "35px", height: "35px" }}
                            />
                            <div>
                              <strong>Rachel Green</strong>
                              <p class="mb-0 small">Let’s catch up soon!</p>
                            </div>
                          </li>
                          <li class="list-group-item border-end-0 border-bottom-0 col-6 bg-secondary text-white d-flex align-items-center border-white">
                            <img
                              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.64896669.1685076045&semt=ais_hybrid"
                              alt="Avatar"
                              class="rounded-circle me-3"
                              style={{ width: "35px", height: "35px" }}
                            />
                            <div>
                              <strong>Joey Tribbiani</strong>
                              <p class="mb-0 small">Where's the pizza?</p>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div
                  class="card bg-dark rounded-4 text-white shadow"
                  style={{ height: "100%" }}
                >
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="fw-bold">Report</h6>
                      <button class="btn btn-outline-light btn-sm">
                        <i class="bi bi-download"></i> Download
                      </button>
                    </div>
                    <div class="mt-4">
                      <img
                        src="https://via.placeholder.com/600x300"
                        alt="Graph Placeholder"
                        class="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-black opacity-75 rounded-4 p-3 mx-auto"
          style={{ width: "100%", height: "auto" }}
        >
          <div className="d-flex flex-row align-items-center justify-content-between mb-3">
            <div className="d-flex flex-column">
              <span className="text-white ms-3 fw-bold">My Units</span>
            </div>
            <button className="btn btn-outline-light btn-sm">
              Most Favorable <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>

          {/* Cards Section */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
            {/* Card 1 */}
            <div className="col">
              <div className="card bg-dark text-white rounded-5 shadow">
                <div className="position-relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1RkVjV51r5dq2FD0rGTNJHTYlxlntpv1hA&s"
                    className="card-img-top rounded-top-5 rounded-bottom-5 rounded-end-5"
                    alt="Citraland Tower"
                  />
                  <span className="badge bg-secondary text-white position-absolute top-0 start-0 m-2">
                    For Rent
                  </span>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-1">Citraland Tower</h6>
                  <p className="card-text small mb-2 text-white opacity-50">
                    Surabaya, Indonesia
                  </p>
                  <p className="fw-bold">$755.00</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card bg-dark text-white rounded-5 shadow">
                <div className="position-relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5GDfgSFm5kNI9gQnBa_n-ir2kDCp4-_zvg&s"
                    className="card-img-top rounded-top-5 rounded-bottom-5 rounded-end-5"
                    alt="Bougenville"
                  />
                  <span className="badge bg-secondary text-white position-absolute top-0 start-0 m-2">
                    For Sale
                  </span>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-1">Bougenville</h6>
                  <p className="card-text small mb-2 text-white opacity-50">
                    Bogor, Indonesia
                  </p>
                  <p className="fw-bold">$230.35</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card bg-dark text-white rounded-5 shadow">
                <div className="position-relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpNsS7cFb0fRttEbcXrfD9iTT2VBuVAvt-Ng&s"
                    className="card-img-top rounded-top-5 rounded-bottom-5 rounded-end-5"
                    alt="Manahan Mansion"
                  />
                  <span className="badge bg-secondary text-white position-absolute top-0 start-0 m-2">
                    For Rent
                  </span>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-1">Manahan Mansion</h6>
                  <p className="card-text small mb-2 text-white opacity-50">
                    Solo, Indonesia
                  </p>
                  <p className="fw-bold">$665.00</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col">
              <div className="card bg-dark text-white rounded-5 shadow">
                <div className="position-relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_G5xD6udrmN79ChEDnF8p-VAgvtA8id3eg&s"
                    className="card-img-top rounded-top-5 rounded-bottom-5 rounded-end-5"
                    alt="Pokoh Baru"
                  />
                  <span className="badge bg-secondary text-white position-absolute top-0 start-0 m-2">
                    For Rent
                  </span>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-1">Pokoh Baru</h6>
                  <p className="card-text small mb-2 text-white opacity-50">
                    Karanganyar, Indonesia
                  </p>
                  <p className="fw-bold">$860.00</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col">
              <div className="card bg-dark text-white rounded-5 shadow">
                <div className="position-relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMGVSydL1pJbGezW6MW5zuWcgDZwwhFRMoQ&s"
                    className="card-img-top rounded-top-5 rounded-bottom-5 rounded-end-5"
                    alt="Graha Trunojoyo"
                  />
                  <span className="badge bg-secondary text-white position-absolute top-0 start-0 m-2">
                    For Rent
                  </span>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-1">Graha Trunojoyo</h6>
                  <p className="card-text small mb-2 text-white opacity-50">
                    Madura, Indonesia
                  </p>
                  <p className="fw-bold">$755.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
