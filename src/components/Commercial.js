import CreatePlayer from "./CardsChoice/CreatePlayer";
import CreateGame from "./CardsChoice/CreateGame";
function Commercial() {
  return (
    <div>
      <section>
        <div className="flex items-center justify-center ">
          <div className="w-full ">
            <CreateGame />
          </div>
          <div className="w-full ">
            <CreatePlayer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Commercial;
