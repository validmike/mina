import Checkbox from '@/Components/Checkbox';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import StealthLink from '@/Components/StealthLink';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        telegram_id: '',
        remember: true,
    });

    // Fetch and set telegram_id
    useEffect(() => {
        try {
            const telegramData = window.Telegram?.WebApp?.initDataUnsafe;

            if (!telegramData || !telegramData.user) {
                Swal.fire({
                    icon: 'error',
                    title: 'Access Denied',
                    text: 'This website only works inside the Telegram bot\'s mini-app.',
                    confirmButtonText: 'Close',
                });
                return;
            }

            // Set telegram_id in form data
            setData('telegram_id', telegramData.user.id || '');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Initialization Error',
                text: 'An error occurred while initializing the app.',
                confirmButtonText: 'Close',
            });
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
            <InputError message={errors.telegram_id} className="mt-2 text-center" />


                {/* <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div> */}
                

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            as='button'
                            href={route('register')}
                            className=" rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Don't Have An Account?
                        </Link>
                    )}


                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in with Telegram
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
