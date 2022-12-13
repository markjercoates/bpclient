import {  Button } from 'react-bootstrap';


function PumpItem({pump: {name, pricePerLitre }}) {
    return (
        <>
         <Button className="mx-lg-2" variant="primary">{name}: {pricePerLitre} per Litre </Button>
        </>
    )
}

export default PumpItem
