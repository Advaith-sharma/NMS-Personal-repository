import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

function Awards() {
  return (
    <div className="bg-linear-to-r from-cyan-100 to-yellow-100 p-6 rounded-4xl shadow w-full mt-10">
      <h3 className="text-5xl font-bold mb-6 flex items-center gap-3">
        <Trophy className="w-8 h-8 text-yellow-500" />
        Achievements
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Award 1 */}
        <div className="p-4 border rounded-lg hover:scale-[1.02] transition-transform duration-300">
          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-3">
            <Trophy className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-4xl mb-1 mt-4">ICC Cricketer of the Year</h3>
          <span className="inline-block text-2xl bg-gray-100 mt-4 px-3 py-1 rounded-full text-gray-800 font-semibold">
            2017
          </span>
        </div>

        {/* Award 2 */}
        <div className="p-4 border rounded-lg hover:scale-[1.02] transition-transform duration-300">
          <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center mb-3">
            <Star className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-4xl mb-1 mt-4">Padma Shri</h3>
          <span className="inline-block text-2xl bg-gray-100 mt-4 px-3 py-1 rounded-full text-gray-800 font-semibold">
            2018
          </span>
        </div>

        {/* Award 3 */}
        <div className="p-4 border rounded-lg hover:scale-[1.02] transition-transform duration-300">
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mb-3">
            <Award className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-4xl mb-1 mt-4">Rajiv Gandhi Khel Ratna</h3>
          <span className="inline-block text-2xl bg-gray-100 mt-4 px-3 py-1 rounded-full text-gray-800 font-semibold">
            2019
          </span>
        </div>
      </div>
    </div>
  );
}

export default Awards;
