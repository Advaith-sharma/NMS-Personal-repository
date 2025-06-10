import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img from "../assets/info-circle.png";

const scopes = ["Scope 1", "Scope 2", "Scope 3"];
const defaultSectionName = "Emission Name";
const defaultCardValue = "Blast Furnace Operation";
const numSections = 5;
const numCards = 10;

// Simulated data: 5 sections, each with 10 cards
const simulatedData = Array.from({ length: numSections }, (_, i) => ({
  name: defaultSectionName,
  cards: Array.from({ length: numCards }, () => defaultCardValue),
}));

export default function Dashboard() {
  const { collapsed } = useOutletContext();
  const [activeScope, setActiveScope] = useState(0);
  const [openSections, setOpenSections] = useState(
    Array(numSections).fill(false)
  );

  const toggleSection = (idx) => {
    setOpenSections((prev) =>
      prev.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <div className="w-full min-h-screen p-2 sm:p-6">
      <div className="bg-white rounded-3xl shadow p-4 sm:p-8 w-full min-h-[calc(100vh-2rem)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Add Emission</h1>
            <div className="text-sm text-gray-500 mt-1">App / Dashboard / Add Emission</div>
          </div>
        </div>

        {/* Scope Tabs and Search */}
        {/* <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex border-[#D2D2D2]-900 rounded-lg p-2">
              {scopes.map((scope, idx) => (
                <button
                  key={scope}
                  onClick={() => setActiveScope(idx)}
                  className={`m-3 px-3 py-4 rounded-lg text-sm font-medium font-sans transition ${activeScope === idx
                    ? "bg-[#003F31] text-white"
                    : "text-[#A4A4A4] hover:bg-gray-200"
                    }`}
                >
                  {scope}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Emission..."
              className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-emerald-200 focus:border-emerald-300 text-sm"
              style={{ width: 220 }}
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div> */}
        <div className="flex items-center justify-between mb-4">
          {/* Scope Tabs */}
          <div className="flex items-center">
            <div className="flex border border-[#D2D2D2] rounded-lg bg-white h-[66px] items-center">
              {scopes.map((scope, idx) => (
                <button
                  key={scope}
                  onClick={() => setActiveScope(idx)}
                  className={`w-[137px] h-[54px] mx-[3px] text-base font-medium font-sans transition
            ${activeScope === idx
                      ? "bg-[#003F31] text-white rounded-xl"
                      : "text-[#A4A4A4] bg-white"
                    }`}
                >
                  {scope}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-[518px] h-[52px]">
            <input
              type="text"
              placeholder="Search Emission..."
              className="pl-10 pr-3 py-3 w-full h-full rounded-lg border border-[#D2D2D2] bg-white text-base font-sans font-medium text-[#A4A4A4] focus:outline-none focus:ring-2 focus:ring-[#003F31] focus:border-[#003F31] transition shadow-sm"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A4A4A4] w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>


        {/* Emission Sections */}
        {simulatedData.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-6"> {/* 24px below cards border */}
            {/* Collapsible Section Header */}
            <button
              type="button"
              onClick={() => toggleSection(sectionIdx)}
              className="w-full flex items-center justify-between bg-white rounded-xl border-2 border-[#D2D2D2] px-8"
              style={{ height: 84 }}
            >
              <div className="font-sans font-medium text-gray-800 text-lg truncate">
                {section.name}
              </div>
              <span className="transition-transform duration-200">
                {openSections[sectionIdx] ? (
                  <FaChevronUp className="text-gray-400 group-hover:text-emerald-700 group-hover:scale-125 transition" />
                ) : (
                  <FaChevronDown className="text-gray-400 group-hover:text-emerald-700 group-hover:scale-125 transition" />
                )}
              </span>
            </button>

            {/* Cards Grid (only if open) */}
            {openSections[sectionIdx] && (
              <div
                className="border-2 border-[#D2D2D2] rounded-2xl bg-white mt-6 mb-6"
                style={{
                  paddingLeft: 55,
                  paddingRight: 55,
                  paddingTop: 44,
                  paddingBottom: 44,
                }}
              >
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    columnGap: 48,
                    rowGap: 32,
                  }}
                >
                  {section.cards.map((cardValue, cardIdx) => (
                    <div
                      key={cardIdx}
                      className="relative bg-[#B3C6C2] rounded-[10px] flex flex-col justify-center min-h-[100px] hover:bg-emerald-200 transition"
                    >
                      <button
                        className="absolute right-2 top-2 w-5 h-5 flex items-center justify-center focus:outline-none"
                        title="Show info"
                        type="button"
                        onClick={() => {
                          /* Future: show info tooltip */
                        }}
                      >
                        <img
                          src={img}
                          alt="Info"
                          className="w-full h-full"
                        />
                      </button>
                      <p className="text-gray-700 font-medium font-sans text-sm break-words text-center">
                        {cardValue}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
