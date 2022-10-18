import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from './components/Video/Video';
import config from '~/config';
import ContainerMenu from './components/ContainerMenu';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('video-content-area')}>
            <nav className={cx('container-menu')}>
                <ContainerMenu />
            </nav>
            <div className={cx('container-list-video')}>
                <div className={cx('row', 'row-content')}>
                    <Video
                        to={config.video.video1}
                        thumb={
                            'https://i.ytimg.com/vi/4eX93NZmxVU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARShFYf5-4XQ0FPw4vjzqYOpqzVw'
                        }
                        avatar={
                            'https://yt3.ggpht.com/cy-e4sJD7488A3fv7QCOsMFjemOYJnviIIAMTnbAb2wq6iIiOs-DMbPKEH7lZEzRXuRD-KKwEw=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'11:42'}
                        title={'CON TÀU NOAH: TRUYỀN THUYẾT TRONG KINH THÁNH HAY THỰC SỰ TỪNG TỒN TẠI?'}
                        channelName={'BLV Anh Quân Discovery'}
                        view={'512K views'}
                        uploadTime={'2 hours ago'}
                    />
                    <Video
                        to={config.video.video2}
                        thumb={
                            'https://i.ytimg.com/vi/IGyA9CxWwbs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoIbaAcig48Qde4S_6qBjYCSN8-A'
                        }
                        avatar={
                            'https://yt3.ggpht.com/HJaRj2po2fuUU4zOE5VVo1n9Csw_CtKfH3M0UmI_KPxYb2_-gfeTi8qaXxTgpH8006x0I7Bydg=s88-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'4:47'}
                        title={'Rồi Người Thương Cũng Hóa Người Dưng - Official MV | Hiền Hồ'}
                        channelName={'Hiền Hồ Official'}
                        view={'130M views'}
                        uploadTime={'4 years ago'}
                        className="margin-mobile"
                    />
                    <Video
                        to={config.video.video3}
                        thumb={
                            'https://i.ytimg.com/vi/3fi7uwBU-CE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGdstWL7hJy2EsDWQLY6yozXCkGQ'
                        }
                        avatar={
                            'https://yt3.ggpht.com/OBz9ECRB9DrAVXCYV2RNoQbCuWT5QENiPcbHNaPOshDGbacrkMBASQqK7F1eLny7iMgkLarJHoo=s88-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'5:41'}
                        title={'Chi Pu | ANH ƠI Ở LẠI - Official M/V (Chuyện Cám Tấm) (치푸)'}
                        channelName={'Chi Pu Official'}
                        view={'108M views'}
                        uploadTime={'Apr 23, 2019'}
                        className="margin-tablet margin-mobile"
                    />
                    <Video
                        to={config.video.video4}
                        thumb={
                            'https://i.ytimg.com/vi/YhAGk8jIKLs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsKv_xv3aQTIr4d9iil44V2LKMew'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu_njAOubDub5GF7ovgS1G4eDeo-nqUj3J0hQoSv8w=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'55:38'}
                        title={'51H SINH TỒN 1 Mình Trong Khu Rừng Mưa Khắc Nghiệt Nhất | Solo Survival'}
                        channelName={'Sang vlog'}
                        view={'2.3M views'}
                        uploadTime={'3 days ago'}
                        className="margin-tablet margin-mobile"
                    />
                </div>
                <div className={cx('row', 'row-content')}>
                    <Video
                        to={config.video.video5}
                        thumb={
                            'https://i.ytimg.com/vi/hU8p711l_fI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGgj47r1K51mlKXh67Vpo4Hu-vzQ'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu_0SBD8catOuQudvA58PP6Q56fKBIgCeXfULHMJUw=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'12:26'}
                        title={'Vì sao TOP GUN: MAVERICK đang là PHIM ĂN KHÁCH NHẤT 2022'}
                        channelName={'Phê Phim'}
                        view={'301K views'}
                        uploadTime={'4 weeks ago'}
                    />
                    <Video
                        to={config.video.video6}
                        thumb={
                            'https://i.ytimg.com/vi/BHTdpkR4Jqc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRLpsoNTTNbyzLV_HLk2L7Ewrk-g'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu_CShfKyxGMb68-8xEs2W_WcijPvFG1lE2PP1CVCg=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'19:15'}
                        title={'#455 Rốt Cuộc, Trái Đất Có Phải Trung Tâm Của Vũ Trụ???'}
                        channelName={'VFacts'}
                        view={'306K views'}
                        uploadTime={'3 weeks ago'}
                        className="margin-mobile"
                    />
                    <Video
                        to={config.video.video7}
                        thumb={
                            'https://i.ytimg.com/vi/8T9MPAT0Rpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn3MwS4Gal4UeeoQAZGALjhoG_GQ'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu-SEIRu7nnOMVzy6EhbeDv5nMbDvvxV35P88fTH=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'8:22'}
                        title={'Giant Rainbow Lobster Catch And Cook'}
                        channelName={'Survival Beast'}
                        view={'5.3M views'}
                        uploadTime={'6 months ago'}
                        className="margin-tablet margin-mobile"
                    />
                    <Video
                        to={config.video.video8}
                        thumb={
                            'https://i.ytimg.com/vi/FMddJcaDnRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9OdsMcBkssNFVagCEZbPYd-UKaw'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu9DvPihx5Q5z9dP_a3g11zSl0qc_8xyLr6qaXFu9g=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'11:33'}
                        title={'Những đứa trẻ không lớn | Recap Xàm #305 Grown-ups 1'}
                        channelName={'The Reviewer'}
                        view={'111k views'}
                        uploadTime={'2 weeks ago'}
                        className="margin-tablet margin-mobile"
                    />
                </div>
                <div className={cx('row', 'row-content')}>
                    <Video
                        to={config.video.video9}
                        thumb={
                            'https://i.ytimg.com/vi/IEiljbZtj-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtpG2UXywvmTi65w_KnP83TCuKfQ'
                        }
                        avatar={
                            'https://yt3.ggpht.com/i_QfaDoXmfSH9vyc34LNeOR6QXTDutH8_R3EMZ5RXgC7Q47SeKoR0IAyuayJs5P6MNa-MCYj=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'45:30'}
                        title={
                            'BIẾT GIÚP AI ĐÂY #15 | COMEBACK CỰC MẠNH SERIES BẰNG CÔNG THỨC BECKHAM ICON +5...BẤT NGỜ CHƯA?'
                        }
                        channelName={'Thầy Giáo Ba'}
                        view={'23K views'}
                        uploadTime={'10 hours ago'}
                    />
                    <Video
                        to={config.video.video10}
                        thumb={
                            'https://i.ytimg.com/vi/9tcFnx0-cQY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz0ALF68H2GJr_aCym5ClnThWOTQ'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu8HSinZHK8AU1K_7IcA7atwO-tfWvya1eX7vJSZvA=s88-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'5:13'}
                        title={'NGƯỜI ĐÁNG THƯƠNG LÀ ANH - ONLY C X NGUYỄN PHÚC THIỆN | OFFICIAL MUSIC VIDEO'}
                        channelName={'OnlyC Production'}
                        view={'6.4M views'}
                        uploadTime={'1 month ago'}
                        className="margin-mobile"
                    />
                    <Video
                        to={config.video.video11}
                        thumb={
                            'https://i.ytimg.com/vi/25yJjSi5pcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhDNaX_257Q0DZ_FXiKqv15_EGPg'
                        }
                        avatar={
                            'https://yt3.ggpht.com/YTQIv2BB0j4pW5pbr-AoxfJEfH1jzCzwFcVM6YWGS0vJhUy2_z3QfxyoeLFzmsf3VZLcNi0ddJM=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'1:00:53'}
                        title={
                            'Yêu Thương Là Bão Tố Slowed - Những Bản Lofi Chill Tâm Trạng Buồn Hay - Nhạc Slowed Tâm Trạng Buồn'
                        }
                        channelName={'Khi Phải Quên Đi'}
                        view={'221K views'}
                        uploadTime={'1 month ago'}
                        className="margin-tablet margin-mobile"
                    />
                    <Video
                        to={config.video.video12}
                        thumb={
                            'https://i.ytimg.com/vi/zSNgmQx-QqU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFlOnw-vEEkvCBtztIKtt-xGm6Vw'
                        }
                        avatar={
                            'https://yt3.ggpht.com/k6_T7dtb4qeLNSPid-5kK9RsjnI1_5jt5EV5mVTYbsVRMcKAKuM2fbXmYbOwgGTAOvfuDAy8mA=s88-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'3:46'}
                        title={'QUANG HÙNG MASTERD - Đừng Khóc Một Mình (Official Lyric Video)'}
                        channelName={'Quang Hùng MasterD'}
                        view={'4.2M views'}
                        uploadTime={'3 years ago'}
                        className="margin-tablet margin-mobile"
                    />
                </div>
                <div className={cx('row', 'row-content')}>
                    <Video
                        to={config.video.video13}
                        thumb={
                            'https://i.ytimg.com/vi/j8U06veqxdU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBslvrMrhmD73svlenypwgGZY4J1Q'
                        }
                        avatar={
                            'https://yt3.ggpht.com/TpcGt3U8tv_KK49whh5ICjJFQxBze7NeqiDGMlw25CoZv-TBWIknnGydthZTzK1G4yYaAbgtUro=s88-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'5:51'}
                        title={'SÓNG GIÓ | K-ICM x JACK | OFFICIAL MUSIC VIDEO'}
                        channelName={'ICM Entertainment'}
                        view={'413M views'}
                        uploadTime={'3 years ago'}
                    />
                    <Video
                        to={config.video.video14}
                        thumb={
                            'https://i.ytimg.com/vi/RAWjdACpiVw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7tSbT1czFMQmeRSXUx3BDa5rsiA'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu_0SBD8catOuQudvA58PP6Q56fKBIgCeXfULHMJUw=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'12:07'}
                        title={'AVATAR: Hành trình tạo nên MỘT HUYỀN THOẠI'}
                        channelName={'Phê Phim'}
                        view={'340K views'}
                        uploadTime={'8 days ago'}
                        className="margin-mobile"
                    />
                    <Video
                        to={config.video.video15}
                        thumb={
                            'https://i.ytimg.com/vi/JcNfxct8LgY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxedBMH7NC4RQW82huOyiDve_clQ'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu9ZxRnWC3SosAaBNXQ5vkfnSPI2ftgrDTtOurhkAQ=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'12:28'}
                        title={
                            'QUẢ BÁO ĐẾN SỚM - PHIM HOẠT HÌNH  - KHOẢNH KHẮC KỲ DIỆU - TRUYỆN CỔ TÍCH - CHUYỆN CỔ TÍCH - PHIM HAY'
                        }
                        channelName={'KHOẢNH KHẮC KỲ DIỆU'}
                        view={'2.7M views'}
                        uploadTime={'1 year ago'}
                        className="margin-tablet margin-mobile"
                    />
                    <Video
                        to={config.video.video16}
                        thumb={
                            'https://i.ytimg.com/vi/VOF38bs7K_8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR1y_CJNHDlkQTSz9_Cc99bs8xhw'
                        }
                        avatar={
                            'https://yt3.ggpht.com/ytc/AMLnZu-csIr0YoKhfwfEmoiWZV3O6303PKnLQnLYW1V-=s68-c-k-c0x00ffffff-no-rj'
                        }
                        runtime={'10:07'}
                        title={
                            'ARSENAL - TOTTENHAM | PHÁO THỦ BÙNG NỔ, GÀ TRỐNG NGẬM NGÙI SAU TẤM THẺ ĐỎ | NGOẠI HẠNG ANH 22/23'
                        }
                        channelName={'Kplus Sports'}
                        view={'50k views'}
                        uploadTime={'13 minutes ago'}
                        className="margin-tablet margin-mobile"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
