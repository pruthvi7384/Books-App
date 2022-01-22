import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

function App() {
  // =========For Storing API Get Data========
  const [clients, setClients] = useState([]);

  useEffect(()=>{
      const getclient = async ()=>{
        try{
          const res = await axios.get('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba');
          setClients(res.data.clients);
        }catch(e){
          console.log(e.message);
        }
      }
      getclient();
  },[])
  return (
   <>
      <Container>
          <Row className="mt-2 text-center">
              <h1 className="text-primary">Welcome !</h1>
              <h2 className="text-success">Books App</h2>
          </Row>
          <Row className="mt-3">
              <Col xl={12}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Order Id</th>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Invoice Paid</th>
                      <th>Invoice Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      clients.map(client => (
                        <tr key={client.id}>
                          <td>{client.id}</td>
                          <td>{client.orderId}</td>
                          <td>{client.name}</td>
                          <td>{client.company}</td>
                          <td>{client.invoicepaid}</td>
                          <td>{client.invoicePending}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </Col>
          </Row>
      </Container>
   </>
  )
  ;
}

export default App;
