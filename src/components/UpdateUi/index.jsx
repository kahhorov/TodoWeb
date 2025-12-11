import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

function UpdateUi({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map(({ name, age, email, id }) => {
        return (
          <Card
            key={id}
            sx={{
              background: "#2331",
              boxShadow: "0px 0px 20px 1px #123",
              color: "wheat",
              p: "20px",
              borderRadius: "10px",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="p">{age}</Typography>
                <Typography variant="p">{email}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link
                to={`/user-page/${id}`}
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-400 max-sm:w-full max-sm:text-center"
              >
                User Settings
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
export default UpdateUi;
