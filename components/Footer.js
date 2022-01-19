import { css } from '@emotion/css';

export default function Footer() {
    return(
        <div className={css`
            width: 100%;
            background: red;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
            background: #161616;
            color: #909090;
            font-size: 0.8em;
        `}>
            <div className={css`
                display: flex;
                gap: 1em;
            `}>
                <p>Contents © 2022</p>
                <p>Website Apache 2.0</p>
            </div>
            <div className={css`
                display: flex;
                gap: 1em;
                align-items: center;
            `}>
                <a>
                <svg width="18" height="18" viewBox="0 0 31 30" fill="none" xmlns="https://www.w3.org/2000/svg"><path class="socialnowaba" d="M15.5 0C6.94019 0 0 6.8861 0 15.3792C0 22.1752 4.44075 27.9386 10.6004 29.9718C11.3752 30.1126 11.6581 29.6376 11.6581 29.2321C11.6581 28.866 11.6439 27.6533 11.6364 26.3692C7.32617 27.2984 6.41512 24.5557 6.41512 24.5557C5.70939 22.7797 4.69426 22.3066 4.69426 22.3066C3.28561 21.3529 4.80112 21.3717 4.80112 21.3717C6.35736 21.4787 7.17668 22.9562 7.17668 22.9562C8.55981 25.3066 10.8057 24.627 11.6874 24.2327C11.8283 23.2415 12.2294 22.5619 12.6713 22.1789C9.23055 21.7903 5.611 20.4706 5.611 14.5776C5.611 12.8973 6.21553 11.5269 7.20508 10.4502C7.04708 10.0597 6.51351 8.49496 7.35832 6.37828C7.35832 6.37828 8.6582 5.96527 11.6212 7.95525C12.8567 7.61264 14.1821 7.44368 15.5 7.43803C16.8169 7.44368 18.1432 7.61451 19.3807 7.95711C22.338 5.96527 23.6398 6.38014 23.6398 6.38014C24.4874 8.49872 23.9539 10.0616 23.7949 10.4502C24.7883 11.5269 25.3881 12.8973 25.3881 14.5776C25.3881 20.4856 21.7628 21.7866 18.3098 22.1677C18.8679 22.6445 19.3618 23.5794 19.3618 25.0137C19.3618 27.0694 19.3409 28.7271 19.3409 29.234C19.3409 29.6433 19.6228 30.122 20.4081 29.9718C26.5631 27.9349 31 22.1714 31 15.3792C31 6.8861 24.0598 0 15.5 0Z" fill="white"></path></svg>
                </a>
                
                <a>
                <svg width="20" height="24" viewBox="0 60 320 320"><path class="socialnowaba" d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="white"></path></svg>
                </a>
                <a>
                <svg width="18" height="18" viewBox="0 0 26 20" fill="none" xmlns="https://www.w3.org/2000/svg"><path class="socialnow" fill-rule="evenodd" clip-rule="evenodd" d="M0 18V2.04272L12.8659 11.728L12.9164 11.6367L12.9301 11.6614L25.9927 1.82812C25.9975 1.88477 26 1.94214 26 2V18C26 19.1045 25.1046 20 24 20H2C0.895416 20 0 19.1045 0 18ZM25.0031 0.269287C24.7082 0.0979004 24.3655 0 24 0H2C1.56735 0 1.16678 0.137207 0.839539 0.37085L12.8538 9.41504L25.0031 0.269287Z" fill="#937EEA" fill-opacity="0.78"></path><path class="socialnowaba" fill-rule="evenodd" clip-rule="evenodd" d="M0 18V2.04272L12.8659 11.728L12.9164 11.6367L12.9301 11.6614L25.9927 1.82812C25.9975 1.88477 26 1.94214 26 2V18C26 19.1045 25.1046 20 24 20H2C0.895416 20 0 19.1045 0 18ZM25.0031 0.269287C24.7082 0.0979004 24.3655 0 24 0H2C1.56735 0 1.16678 0.137207 0.839539 0.37085L12.8538 9.41504L25.0031 0.269287Z" fill="white"></path></svg>
                </a>
            </div>
        </div>
    )
}