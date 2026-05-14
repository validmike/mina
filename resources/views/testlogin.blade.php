<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test Login</title>
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
    <style>
        * { box-sizing: border-box; }
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f3f4f6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }
        .card {
            width: 100%;
            max-width: 380px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            padding: 28px 24px;
        }
        h1 {
            margin: 0 0 20px;
            font-size: 22px;
            color: #111827;
            text-align: center;
        }
        label {
            display: block;
            font-size: 13px;
            color: #374151;
            margin-bottom: 6px;
        }
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 15px;
            margin-bottom: 16px;
            outline: none;
        }
        input:focus {
            border-color: #2563eb;
        }
        button {
            width: 100%;
            padding: 11px;
            background: #2563eb;
            color: #fff;
            border: 0;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
        }
        button:active { background: #1d4ed8; }
        .hint {
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            margin-top: 16px;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Test Login</h1>
        <form onsubmit="event.preventDefault(); alert('submitted (fake)');">
            <label for="username">Username</label>
            <input id="username" name="username" type="text" autocomplete="off">

            <label for="password">Password</label>
            <input id="password" name="password" type="password" autocomplete="off">

            <button type="submit">Sign in</button>
        </form>
        <div class="hint">Fake form — no backend.</div>
    </div>
</body>
</html>
