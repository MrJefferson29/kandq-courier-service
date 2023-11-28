import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from "react-reveal";
import s1 from "../../Assets/s1.jpg";
import s2 from "../../Assets/s2.jpg";
import s3 from "../../Assets/s3.jpg";

export default function Sc2() {
  return (
    <Styles>
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <center>
            <Fade top>
              <h2 style={{ fontFamily: "Hughs", fontSize: "2.5rem" }}>
                Why Us??
              </h2>
              <Col
                md="6"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginTop: "30px",
                }}
              >
                At K & Q Courier Service, your satisfaction is our top priority.
                Our customer-centric approach means that we're always here to
                assist you. Have a question or need assistance? Our friendly
                support team is just a message or call away.
              </Col>
            </Fade>
          </center>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col md="4">
            <Fade bottom>
              <h2 style={{ fontFamily: "Gaqire", fontSize: "2rem" }}>
                Experienced and Caring Handlers
              </h2>
            </Fade>
            <Fade left>
              <img
                src={s1}
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                  boxShadow: "0 1rem 2rem hsl(0 0% 0% / 20%)",
                }}
              />
            </Fade>
            <Fade bottom>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "300",
                  marginTop: "30px",
                }}
              >
                Our team of experienced courier handlers treats your parcel as
                if they were our own. From handling the smallest kittens to the
                largest refrigertor consignment, we know how to soothe fragile
                parcels and provide the necessary care.
              </p>
            </Fade>
          </Col>

          <Col md="4">
            <Fade bottom>
              <h2 style={{ fontFamily: "Gaqire", fontSize: "2rem" }}>
                Door-to-Door Convenience
              </h2>
            </Fade>
            <Fade top>
              <img
                src={s2}
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                  boxShadow: "0 1rem 2rem hsl(0 0% 0% / 20%)",
                }}
              />
            </Fade>

            <Fade bottom>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "300",
                  marginTop: "30px",
                }}
              >
                We offer door-to-door parcel delivery, making the process as
                hassle-free as possible. You won't need to navigate busy
                airports or terminals. Let us take care of all the logistics
                while you focus on your upcoming adventure.
              </p>
            </Fade>
          </Col>

          <Col md="4">
            <Fade bottom>
              <h2 style={{ fontFamily: "Gaqire", fontSize: "2rem" }}>
                Safe package, Happy Owners
              </h2>
            </Fade>
            <Fade right>
              <img
                src={s3}
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                  boxShadow: "0 1rem 2rem hsl(0 0% 0% / 20%)",
                }}
              />
            </Fade>
            <Fade bottom>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "300",
                  marginTop: "30px",
                }}
              >
                When your parcels arrive at their destination with unapparelled
                cre and the joy on your face, we know we've done our job. At K &
                Q's, we strive for owner satisfaction, and we're dedicated to
                creating joyous reunions.
              </p>
            </Fade>
          </Col>
        </Row>
        <Row style={{ padding: "50px" }}>
          <center>
            <Fade bottom>
              <h2 style={{ fontFamily: "Hughs", fontSize: "2rem" }}>
              Join the K & Q Family
              </h2>
              <Col
                md="6"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginTop: "30px",
                }}
              >
                Experience the difference that comes with choosing K & Q Courier
                Service. Join our growing family of satisfied customers and
                discover the convenience of deliveries done right. Feel free to
                use or adapt this information to create an engaging and
                informative home page for your courier service website. It's
                essential to highlight the unique features and benefits of your
                service to attract and retain customers.
              </Col>
            </Fade>
          </center>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 15vh;
`;
