import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Faq from '@/Components/Faq'; // Adjust path as needed

export default function Show({ faqs, topic,description }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {topic.title}
                </h2>
            }
        >
            <Head title={topic.title} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    {topic.description && (
                        <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded shadow-sm">
                            <p>{topic.description}</p>
                        </div>
                    )}
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">
                        {faqs.length > 0 ? (
                            faqs.map(faq => (
                                <Faq
                                    key={faq.id}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))
                        ) : (
                            <p className="text-gray-600">No FAQs available for this topic.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
