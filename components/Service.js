import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Escaneo", desc : "Escaneo de fallas desde la central del vehículo" },
    { title : "Servicio", desc : "Cambios de Aceite, Filtro de aire, Filtro de Aceite y Filtro de Gasolina con normas OEM" },
    { title : "Servicio Frenos", desc : "Especialistas en diagnóstico y repación del sistema de Frenos de tu vehículo" },
    { title : "Servicio de Clutch", desc : "Especialistas en diagnóstico y repación del sistema de Clutch (embrague) de tu vehículo" },
    { title : "Rectificaciones", desc : "Rectificación de Discos, Tambores y Cremalleras" },
    { title : "Venta de refacciones", desc : "Venta de refacciones de recambio con calidad OEM" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Servicios</span></h3>
              <p className="text-muted">Tenemos los mejores servicios para la comodidas y confibilidad de nuestros clientes</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;