import React from "react";

const Profile = (props) => {
  return (
    <div class="flex items-center h-screen w-full justify-center">
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <button onClick={props.close}>X</button>
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="../../Assets/slim.jpeg"
              alt="Slim"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              name is here
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>City here</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">your adress here...</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+216 ########</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">email@exmaple.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
