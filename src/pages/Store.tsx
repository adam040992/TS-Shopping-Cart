import React from 'react'
import storeItems from "../data/items.json"
import { Col, Row } from 'react-bootstrap'


export function Store() {
  return (
    <>
    <h1>Store</h1>
    <Row lg={3} md={2} xs={1}>
      {storeItems.map((item, index) => (
        <Col key={index}>{JSON.stringify(item)}</Col>
      ))}
    </Row>
    </>
  )
}

