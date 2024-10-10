import { makeStyles } from "@mui/styles";
import React from "react";
export default function Edit(props) {
  const { height, width, fill, stroke } = props;
  const styles = makeStyles({
    st0: {
      fill: fill ? fill : "none",
      stroke: stroke ? stroke : "none",
      strokeWidth: 20,
      strokeMiterlimit: 10,
    },
  });
  const className = styles();
  return (
    <svg
      height={height ? height : 22}
      width={width ? width : 22}
      viewBox="0 0 62 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={className.st0}>
        <path d="M49.9698 36.7384V40.4786C49.9698 44.5807 47.7478 47.8886 44.0277 49.3264C43.0123 49.7285 41.7957 49.9497 40.6093 49.9598C38.4476 49.9899 36.0748 50 33.1188 50C33.1188 50 33.1188 50 33.1088 50C31.7515 50 30.4042 50 29.067 49.99H9.52142C4.10215 50 0.0100543 45.8979 0 40.4886V9.55158C0.0100543 4.11221 4.0921 0.0100543 9.52142 0.0100543C11.8138 0 16.1673 0 20.9833 0C30.5852 0 41.9465 0.0100543 41.9465 0.0100543C42.9519 0.0100543 43.8166 0.42228 44.3193 1.14619C44.7617 1.77961 44.822 2.5739 44.5305 3.35813C44.1685 4.24291 43.4647 4.78584 42.5397 4.86628C42.3085 4.88639 42.0772 4.88639 41.8661 4.88639H9.82304C6.69616 4.88639 4.88639 6.68611 4.87633 9.81299V40.2272C4.88639 43.334 6.67605 45.1136 9.77277 45.1136H18.3189C20.8526 45.1036 23.3762 45.1036 25.8697 45.1036C31.6208 45.1036 36.0446 45.1136 40.1971 45.1438C41.5946 45.1438 42.8615 44.6511 43.7764 43.7362C44.6712 42.8313 45.1337 41.6348 45.1237 40.1669C45.1036 38.6487 45.0935 37.6935 45.0935 37.1205V36.8389L45.1136 36.5675C45.1237 36.3362 45.1639 36.1351 45.2443 36.0044L45.2946 35.8938L45.3248 35.7832C45.3851 35.5821 45.4756 35.3811 45.5761 35.19C45.9481 34.5365 46.6519 34.1444 47.4663 34.1444C47.6272 34.1444 47.7881 34.1645 47.9389 34.1846C48.9845 34.3857 49.6581 35.0191 49.8894 36.0145C49.9296 36.1854 49.9497 36.3563 49.9598 36.5675L49.9698 36.7384Z" />
        <path d="M61.1603 4.92657L61.1502 4.94668L61.1301 4.97685V4.9869C60.9592 5.2282 60.7882 5.43934 60.567 5.72086C58.0032 8.66677 53.3581 13.9855 48.8437 19.1232L47.8182 20.3096L46.1894 22.1596C43.3038 25.4675 40.931 28.1721 40.1267 29.0971C39.7949 29.4792 39.4229 29.7808 38.9604 30.0422L38.9202 30.0623L36.0647 31.49C35.8938 31.5704 35.7229 31.6107 35.5319 31.6107C35.2704 31.6107 35.009 31.5302 34.8281 31.3493C34.4963 31.0677 34.3756 30.6253 34.4862 30.2232L35.4514 27.0259C35.5922 26.5031 35.8435 26.0607 36.2457 25.6183L36.7183 25.0653L43.7261 17.0521C48.7432 11.3312 54.9869 4.18256 56.8168 2.07116C57.3698 1.44779 58.0233 1.116 58.7372 1.116C59.3304 1.116 59.9336 1.34725 60.4766 1.79969C61.482 2.61409 61.7635 3.95131 61.1603 4.92657Z" />
      </g>
    </svg>
  );
}
