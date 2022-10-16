import classNames from 'classnames/bind';
import styles from './HeaderAction.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu/Menu';
import {
    BellIcon,
    EarthIcon,
    EllipsisIcon,
    FeedbackIcon,
    KeyboardIcon,
    LanguageIcon,
    MoonIcon,
    QuestionIcon,
    SettingIcon,
    SignOutIcon,
    StudioIcon,
    SwitchIcon,
    UserIcon,
    VideoIcon,
} from '~/components/Icons';
import { useState } from 'react';

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

function HeaderAction() {
    const [isLogin, setIsLogin] = useState(false);

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

    const handleLogin = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className={cx('actions')}>
            {isLogin ? (
                <>
                    <Tippy content="Create">
                        <button className={cx('action-btn')}>
                            <VideoIcon />
                        </button>
                    </Tippy>

                    <Tippy content="Notifications">
                        <button className={cx('action-btn')}>
                            <BellIcon />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>

                    <Menu items={userMenu}>
                        <img
                            className={cx('user-avatar')}
                            src="https://yt3.ggpht.com/yti/AJo0G0mD_lS-q4dP0E025WFIeUP8Duqsc24RLbygR5kQzQ=s88-c-k-c0x00ffffff-no-rj-mo"
                            alt="avatar"
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

                    <Button outline leftIcon={<UserIcon />} onClick={handleLogin}>
                        SIGN IN
                    </Button>
                </>
            )}
        </div>
    );
}

export default HeaderAction;
