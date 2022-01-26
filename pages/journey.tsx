import React, { useState, useEffect, useMemo } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { getMDXComponent } from "mdx-bundler/client";
// import "prismjs";
// import "prismjs/themes/prism-tomorrow.css";

const tour = [
  { name: "01", desc: "入門" },
  { name: "01-1", desc: "快照" },
  { name: "02", desc: "props" },
  { name: "03", desc: "互動、mock function" },
  { name: "04", desc: "mock時間" },
  { name: "05", desc: "styled-components" },
  { name: "06", desc: "subtest" },
  { name: "07", desc: "mock api" },
  { name: "08", desc: "hook" },
  { name: "09", desc: "component mock" },
];

export default function Journey() {
  const [subject, setSubject] = useState("01");
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    axios.get(`/api/readfiles/${subject}`).then((res) => {
      setDoc(res.data);
    });
  }, [subject]);

  const Docs = useMemo(() => {
    return doc?.code ? getMDXComponent(doc?.code) : null;
  }, [doc?.code]);

  return (
    <div className="eb-flex eb-flex-col eb-h-screen">
      <div className="eb-flex-none eb-h-24 ">
        <div className="eb-p-3">Reactjs / JEST 練習本</div>
      </div>
      <div className="eb-flex eb-h-full">
        <div className="eb-w-1/4 eb-flex-row eb-items-centereb-border-2 eb-border eb-h-full eb-p-4 eb-overflow-y-auto">
          <ul>
            {tour.map((data) => {
              return (
                <li key={data.name}>
                  <button
                    className="eb-text-xl eb-text-blue-500 hover:eb-text-blue-800"
                    key={data.name}
                    onClick={async () => {
                      setSubject(data.name);

                      // try {
                      //   const res = await mutate(`/api/readfiles/${data.name}`);
                      //   console.log("res", res);
                      // } catch (error) {
                      //   // Handle an error while updating the user here
                      // }
                    }}
                  >
                    <span className="eb-text-left eb-inline-block eb-w-14">
                      {data.name}
                    </span>
                    {/* <span className="">-</span> */}
                    <span className="">{data.desc}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="eb-flex-1 eb-items-centereb-border-2 eb-border eb-h-full eb-p-4 eb-overflow-y-auto">
          {Docs && (
            <article className="eb-prose eb-prose-lg">
              <Docs />
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
