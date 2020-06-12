import * as React from "react";
import { motion } from "framer-motion";

function ContactAvatar(props) {
  return (
    <motion.svg width={395} height={500} viewBox="0 0 395 500" {...props}
        drag="y"
        dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
        }}
    >
      
      <defs>
        <linearGradient
          id="prefix__a"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#f0f2f5" />
          <stop offset={0.99} stopColor="#f5f7f8" />
          <stop offset={1} stopColor="#f5f7f8" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={0.426}
          y1={0.996}
          x2={0.568}
          y2={0.037}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#411d03" />
          <stop offset={1} stopColor="#7b3b0c" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={0.969}
          y1={0.712}
          x2={0.069}
          y2={0.343}
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__d"
          x1={-0.001}
          y1={0.499}
          x2={1}
          y2={0.499}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#28949c" />
          <stop offset={0.44} stopColor="#2b979f" />
          <stop offset={0.89} stopColor="#157178" />
          <stop offset={1} stopColor="#0b575d" />
        </linearGradient>
        <linearGradient
          id="prefix__e"
          x1={0.018}
          y1={0.517}
          x2={1.035}
          y2={0.484}
          xlinkHref="#prefix__d"
        />
        <linearGradient
          id="prefix__f"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__d"
        />
        <linearGradient
          id="prefix__g"
          x1={-0.24}
          y1={1.206}
          x2={0.323}
          y2={0.239}
          xlinkHref="#prefix__d"
        />
        <linearGradient
          id="prefix__h"
          x1={0.119}
          y1={0.297}
          x2={0.762}
          y2={0.539}
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__i"
          x1={-0.44}
          y1={0.575}
          x2={0.472}
          y2={0.497}
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__j"
          x1={0.957}
          y1={0.26}
          x2={0.048}
          y2={0.979}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#652e05" />
          <stop offset={1} stopColor="#461e00" />
        </linearGradient>
        <linearGradient
          id="prefix__k"
          x1={0.295}
          y1={0.548}
          x2={0.99}
          y2={0.387}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#a04400" stopOpacity={0} />
          <stop offset={0.18} stopColor="#9a4100" stopOpacity={0.141} />
          <stop offset={0.52} stopColor="#8a3b00" stopOpacity={0.522} />
          <stop offset={0.9} stopColor="#753200" />
        </linearGradient>
        <linearGradient
          id="prefix__l"
          x1={0.99}
          y1={0.363}
          x2={0.052}
          y2={0.58}
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__m"
          x1={0.383}
          y1={1.01}
          x2={0.603}
          y2={0.006}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#a04400" />
          <stop offset={0.3} stopColor="#9c4200" />
          <stop offset={0.62} stopColor="#8e3d00" />
          <stop offset={0.95} stopColor="#793300" />
          <stop offset={1} stopColor="#753200" />
        </linearGradient>
        <linearGradient
          id="prefix__n"
          x1={0.913}
          y1={0.806}
          x2={0.935}
          y2={-0.195}
          xlinkHref="#prefix__m"
        />
        <clipPath id="prefix__p">
          <path d="M0 0h395v500H0z" />
        </clipPath>
        <style>
          {
            ".prefix__c{fill:#004445}.prefix__e{fill:#f0eff3}.prefix__g{fill:#fff}"
          }
        </style>
      </defs>
      <g id="prefix__o" clipPath="url(#prefix__p)">
        <g transform="translate(-114 38.615)">
          <path
            d="M496.212 223.634C452.406 134.088 389.6 8.853 226.815 8.518c-165.292-.341-113.677 167.359-38.2 219.136 1.946 1.335 15.621 13.813 18.094 15.078 91.561 46.831-158.024 77.427-62.323 136.081 96.871 59.363 270.713 46.178 321.668 0s49.075-116.493 30.158-155.179z"
            transform="translate(.465 -.001)"
            fill="url(#prefix__a)"
          />
          <rect
            className="prefix__c"
            width={170.645}
            height={353.392}
            rx={16.49}
            transform="translate(254.061 26.775)"
          />
          <rect
            width={150.589}
            height={324.379}
            rx={12.18}
            transform="translate(264.092 41.282)"
            fill="#2c7873"
          />
          <path
            className="prefix__c"
            d="M0 0h73.065a15.279 15.279 0 01-15.247 15.279H15.279A15.279 15.279 0 010 0z"
            transform="translate(302.85 36.17)"
          />
          <rect
            className="prefix__e"
            width={42.659}
            height={13.439}
            rx={4.2}
            transform="translate(362.293 60.263)"
          />
          <rect
            className="prefix__e"
            width={50.303}
            height={14.339}
            rx={4.2}
            transform="translate(275.621 86.314)"
          />
          <rect
            className="prefix__e"
            width={42.022}
            height={5.127}
            rx={2.564}
            transform="translate(279.761 64.419)"
          />
          <rect
            className="prefix__e"
            width={119.068}
            height={179.475}
            rx={7.07}
            transform="translate(279.849 109.116)"
          />
          <rect
            className="prefix__e"
            width={119.068}
            height={31.76}
            rx={7.07}
            transform="translate(279.849 305.143)"
          />
          <circle
            cx={43.615}
            cy={43.615}
            r={43.615}
            transform="translate(295.772 123.057)"
            strokeWidth={6}
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
          />
          <rect
            className="prefix__g"
            width={95.533}
            height={23.24}
            rx={7.41}
            transform="translate(291.616 223.209)"
          />
          <rect
            className="prefix__g"
            width={95.533}
            height={23.24}
            rx={7.41}
            transform="translate(291.616 256.003)"
          />
          <path
            d="M1.139 0L0 7.994l2.707 7.42 2.452 1.377 8.049-4.451 1.409-3.734L11.7.939 1.139 0z"
            transform="translate(214.418 346.211)"
            fill="url(#prefix__b)"
          />
          <path
            d="M3.615 0A80.2 80.2 0 010 10.605S8.615 16.7 9.443 17.4c.693-2.771 8.463-2.452 9.355-4.777s-5.04-7.412-4.777-10.263C11.584 2.444 5.032.573 3.615 0z"
            transform="translate(236.942 288.758)"
            fill="url(#prefix__c)"
          />
          <path
            className="prefix__c"
            d="M65.634 94.857L11.987 83.6A14.667 14.667 0 01.642 64.889L20.9 11.226 25.212.144S66.868-1.648 69.464 7.42c3.981 13.742 1 33.487-.8 40.382-3.081 11.879-3.5 26.41-3.5 26.41l4.49 1.823a7.19 7.19 0 011.736.661l4.378 3.813-3.049 13.7-5.287.716a5.254 5.254 0 01-1.8-.071z"
            transform="translate(167.192 208.201)"
          />
          <path
            className="prefix__c"
            d="M22.683 4.769l-.8 35.032a10.446 10.446 0 01-.2 2.054l-2.524 8.2a16.839 16.839 0 01-6.369 1.592c-3.089 0-7.07-1.935-7.07-1.935l-2.384-6.726a10.271 10.271 0 01-.342-2.142L0 0z"
            transform="translate(208.208 297.445)"
          />
          <path
            d="M22.259.093s4.2 5.725 3.925 8.288 7.412-.1 8.113-4.347 2.5-2.11 3.065.263 2.452 2.389 2.826 4.061a6.454 6.454 0 01-3.312 7.795c-4.355 2.524-9.084 1.465-12.572 3.185S17.052 27.1 13.318 27.6s-9.849.144-12.739-5.573 5.868-8.806 8.1-9.554 6.369-5.828 8.1-7.962S20.093-.56 22.259.093z"
            transform="translate(192.08 350.226)"
            fill="url(#prefix__d)"
          />
          <path
            d="M228.805 355.096s2.341 3.185-1.5 6.131-9.829 2.869-13.181 6.496-5.94 7.166-11.88 7.126-7.3-1.672-7.3-1.672"
            strokeWidth={0.54}
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
          />
          <path
            d="M9.057 33.041s-.462 5.334.51 7.221a3.938 3.938 0 004.116 2.138c1.576-.064 3.615-2.03 5.159-8.758a196.131 196.131 0 003.32-20.916 36.863 36.863 0 00-.262-8.841A3.981 3.981 0 0018.4.7a11.7 11.7 0 01-1.93-.39c-1.17-.382-2.428 0-3.384-.223S5.856-.048 5.172 1.8s5.008 3.98 5.087 7.913-4.713 5-4.713 5-1.935-1.593-2.986-.478-2.15.135-2.516.979S1.7 18.622 1.7 18.622s4.857 8.455 6.8 11.768a9.936 9.936 0 01.557 2.651z"
            transform="translate(238.602 287.023)"
            fill="url(#prefix__e)"
          />
          <path
            d="M253.256 326.911c5.048-12.365 3.424-25.709 3.424-25.709.382-3.846 2.388-7.906-1.115-12.315l-.279-.4"
            strokeWidth={0.69}
            strokeLinecap="round"
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
          />
          <path
            d="M65.422 117.246l-10.661-3.5 10.892-44.12s.8-16.831-.231-24.881c-3.543 28.861-6.035 48.5-6.035 48.5s-3.4.072-7.611.1c-6.059 0-15.04-.35-22.787-2.389-7.962-2.1-16.935-4.642-16.935-4.642l-2.5 10.2L0 99.427S5.637 19.419 23.75 4.953C29.777.175 40.47-.891 45.167.669s27.994 7.166 32.588 13.042c7.269 9.26 3.344 50.159 2.428 58.678a13.909 13.909 0 01-.653 3.01z"
            transform="translate(179.395 126.696)"
            fill="url(#prefix__f)"
          />
          <path
            d="M221.728 128.265a9.96 9.96 0 007.962 9.554c8.038 1.846 12.778-4.777 12.778-4.777"
            strokeWidth={0.67}
            strokeLinecap="round"
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
          />
          <path
            d="M13.161 0C5.4 4.912 0 50.446 0 50.446l7.962 2.221S8.384 24.419 13.161 0z"
            transform="translate(191.457 162.564)"
            fill="url(#prefix__g)"
          />
          <g>
            <path
              d="M1.9 5.866C2.914 4.664 4.674 1.129 5.374.078 3.432-.432.685 1.67 0 3.326c.51.135 1.529 1.967 1.9 2.54z"
              transform="translate(247.014 101.443)"
              fill="url(#prefix__h)"
            />
            <path
              d="M15.549 52.366a7.166 7.166 0 01-5.685-6.529 10.446 10.446 0 01.43-2.675l.231-.947.2-.876.247-1.075a13.065 13.065 0 01-1.449-.494c-3.718-1.5-9.164-5.5-9.506-12.2C-.224 22.9 2.4 19.316 3.1 16.777s.111-4.618.382-7.588c.342-3.806 2.986-8 5.064-8.615C17.89-2.22 31.377 6.092 31.377 6.092s4.347 3.439-.239 13.169c.6-.207-.963 1.7-.239 1.736a4.49 4.49 0 013.36 1.521c1.481 1.9.605 5.382-4.26 9.236a1.378 1.378 0 01-.167.135 23.511 23.511 0 00-.924 2.866 2.179 2.179 0 01-.127.454c-.47 1.791-1.091 4.108-1.68 6.369-.852 3.24-1.457 6.059-1.712 7.166-.628 2.595-4.267 4.896-9.84 3.622z"
              transform="translate(214.546 82.985)"
              fill="url(#prefix__i)"
            />
            <path
              d="M19.26 3.455A23.336 23.336 0 011 10.462l.2-.876.247-1.075A13.065 13.065 0 010 8.018C3.925 6.72 14.889 2.978 20.478 0a1.377 1.377 0 01-.167.135A23.511 23.511 0 0019.387 3c-.04.121-.087.3-.127.455z"
              transform="translate(224.06 114.714)"
              fill="url(#prefix__j)"
            />
            <path
              d="M25.518 19.261c4.578-9.729.231-13.169.231-13.169S12.261-2.22 2.914.574C1.449 1 .725 2.963 0 4.555c3.9-1.743 10.159 1.019 15.279 2.524 2.444.725.645 3.073 1.306 3.376 5.732.446 8.607 4.148 5.573 11.616l3.025-1.083c-.525-.159.9-1.926.335-1.727z"
              transform="translate(220.167 82.961)"
              fill="url(#prefix__k)"
            />
            <path
              d="M0 .64S1.847-.9 2.452.792.908 4.534.908 4.534z"
              transform="translate(244.96 106.653)"
              fill="url(#prefix__l)"
            />
            <path
              className="prefix__c"
              d="M33.288 26.262a25.478 25.478 0 001.656-6.417c.987-5.9-1.7-9.65-6.959-13l-5.143-2.85c-.47-.263-9.26-4.65-14.5-3.909-1.965.277-4.974 1.686-5.571 3.183C1.25 7.146.318 9.176 0 12.473c5.1-7.166 5.494 3.83 18.678-.143 2.444-.732.653 3.073 1.306 3.376 6.465.51 9.307 5.143 4.156 14.674 1.847-.263 3.185-.8 4.124-.533 1.712-.917 4.61-2.693 5.024-3.585z"
              transform="translate(219.554 74.757)"
            />
            <path
              className="prefix__c"
              d="M30.678 2.412c.255-.127 1.011-.4 1.011-.4L32.024 0l-3.3.661A1.7 1.7 0 0027.406 1.9L25.59 8.79c-4.506.724-15.31 3.686-16.966 3.31-2.1-.478-1.744-3.185-3.041-3.073S3.831 10.7 3.1 10.4A12.158 12.158 0 01.463 6.242S.025 10.932 0 11.775c-.064 1.959 2.221 6.911 2.221 6.911a1.879 1.879 0 001.234 1.091l4.873 1.354 2.93-.486c4.021-.533 14.586-4.777 15.024-5.8 2.589-5.832 1.801-11.167 4.396-12.433z"
              transform="translate(214.218 102.723)"
            />
          </g>
          <path
            d="M5.184 3.28A6.688 6.688 0 002.6 5.987a10.223 10.223 0 00-.8 4.029 11.683 11.683 0 01-.939 4.9c-.748 1.314-1.091 1.2-.717 1.879s2.293.8 3.041-.231 1.967-2.818 1.967-2.818a15.056 15.056 0 00.924 2.54c.549 1.146-.143 4.4-.844 5.462-1.473 2.229-3.025 4.928-2.834 5.963s2.261-.271 2.261-.271 5.056-3.74 6.194-6.14a12.812 12.812 0 001.768-6.139c-.08-2.691-.127-8.646-.127-8.646l1.026-4.27L6.641 0S5.543 3.121 5.184 3.28z"
            transform="translate(229.027 240.971)"
            fill="url(#prefix__m)"
          />
          <path
            d="M8.809 3.726a6.728 6.728 0 012.269 2.986A10.35 10.35 0 0111.4 10.8a11.728 11.728 0 00.39 4.976c.6 1.393.947 1.314.494 1.943s-2.384.521-2.989-.569-1.632-3.018-1.632-3.018a15.334 15.334 0 01-1.21 2.389c-.677 1.083-.35 4.387.231 5.525 1.218 2.389 2.452 5.239 2.15 6.242s-2.221-.525-2.221-.525-4.595-4.263-5.455-6.792a12.614 12.614 0 01-1.067-6.3c.39-2.667 1.091-8.559 1.091-8.559L.624 1.847S5 .788 7.336 0c.812.955 1.139 3.551 1.473 3.726z"
            transform="translate(180.618 223.185)"
            fill="url(#prefix__n)"
          />
        </g>
      </g>
    </motion.svg>
  )
}

export default ContactAvatar;