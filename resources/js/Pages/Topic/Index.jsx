import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ topics }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Help Center
                </h2>
            }
        >
            <Head title="Help Center" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 space-y-4">
                            <p className="mb-6 text-gray-600">
                                Welcome to the Help Center. Choose a topic below to get quick answers and support.
                            </p>
                            {/* Apply block class to ensure the links stack vertically */}
                            <div className="space-y-2">
                                {topics.map((topic) => (
                                    <Link
                                        key={topic.id}
                                        href={route('topics.show', topic.id)}
                                        as="button"
                                        className="w-full px-4 py-2 border border-gray-500 text-gray-700 rounded hover:border-blue-500 hover:text-blue-600 transition-all duration-150"
                                    >
                                        {topic.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
