import { Card} from 'react-bootstrap';
import PumpItem from './PumpItem';



function SiteItem({site: {name, town, postCode, pumps }}) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{town}</Card.Text>
                <Card.Text>{postCode}</Card.Text>
                { pumps && pumps.map((pump) => (
                     <PumpItem key={pump.id} pump={pump}></PumpItem>
                 ))}
            </Card.Body>
        </Card>
    )
}

export default SiteItem

