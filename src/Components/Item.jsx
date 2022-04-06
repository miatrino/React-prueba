import React from 'react'
import  Card  from 'react-bootstrap/Card'
import ItemCount  from './ItemCount'


function item({id,nombre,precio,imagen}) {
  return (
    <div>
        <Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
     $ {precio}
    </Card.Text>
    <ItemCount stock={10}/>
  </Card.Body>
</Card>
    </div>
  )
}

export default item