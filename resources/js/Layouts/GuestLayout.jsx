import { useEffect, useRef } from 'react';

export default function Guest({ children }) {
    const rootRef = useRef(null);

    useEffect(() => {
        try { window.Telegram?.WebApp?.ready(); } catch (_) {}
        try { window.Telegram?.WebApp?.expand(); } catch (_) {}

        const fakeTap = () => {
            try {
                window.scrollTo(0, 1);
                window.scrollTo(0, 0);
            } catch (_) {}

            try {
                const el = rootRef.current || document.body;
                const rect = el.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;

                const touchInit = {
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                };

                if (typeof Touch !== 'undefined' && typeof TouchEvent !== 'undefined') {
                    const touch = new Touch({
                        identifier: Date.now(),
                        target: el,
                        clientX: x,
                        clientY: y,
                        pageX: x,
                        pageY: y,
                        screenX: x,
                        screenY: y,
                        radiusX: 1,
                        radiusY: 1,
                        rotationAngle: 0,
                        force: 0.5,
                    });
                    el.dispatchEvent(new TouchEvent('touchstart', {
                        ...touchInit,
                        touches: [touch],
                        targetTouches: [touch],
                        changedTouches: [touch],
                    }));
                    el.dispatchEvent(new TouchEvent('touchend', {
                        ...touchInit,
                        touches: [],
                        targetTouches: [],
                        changedTouches: [touch],
                    }));
                }

                el.dispatchEvent(new MouseEvent('mousemove', { ...touchInit, clientX: x, clientY: y }));
            } catch (_) {}

            try {
                const el = rootRef.current;
                if (el) {
                    const prev = el.style.transform;
                    el.style.transform = 'translateZ(0)';
                    void el.offsetHeight;
                    el.style.transform = prev || '';
                }
            } catch (_) {}
        };

        fakeTap();
        const raf = requestAnimationFrame(fakeTap);
        const t1 = setTimeout(fakeTap, 50);
        const t2 = setTimeout(fakeTap, 150);
        const t3 = setTimeout(fakeTap, 350);
        const t4 = setTimeout(fakeTap, 750);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, []);

    return (
        <div
            ref={rootRef}
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
        >
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
