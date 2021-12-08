import CreatePost from "./Posts/CreatePost";
import GetPosts from "./Posts/GetPosts";

function Commercial() {
  return (
    <div className="flex">
      <CreatePost className="flex-initial ..." />
      <GetPosts className="flex-initial ..." />
    </div>
  );
}

export default Commercial;
