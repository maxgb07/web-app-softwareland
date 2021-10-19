import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              
              <h1 className="mb-4 font-weight-normal line-height-1_4"><span className="text-primary font-weight-medium">Clutch y Frenos Anguiano</span></h1>
              <p className="text-muted mb-4 pb-2">Especialistas en Servicios de Clutch y Frenos desde 1984</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/90-901864_the-shop-has-it-all-3-car-png.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;