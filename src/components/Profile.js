import React, { useState,useEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
const Profile = (props) => {
  const [imageSelected, setImageSelected] = useState("");
  const [user,setUser] = useState([])
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "matchini");
    axios
      .post("https://api.cloudinary.com/v1_1/matchini/image/upload", formData)
      .then((response) => {
        console.log(response);
      });
  };

  const getUserInfo=()=> {
    axios.get('http://localhost:3000/getUser')
    .then((response) => {
     setUser(response.data)
    })
  }


  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-full">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <button onClick={props.close}>
            <img
              alt="exit"
              src="https://img.icons8.com/ios/50/000000/cancel.png"
            />
          </button>
          <div className="photo-wrapper p-2">
            <Image
              className="w-32 h-32 rounded-full mx-auto"
              cloudName="matchini"
              publicId="https://res.cloudinary.com/matchini/image/upload/v1638896916/sample.png"

            />
            <input
              type="file"
              onChange={(e) => {
                setImageSelected(e.target.files);
              }}
            />
            <button onClick={uploadImage}>Upload</button>
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              name is here
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>City here</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Address
                  </td>
                  <td className="px-2 py-2">your adress here...</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">+216 ########</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">email@exmaple.com</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center my-3">
              <a
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="/edit"
              >
                Edit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
