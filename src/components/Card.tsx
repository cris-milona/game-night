import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

interface GardGameProps {
  gameName: string;
  players: string;
  rulesLink: string;
}
export const GameCard = ({ card }: { card: GardGameProps }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Game
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{ textTransform: "uppercase" }}
        >
          {card.gameName}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {`${card.players} players`}
        </Typography>
        <Link href={card.rulesLink} variant="body2">
          Rules Refresher
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">play</Button>
      </CardActions>
    </Card>
  );
};
