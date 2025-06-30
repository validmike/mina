import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@headlessui/react';
import { Head, Link,router } from '@inertiajs/react';

export default function MomPage({telegram_link,groupProductId,country}) {
    const handleBuy = () => {
        router.post(route("orders.store"), { product_id: groupProductId });
      };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Mom Group Purchase
                </h2>
            }
        >
            <Head title="Group Purchase" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6 text-gray-900">
                        <h3 className="text-lg font-semibold mb-4">Group Purchase Information</h3>
                        <p className="mb-4">The group includes <span className="font-bold">600 videos in a telegram group</span></p>

                        <br />
                        <p className=' font-bold'>You will be the owner of the group and responsible for it</p>
                        
                        <h4 className="text-md font-semibold mt-4">Accepted Payment Methods:</h4>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Cryptocurrency</li>
                            <li>CashApp Bitcoin</li>
                            <li>Bitcoin Gift Card</li>
                        </ul>
                        
                        <Link
                            as='button' 
                            href="/guide" 
                            className="text-blue-600 hover:underline block mb-6"
                        >
                            View Payment Guide
                        </Link>

                        <h3 className="text-xl font-semibold mt-4 mb-2">How to Order:</h3>
                        <p className=' font-bold mb-2'>Contact me on Telegram:</p>
                        {/* warning for brazil */}
                            {country === 'BR' && (
                            <div className="bg-red-100 border mb-2 border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4 text-sm">
                                <strong className="block font-bold mb-1">Atenção brasileiros:</strong>
                                <p>Muitas mensagens e comprovantes falsos têm sido enviados por usuários do Brasil.</p>
                                <p>Leia as regras antes de entrar em contato, ou você será bloqueado e denunciado como spam.</p>
                                <p className="mt-2 font-semibold">NÃO! PIX NÃO É ACEITO. FALE EM INGLÊS!</p>
                            </div>
                            )}

                        
                        <div className="text-center mb-1">
                            <a href={telegram_link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block">
                            Contact Support to Buy
                            </a>
                        </div>
                        <p className=' font-bold mb-2'>Pay on website and automatically get your link to the group :</p>

                        <div className="text-center mb-1">
                            <Button onClick={handleBuy}  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg inline-block">
                            Buy Now (Online Payment)
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
