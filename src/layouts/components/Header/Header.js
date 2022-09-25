import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { default as PopperWrapper } from '~/components/Popper/Wrapper';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import SearchResult from '~/components/SearchResult/SearchResult';
import Menu from '~/components/Popper/Menu/Menu';
import {
    BellIcon,
    ClearIcon,
    EarthIcon,
    EllipsisIcon,
    FeedbackIcon,
    KeyboardIcon,
    LanguageIcon,
    MoonIcon,
    QuestionIcon,
    SearchIcon,
    SettingIcon,
    SignOutIcon,
    StudioIcon,
    SwitchIcon,
    UserIcon,
    VideoIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        iconLeft: <MoonIcon />,
        title: 'Appearance',
        children: {
            title: 'Appearance',
            data: [
                {
                    type: 'appearance',
                    code: 'dev',
                    title: 'Device Theme',
                },
                {
                    type: 'appearance',
                    code: 'li',
                    title: 'Light',
                },
                {
                    type: 'appearance',
                    code: 'da',
                    title: 'Dark',
                },
            ],
        },
    },
    {
        iconLeft: <LanguageIcon />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'sp',
                    title: 'Spanish',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thai',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'rs',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'arg',
                    title: 'Argentine',
                },
                {
                    type: 'language',
                    code: 'bra',
                    title: 'Brazilian',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'por',
                    title: 'Portuguese',
                },
                {
                    type: 'language',
                    code: 'arb',
                    title: 'Arabia',
                },
                {
                    type: 'language',
                    code: 'ida',
                    title: 'Indian',
                },
            ],
        },
    },
    {
        iconLeft: <EarthIcon />,
        title: 'Location',
        children: {
            title: 'Location',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'England',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    type: 'language',
                    code: 'sp',
                    title: 'Spain',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thailand',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: 'South Korea',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'China',
                },
                {
                    type: 'language',
                    code: 'rs',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'arg',
                    title: 'Argentina',
                },
                {
                    type: 'language',
                    code: 'bra',
                    title: 'Brazil',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'por',
                    title: 'Portugal',
                },
                {
                    type: 'language',
                    code: 'arb',
                    title: 'Saudi Arabia',
                },
                {
                    type: 'language',
                    code: 'ida',
                    title: 'India',
                },
            ],
        },
    },
    {
        iconLeft: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        iconLeft: <SettingIcon />,
        title: 'Settings',
        to: '/setting',
        seperateTop: true,
    },
    {
        iconLeft: <QuestionIcon />,
        title: 'Help',
        to: '/help',
        seperateTop: true,
    },
    {
        iconLeft: <FeedbackIcon />,
        title: 'Send feedback',
        to: '/feedback',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const userMenu = [
        {
            iconLeft: <UserIcon />,
            title: 'Your channel',
            to: '/channel',
        },
        {
            iconLeft: <StudioIcon />,
            title: 'Youtube Studio',
            to: '/studio',
        },
        {
            iconLeft: <SwitchIcon />,
            title: 'Switch account',
            to: '/switch',
        },
        {
            iconLeft: <SignOutIcon />,
            title: 'Sign out',
            to: '/logout',
        },
        ...MENU_ITEMS,
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Tippy content="Youtube Home" delay={[400, 0]}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="Youtube" />
                    </Link>
                </Tippy>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result-list')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <SearchResult />
                                <SearchResult />
                                <SearchResult />
                                <SearchResult />
                                <SearchResult />
                                <SearchResult />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" />
                        <button className={cx('clear')}>
                            <ClearIcon />
                        </button>
                        <Tippy content="Search" placement="bottom">
                            <button className={cx('search-btn')}>
                                <SearchIcon />
                            </button>
                        </Tippy>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Create">
                                <button className={cx('action-btn')}>
                                    <VideoIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Notifications">
                                <button className={cx('action-btn')}>
                                    <BellIcon />
                                </button>
                            </Tippy>

                            <Menu items={userMenu}>
                                <img
                                    className={cx('user-avatar')}
                                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                    alt="Thanh Duy"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu items={MENU_ITEMS}>
                                <Tippy content="Settings">
                                    <button className={cx('more-btn')}>
                                        <EllipsisIcon />
                                    </button>
                                </Tippy>
                            </Menu>

                            <Button outline leftIcon={<UserIcon />}>
                                SIGN IN
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
