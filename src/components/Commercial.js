import CreatePost from "./Posts/CreatePost";
import GetPosts from "./Posts/GetPosts";
import Sidebar from "./Sidebar"
function Commercial() {
  return (
    <div>
      <Sidebar />
      {/* <CreatePost /> */}
      <GetPosts />
    </div>
  );
}

export default Commercial;
