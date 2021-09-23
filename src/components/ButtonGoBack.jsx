import { Link} from "react-router-dom";

export default function ButtonGoBack() {
  return (
    <Link className="button" to="/">
      Go back
    </Link>
  );
}
