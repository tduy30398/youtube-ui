import { useEffect, useState } from 'react';

// Nguyên lý hoạt động: nhận vào value và delay, khi value thay đổi (gõ chữ) thì
// chạy vào useEffect, nếu ngừng gõ thì sau delay giây sẽ clean up function và
// setTimeout, set lại debouncedValue và return ra debouncedValue mới nhất.
// Nếu đang gõ thì chưa kịp setTimeout nó lại nhận vào value mới và đợi tiếp
// delay giây để setTimeout
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        // Clear đi giá trị của lần trước đó (trừ lần đầu)
        // Lần đầu ko chạy (do ko có gì để clear)
        // Lý thuyết: ở mỗi lần re-render, cleanup function đc gọi ở lần trước đó xong rồi tới callback ở
        // lần hiện tại được gọi
        // Ở lần 2: clearTimeout của lần 1 đi rồi set lại Timeout của lần 2
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
