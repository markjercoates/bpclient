import { useContext } from 'react';
import FuelContext from './contexts/FuelContext'
import SiteItem from "./SiteItem";

function SiteResults() {
    const { sites } = useContext(FuelContext);
    return (
        <div>
            {sites && sites.map((site) => (
                <SiteItem key={site.id} site={site}></SiteItem>
          ))}
        </div>
    )
}

export default SiteResults
