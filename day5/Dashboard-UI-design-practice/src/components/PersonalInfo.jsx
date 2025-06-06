// // components/PersonalInfo.jsx
// import React from 'react';
// import playerImage from '../assets/image.png'; // Move image to src/assets/image.png

// function PersonalInfo() {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow w-full">
//       <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
//       <div className="grid md:grid-cols-3 gap-6 items-center">
//         {/* Image Column */}
//         <div className="flex justify-center">
//           <img className="w-60 h-60 rounded-md object-cover shadow" src={playerImage} alt="Player" />
//         </div>

//         {/* Column 1 */}
//         <div className="space-y-2 text-base">
//           <p><span className="font-semibold">Name:</span> Virat Kohli</p>
//           <p><span className="font-semibold">Nationality:</span> Indian</p>
//           <p><span className="font-semibold">Date of Birth:</span> 5 Nov 1988</p>
//           <p><span className="font-semibold">Age:</span> 36</p>
//         </div>

//         {/* Column 2 */}
//         <div className="space-y-2 text-base">
//           <p><span className="font-semibold">Debut:</span> 18 Aug 2008</p>
//           <p><span className="font-semibold">Batting Style:</span> Right Handed</p>
//           <p><span className="font-semibold">Bowling Style:</span> Right Handed</p>
//           <p><span className="font-semibold">Playing Role:</span> Top order Batter</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PersonalInfo;

import React from 'react';
import playerImage from '../assets/image.png';

function PersonalInfo() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-4xl shadow-xl w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly">
        {/* Image and Status */}
        <div className="relative mb-6 md:mb-0">
          <img className="w-60 h-60 rounded-full border-4 border-white shadow-md" src={playerImage} alt="Player" />
          <span className="absolute bottom-0 right-2 bg-green-500 text-white text-md font-bold px-2 py-1 rounded-full shadow-lg">Active</span>
        </div>

        {/* Player Info */}
        <div className="flex-1 md:ml-8 space-y-10 text-white text-xl">
          <h2 className="text-8xl font-extrabold mb-8">Virat Kohli</h2>
          <div className="flex flex-wrap gap-4 text-white/90 text-2xl">
            <p>📍 Mumbai, India</p>
            <p>📅 Born: Nov 5, 1988 (35 years)</p>
            <p>🏏 Right-handed Bat, Right-arm Medium</p>
          </div>
          <div className="flex gap-2 flex-wrap mt-2 ml-2">
            <span className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full">Captain</span>
            <span className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full">Batsman</span>
            <span className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full">All-rounder</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row items-center gap-24 pt-12 pr-24 md:items-end items-center md:mt-0 space-y-1 text-white">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">15,921</p>
            <p className="text-3xl">Total Runs</p>
          </div>  
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">72</p>
            <p className="text-3xl">Centuries</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">50.4</p>
            <p className="text-3xl">Average</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
