import { Container } from "@mui/material";
import { GameCard } from "./Card";
import cardResponse from "../api/cardResponse.json";

export const Home = () => {
  //mui grid for the cards
  return (
    <Container>
      {cardResponse.map((card) => (
        <GameCard key={card.id} card={card} />
      ))}
    </Container>
  );
};
