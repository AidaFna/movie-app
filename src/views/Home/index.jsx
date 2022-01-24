import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import Menu from "../../components/menu";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ listMovies }) => listMovies);

  useEffect(() => {
    // console.log(movies);
  }, [movies]);
  useEffect(() => {
    dispatch(allStore.fetchMovie());
  }, [dispatch, movies]);

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/details/${id}`);
  };

  // if (movies.results === undefined ){
  //     return <h1>Error</h1>
  // }

  return (
    <Container className="mt-5 pb-5">
      <Menu />
      <h2 className="top">NOW PLAYING</h2>
      <Row xs={2} md={5} className="g-4">
        {movies.map((el, i) => (
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
  );
};

export default Home;
