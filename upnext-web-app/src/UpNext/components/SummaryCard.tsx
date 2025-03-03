import Image from "react-bootstrap/Image";
import "./SummaryCard.css";

export default function SummaryCard() {
  return (
    <div className="bg-transparent mt-4 card-border d-flex flex-row text-center mh-75">
      <Image src="dpwolverine.jpg" className="p-3 w-50" />
      <div className="p-3">
        <h1 className="fw-bold">Deadpool and Wolverine</h1>
        <h4 className="mt-3">Directed by Shawn Levy</h4>
        <p className="p-3 overflow-y-hidden text-start">
          A listless Wade Wilson toils away in civilian life with his days as
          the morally flexible mercenary, Deadpool, behind him. But when his
          homeworld faces an existential threat, Wade must reluctantly suit-up
          again with an even more reluctant Wolverine.
        </p>
      </div>
    </div>
  );
}
