import * as React from "react";
import { motion } from "framer-motion";


function SvgComponent(props) {
  
  
  return (
    <motion.svg id="Layer_1" data-name="Layer 1" viewBox="0 0 391.1 410.2" {...props}
      width={395} height={500}
      drag="y"
      dragConstraints={{
        top: -50,
        bottom: 50,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}      
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={-853.5}
          y1={39.8}
          x2={-852.5}
          y2={39.8}
          gradientTransform="matrix(391.09 0 0 410.03 333807.9 -16052)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f0f2f5" />
          <stop offset={1} stopColor="#f5f7f8" />
          <stop offset={1} stopColor="#f5f7f8" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1={-956.4}
          y1={263.6}
          x2={-956.3}
          y2={262.7}
          gradientTransform="matrix(14.62 0 0 16.79 14086.4 -4025.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#411d03" />
          <stop offset={1} stopColor="#7b3b0c" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1={-970.9}
          y1={262.8}
          x2={-971.8}
          y2={262.4}
          gradientTransform="matrix(18.89 0 0 17.4 18480.5 -4233.2)"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-4"
          x1={-832}
          y1={48.7}
          x2={-831}
          y2={48.7}
          gradientTransform="matrix(40.5 0 0 27.76 33779.7 -949.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#28949c" />
          <stop offset={0.4} stopColor="#2b979f" />
          <stop offset={0.9} stopColor="#157178" />
          <stop offset={1} stopColor="#0b575d" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1={-812.5}
          y1={45.4}
          x2={-811.5}
          y2={45.4}
          gradientTransform="matrix(22.31 0 0 42.44 18255 -1579.4)"
          xlinkHref="#linear-gradient-4"
        />
        <linearGradient
          id="linear-gradient-6"
          x1={-1023.6}
          y1={168.1}
          x2={-1022.6}
          y2={168.1}
          gradientTransform="matrix(82.06 0 0 117.25 84062.8 -19482.7)"
          xlinkHref="#linear-gradient-4"
        />
        <linearGradient
          id="linear-gradient-7"
          x1={-961.6}
          y1={171.7}
          x2={-961.1}
          y2={170.8}
          gradientTransform="matrix(13.16 0 0 52.67 12734.3 -8771.3)"
          xlinkHref="#linear-gradient-4"
        />
        <linearGradient
          id="linear-gradient-8"
          x1={-889.6}
          y1={159}
          x2={-889}
          y2={159.3}
          gradientTransform="matrix(5.37 0 0 5.87 4914.4 -791)"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-9"
          x1={-1042.9}
          y1={119}
          x2={-1042}
          y2={118.9}
          gradientTransform="matrix(34.91 0 0 52.73 36493.7 -6122.3)"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-10"
          x1={-1021.9}
          y1={138.9}
          x2={-1022.8}
          y2={139.7}
          gradientTransform="matrix(20.48 0 0 10.51 21056 -1304.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#652e05" />
          <stop offset={1} stopColor="#461e00" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1={-1034.8}
          y1={126}
          x2={-1034.1}
          y2={125.8}
          gradientTransform="matrix(27.61 0 0 22.07 28689.5 -2646.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#a04400" stopOpacity={0} />
          <stop offset={0.2} stopColor="#9a4100" stopOpacity={0.1} />
          <stop offset={0.5} stopColor="#8a3b00" stopOpacity={0.5} />
          <stop offset={0.9} stopColor="#753200" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x1={-690.2}
          y1={172.4}
          x2={-691.2}
          y2={172.6}
          gradientTransform="matrix(2.56 0 0 4.54 1900.1 -634.9)"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-13"
          x1={-783.9}
          y1={49.1}
          x2={-783.7}
          y2={48.1}
          gradientTransform="matrix(13.53 0 0 28.11 10725.3 -1071.9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#a04400" />
          <stop offset={0.3} stopColor="#9c4200" />
          <stop offset={0.6} stopColor="#8e3d00" />
          <stop offset={0.9} stopColor="#793300" />
          <stop offset={1} stopColor="#753200" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x1={72.7}
          y1={284.7}
          x2={73.3}
          y2={256}
          xlinkHref="#linear-gradient-13"
        />
        <clipPath id="clip-path" transform="translate(-3.8 -47.1)">
          <rect width={395} height={500} fill="none" />
        </clipPath>
        <style>
          {
            "\n      .cls-4{fill:#004445}.cls-6{fill:#f0eff3}.cls-8{fill:#fff}\n    "
          }
        </style>
      </defs>
      <g clipPath="url(#clip-path)">
        <g id="o">
          <motion.g id="whole_pic" data-name="whole pic"
            whileTap={{scale: 0.9 }}
          >
            <path
              id="Blob"
              d="M382.7 262.2C338.9 172.7 276.1 47.5 113.3 47.1-52 46.8-.4 214.5 75.1 266.3c1.9 1.3 15.6 13.8 18.1 15.1 91.6 46.8-158 77.4-62.3 136.1s270.7 46.2 321.7 0 49-116.6 30.1-155.3z"
              transform="translate(-3.8 -47.1)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Phone_border"
              data-name="Phone border"
              className="cls-4"
              d="M156.6 65.4h137.7a16.5 16.5 0 0116.5 16.5v320.4a16.5 16.5 0 01-16.5 16.5H156.6a16.5 16.5 0 01-16.5-16.5V81.9a16.5 16.5 0 0116.5-16.5z"
              transform="translate(-3.8 -47.1)"
            />
            <path
              id="Phone_screen_background"
              data-name="Phone screen background"
              d="M162.3 79.9h126.2a12.2 12.2 0 0112.2 12.2v300a12.2 12.2 0 01-12.2 12.2H162.3a12.2 12.2 0 01-12.2-12.2v-300a12.1 12.1 0 0112.2-12.2z"
              transform="translate(-3.8 -47.1)"
              fill="#2c7873"
            />
            <path
              id="Phone_border_top"
              data-name="Phone border top"
              className="cls-4"
              d="M188.9 74.8H262a15.3 15.3 0 01-15.2 15.3h-42.5a15.4 15.4 0 01-15.4-15.3z"
              transform="translate(-3.8 -47.1)"
            />
            <g id="Phone_screen_elements" data-name="Phone screen elements">
              <path
                className="cls-6"
                d="M252.5 98.9h34.3a4.2 4.2 0 014.2 4.2v5a4.2 4.2 0 01-4.2 4.2h-34.3a4.2 4.2 0 01-4.2-4.2v-5a4.2 4.2 0 014.2-4.2zM165.8 124.9h41.9a4.2 4.2 0 014.2 4.2v5.9a4.2 4.2 0 01-4.2 4.2h-41.9a4.2 4.2 0 01-4.2-4.2v-5.9a4.2 4.2 0 014.2-4.2zM168.3 103h36.9a2.6 2.6 0 012.6 2.6 2.6 2.6 0 01-2.6 2.6h-36.9a2.6 2.6 0 01-2.6-2.6 2.7 2.7 0 012.6-2.6zM172.9 147.7h104.9a7.1 7.1 0 017.1 7.1v165.3a7.1 7.1 0 01-7.1 7.1H172.9a7.1 7.1 0 01-7.1-7.1V154.8a7.1 7.1 0 017.1-7.1zM172.9 343.7h104.9a7.1 7.1 0 017.1 7.1v17.6a7.1 7.1 0 01-7.1 7.1H172.9a7.1 7.1 0 01-7.1-7.1v-17.6a7.1 7.1 0 017.1-7.1z"
                transform="translate(-3.8 -47.1)"
              />
              <circle
                cx={221.6}
                cy={158.2}
                r={43.6}
                strokeWidth={6}
                stroke="#fff"
                strokeMiterlimit={10}
                fill="none"
              />
              <path
                className="cls-8"
                d="M185 261.8h80.7a7.4 7.4 0 017.4 7.4v8.4a7.4 7.4 0 01-7.4 7.4H185a7.4 7.4 0 01-7.4-7.4v-8.4a7.4 7.4 0 017.4-7.4zM185 294.6h80.7a7.4 7.4 0 017.4 7.4v8.4a7.4 7.4 0 01-7.4 7.4H185a7.4 7.4 0 01-7.4-7.4V302a7.4 7.4 0 017.4-7.4z"
                transform="translate(-3.8 -47.1)"
              />
            </g>
            <g id="Legs">
              <path
                id="Left_ankle"
                data-name="Left ankle"
                d="M101.6 384.8l-1.1 8 2.7 7.4 2.5 1.4 8-4.5 1.4-3.7-2.9-7.7z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-2)"
              />
              <path
                id="Right_ankle"
                data-name="Right ankle"
                d="M126.6 327.4A94.4 94.4 0 01123 338l9.4 6.8c.7-2.8 8.5-2.5 9.4-4.8s-5-7.4-4.8-10.3c-2.5.1-9-1.8-10.4-2.3z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-3)"
              />
              <path
                id="Leaning_leg"
                data-name="Leaning leg"
                className="cls-4"
                d="M118.8 341.7l-53.6-11.3a14.7 14.7 0 01-11.8-17.1 9.4 9.4 0 01.4-1.6L74.1 258l4.3-11.1s41.7-1.8 44.3 7.3c4 13.7 1 33.5-.8 40.4-3.1 11.9-3.5 26.4-3.5 26.4l4.5 1.8a5.1 5.1 0 011.7.7l4.4 3.8-3 13.7-5.3.7a6 6 0 01-1.9 0z"
                transform="translate(-3.8 -47.1)"
              />
              <path
                id="Standing_leg"
                data-name="Standing leg"
                className="cls-4"
                d="M116.9 340.8l-.8 35a14.9 14.9 0 01-.2 2.1l-2.5 8.2a17.7 17.7 0 01-6.4 1.6c-3.1 0-7.1-1.9-7.1-1.9l-2.4-6.7a7.6 7.6 0 01-.3-2.1l-3-40.8z"
                transform="translate(-3.8 -47.1)"
              />
            </g>
            <g id="Left_Shoe" data-name="Left Shoe">
              <path
                id="shoe_left"
                data-name="shoe left"
                d="M100.3 388.9s4.2 5.7 3.9 8.3 7.4-.1 8.1-4.3 2.5-2.1 3.1.3 2.5 2.4 2.8 4.1a6.4 6.4 0 01-3.3 7.8c-4.4 2.5-9.1 1.5-12.6 3.2s-7.3 7.8-11 8.3-9.8.1-12.7-5.6 5.9-8.8 8.1-9.6 6.4-5.8 8.1-8 3.4-5.1 5.5-4.5z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-4)"
              />
              <path
                id="shoe_design_left"
                data-name="shoe design left"
                d="M111 346.6s2.3 3.2-1.5 6.1-9.8 2.9-13.2 6.5-5.9 7.2-11.9 7.1-7.3-1.7-7.3-1.7"
                strokeWidth={0.5}
                stroke="#fff"
                strokeMiterlimit={10}
                fill="none"
              />
            </g>
            <g id="Right_Shoe" data-name="Right Shoe">
              <path
                id="shoe_right"
                data-name="shoe right"
                d="M133.7 358.7s-.5 5.3.5 7.2a3.9 3.9 0 004.1 2.1c1.6-.1 3.6-2 5.2-8.8a185.3 185.3 0 003.3-20.9 32.5 32.5 0 00-.3-8.8 4 4 0 00-3.5-3.2l-1.9-.4c-1.2-.4-2.4 0-3.4-.2s-7.2-.1-7.9 1.7 5 4 5.1 7.9-4.7 5-4.7 5-1.9-1.6-3-.5-2.1.1-2.5 1 1.7 3.4 1.7 3.4l6.8 11.8a25.6 25.6 0 01.5 2.7z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-5)"
              />
              <path
                id="shoe_design_right"
                data-name="shoe design right"
                d="M135.5 318.4c5-12.4 3.4-25.7 3.4-25.7.4-3.8 2.4-7.9-1.1-12.3l-.3-.4"
                strokeWidth={0.7}
                strokeLinecap="round"
                stroke="#fff"
                strokeMiterlimit={10}
                fill="none"
              />
            </g>
            <g id="Shirt">
              <path
                id="shirt-2"
                data-name="shirt"
                d="M130.8 282.5l-10.7-3.5 10.9-44.1s.8-16.8-.2-24.9l-6 48.5h-7.6c-6.1 0-15-.3-22.8-2.4l-16.9-4.6-2.5 10.3-9.6 2.9s5.6-80 23.8-94.5c6-4.8 16.7-5.8 21.4-4.3s28 7.2 32.6 13c7.3 9.3 3.3 50.2 2.4 58.7a10.9 10.9 0 01-.7 3z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-6)"
              />
              <motion.path
                animate={{ x: [null, 5, 0] }}
                transition={{ duration: 2, loop: Infinity, repeatDelay: 3, delay: 2}}
                id="shirt_collar"
                data-name="shirt collar"
                d="M103.9 119.8a10 10 0 008 9.6c8 1.8 12.8-4.8 12.8-4.8"
                strokeWidth={0.7}
                strokeLinecap="round"
                stroke="#fff"
                strokeMiterlimit={10}
                fill="none"
              />
              <path
                id="Arm_shadow"
                data-name="Arm shadow"
                d="M90.6 201.2c-7.8 4.9-13.2 50.4-13.2 50.4l8 2.2s.4-28.2 5.2-52.6z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-7)"
              />
            </g>
            <motion.g id="Head"
              animate={{ rotateZ: [0, -10, 0] }}
              transition={{ duration: 2, loop: Infinity, repeatDelay: 3, delay: 2}}
            >
              <path
                id="Back_of_head"
                data-name="Back of head"
                d="M134.9 146c1-1.2 2.8-4.7 3.5-5.8-1.9-.5-4.7 1.6-5.4 3.2s1.5 2 1.9 2.6z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-8)"
              />
              <path
                id="Face_and_neck"
                data-name="Face and neck"
                d="M116.1 174a7.2 7.2 0 01-5.7-6.5 12.6 12.6 0 01.4-2.7l.2-.9.2-.9.2-1.1-1.4-.5c-3.7-1.5-9.2-5.5-9.5-12.2-.2-4.7 2.4-8.3 3.1-10.8s.1-4.6.4-7.6 3-8 5.1-8.6c9.3-2.8 22.8 5.5 22.8 5.5s4.3 3.4-.2 13.2c.6-.2-1 1.7-.2 1.7a4.9 4.9 0 013.4 1.5c1.5 1.9.6 5.4-4.3 9.2h-.2a14 14 0 00-.9 2.9l-.1.5-1.7 6.4-1.8 7.2c-.6 2.7-4.2 5-9.8 3.7z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-9)"
              />
              <path
                id="Neck_shadow"
                data-name="Neck shadow"
                d="M129.3 156.8a23.2 23.2 0 01-18.3 7l.2-.9.2-1.1-1.4-.5c3.9-1.3 14.9-5 20.5-8h-.2l-.9 3-.1.5z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-10)"
              />
              <path
                id="Hairline_highlight"
                data-name="Hairline highlight"
                d="M131.7 140.9c4.6-9.7.2-13.2.2-13.2s-13.5-8.3-22.8-5.5c-1.5.4-2.2 2.4-2.9 4 3.9-1.7 10.2 1 15.3 2.5 2.4.7.6 3.1 1.3 3.4 5.7.4 8.6 4.1 5.6 11.6l3-1.1c-.6-.2.8-1.9.3-1.7z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-11)"
              />
              <path
                id="Ear"
                d="M130.9 145.9s1.8-1.5 2.5.2-1.5 3.7-1.5 3.7z"
                transform="translate(-3.8 -47.1)"
                fill="url(#linear-gradient-12)"
              />
              <path
                id="Hair"
                className="cls-4"
                d="M138.8 139.7a28.8 28.8 0 001.7-6.4c1-5.9-1.7-9.7-7-13l-5.1-2.9c-.5-.3-9.3-4.7-14.5-3.9-2 .3-5 1.7-5.6 3.2-1.5 3.9-2.5 5.9-2.8 9.2 5.1-7.2 5.5 3.8 18.7-.1 2.4-.7.7 3.1 1.3 3.4 6.5.5 9.3 5.1 4.2 14.7 1.8-.3 3.2-.8 4.1-.5s4.6-2.8 5-3.7z"
                transform="translate(-3.8 -47.1)"
              />
              <path
                id="Beard"
                className="cls-4"
                d="M130.9 143.8l1-.4.3-2-3.3.7a1.6 1.6 0 00-1.3 1.2l-1.8 6.9c-4.5.7-15.3 3.7-17 3.3s-1.7-3.2-3-3.1-1.8 1.7-2.5 1.4a10.2 10.2 0 01-2.6-4.2l-.5 5.5c-.1.8 2.2 6.9 2.2 6.9a2.2 2.2 0 001.2 1.1l4.9 1.4 2.9-.5c4-.5 14.6-4.8 15-5.8 2.7-5.8 1.9-11.2 4.5-12.4z"
                transform="translate(-3.8 -47.1)"
              />
            </motion.g>
            <path
              id="Left_hand"
              data-name="Left hand"
              d="M120.2 282.9a6.8 6.8 0 00-2.6 2.7 11 11 0 00-.8 4 13.3 13.3 0 01-.9 4.9c-.7 1.3-1.1 1.2-.7 1.9s2.3.8 3-.2l2-2.8a10.6 10.6 0 00.9 2.5c.5 1.1-.1 4.4-.8 5.5s-3 4.9-2.8 6 2.3-.3 2.3-.3 5.1-3.7 6.2-6.1a13.5 13.5 0 001.8-6.1l-.1-8.6 1-4.3-6.9-2.2c-.1-.2-1.2 2.9-1.6 3.1z"
              transform="translate(-3.8 -47.1)"
              fill="url(#linear-gradient-13)"
            />
            <path
              id="Right_hand"
              data-name="Right hand"
              d="M75.4 265.5a7.6 7.6 0 012.3 3 9.4 9.4 0 01.3 4.1 12 12 0 00.4 5c.6 1.4.9 1.3.5 1.9a2.2 2.2 0 01-3-.6l-1.6-3a13.4 13.4 0 01-1.2 2.4c-.7 1.1-.4 4.4.2 5.5s2.5 5.2 2.1 6.2-2.2-.5-2.2-.5-4.6-4.3-5.5-6.8a12.4 12.4 0 01-1.1-6.3l1.1-8.6-.6-4.3 6.7-1.8c1 1 1.3 3.6 1.6 3.8z"
              transform="translate(-3.8 -47.1)"
              fill="url(#linear-gradient-14)"
            />
          </motion.g>
        </g>
      </g>
    </motion.svg>
  );
}

export default SvgComponent;

