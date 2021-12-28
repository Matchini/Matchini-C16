import CreatePlayer from "./CardsChoice/CreatePlayer";
import CreateGame from "./CardsChoice/CreateGame";
function Commercial() {
  return (
    <div>
      <section>
        <div className="flex items-center justify-center ">
          <div className="w-full md:w-1/2">
            <CreateGame />
          </div>
          <div className="w-full md:w-1/2">
            <CreatePlayer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Commercial;

{
  /* <div classNameName="col-start-2 col-end-5 row-start-1 row-end-1 mt-8">
<img src={event} />
</div> */
}
