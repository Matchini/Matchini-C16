import CreatePlayer from "./CardsChoice/CreatePlayer";
import CreateGame from "./CardsChoice/CreateGame";
function Commercial() {
  return (
    <div>
      <section class="container mx-auto p-8  ">
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              Submit your game
            </h4>
            <p class="text-gray-600 mb-8">
              Are you missing a player in your team ?
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <CreateGame />
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <CreatePlayer />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              Submit your profile
            </h4>
            <p class="text-gray-600 mb-8">
              Are you a good player and you want to join a game ?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Commercial;

{
  /* <div className="col-start-2 col-end-5 row-start-1 row-end-1 mt-8">
<img src={event} />
</div> */
}
