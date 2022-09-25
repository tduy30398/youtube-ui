import HeadlessTippy from '@tippyjs/react/headless';
import { default as PopperWrapper } from '~/components/Popper/Wrapper';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);

    // Lấy phần tử cuối của mảng, nguyên tắc là luôn render ra phần tử
    // cuối của mảng
    const current = history[history.length - 1];

    // Hàm này render ra cái menu, trong menu có từng cái menu item (component MenuItem)
    const renderItems = () => {
        return current.data.map((item, index) => {
            // Kiểm tra item nào có children
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // Khi có children, click vào thì push children đó vào mảng => render lại
                            // lần sau sẽ render current.data của phần tử cuối cùng (vừa được push
                            // vào mảng)
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <HeadlessTippy
            trigger="click"
            interactive
            offset={[-105, 5]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <MenuHeader
                                title={current.title}
                                onBack={() => {
                                    // Khi click vào nút back trên header của menu, sẽ quay
                                    // về 1 cấp: trừ đi phần tử cuối cùng của mảng
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            // Khi click ra ngoài sẽ set lại trang đầu tiên
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
