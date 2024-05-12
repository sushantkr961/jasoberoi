import Container from '../Containers/Container';
import PropertyCard from './PropertyCard';

const Property = () => {


    const properties = [
        { name: "Property 1", imgUrl: "/assets/asset 29.jpeg" },
        { name: "Property 2", imgUrl: "/assets/asset 30.jpeg" },
        { name: "Property 3", imgUrl: "/assets/asset 31.jpeg" },
    ];
    return (
        <section
            className="bg-white text-white max-h-[530px] relative " // Added relative positioning
            style={{
                backgroundImage: "url('/assets/asset 28.jpeg')",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
            }}
        >
            <div className='grid grid-cols-1  lg:grid-cols-3  max-w-[1440px] px- md:px-6 xl:px-0 justify-between mb-[-100px] mx-auto gap-8 xl:gap-12 '>   
            {
                properties.map((property,index)=>(
                    <PropertyCard key={index} imgUrl={property.imgUrl} imageName={property.name} />
                ))
            }
            </div>
        </section>
    )
}

export default Property;

