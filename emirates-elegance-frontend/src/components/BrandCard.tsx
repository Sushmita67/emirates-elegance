interface BrandCardProps {
    imageUrl: string;
}

export default function BrandCard({ imageUrl }: BrandCardProps) {
    return (
        <div className="sm:w-[280px] w-[85%] h-[150px] m-2.5 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <img src={imageUrl} className="object-contain max-w-full max-h-full" alt="Brand logo" />
        </div>
    );
}
