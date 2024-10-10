import { makeStyles } from "@mui/styles";
import React from "react";
export default function Phone(props) {
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
      height={height ? height : 20}
      width={width ? width : 20}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      className={className.st0}
      <path
        d="M47.9972 35.1732C46.2063 33.3431 44.2098 31.3466 41.7142 28.9098C41.0977 28.2541 40.3147 27.7549 39.4437 27.4809C38.5825 27.2069 37.6625 27.158 36.7817 27.3341C35.2159 27.6179 34.1002 28.577 33.4053 29.2719C32.7203 29.9472 32.0352 30.6224 31.3599 31.3075L30.4889 32.1785C30.3128 32.0806 30.1268 31.973 29.9213 31.8653C29.5103 31.6402 29.1286 31.4347 28.7567 31.1901C26.0262 29.3991 23.5502 27.2167 21.4167 24.7211C19.7138 22.7735 18.5688 21.1294 17.7076 19.4069L18.1969 18.9274C19.2245 17.9194 20.2912 16.8624 21.2895 15.7663C22.2388 14.7583 22.7575 13.4469 22.7575 12.0669C22.7477 10.687 22.2192 9.3854 21.2699 8.39695C20.1934 7.23234 19.0581 6.09708 17.962 4.99119L17.8348 4.85418C17.1595 4.1789 16.4842 3.50362 15.809 2.81856C14.6052 1.57565 13.3721 0.430613 11.542 0.0195733L9.86845 0L9.70208 0.0195733C8.4396 0.303386 7.28478 0.919945 6.35505 1.82032L5.89507 2.28029C4.7011 3.45469 3.4582 4.66823 2.29359 5.9405C1.66724 6.64514 1.15833 7.43785 0.776655 8.29908C-0.280303 10.6185 -0.0649967 13.026 0.297109 15.0812C0.845162 18.2619 2.12721 21.149 3.17438 23.302C5.20022 27.4418 7.95027 31.3956 11.5811 35.3787C15.3979 39.5674 19.8411 43.0808 24.8127 45.8113C28.1108 47.6218 32.1037 49.5302 36.6839 49.9413C37.0753 49.9804 37.4668 50 37.8387 50C40.442 50 42.5461 49.1486 44.2881 47.4163C45.6974 46.007 46.8522 44.8229 47.9483 43.6876C49.2304 42.3468 49.8665 40.8495 49.8665 39.3717C49.8665 37.9037 49.2499 36.4553 47.9972 35.1732ZM14.9575 15.9816C14.8107 16.1284 14.6541 16.2654 14.5073 16.4024L14.1159 16.7645C12.9708 17.8802 12.7359 19.084 13.3916 20.5715C14.4095 22.8029 15.7404 24.8777 17.3259 26.7273C19.9193 29.9276 22.9728 32.6874 26.4275 34.9579C27.3768 35.5451 28.375 36.0932 29.3732 36.5923C30.6259 37.2284 31.8884 37.0033 32.9258 35.9659C33.6109 35.2907 34.2861 34.6154 34.9614 33.9401L36.4196 32.4819C36.586 32.3155 36.7524 32.1687 36.9285 32.0219C37.5451 31.5326 38.1029 31.5424 38.6118 32.0513C41.0683 34.449 43.0746 36.4553 44.934 38.3637C45.6582 39.1075 45.6582 39.6849 44.9536 40.4482C43.5737 41.9358 42.2721 43.2668 40.9606 44.539C40.1288 45.3416 39.0425 45.6449 37.1732 45.6156C35.7248 45.5666 33.7185 45.0675 31.6731 44.2357C26.7896 42.249 22.3171 39.4598 18.3828 35.9366C14.2137 32.2274 10.7199 27.8822 7.98942 23.0182C6.28654 19.9746 5.19043 17.156 4.64238 14.3962C4.36836 13.026 4.1922 11.5678 4.74025 10.2662C5.02406 9.63006 5.41553 9.04287 5.89507 8.52417C6.80523 7.53572 7.77411 6.58642 8.71363 5.66647L9.33019 5.06949C9.85867 4.55079 10.2012 4.39421 10.5046 4.39421C10.6025 4.39421 10.7003 4.40399 10.7884 4.43335C11.0429 4.49207 11.2777 4.6193 11.4539 4.77589C13.2155 6.50812 15.5447 8.80799 17.9033 11.2253C18.4611 11.7929 18.4611 12.3605 17.9229 12.9673C17.2574 13.6915 16.5429 14.406 15.8383 15.091L14.9575 15.9816Z"
        fill="#3778C2"
      />
    </svg>
  );
}
