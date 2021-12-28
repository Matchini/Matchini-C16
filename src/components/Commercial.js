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
