import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup, Image, Row, Col, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import "./detail.css";

const Details = () => {
  const [detailMovie, setDetailMovie] = useState([]);
  const [similar, setSimilar] = useState([]);
  const params = useParams();

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/details/${id}`);
    // window.location.reload();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=19b452a630ab0ea4e468d066eb910f25&language=en-US`
      )
      .then(({ data }) => {
        setDetailMovie(data);
        console.log(detailMovie);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=19b452a630ab0ea4e468d066eb910f25&language=en-US`
      )
      .then(({ data }) => {
        setSimilar(data.results);
        // console.log(similar,"cek similar")
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  });

  useEffect(() => {
    console.log(params.id);
  }, [params]);

  return (
    <>
      <Container className="mt-5">
        <Menu />
      </Container>
      <div className="container-img">
        <Image
          className=""
          src={
            "https://image.tmdb.org/t/p/original/" + detailMovie.backdrop_path
          }
          alt=""
          loading="lazy"
          fluid
        />
        <h1 className="centered">{detailMovie.tagline}</h1>
        <h5 className="centered-title">- {detailMovie.title} -</h5>
      </div>

      <Container className="detail m-10 pb-5">
        <Row>
          <Col xs={12} md={3}>
            <Image
              className="poster p-10"
              src={
                "https://image.tmdb.org/t/p/original/" + detailMovie.poster_path
              }
              alt=""
              loading="lazy"
              fluid
            />
          </Col>
          <Col xs={12} md={9}>
            <ListGroup>
              <h1>{detailMovie.title}</h1>
              <ListGroup.Item>Title : {detailMovie.title}</ListGroup.Item>
              <ListGroup.Item>
                Release Date : {detailMovie.release_date}
              </ListGroup.Item>
              <ListGroup.Item>Budget : {detailMovie.budget}</ListGroup.Item>
              <ListGroup.Item>Revenue : {detailMovie.revenue}</ListGroup.Item>
              <ListGroup.Item>
                Overview : <br /> {detailMovie.overview}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container className="pb-5">
        <hr />
        <h2 className="m-5">SIMILAR MOVIES RECOMMENDATION</h2>
        <Row xs={2} md={5} className="g-4">
          {similar.map((el, i) => (
            <Col>
              <Card
                className="cursor-pointer card"
                key={i}
                onClick={() => goToDetail(el.id)}
              >
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/original/" + el.poster_path}
                />
                <Card.Body>
                  <Card.Title className="title" height="50px">
                    {el.original_title}
                  </Card.Title>
                  {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Details;
