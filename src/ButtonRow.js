import { useContext } from "react";
import PageContext from "./PageContext";
function ButtonRow() {
  const { changePage } = useContext(PageContext);

  return (
    <div className="mt-8 flex justify-between">
      <button className="btn btn-primary" onClick={() => changePage("MINUS")}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => changePage("ADD")}>
        Next
      </button>
    </div>
  );
}
export default ButtonRow;
