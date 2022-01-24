import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import Menu from "../../components/menu";
import "../../components/menu.css";

const Latest = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ listMovies }) => listMovies);

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  useEffect(() => {
    dispatch(allStore.fetchMovie());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Menu />
      </Container>
    </>
  );
};

export default Latest;
