import Link from "next/link";

export default function SingleColumnMenu({menuData}) {
    return (
        <>
        {menuData && menuData.map((currentElement) => {
            return (
                
                        <li key={currentElement.id}>
                            <Link href={currentElement.link}>
                                <div className="nav-item-title">{currentElement.title}<span className="right-animate"> &rarr;</span></div><br />
                                <div className="nav-item-description">{currentElement.description}</div>
                            </Link>
                        </li>
                    
            );
        }, [])}
        </>
    );
}