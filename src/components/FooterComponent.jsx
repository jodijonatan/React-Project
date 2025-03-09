import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Jo Dev</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae deserunt quasi nesciunt distinctio autem illum dolores
              earum doloribus labore qui?
            </p>
            <div>
              <Link>
                <i className="fa-brands fa-whatsapp"></i>
                <p>+62 837-7364-9372</p>
              </Link>
            </div>
            <div>
              <Link>
                <i className="fa-regular fa-envelope"></i>
                <p>sirjo@gmail.com</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
