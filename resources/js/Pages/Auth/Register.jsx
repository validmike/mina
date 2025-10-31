import { useEffect, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Register() {
    const queryParams = new URLSearchParams(window.location.search);
    const inviteCode = queryParams.get('invite') || '';

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        invite: '',
        telegram_id: '',
    });

    const [telegramData, setTelegramData] = useState(null); // State to store the Telegram object
    const [isInitialized, setIsInitialized] = useState(false); // Prevent re-setting data

    useEffect(() => {
        try {
            const telegramWebApp = window.Telegram?.WebApp;
            setTelegramData(telegramWebApp); // Store the entire object for debugging

            if (!isInitialized && telegramWebApp?.initDataUnsafe?.user) {
                const { user, start_param } = telegramWebApp.initDataUnsafe;

                // Set initial data from Telegram WebApp
                setData((prevData) => ({
                    ...prevData,
                    telegram_id: user.id || '',
                    name: user.username || user.first_name || '',
                    invite: start_param || prevData.invite, // Preserve existing input if empty
                }));

                setIsInitialized(true); // Mark as initialized to prevent overwriting
            }
        } catch (error) {
            setTelegramData({ error: 'Failed to fetch Telegram WebApp data' });
        }
    }, [isInitialized, setData]);

    useEffect(() => {
        if (inviteCode) {
            setData('invite', inviteCode);
        }
    }, [inviteCode]);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            {/* Warning Banner */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
                <p className="font-bold">Warning:</p>
                {/* <p>
                     
                    WARNING 
                    +18 website . If you are under 18 
                    or find such material offensive, please exit immediately.
                </p> */}
                <img src="https://catbox.moe/pictures/qts/1448184200057.png" alt="use a vpn if image is not loaded" />
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="invite" value="Invite code *" />
                    <TextInput
                        id="invite"
                        name="invite"
                        value={data.invite}
                        className="mt-1 block w-full"
                        autoComplete="invite"
                        onChange={(e) => setData('invite', e.target.value)}
                        required
                        readOnly={!!inviteCode} // Make it readonly if it's auto-filled
                    />
                    <InputError message={errors.invite} className="mt-2" />
                    <InputError message={errors.telegram_id} className="mt-4" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        as="button"
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}