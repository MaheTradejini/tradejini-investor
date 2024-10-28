"use client";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";


export default function Home() {
  const [activeTabInc, setActiveTabInc] = useState(0);


  const handleCardClick = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = pdfUrl.split("/").pop();
    link.click();
  };

  const investorData = [
    {
      title: "Equities, Derivatives and Currency Trading",
      pdfs: [
        {
          title: "Investor Charter",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/1. Investor Charter.pdf",
        },
        {
          title: "Advisory for Investors",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/2.  Advisory for Investors.pdf",
        },
        {
          title: "Investor Awareness",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/3.  Investor Awareness.pdf",
        },
        {
          title: "Investors Education",
          url: "https://www.bseipf.com/investors_education.html",
        },
        {
          title: "Voluntary Freezing Blocking Facility Policy",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/5. Voluntary Freezing Blocking Facility Policy.pdf",
        },
      ],
    },
    {
      title: "Investor Grievance",
      pdfs: [
        {
          title: "Investor Grievance",
          url: "/files/Investor’s corner/Investor Grievance/1. Investor Grievance.pdf",
        },
      ],
    },
    {
      title: "Demat",
      pdfs: [
        {
          title: "Investor Charter-DP",
          url: "/files/Investor’s corner/Demat/1. Investor Charter-DP.pdf",
        },
      ],
    },
    {
      title: "Risks",
      pdfs: [
        {
          title: "Risk Disclosures on Derivatives",
          url: "https://tradejini.com/risk-disclosure-on-derivatives/",
        },
      ],
    },
  ];
 

  return (
    <main>


   <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center mb-8">
            {investorData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTabInc === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTabInc(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {investorData[activeTabInc].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
