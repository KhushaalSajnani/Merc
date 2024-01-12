import Link from "next/link";

export default function MegaMenuDiscover({discoverMenuData}) {
    return (
        <>
        {discoverMenuData.map((currentElement) => {
            return (
                
                    <div className="list-item text-center" key={currentElement.id}>
                        <Link href={currentElement.link}>
                            <img src={currentElement.image} alt="new Product" />
                            <h4 className="title">{currentElement.title}</h4>
                        </Link>
                    </div>
               
            );
        }, [])}
        </>
    );
}