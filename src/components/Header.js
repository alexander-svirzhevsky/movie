export function Header() {
  return (
    <header>
      <div className='container header'>
        <a href='./index.html' className='header__logo'>
          <svg
            viewBox='0 0 331 53'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.93457 52V4H13.9658V41.5H33.3721V52H0.93457ZM56.1709 52.6562C52.2646 52.6562 48.9209 51.8828 46.1396 50.3359C43.3584 48.7734 41.2256 46.6016 39.7412 43.8203C38.2568 41.0234 37.5146 37.7813 37.5146 34.0938C37.5146 30.4062 38.2568 27.1719 39.7412 24.3906C41.2256 21.5937 43.3584 19.4219 46.1396 17.875C48.9209 16.3125 52.2646 15.5313 56.1709 15.5313C60.0771 15.5313 63.4209 16.3125 66.2021 17.875C68.9834 19.4219 71.1162 21.5937 72.6006 24.3906C74.085 27.1719 74.8272 30.4062 74.8272 34.0938C74.8272 37.7813 74.085 41.0234 72.6006 43.8203C71.1162 46.6016 68.9834 48.7734 66.2021 50.3359C63.4209 51.8828 60.0771 52.6562 56.1709 52.6562ZM56.2646 43.0937C57.3584 43.0937 58.3037 42.7266 59.1006 41.9922C59.8975 41.2578 60.5146 40.2109 60.9521 38.8516C61.3896 37.4922 61.6084 35.875 61.6084 34C61.6084 32.1094 61.3896 30.4922 60.9521 29.1484C60.5146 27.7891 59.8975 26.7422 59.1006 26.0078C58.3037 25.2734 57.3584 24.9062 56.2646 24.9062C55.1084 24.9062 54.1162 25.2734 53.2881 26.0078C52.46 26.7422 51.8271 27.7891 51.3896 29.1484C50.9521 30.4922 50.7334 32.1094 50.7334 34C50.7334 35.875 50.9521 37.4922 51.3896 38.8516C51.8271 40.2109 52.46 41.2578 53.2881 41.9922C54.1162 42.7266 55.1084 43.0937 56.2646 43.0937ZM101.64 16V25.375H77.5459V16H101.64ZM82.1396 52V14.9687C82.1396 12 82.6709 9.53906 83.7334 7.58594C84.7959 5.63281 86.2959 4.17187 88.2334 3.20312C90.1709 2.23437 92.4521 1.75 95.0771 1.75C96.7178 1.75 98.3115 1.875 99.8584 2.125C101.421 2.375 102.577 2.59375 103.327 2.78125L101.452 12.0625C100.983 11.9219 100.437 11.8125 99.8115 11.7344C99.1865 11.6406 98.6396 11.5937 98.1709 11.5937C96.9521 11.5937 96.1318 11.8516 95.71 12.3672C95.2881 12.8828 95.0771 13.5625 95.0771 14.4062V52H82.1396ZM128.101 16V25.375H104.382V16H128.101ZM108.976 7.375H121.913V40.4219C121.913 40.9219 121.999 41.3438 122.171 41.6875C122.343 42.0156 122.608 42.2656 122.968 42.4375C123.327 42.5937 123.788 42.6719 124.351 42.6719C124.741 42.6719 125.194 42.625 125.71 42.5313C126.241 42.4375 126.632 42.3594 126.882 42.2969L128.757 51.3906C128.179 51.5625 127.351 51.7734 126.272 52.0234C125.21 52.2734 123.944 52.4375 122.476 52.5156C119.507 52.6719 117.015 52.3672 114.999 51.6016C112.983 50.8203 111.468 49.5937 110.452 47.9219C109.437 46.25 108.944 44.1562 108.976 41.6406V7.375ZM133.966 4H150.185L161.341 31.1875H161.903L173.06 4H189.278V52H176.528V24.25H176.153L165.466 51.625H157.778L147.091 24.0625H146.716V52H133.966V4ZM212.985 52.6562C209.079 52.6562 205.735 51.8828 202.954 50.3359C200.173 48.7734 198.04 46.6016 196.556 43.8203C195.071 41.0234 194.329 37.7813 194.329 34.0938C194.329 30.4062 195.071 27.1719 196.556 24.3906C198.04 21.5937 200.173 19.4219 202.954 17.875C205.735 16.3125 209.079 15.5313 212.985 15.5313C216.892 15.5313 220.235 16.3125 223.017 17.875C225.798 19.4219 227.931 21.5937 229.415 24.3906C230.899 27.1719 231.642 30.4062 231.642 34.0938C231.642 37.7813 230.899 41.0234 229.415 43.8203C227.931 46.6016 225.798 48.7734 223.017 50.3359C220.235 51.8828 216.892 52.6562 212.985 52.6562ZM213.079 43.0937C214.173 43.0937 215.118 42.7266 215.915 41.9922C216.712 41.2578 217.329 40.2109 217.767 38.8516C218.204 37.4922 218.423 35.875 218.423 34C218.423 32.1094 218.204 30.4922 217.767 29.1484C217.329 27.7891 216.712 26.7422 215.915 26.0078C215.118 25.2734 214.173 24.9062 213.079 24.9062C211.923 24.9062 210.931 25.2734 210.103 26.0078C209.274 26.7422 208.642 27.7891 208.204 29.1484C207.767 30.4922 207.548 32.1094 207.548 34C207.548 35.875 207.767 37.4922 208.204 38.8516C208.642 40.2109 209.274 41.2578 210.103 41.9922C210.931 42.7266 211.923 43.0937 213.079 43.0937ZM272.077 16L259.983 52H244.983L232.89 16H246.483L252.296 39.8125H252.671L258.483 16H272.077ZM275.757 52V16H288.694V52H275.757ZM282.226 12.25C280.476 12.25 278.976 11.6719 277.726 10.5156C276.476 9.35937 275.851 7.96875 275.851 6.34375C275.851 4.71875 276.476 3.32812 277.726 2.17187C278.976 1.01562 280.476 0.4375 282.226 0.4375C283.991 0.4375 285.491 1.01562 286.726 2.17187C287.976 3.32812 288.601 4.71875 288.601 6.34375C288.601 7.96875 287.976 9.35937 286.726 10.5156C285.491 11.6719 283.991 12.25 282.226 12.25ZM312.536 52.6562C308.692 52.6562 305.38 51.9219 302.599 50.4531C299.833 48.9687 297.7 46.8437 296.2 44.0781C294.716 41.2969 293.974 37.9687 293.974 34.0938C293.974 30.375 294.724 27.125 296.224 24.3437C297.724 21.5625 299.841 19.3984 302.575 17.8516C305.31 16.3047 308.536 15.5313 312.255 15.5313C314.974 15.5313 317.435 15.9531 319.638 16.7969C321.841 17.6406 323.724 18.8672 325.286 20.4766C326.849 22.0703 328.052 24.0078 328.896 26.2891C329.739 28.5703 330.161 31.1406 330.161 34V37H298.005V29.875H318.255C318.239 28.8437 317.974 27.9375 317.458 27.1562C316.958 26.3594 316.278 25.7422 315.419 25.3047C314.575 24.8516 313.614 24.625 312.536 24.625C311.489 24.625 310.528 24.8516 309.653 25.3047C308.778 25.7422 308.075 26.3516 307.544 27.1328C307.028 27.9141 306.755 28.8281 306.724 29.875V37.5625C306.724 38.7187 306.966 39.75 307.45 40.6562C307.935 41.5625 308.63 42.2734 309.536 42.7891C310.442 43.3047 311.536 43.5625 312.817 43.5625C313.708 43.5625 314.521 43.4375 315.255 43.1875C316.005 42.9375 316.646 42.5781 317.177 42.1094C317.708 41.625 318.099 41.0469 318.349 40.375H330.161C329.755 42.875 328.794 45.0469 327.278 46.8906C325.763 48.7188 323.755 50.1406 321.255 51.1562C318.771 52.1562 315.864 52.6562 312.536 52.6562Z'
              fill='url(#brand-icon-color)'
            />
            <defs>
              <linearGradient
                id='brand-icon-color'
                x1='12'
                y1='20'
                x2='347.934'
                y2='18.4647'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='var(--brand-icon-gradient-start-color)' />
                <stop
                  offset='1'
                  stopColor='var(--brand-icon-gradient-end-color)'
                />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <ul className='header__navigation'>
          <li className='header__navigation-item'>
            <a href='/index.html'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.4432 22.884C5.13549 22.884 0 17.7491 0 11.442C0 5.13495 5.13549 0 11.4432 0C17.7509 0 22.8864 5.13495 22.8864 11.442C22.8864 17.7491 17.7509 22.884 11.4432 22.884ZM11.4432 1.67444C6.05094 1.67444 1.67462 6.06147 1.67462 11.442C1.67462 16.8225 6.05094 21.2096 11.4432 21.2096C16.8355 21.2096 21.2118 16.8225 21.2118 11.442C21.2118 6.06147 16.8355 1.67444 11.4432 1.67444Z'
                  fill='#05A1DC'
                />
                <path
                  d='M23.1655 23.9999C22.9534 23.9999 22.7412 23.9218 22.5738 23.7544L20.341 21.5218C20.0172 21.198 20.0172 20.6622 20.341 20.3385C20.6647 20.0148 21.2006 20.0148 21.5244 20.3385L23.7572 22.5711C24.0809 22.8948 24.0809 23.4306 23.7572 23.7544C23.5897 23.9218 23.3776 23.9999 23.1655 23.9999Z'
                  fill='#05A1DC'
                />
              </svg>
            </a>
          </li>
          <li className='header__navigation-item'>
            <button>
              {/* <!-- light theme icon --> */}
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.0219 19.9454C7.6503 19.9454 4.09839 16.3935 4.09839 12.0219C4.09839 7.6503 7.6503 4.09839 12.0219 4.09839C16.3935 4.09839 19.9454 7.6503 19.9454 12.0219C19.9454 16.3935 16.3935 19.9454 12.0219 19.9454ZM12.0219 5.73773C8.5574 5.73773 5.73773 8.5574 5.73773 12.0219C5.73773 15.4864 8.5574 18.306 12.0219 18.306C15.4864 18.306 18.306 15.4864 18.306 12.0219C18.306 8.5574 15.4864 5.73773 12.0219 5.73773Z'
                  fill='#39B4F7'
                />
                <path
                  d='M12.0219 24C11.4208 24 10.929 23.5519 10.929 22.9508V22.8634C10.929 22.2623 11.4208 21.7705 12.0219 21.7705C12.623 21.7705 13.1148 22.2623 13.1148 22.8634C13.1148 23.4645 12.623 24 12.0219 24ZM19.8251 20.918C19.541 20.918 19.2678 20.8087 19.0492 20.6011L18.9071 20.459C18.4809 20.0328 18.4809 19.3443 18.9071 18.918C19.3333 18.4918 20.0219 18.4918 20.4481 18.918L20.5902 19.0601C21.0164 19.4863 21.0164 20.1749 20.5902 20.6011C20.3825 20.8087 20.1093 20.918 19.8251 20.918ZM4.21858 20.918C3.93443 20.918 3.6612 20.8087 3.44262 20.6011C3.01639 20.1749 3.01639 19.4863 3.44262 19.0601L3.5847 18.918C4.01093 18.4918 4.69945 18.4918 5.12568 18.918C5.55191 19.3443 5.55191 20.0328 5.12568 20.459L4.98361 20.6011C4.77596 20.8087 4.4918 20.918 4.21858 20.918ZM22.9508 13.1148H22.8634C22.2623 13.1148 21.7705 12.623 21.7705 12.0219C21.7705 11.4208 22.2623 10.929 22.8634 10.929C23.4645 10.929 24 11.4208 24 12.0219C24 12.623 23.5519 13.1148 22.9508 13.1148ZM1.18033 13.1148H1.0929C0.491803 13.1148 0 12.623 0 12.0219C0 11.4208 0.491803 10.929 1.0929 10.929C1.69399 10.929 2.22951 11.4208 2.22951 12.0219C2.22951 12.623 1.78142 13.1148 1.18033 13.1148ZM19.6831 5.45355C19.3989 5.45355 19.1257 5.34426 18.9071 5.13661C18.4809 4.71038 18.4809 4.02186 18.9071 3.59563L19.0492 3.45355C19.4754 3.02732 20.1639 3.02732 20.5902 3.45355C21.0164 3.87978 21.0164 4.56831 20.5902 4.99454L20.4481 5.13661C20.2404 5.34426 19.9672 5.45355 19.6831 5.45355ZM4.36066 5.45355C4.0765 5.45355 3.80328 5.34426 3.5847 5.13661L3.44262 4.98361C3.01639 4.55738 3.01639 3.86885 3.44262 3.44262C3.86885 3.01639 4.55738 3.01639 4.98361 3.44262L5.12568 3.5847C5.55191 4.01093 5.55191 4.69945 5.12568 5.12568C4.91803 5.34426 4.63388 5.45355 4.36066 5.45355ZM12.0219 2.22951C11.4208 2.22951 10.929 1.78142 10.929 1.18033V1.0929C10.929 0.491803 11.4208 0 12.0219 0C12.623 0 13.1148 0.491803 13.1148 1.0929C13.1148 1.69399 12.623 2.22951 12.0219 2.22951Z'
                  fill='#39B4F7'
                />
              </svg>
              {/* <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M12.8936 24C12.698 24 12.5025 24 12.3069 23.9888C5.865 23.7098 0.481399 18.6759 0.0327656 12.5369C-0.35835 7.26859 2.78208 2.34627 7.84358 0.281351C9.28151 -0.299059 10.0407 0.14741 10.3628 0.4711C10.6849 0.783628 11.1336 1.50914 10.5354 2.83738C10.0062 4.02053 9.74164 5.2818 9.75315 6.57656C9.77615 11.5212 14.0094 15.718 19.1744 15.9189C19.9222 15.9524 20.6584 15.8966 21.3716 15.7738C22.89 15.5059 23.5227 16.0975 23.7643 16.477C24.0059 16.8565 24.282 17.6713 23.3617 18.8768C20.923 22.1137 17.0463 24 12.8936 24ZM1.74677 12.4141C2.13789 17.7271 6.80827 22.0802 12.3759 22.3146C16.1605 22.4932 19.7496 20.8189 21.9583 17.8945C22.1308 17.6601 22.2113 17.4927 22.2459 17.4034C22.1423 17.3923 21.9583 17.3811 21.6707 17.4369C20.8309 17.582 19.9567 17.6378 19.0939 17.6043C13.0201 17.3699 8.05064 12.4253 8.01613 6.59888C8.01613 5.05857 8.32672 3.57406 8.95941 2.17884C9.07445 1.93328 9.09745 1.76586 9.10896 1.67657C9.00543 1.67657 8.82137 1.69889 8.52228 1.82167C4.13948 3.60754 1.42468 7.87132 1.74677 12.4141Z"
                                  fill="#34BAF7" />
                          </svg> --> */}
            </button>
          </li>
          <li className='header__navigation-item'>
            <a href='/favourites.html'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.9857 24C20.337 24 19.6248 23.8326 18.938 23.4865L12.7313 20.4614C12.3625 20.2828 11.6375 20.2828 11.2687 20.4614L5.062 23.4865C3.80286 24.1005 2.51828 24.1674 1.53895 23.654C0.559618 23.1516 0 22.1358 0 20.8744V5.14605C0 2.3107 2.63275 0 5.86327 0H18.1367C21.3672 0 24 2.3107 24 5.14605V20.8744C24 22.1358 23.4404 23.1516 22.461 23.654C22.0159 23.8884 21.5072 24 20.9857 24ZM11.9936 18.653C12.5914 18.653 13.1765 18.7647 13.6471 18.9991L19.8537 22.0242C20.5024 22.3479 21.1002 22.4149 21.4817 22.214C21.8633 22.013 22.0795 21.533 22.0795 20.8744V5.14605C22.0795 3.23721 20.2989 1.67442 18.124 1.67442H5.86327C3.68839 1.67442 1.90779 3.23721 1.90779 5.14605V20.8744C1.90779 21.533 2.12401 22.0242 2.50556 22.214C2.88712 22.4037 3.47218 22.3479 4.13355 22.0242L10.3402 18.9991C10.8108 18.7647 11.3959 18.653 11.9936 18.653Z'
                  fill='#39B4F7'
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}