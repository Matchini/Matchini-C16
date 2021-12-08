import CreatePost from "./Posts/CreatePost";
import GetPosts from "./Posts/GetPosts";
import event from "../assets/event.png"

function Commercial() {
  return (
    <div className="grid grid-cols-5 flex grid-rows-1 items-center ">
      <div className="col-start-2 col-end-5 row-start-1 row-end-1 mt-8">
      <img src={event}/>
      </div>

      <div className="col-start-4 col-end-6 row-start-2 row-end-2">
      <CreatePost  />
      </div>

      <div className="col-start-1 col-end-4 row-start-2 row-end-2 ml-8 mr-8 mt-8">
      <GetPosts />
      </div>
    </div>
  );
}

export default Commercial;
