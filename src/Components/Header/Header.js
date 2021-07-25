import { DidNotEnter } from "./DidNotEnter";
import { HasEntered } from "./HasEntered";

export const Header = ({ authorized }) => {
  return <>{authorized ? <HasEntered /> : <DidNotEnter />}</>;
};
