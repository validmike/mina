<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
        <script>
            (function () {
                try {
                    var tg = window.Telegram && window.Telegram.WebApp;
                    if (tg) {
                        tg.ready();
                        tg.expand();
                    }
                } catch (e) {}
            })();
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q5YT7JGSBN"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Q5YT7JGSBN');
        </script>

    </head>
    <body class="font-sans antialiased" style="background-color:#f3f4f6;">
        <div aria-hidden="true" style="position:fixed;top:0;left:0;width:1px;height:1px;background:#f3f4f6;pointer-events:none;"></div>
        @inertia
    </body>
</html>
