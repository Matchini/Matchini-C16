import CreatePost from "./Posts/CreatePost";
import GetPosts from "./Posts/GetPosts";

function Commercial() {
  return (
    <div>
      <CreatePost className="col-start-1 col-end-3 ml-12 mr-12" />
      <GetPosts className="col-start-3 col-end-5 ml-12 mr-12" />
    </div>
  );
}

export default Commercial;
