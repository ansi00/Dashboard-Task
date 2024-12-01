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
          style={{ marginTop: "30%" }}
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
          style={{ width: "100%", height: "70vh" }}
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
          <div class="container-fluid  text-white py-4">
  
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h5 class="fw-bold">Analytics Overview</h5>
    <div>
      <button class="btn btn-outline-light btn-sm me-2"><i class="bi bi-gear"></i></button>
      <button class="btn btn-outline-light btn-sm"><i class="bi bi-box-arrow-up-right"></i></button>
    </div>
  </div>

  


</div>

        </div>
        <div
          className="bg-black opacity-75  rounded-4   p-3 mx-auto"
          style={{ width: "100%", height: "25vh" }}
        >
          
        </div>
      </div>
    </div>
  );
}
