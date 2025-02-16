// Brands.tsx
import BrandCard from '../BrandCard';

interface BrandsProps {
    title?: string;
}

export default function Brands({ title }: BrandsProps) {
    const brandLogos = [
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Swarovski_new_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Pandora_%28jewelry_company_logo%29.svg",
    ];

    return (
        <div className="rounded-xl">
            {/* Header section */}
            <div className="sm:container text-center header py-6 mt-3 sm:px-auto px-3">
                <h2 className="text-2xl font-bold">
                    {title ? (
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
                            Our Partners
                        </span>
                    ) : (
                        'Luxury Brands We Love'
                    )}
                </h2>
                <p className={`${title ? 'hidden' : ''} text-gray-500`}>
                    Experience the finest jewellery from the world's most prestigious brands, curated just for you.
                </p>
            </div>

            {/* Brands section */}
            <div className="flex flex-wrap items-center justify-center pb-6">
                {brandLogos.map((logoUrl, index) => (
                    <BrandCard key={index} imageUrl={logoUrl} />
                ))}
            </div>
        </div>
    );
}
