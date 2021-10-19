import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Acerca <span className="text-warning">de Nosotros</span></h3>
              <p className="text-muted">Especialistas en el mantenimiento de tu Vehículo desde 1984</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Lo más importante para nosotros es la satisfacción del cliente.</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Mision</h6>
                <p className="text-muted font-weight-light">Ofrecer el mejor servicio a nuestros clientes con constantes capacitaciones a nuestros técnicos</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Vision</h6>
                <p className="text-muted font-weight-light">Ser una empresa líder en el ramo de mantenimiento de vehículos</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;