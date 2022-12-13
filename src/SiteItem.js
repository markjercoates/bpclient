import { Card } from 'react-bootstrap';


function SiteItem({site: {name, town, postCode, pumps}}) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{town}</Card.Text>
                <Card.Text>{postCode}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SiteItem

