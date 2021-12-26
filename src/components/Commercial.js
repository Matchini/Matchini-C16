import CreatePlayer from "./CardsChoice/CreatePlayer";
import CreateGame from "./CardsChoice/CreateGame";
function Commercial() {
  return (
    <div>
      <section class="container mx-auto px-6 p-10">
        <div class="text-4xl font-bold text-center text-gray-800 mb-8">
          <button>he</button>
          <button>he</button>
        </div>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p class="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
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
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p class="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
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
