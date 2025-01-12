import { observer } from 'mobx-react-lite'
import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TypeBar = observer(() => {
  return (
    <ListGroup>
     {device.types.map(type =>
      <ListGroup.Item key={type.id}>
        {type.name}
      </ListGroup.Item>
     )}

    </ListGroup>
  )
})

export default TypeBar
