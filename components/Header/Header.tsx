import React, { FC } from "react";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerBox}>
          <div className={styles.left}>
            <h1 className={styles.title}>Тестовое задание</h1>
            <h5 className={styles.subtitle}>Frontend-разработчик: Арзуманьян Андрей Эдуардович</h5>
          </div>

          <div className={styles.right}>
            <svg width="154" height="100" viewBox="0 0 154 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1312 64C13.6338 64 8.65427 61.5457 5.19256 56.6372C1.73085 51.7286 0 44.15 0 33.9014C0 28.6692 0.479314 24.2461 1.43794 20.6321C2.44982 17.0181 3.83451 14.0784 5.59199 11.8129C7.34947 9.54741 9.4265 7.9292 11.8231 6.95828C14.2196 5.93342 16.8292 5.42098 19.6518 5.42098C21.9952 5.42098 24.1787 5.74463 26.2025 6.39191C28.2262 6.98525 29.8772 7.74041 31.1554 8.6574L28.9985 14.7257C27.7203 13.8626 26.3356 13.1614 24.8444 12.622C23.4065 12.0826 21.7289 11.8129 19.8116 11.8129C15.5511 11.8129 12.4621 13.6199 10.5449 17.2339C8.62764 20.7939 7.66901 26.3498 7.66901 33.9014C7.66901 41.507 8.6809 47.3595 10.7047 51.4589C12.7284 55.5584 16.0304 57.6081 20.6105 57.6081C22.794 57.6081 24.5515 57.3384 25.8829 56.799C27.2676 56.2596 28.599 55.5584 29.8772 54.6953L31.8743 60.44C30.6494 61.4109 29.0251 62.247 27.0013 62.9482C25.0308 63.6494 22.7408 64 20.1312 64Z" fill="black"/>
              <path d="M48.1935 57.7699C51.0693 57.7699 53.2795 56.9608 54.824 55.3426C56.4217 53.7244 57.2205 51.5398 57.2205 48.7889C57.2205 47.3325 56.9809 46.0379 56.5016 44.9052C56.0222 43.7724 55.3832 42.7476 54.5843 41.8306C53.8387 40.9136 52.96 40.0775 51.9481 39.3224C50.9362 38.5672 49.8977 37.8121 48.8325 37.0569C47.6076 36.1938 46.3295 35.2769 44.998 34.3059C43.6666 33.335 42.4417 32.2023 41.3233 30.9077C40.2582 29.6132 39.3794 28.1028 38.6871 26.3767C37.9947 24.6507 37.6486 22.6279 37.6486 20.3085C37.6486 18.043 38.0214 15.9933 38.767 14.1593C39.5658 12.3253 40.631 10.7611 41.9624 9.4665C43.3471 8.17193 44.9714 7.17404 46.8354 6.47282C48.7527 5.77159 50.8031 5.42098 52.9866 5.42098C55.1169 5.42098 57.0874 5.69068 58.8981 6.23008C60.7089 6.76949 62.2267 7.41677 63.4516 8.17194L61.2148 13.9166C60.0964 13.1614 58.8715 12.595 57.5401 12.2174C56.2619 11.7859 54.9038 11.5702 53.4659 11.5702C50.8563 11.5702 48.7527 12.2984 47.1549 13.7547C45.6105 15.1572 44.8383 17.2339 44.8383 19.9848C44.8383 21.4952 45.0779 22.8167 45.5572 23.9494C46.0898 25.0822 46.7555 26.107 47.5544 27.024C48.4065 27.941 49.3651 28.7771 50.4303 29.5322C51.5486 30.2874 52.7203 31.0695 53.9452 31.8786C55.1701 32.6877 56.4217 33.5778 57.6998 34.5487C58.978 35.5196 60.123 36.6523 61.1349 37.9469C62.2001 39.1875 63.0522 40.6709 63.6913 42.397C64.3836 44.0691 64.7298 46.0649 64.7298 48.3843C64.7298 50.488 64.4102 52.4838 63.7711 54.3717C63.132 56.2596 62.1202 57.9317 60.7355 59.3881C59.4041 60.7906 57.6998 61.9233 55.6228 62.7864C53.599 63.5955 51.2025 64 48.4331 64C45.8768 64 43.64 63.7033 41.7227 63.11C39.8055 62.5167 38.1012 61.7345 36.6101 60.7636L38.8468 54.9381C40.2315 55.8011 41.6428 56.5023 43.0808 57.0417C44.572 57.5272 46.2762 57.7699 48.1935 57.7699Z" fill="black"/>
              <path d="M101.311 41.5879C101.311 44.9322 101.018 47.9798 100.432 50.7307C99.8465 53.4277 98.9412 55.7472 97.7163 57.689C96.5446 59.6309 95.0268 61.1412 93.1628 62.22C91.352 63.2988 89.1951 63.8382 86.692 63.8382C84.189 63.8382 82.0054 63.2988 80.1414 62.22C78.2774 61.1412 76.733 59.6309 75.5081 57.689C74.3364 55.7472 73.4577 53.4277 72.8718 50.7307C72.286 47.9798 71.9931 44.9322 71.9931 41.5879C71.9931 38.2975 72.286 35.2769 72.8718 32.5259C73.4577 29.775 74.3364 27.4286 75.5081 25.4867C76.733 23.4909 78.2774 21.9536 80.1414 20.8748C82.0054 19.796 84.189 19.2566 86.692 19.2566C89.1951 19.2566 91.352 19.796 93.1628 20.8748C95.0268 21.9536 96.5446 23.4909 97.7163 25.4867C98.9412 27.4286 99.8465 29.775 100.432 32.5259C101.018 35.2769 101.311 38.2975 101.311 41.5879ZM94.1214 41.5879C94.1214 39.2145 93.9883 37.0569 93.722 35.115C93.4557 33.1193 93.0296 31.4201 92.4438 30.0177C91.858 28.5613 91.0858 27.4555 90.1271 26.7004C89.1685 25.8913 88.0235 25.4867 86.692 25.4867C85.3074 25.4867 84.1357 25.8913 83.1771 26.7004C82.2717 27.4555 81.4995 28.5613 80.8604 30.0177C80.2746 31.4201 79.8485 33.1193 79.5822 35.115C79.316 37.0569 79.1828 39.2145 79.1828 41.5879C79.1828 43.9612 79.316 46.1458 79.5822 48.1416C79.8485 50.0834 80.2746 51.7556 80.8604 53.158C81.4995 54.5605 82.2717 55.6663 83.1771 56.4754C84.1357 57.2305 85.3074 57.6081 86.692 57.6081C88.0235 57.6081 89.1685 57.2305 90.1271 56.4754C91.0858 55.6663 91.858 54.5605 92.4438 53.158C93.0296 51.7556 93.4557 50.0834 93.722 48.1416C93.9883 46.1458 94.1214 43.9612 94.1214 41.5879Z" fill="black"/>
              <path d="M123.59 0C125.135 0 126.493 0.16182 127.665 0.48546C128.836 0.8091 129.795 1.15971 130.54 1.53729L129.103 7.03919C128.357 6.66161 127.585 6.39191 126.786 6.23008C125.987 6.01433 125.135 5.90645 124.23 5.90645C123.005 5.90645 121.993 6.12221 121.194 6.55373C120.395 6.98525 119.783 7.57859 119.357 8.33375C118.93 9.08891 118.638 10.0059 118.478 11.0847C118.318 12.1096 118.238 13.2153 118.238 14.402V20.3085H129.023V26.2958H118.238V62.7864H111.368V14.402C111.368 9.81711 112.38 6.28403 114.404 3.80278C116.427 1.26759 119.49 0 123.59 0Z" fill="black"/>
              <path d="M142.177 20.3085H152.722V26.2958H142.177V49.6789C142.177 52.5917 142.683 54.6414 143.695 55.8281C144.76 56.9608 146.171 57.5272 147.929 57.5272C148.834 57.5272 149.686 57.3923 150.485 57.1226C151.337 56.8529 152.056 56.5293 152.642 56.1517L154 61.7345C151.816 63.0291 149.5 63.6764 147.05 63.6764C143.109 63.6764 140.153 62.5706 138.183 60.359C136.265 58.0936 135.307 54.3717 135.307 49.1934V8.90013L142.177 7.68647V20.3085Z" fill="black"/>
              <path d="M7.34458 81.615C6.78991 81.3042 6.19699 81.1488 5.56582 81.1488C5.08765 81.1488 4.66687 81.2459 4.30347 81.4402C3.94006 81.6344 3.62448 81.9549 3.3567 82.4017C3.10806 82.8484 2.91679 83.4409 2.78291 84.179C2.64902 84.9171 2.58208 85.83 2.58208 86.9178C2.58208 89.0156 2.84985 90.521 3.38539 91.4339C3.94006 92.3274 4.77207 92.7742 5.8814 92.7742C6.0918 92.7742 6.32131 92.7645 6.56996 92.7451C6.8186 92.7062 7.07681 92.6479 7.34458 92.5702V81.615ZM7.34458 72.437L9.8119 72V94.2019C9.27636 94.435 8.66431 94.6195 7.97576 94.7555C7.2872 94.9109 6.58909 94.9886 5.8814 94.9886C3.81574 94.9886 2.31431 94.3184 1.37711 92.9781C0.459036 91.6379 0 89.6178 0 86.9178C0 85.6941 0.0956326 84.5966 0.286898 83.6254C0.49729 82.6348 0.812877 81.7995 1.23366 81.1197C1.67357 80.4204 2.22824 79.8862 2.89767 79.5172C3.5671 79.1287 4.36085 78.9344 5.27892 78.9344C5.71883 78.9344 6.0918 78.983 6.39782 79.0801C6.72297 79.1578 7.03856 79.2744 7.34458 79.4298V72.437Z" fill="black"/>
              <path d="M17.6671 87.7045C17.6862 88.4426 17.7531 89.1224 17.8679 89.744C17.9827 90.3462 18.1644 90.8803 18.413 91.3465C18.6808 91.7933 19.0251 92.1429 19.4458 92.3954C19.8858 92.6479 20.4404 92.7742 21.1098 92.7742C21.6645 92.7742 22.1714 92.6965 22.6304 92.5411C23.1086 92.3663 23.4528 92.2206 23.6632 92.1041L24.1223 94.1145C23.8736 94.2893 23.4528 94.4738 22.8599 94.6681C22.2861 94.8817 21.5976 94.9886 20.7943 94.9886C19.7423 94.9886 18.8529 94.7943 18.1261 94.4058C17.4184 94.0173 16.8351 93.4735 16.376 92.7742C15.9361 92.0749 15.6205 91.2397 15.4293 90.2685C15.238 89.2973 15.1424 88.2289 15.1424 87.0635C15.1424 84.247 15.6014 82.188 16.5195 80.8866C17.4376 79.5852 18.6521 78.9344 20.1631 78.9344C21.8653 78.9344 23.0703 79.5852 23.778 80.8866C24.4857 82.188 24.8395 84.0139 24.8395 86.3642C24.8395 86.5779 24.8395 86.8012 24.8395 87.0343C24.8395 87.248 24.83 87.4714 24.8108 87.7045H17.6671ZM20.1631 81.0614C19.3406 81.0614 18.7382 81.479 18.3556 82.3143C17.9922 83.1495 17.7723 84.2664 17.6958 85.6649H22.2574C22.2574 84.247 22.114 83.1301 21.8271 82.3143C21.5402 81.479 20.9855 81.0614 20.1631 81.0614Z" fill="black"/>
              <path d="M33.5516 91.667C33.7811 90.89 34.0202 89.9771 34.2688 88.9282C34.5366 87.8793 34.7948 86.8012 35.0434 85.6941C35.2921 84.5675 35.5216 83.4506 35.732 82.3434C35.9615 81.2362 36.1528 80.2262 36.3058 79.3132H38.7731C38.5245 80.5952 38.228 81.9452 37.8837 83.3632C37.5586 84.7811 37.2143 86.1797 36.8509 87.5588C36.5066 88.9185 36.1528 90.2102 35.7894 91.4339C35.426 92.6576 35.0913 93.7163 34.7852 94.6098H32.2318C31.9258 93.7163 31.5911 92.6576 31.2277 91.4339C30.8643 90.2102 30.5009 88.9185 30.1375 87.5588C29.7932 86.1797 29.4489 84.7811 29.1047 83.3632C28.7795 81.9452 28.4926 80.5952 28.244 79.3132H30.8547C31.0077 80.2262 31.1894 81.2362 31.3998 82.3434C31.6294 83.4506 31.8589 84.5675 32.0884 85.6941C32.337 86.8012 32.5857 87.8793 32.8343 88.9282C33.083 89.9771 33.3221 90.89 33.5516 91.667Z" fill="black"/>
              <path d="M44.5884 87.7045C44.6075 88.4426 44.6745 89.1224 44.7892 89.744C44.904 90.3462 45.0857 90.8803 45.3343 91.3465C45.6021 91.7933 45.9464 92.1429 46.3672 92.3954C46.8071 92.6479 47.3617 92.7742 48.0312 92.7742C48.5858 92.7742 49.0927 92.6965 49.5517 92.5411C50.0299 92.3663 50.3742 92.2206 50.5846 92.1041L51.0436 94.1145C50.7949 94.2893 50.3742 94.4738 49.7812 94.6681C49.2074 94.8817 48.5189 94.9886 47.7156 94.9886C46.6636 94.9886 45.7742 94.7943 45.0474 94.4058C44.3397 94.0173 43.7564 93.4735 43.2974 92.7742C42.8574 92.0749 42.5419 91.2397 42.3506 90.2685C42.1593 89.2973 42.0637 88.2289 42.0637 87.0635C42.0637 84.247 42.5227 82.188 43.4408 80.8866C44.3589 79.5852 45.5734 78.9344 47.0844 78.9344C48.7867 78.9344 49.9916 79.5852 50.6993 80.8866C51.407 82.188 51.7608 84.0139 51.7608 86.3642C51.7608 86.5779 51.7608 86.8012 51.7608 87.0343C51.7608 87.248 51.7513 87.4714 51.7321 87.7045H44.5884ZM47.0844 81.0614C46.262 81.0614 45.6595 81.479 45.2769 82.3143C44.9135 83.1495 44.6936 84.2664 44.6171 85.6649H49.1788C49.1788 84.247 49.0353 83.1301 48.7484 82.3143C48.4615 81.479 47.9068 81.0614 47.0844 81.0614Z" fill="black"/>
              <path d="M61.0146 94.9011C59.5993 94.8623 58.5856 94.5127 57.9735 93.8522C57.3615 93.1724 57.0554 92.1041 57.0554 90.6472V72.437L59.5228 72V90.7055C59.5228 91.3854 59.6567 91.8807 59.9244 92.1915C60.1922 92.4828 60.6608 92.6868 61.3302 92.8033L61.0146 94.9011Z" fill="black"/>
              <path d="M75.479 86.9761C75.479 88.1804 75.3738 89.2778 75.1634 90.2685C74.953 91.2397 74.6279 92.0749 74.188 92.7742C73.7672 93.4735 73.2221 94.0173 72.5526 94.4058C71.9023 94.7943 71.1277 94.9886 70.2288 94.9886C69.3298 94.9886 68.5456 94.7943 67.8762 94.4058C67.2068 94.0173 66.6521 93.4735 66.2122 92.7742C65.7914 92.0749 65.4758 91.2397 65.2654 90.2685C65.055 89.2778 64.9498 88.1804 64.9498 86.9761C64.9498 85.7912 65.055 84.7034 65.2654 83.7128C65.4758 82.7222 65.7914 81.8772 66.2122 81.1779C66.6521 80.4592 67.2068 79.9057 67.8762 79.5172C68.5456 79.1287 69.3298 78.9344 70.2288 78.9344C71.1277 78.9344 71.9023 79.1287 72.5526 79.5172C73.2221 79.9057 73.7672 80.4592 74.188 81.1779C74.6279 81.8772 74.953 82.7222 75.1634 83.7128C75.3738 84.7034 75.479 85.7912 75.479 86.9761ZM72.8969 86.9761C72.8969 86.1214 72.8491 85.3444 72.7535 84.6452C72.6578 83.9265 72.5048 83.3146 72.2944 82.8096C72.084 82.2851 71.8067 81.8869 71.4624 81.615C71.1181 81.3236 70.7069 81.1779 70.2288 81.1779C69.7315 81.1779 69.3107 81.3236 68.9664 81.615C68.6413 81.8869 68.3639 82.2851 68.1344 82.8096C67.924 83.3146 67.771 83.9265 67.6754 84.6452C67.5797 85.3444 67.5319 86.1214 67.5319 86.9761C67.5319 87.8307 67.5797 88.6174 67.6754 89.3361C67.771 90.0354 67.924 90.6375 68.1344 91.1426C68.3639 91.6476 68.6413 92.0458 68.9664 92.3371C69.3107 92.6091 69.7315 92.7451 70.2288 92.7451C70.7069 92.7451 71.1181 92.6091 71.4624 92.3371C71.8067 92.0458 72.084 91.6476 72.2944 91.1426C72.5048 90.6375 72.6578 90.0354 72.7535 89.3361C72.8491 88.6174 72.8969 87.8307 72.8969 86.9761Z" fill="black"/>
              <path d="M83.2508 92.308C83.8055 92.6188 84.3984 92.7742 85.0295 92.7742C85.5077 92.7742 85.9285 92.6771 86.2919 92.4828C86.6553 92.2886 86.9613 91.9681 87.21 91.5213C87.4777 91.0746 87.6786 90.4821 87.8125 89.744C87.9463 89.0059 88.0133 88.093 88.0133 87.0052C88.0133 84.9074 87.7455 83.4117 87.21 82.5182C86.6936 81.6053 85.8615 81.1488 84.714 81.1488C84.5036 81.1488 84.274 81.1682 84.0254 81.2071C83.7768 81.2265 83.5186 81.2751 83.2508 81.3528V92.308ZM83.2508 100H80.7835V79.7211C81.319 79.488 81.9215 79.3035 82.5909 79.1675C83.2795 79.0121 83.9776 78.9344 84.6853 78.9344C85.7372 78.9344 86.6362 79.119 87.3821 79.488C88.1472 79.8571 88.7592 80.3913 89.2183 81.0905C89.6964 81.7704 90.0407 82.6153 90.2511 83.6254C90.4806 84.616 90.5954 85.7523 90.5954 87.0343C90.5954 89.6178 90.1841 91.5893 89.3617 92.949C88.5584 94.3087 87.2387 94.9886 85.4025 94.9886C84.9626 94.9886 84.5705 94.94 84.2262 94.8429C83.882 94.7652 83.5568 94.6486 83.2508 94.4932V100Z" fill="black"/>
              <path d="M95.9258 79.7503C96.5953 79.5366 97.3221 79.3618 98.1063 79.2258C98.8904 79.0704 99.6077 78.9927 100.258 78.9927C100.927 78.9927 101.53 79.0801 102.065 79.2549C102.62 79.4298 103.108 79.7211 103.529 80.129C104.026 79.7988 104.561 79.5269 105.135 79.3132C105.709 79.0995 106.34 78.9927 107.029 78.9927C107.717 78.9927 108.339 79.0995 108.894 79.3132C109.467 79.5075 109.955 79.8474 110.357 80.333C110.758 80.8186 111.074 81.479 111.304 82.3143C111.533 83.1301 111.648 84.1498 111.648 85.3736V94.6098H109.181V85.5775C109.181 84.0624 109.008 82.9553 108.664 82.256C108.32 81.5567 107.67 81.2071 106.713 81.2071C106.35 81.2071 105.977 81.2751 105.594 81.411C105.231 81.547 104.887 81.7315 104.561 81.9646C104.714 82.4114 104.829 82.9164 104.906 83.4797C104.982 84.043 105.02 84.6743 105.02 85.3736V94.6098H102.553V85.5775C102.553 84.0624 102.381 82.9553 102.037 82.256C101.692 81.5567 101.042 81.2071 100.086 81.2071C99.5886 81.2071 99.0243 81.3042 98.3932 81.4984V94.6098H95.9258V79.7503Z" fill="black"/>
              <path d="M119.372 87.7045C119.391 88.4426 119.458 89.1224 119.573 89.744C119.688 90.3462 119.87 90.8803 120.118 91.3465C120.386 91.7933 120.73 92.1429 121.151 92.3954C121.591 92.6479 122.146 92.7742 122.815 92.7742C123.37 92.7742 123.877 92.6965 124.336 92.5411C124.814 92.3663 125.158 92.2206 125.368 92.1041L125.828 94.1145C125.579 94.2893 125.158 94.4738 124.565 94.6681C123.991 94.8817 123.303 94.9886 122.5 94.9886C121.448 94.9886 120.558 94.7943 119.831 94.4058C119.124 94.0173 118.54 93.4735 118.081 92.7742C117.641 92.0749 117.326 91.2397 117.135 90.2685C116.943 89.2973 116.848 88.2289 116.848 87.0635C116.848 84.247 117.307 82.188 118.225 80.8866C119.143 79.5852 120.357 78.9344 121.868 78.9344C123.571 78.9344 124.776 79.5852 125.483 80.8866C126.191 82.188 126.545 84.0139 126.545 86.3642C126.545 86.5779 126.545 86.8012 126.545 87.0343C126.545 87.248 126.535 87.4714 126.516 87.7045H119.372ZM121.868 81.0614C121.046 81.0614 120.443 81.479 120.061 82.3143C119.697 83.1495 119.478 84.2664 119.401 85.6649H123.963C123.963 84.247 123.819 83.1301 123.532 82.3143C123.245 81.479 122.691 81.0614 121.868 81.0614Z" fill="black"/>
              <path d="M131.897 79.7503C132.604 79.5366 133.37 79.3618 134.192 79.2258C135.014 79.0704 135.77 78.9927 136.458 78.9927C137.204 78.9927 137.883 79.0995 138.495 79.3132C139.107 79.5075 139.624 79.8474 140.045 80.333C140.485 80.8186 140.819 81.479 141.049 82.3143C141.297 83.1301 141.422 84.1498 141.422 85.3736V94.6098H138.954V85.5775C138.954 84.0624 138.763 82.9553 138.381 82.256C137.998 81.5567 137.281 81.2071 136.229 81.2071C135.674 81.2071 135.053 81.3042 134.364 81.4984V94.6098H131.897V79.7503Z" fill="black"/>
              <path d="M149.754 79.3132H153.541V81.4693H149.754V89.8897C149.754 90.9386 149.936 91.6767 150.299 92.1041C150.682 92.512 151.188 92.7159 151.82 92.7159C152.145 92.7159 152.451 92.6674 152.738 92.5702C153.044 92.4731 153.302 92.3566 153.512 92.2206L154 94.231C153.216 94.6972 152.384 94.9303 151.504 94.9303C150.089 94.9303 149.027 94.5321 148.319 93.7357C147.631 92.9199 147.287 91.5796 147.287 89.7149V75.205L149.754 74.7679V79.3132Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;