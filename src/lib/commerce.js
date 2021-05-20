import Commerce from "@chec/commerce.js";
import { Link, useLocation } from "react-router-dom";

export const commerce = new Commerce(
  `${process.env.REACT_APP_CHECK_PUBLIC_KEY}`,
  true
);
