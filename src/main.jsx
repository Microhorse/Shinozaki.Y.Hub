//some-inner-component.jsx
import React, { useRef, useState } from "react";
// import Swiper from 'swiper/bundle'; // 全ての機能が入っている（一括指定）
// 必要なモジュールをimportする（個別に指定する）いえ
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "../swiper/react";
import { Autoplay, Pagination } from "../swiper";

import "../swiper/swiper.scss"; // core Swiper
import "../swiper/modules/pagination/pagination.scss" // pagination module
import "../swiper/modules/navigation/navigation.scss" // navigation module
// import "../swiper/css/navigation";
// import "../swiper/css/pagination";

// Swiper stylesをインポート
import "swiper/scss/bundle" // すべてのmodules styleを含むSwiper stylesをインポート

import "./styles.css";



import * as React from "react";
import ReactDOM from "react-dom";
import SwiperCore, { Pagination, Autoplay } from "../swiper";
import { Swiper, SwiperSlide } from "../swiper/react";

// eslint-disable-next-line
import "swiper/css/bundle";
import "./styles.css";

import App from "./swiper.jsx";

ReactDOM.render(<App />, document.getElementById("app"));
    
