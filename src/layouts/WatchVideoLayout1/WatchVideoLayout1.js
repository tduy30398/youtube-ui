import classNames from 'classnames/bind';
import styles from './WatchVideoLayout1.module.scss';
import Header from '../components/Header';
import Video2 from './components/Video2';
import config from '~/config';

const cx = classNames.bind(styles);

function WatchVideoLayout1({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('grid')}>
                    <div className={cx('row', 'grid__row')}>
                        <div className={cx('col wide l-8 m-12 c-12')}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                        <div className={cx('col l-4 m-0 c-0')}>
                            <div className={cx('container-video-right')}>
                                <Video2
                                    to={config.video.video14}
                                    img={
                                        'https://i.ytimg.com/vi/RAWjdACpiVw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7tSbT1czFMQmeRSXUx3BDa5rsiA'
                                    }
                                    runtime={'12:07'}
                                    title={'AVATAR: Hành trình tạo nên MỘT HUYỀN THOẠI'}
                                    channelName={'Phê Phim'}
                                    view={'340K views'}
                                    uploadTime={'8 days ago'}
                                />

                                <Video2
                                    to={config.video.video8}
                                    img={
                                        'https://i.ytimg.com/vi/FMddJcaDnRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9OdsMcBkssNFVagCEZbPYd-UKaw'
                                    }
                                    runtime={'11:33'}
                                    title={'Những đứa trẻ không lớn | Recap Xàm #305 Grown-ups 1'}
                                    channelName={'The Riviewer'}
                                    view={'111K views'}
                                    uploadTime={'2 weeks ago'}
                                />
                                <Video2
                                    to={config.video.video7}
                                    img={
                                        'https://i.ytimg.com/vi/8T9MPAT0Rpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn3MwS4Gal4UeeoQAZGALjhoG_GQ'
                                    }
                                    runtime={'8:22'}
                                    title={'Giant Rainbow Lobster Catch And Cook'}
                                    channelName={'Survival Beast'}
                                    view={'5.3M views'}
                                    uploadTime={'6 months ago'}
                                />

                                <Video2
                                    to={config.video.video6}
                                    img={
                                        'https://i.ytimg.com/vi/BHTdpkR4Jqc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRLpsoNTTNbyzLV_HLk2L7Ewrk-g'
                                    }
                                    runtime={'19:15'}
                                    title={'#455 Rốt Cuộc, Trái Đất Có Phải Trung Tâm Của Vũ Trụ???'}
                                    channelName={'VFacts'}
                                    view={'306K views'}
                                    uploadTime={'3 weeks ago'}
                                />
                                <Video2
                                    to={config.video.video11}
                                    img={
                                        'https://i.ytimg.com/vi/25yJjSi5pcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhDNaX_257Q0DZ_FXiKqv15_EGPg'
                                    }
                                    runtime={'1:00:53'}
                                    title={
                                        'Yêu Thương Là Bão Tố Slowed - Những Bản Lofi Chill Tâm Trạng Buồn Hay - Nhạc Slowed Tâm Trạng Buồn'
                                    }
                                    channelName={'Khi Phải Quên Đi'}
                                    view={'221K views'}
                                    uploadTime={'1 month ago'}
                                />
                                <Video2
                                    to={config.video.video16}
                                    img={
                                        'https://i.ytimg.com/vi/VOF38bs7K_8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR1y_CJNHDlkQTSz9_Cc99bs8xhw'
                                    }
                                    runtime={'10:07'}
                                    title={
                                        'ARSENAL - TOTTENHAM | PHÁO THỦ BÙNG NỔ, GÀ TRỐNG NGẬM NGÙI SAU TẤM THẺ ĐỎ | NGOẠI HẠNG ANH 22/23'
                                    }
                                    channelName={'Kplus Sports'}
                                    view={'50K views'}
                                    uploadTime={'13 minutes ago'}
                                />
                                <Video2
                                    to={config.video.video13}
                                    img={
                                        'https://i.ytimg.com/vi/j8U06veqxdU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBslvrMrhmD73svlenypwgGZY4J1Q'
                                    }
                                    runtime={'5:51'}
                                    title={'SÓNG GIÓ | K-ICM x JACK | OFFICIAL MUSIC VIDEO'}
                                    channelName={'ICM Entertainment'}
                                    view={'413M views'}
                                    uploadTime={'3 weeks ago'}
                                />
                                <Video2
                                    to={config.video.video9}
                                    img={
                                        'https://i.ytimg.com/vi/IEiljbZtj-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtpG2UXywvmTi65w_KnP83TCuKfQ'
                                    }
                                    runtime={'45:30'}
                                    title={
                                        'BIẾT GIÚP AI ĐÂY #15 | COMEBACK CỰC MẠNH SERIES BẰNG CÔNG THỨC BECKHAM ICON +5...BẤT NGỜ CHƯA?'
                                    }
                                    channelName={'Thầy Giáo Ba'}
                                    view={'23K views'}
                                    uploadTime={'10 hours ago'}
                                />
                                <Video2
                                    to={config.video.video12}
                                    img={
                                        'https://i.ytimg.com/vi/zSNgmQx-QqU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFlOnw-vEEkvCBtztIKtt-xGm6Vw'
                                    }
                                    runtime={'3:46'}
                                    title={'QUANG HÙNG MASTERD - Đừng Khóc Một Mình (Official Lyric Video)'}
                                    channelName={'Quang Hùng MasterD'}
                                    view={'4.2M views'}
                                    uploadTime={'3 weeks ago'}
                                />
                                <Video2
                                    to={config.video.video5}
                                    img={
                                        'https://i.ytimg.com/vi/hU8p711l_fI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGgj47r1K51mlKXh67Vpo4Hu-vzQ'
                                    }
                                    runtime={'12:26'}
                                    title={'Vì sao TOP GUN: MAVERICK đang là PHIM ĂN KHÁCH NHẤT 2022'}
                                    channelName={'Phê Phim'}
                                    view={'301K views'}
                                    uploadTime={'4 weeks ago'}
                                />
                                <Video2
                                    to={config.video.video15}
                                    img={
                                        'https://i.ytimg.com/vi/JcNfxct8LgY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxedBMH7NC4RQW82huOyiDve_clQ'
                                    }
                                    runtime={'12:28'}
                                    title={
                                        'QUẢ BÁO ĐẾN SỚM - PHIM HOẠT HÌNH  - KHOẢNH KHẮC KỲ DIỆU - TRUYỆN CỔ TÍCH - CHUYỆN CỔ TÍCH - PHIM HAY'
                                    }
                                    channelName={'KHOẢNH KHẮC KỲ DIỆU'}
                                    view={'2.7M views'}
                                    uploadTime={'1 year ago'}
                                />
                                <Video2
                                    to={config.video.video2}
                                    img={
                                        'https://i.ytimg.com/vi/IGyA9CxWwbs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoIbaAcig48Qde4S_6qBjYCSN8-A'
                                    }
                                    runtime={'4:47'}
                                    title={'Rồi Người Thương Cũng Hóa Người Dưng - Official MV | Hiền Hồ'}
                                    channelName={'Hiền Hồ Official'}
                                    view={'130M views'}
                                    uploadTime={'4 years ago'}
                                />
                                <Video2
                                    to={config.video.video10}
                                    img={
                                        'https://i.ytimg.com/vi/9tcFnx0-cQY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz0ALF68H2GJr_aCym5ClnThWOTQ'
                                    }
                                    runtime={'5:13'}
                                    title={
                                        'NGƯỜI ĐÁNG THƯƠNG LÀ ANH - ONLY C X NGUYỄN PHÚC THIỆN | OFFICIAL MUSIC VIDEO'
                                    }
                                    channelName={'OnlyC Production'}
                                    view={'6.4M views'}
                                    uploadTime={'1 month ago'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchVideoLayout1;
