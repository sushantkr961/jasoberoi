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
            <Container className='grid grid-cols-3 justify-between mb-[-100px] mx-auto '>   
            {
                properties.map((property,index)=>(
                    <PropertyCard key={index} imgUrl={property.imgUrl} imageName={property.name} />
                ))
            }
            </Container>
        </section>
    )
}

export default Property;

