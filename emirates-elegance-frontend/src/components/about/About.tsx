
export default function About() {

    // Update the page title
    document.title = `Elegance Affair | About`;

    // Scroll top when click on Link
    // function scrollTopFunc() {
    //     window.scrollTo({
    //         top: 0, // Ensures it scrolls to the very top
    //         behavior: 'instant' // Instantly moves without animation
    //     });
    // }

    return (
        <div className="flex flex-col min-h-[100dvh]">

            {/* Header */}
            <header className="relative bg-[#F5F5F5] mt-10 py-20 md:py-32 lg:py-40 sm:rounded-lg overflow-hidden">
                <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
                    <source src="https://t.ly/ip6HD" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Elegance Affair</h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto">
                        Elevate your senses with our exquisite collection of luxury jewellery, crafted with the finest
                        and unparalleled attention to detail.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div> {/* Optional overlay for better text readability */}
            </header>

            {/* About Elegance Affair */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 mb-4">
                                About Elegance Affair
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                Elegance Affair is a luxury jewelry store in Kathmandu, offering an exclusive collection of exquisite pieces for discerning individuals. Our journey began with a deep passion for fine craftsmanship and a commitment to curating jewelry that evokes emotion, inspires confidence, and captures timeless elegance.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                At the heart of Elegance Affair is a dedication to quality, artistry, and customer satisfaction. We source the finest materials from around the world, and our expert artisans meticulously craft each piece to ensure a harmonious and captivating design.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our mission is to elevate the art of jewelry, providing our customers with a truly luxurious and transformative experience. From the moment you discover an Elegance Affair piece to the moment you wear it, we strive to create a connection that transcends the senses and leaves a lasting impression.
                            </p>

                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src="/images/about.jpg"
                                alt="Elegance Affair Jewellery"
                                className="rounded-lg shadow-lg w-[500px] object-fill"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}