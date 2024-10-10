import { makeStyles } from "@mui/styles";
import React from "react";
export default function Calendar(props) {
  const { height, width, fill, stroke } = props;
  const styles = makeStyles({
    st0: {
      fill: fill ? fill : "none",
      stroke: stroke ? stroke : "none",
      strokeWidth: 15,
      strokeMiterlimit: 10,
    },
  });
  const className = styles();
  return (
    <>
      <svg
        height={height ? height : 25}
        width={width ? width : 25}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={className.st0}>
          <path d="M49.8899 12.1546C49.8198 11.8142 49.7497 11.4738 49.6496 11.1334C48.4381 6.67801 44.7637 3.87465 40.0681 3.81458C39.7177 3.80457 39.3672 3.81458 39.0068 3.81458H38.9067C38.8967 3.54425 38.8967 3.27393 38.9167 3.01362C39.0268 1.63196 38.2459 0.520625 36.8342 0.020024L35.9031 0L35.7429 0.030036C34.0709 0.620745 33.9908 2.05246 34.0809 3.0837C34.1009 3.31398 34.1009 3.54425 34.0909 3.79455C31.1173 3.78454 28.0637 3.77453 25.01 3.76452C21.9563 3.75451 18.9027 3.74449 15.9191 3.73448C15.9091 3.49419 15.9091 3.25391 15.9291 2.98358C15.9191 1.45174 15.2783 0.480577 13.9868 0.020024L13.0557 0L12.8855 0.020024C11.5439 0.490589 10.9031 1.5018 11.0132 2.96356C11.0433 3.23388 11.0332 3.50421 11.0232 3.80457H10.7229C10.2022 3.78454 9.74169 3.78454 9.16099 3.81458C4.57549 4.11494 0.680817 7.78935 0.0901081 12.3749C0.0901081 12.4149 0.0700841 12.4549 0.0600721 12.495L0 40.9892L0.230276 42.2107C1.19143 46.3556 4.54545 49.3793 8.84061 49.9399L40.9391 50L41.4097 49.9099C41.7101 49.8498 42.0104 49.7897 42.3008 49.7197C46.3757 48.7685 49.3592 45.4646 49.9299 41.2595L49.98 41.1294L50 12.7453L49.8899 12.1546ZM45.6348 40.1582C45.6248 43.292 43.362 45.5747 40.2383 45.5747C30.0861 45.5847 19.9339 45.5847 9.78174 45.5747C6.65799 45.5747 4.38526 43.302 4.38526 40.1682V19.7437H45.6348V40.1582ZM45.6348 14.7777H4.37525C4.22507 12.6151 4.76572 10.863 5.94714 9.70164C7.12855 8.55026 8.91069 8.01962 11.0032 8.19984V9.27113C11.0032 9.68162 10.9932 10.0921 11.0032 10.5026C11.0232 11.8943 12.0745 12.9455 13.4461 12.9555H13.4561C14.8278 12.9555 15.8891 11.9043 15.9091 10.5126C15.9191 9.77173 15.9191 10.022 15.9191 9.27113V8.21986H34.0909V8.90068C34.0909 9.78174 34.0809 9.64157 34.0909 10.5126C34.1009 11.2135 34.3813 11.8542 34.8718 12.3048C35.3624 12.7653 36.0332 12.9856 36.7341 12.9455C38.0156 12.8654 38.9868 11.8142 38.9968 10.4926C39.0068 9.62155 39.0068 9.76171 39.0068 8.89067V8.21986C40.9592 7.98959 42.7914 8.51021 43.9928 9.63156C45.2143 10.793 45.7849 12.5651 45.6348 14.7777Z" />
          <path d="M17.9415 23.0476C17.8113 22.7072 17.6211 22.4069 17.3708 22.1666C17.1105 21.9063 16.8001 21.716 16.4797 21.6159C16.2294 21.5258 15.9791 21.4858 15.7088 21.4858C15.6287 21.4858 15.5586 21.4858 15.5386 21.4958H10.7328C10.3724 21.4457 10.1021 21.4958 9.73162 21.6059C9.39121 21.7361 9.09085 21.9263 8.87059 22.1566C8.61027 22.4269 8.42005 22.7172 8.31993 23.0276C8.20979 23.338 8.16974 23.6784 8.19978 23.9487V28.6844C8.15973 29.0148 8.18977 29.3552 8.28989 29.7056C8.41003 30.056 8.60026 30.3764 8.86057 30.6367C9.1309 30.9271 9.44127 31.1273 9.77167 31.2375C10.022 31.3276 10.3023 31.3776 10.5927 31.3776H15.6587C15.9491 31.3776 16.2294 31.3276 16.4597 31.2375C16.8101 31.1173 17.1305 30.9171 17.3608 30.6768C17.6111 30.4365 17.8113 30.1261 17.9315 29.7857C18.0516 29.4753 18.1017 29.1249 18.0716 28.8246V24.0188C18.0917 23.6984 18.0416 23.358 17.9415 23.0476ZM15.5586 26.2715C15.5586 26.9523 15.5586 27.6532 15.5486 28.2539C15.5386 28.5242 15.3283 28.7445 15.068 28.7445H12.4749C12.4749 28.7445 12.4749 28.7445 12.4649 28.7445H11.3436C11.1233 28.7445 10.9431 28.5643 10.9431 28.334V24.4393C10.9431 24.209 11.1233 24.0188 11.3436 24.0188H15.1481C15.3684 24.0188 15.5486 24.209 15.5486 24.4293C15.5586 24.9299 15.5586 25.5907 15.5586 26.2715Z" />
          <path d="M29.996 24.0588C30.016 23.7385 29.976 23.4081 29.8659 23.0977C29.7457 22.7573 29.5455 22.4569 29.2952 22.2166C29.0449 21.9563 28.7345 21.7661 28.4141 21.656C28.1638 21.5759 27.9035 21.5258 27.6432 21.5258C27.5531 21.5258 27.483 21.5358 27.473 21.5358L22.6672 21.5458C22.2868 21.4858 22.0265 21.5458 21.666 21.656C21.3256 21.7761 21.0253 21.9763 20.805 22.2066C20.5347 22.4669 20.3444 22.7673 20.2443 23.0777C20.1342 23.388 20.0941 23.7184 20.1242 23.9988L20.1342 28.7345C20.0841 29.0648 20.1142 29.4053 20.2243 29.7457C20.3344 30.1061 20.5347 30.4165 20.785 30.6868C21.0553 30.9671 21.3757 31.1774 21.7061 31.2875C21.9564 31.3776 22.2267 31.4277 22.5271 31.4277H27.5931C27.8735 31.4277 28.1538 31.3776 28.3941 31.2875C28.7445 31.1674 29.0549 30.9671 29.2952 30.7268C29.5455 30.4765 29.7457 30.1662 29.8659 29.8258C29.976 29.5154 30.0261 29.175 30.006 28.8646L29.996 24.0588ZM27.483 24.4793C27.483 25.4805 27.483 27.1025 27.473 28.3039C27.473 28.5743 27.2627 28.7845 27.0024 28.7945C26.1414 28.7945 25.2603 28.8346 24.3993 28.7945H23.2679C23.0477 28.7945 22.8675 28.6143 22.8675 28.384V24.4793C22.8675 24.2491 23.0477 24.0689 23.2679 24.0689H27.0825C27.3028 24.0689 27.483 24.2491 27.483 24.4793Z" />
          <path d="M17.9415 35.2122C17.8113 34.8718 17.6211 34.5715 17.3708 34.3312C17.1105 34.0709 16.8001 33.8806 16.4797 33.7805C16.2394 33.6904 15.9791 33.6504 15.7088 33.6504H15.5386L10.7328 33.6604C10.3724 33.6103 10.1021 33.6604 9.73162 33.7705C9.39121 33.8907 9.09085 34.0909 8.87059 34.3212C8.61027 34.5815 8.42005 34.8818 8.31993 35.1922C8.20979 35.5026 8.16974 35.843 8.19978 36.1133V40.839C8.15973 41.1794 8.18977 41.5198 8.28989 41.8602C8.41003 42.2207 8.60026 42.531 8.86057 42.8014C9.1309 43.0917 9.44127 43.2919 9.77167 43.4021C10.022 43.4922 10.3023 43.5422 10.5927 43.5422H15.6587C15.9491 43.5422 16.2294 43.4922 16.4597 43.4021C16.8101 43.2819 17.1305 43.0817 17.3608 42.8414C17.6111 42.6011 17.8113 42.2907 17.9315 41.9403C18.0516 41.6299 18.1017 41.2895 18.0716 40.9792V36.1834C18.0917 35.853 18.0416 35.5226 17.9415 35.2122ZM15.5586 38.4261C15.5586 39.1069 15.5586 39.8178 15.5486 40.4185C15.5386 40.6888 15.3283 40.8991 15.078 40.9091H12.4749C12.4749 40.9091 12.4749 40.9091 12.4649 40.9091H11.3436C11.1233 40.9091 10.9431 40.7289 10.9431 40.4986V36.5939C10.9431 36.3636 11.1233 36.1834 11.3436 36.1834H15.1481C15.3684 36.1834 15.5486 36.3636 15.5486 36.5939C15.5586 37.0945 15.5586 37.7453 15.5586 38.4261Z" />
          <path d="M41.6 35.883C41.5699 36.2435 41.4097 36.5739 41.1294 36.8042L36.2335 41.0392L33.6204 38.346C33.0998 37.8054 33.1198 36.9543 33.6504 36.4337C34.1811 35.9131 35.0421 35.9331 35.5627 36.4637L36.4037 37.3248L39.3673 34.7617C39.928 34.2811 40.789 34.3412 41.2696 34.9019C41.5099 35.1722 41.62 35.5226 41.6 35.883Z" />
          <path d="M29.8659 35.2122C29.7457 34.8718 29.5455 34.5715 29.2952 34.3312C29.0449 34.0709 28.7345 33.8806 28.4141 33.7805C28.1638 33.6904 27.9035 33.6504 27.6432 33.6504H27.473L22.6572 33.6604C22.2868 33.6103 22.0265 33.6604 21.666 33.7705C21.3256 33.8907 21.0253 34.0909 20.805 34.3212C20.5347 34.5815 20.3444 34.8818 20.2443 35.1922C20.1342 35.5026 20.0941 35.843 20.1242 36.1133L20.1342 40.849C20.0841 41.1794 20.1142 41.5198 20.2243 41.8602C20.3344 42.2207 20.5247 42.531 20.785 42.8014C21.0553 43.0917 21.3757 43.2919 21.7061 43.4021C21.9564 43.4922 22.2267 43.5422 22.5271 43.5422H27.5931C27.8835 43.5422 28.1538 43.4922 28.3941 43.4021C28.7445 43.2819 29.0549 43.0817 29.2952 42.8414C29.5455 42.5911 29.7457 42.2807 29.8659 41.9403C29.976 41.6299 30.0261 41.2895 30.006 40.9792L29.996 36.1734C30.016 35.853 29.976 35.5226 29.8659 35.2122ZM27.483 36.5939C27.483 37.5951 27.483 39.217 27.473 40.4185C27.473 40.6888 27.2627 40.8991 27.0024 40.9091H24.4093C24.3993 40.9091 24.3993 40.9091 24.3993 40.9091H23.2679C23.0477 40.9091 22.8675 40.7289 22.8675 40.4986V36.5939C22.8675 36.3636 23.0477 36.1834 23.2679 36.1834H27.0825C27.3028 36.1834 27.483 36.3636 27.483 36.5939Z" />
          <path d="M41.8102 24.0689C41.8302 23.7385 41.7902 23.4081 41.68 23.0977C41.5599 22.7573 41.3596 22.4569 41.1093 22.2166C40.849 21.9563 40.5386 21.7661 40.2283 21.656C39.978 21.5759 39.7177 21.5258 39.4574 21.5258C39.3672 21.5258 39.2972 21.5358 39.2871 21.5358L34.4814 21.5458C34.1109 21.4958 33.8406 21.5458 33.4802 21.656C33.1398 21.7761 32.8394 21.9764 32.6091 22.2066C32.3488 22.4669 32.1586 22.7673 32.0585 23.0777C31.9483 23.3881 31.9083 23.7184 31.9383 23.9988L31.9483 28.7245C31.8983 29.0649 31.9283 29.4053 32.0284 29.7457C32.1486 30.1061 32.3388 30.4165 32.5991 30.6868C32.8694 30.9671 33.1898 31.1774 33.5102 31.2875C33.7705 31.3776 34.0409 31.4277 34.3412 31.4277H39.4073C39.6876 31.4277 39.968 31.3776 40.2083 31.2875C40.5587 31.1674 40.869 30.9671 41.0993 30.7269C41.3596 30.4866 41.5599 30.1762 41.68 29.8358C41.7902 29.5154 41.8402 29.175 41.8202 28.8646L41.8102 24.0689ZM39.2972 24.4794C39.2972 25.4806 39.2972 27.1025 39.2871 28.304C39.2871 28.5743 39.0769 28.7845 38.8166 28.7945H35.0821C34.8618 28.7945 34.6816 28.6143 34.6816 28.384V24.4794C34.6816 24.2491 34.8618 24.0689 35.0821 24.0689H38.8867C39.1169 24.0689 39.2972 24.2491 39.2972 24.4794Z" />
        </g>
      </svg>
    </>
  );
}
