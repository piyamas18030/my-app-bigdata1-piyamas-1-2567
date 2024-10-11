import React from "react";
import Link from "next/link";
export default function GetApp() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden shadow-lg p-16 mb-5 bg-body rounded">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Machine Learing
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  AI ตรวจวินิจฉัยโรค
                </h2>
                <p className="leading-relaxed">
                  Machine Learning คือ ส่วนการเรียนรู้ของเครื่อง
                  ถูกใช้งานเสมือนเป็นสมองของ AI (Artificial Intelligence)
                  เราอาจพูดได้ว่า AI ใช้ Machine Learning ในการสร้างความฉลาด
                  มักจะใช้เรียกโมเดลที่เกิดจากการเรียนรู้ของปัญญาประดิษฐ์
                  ไม่ได้เกิดจากการเขียนโดยใช้มนุษย์
                  มนุษย์มีหน้าที่เขียนโปรแกรมให้ AI (เครื่อง)
                  เรียนรู้จากข้อมูลเท่านั้น ที่เหลือเครื่องจัดการเอง
                </p>
                <a
                  href="http://127.0.0.1:8000/"
                  target="_blank"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  คลิกตรวจโรควินิจฉันได้ที่นี่
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Deep Learning
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  AI ตรวจวินิจฉัยโรคมะเร็งผิวหนัง
                </h2>
                <p className="leading-relaxed">
                  Deep Learning คือวิธีการเรียนรู้แบบอัตโนมัติด้วยการ
                  เลียนแบบการทำงานของโครงข่ายประสาทของมนุษย์ (Neurons)
                  โดยนำระบบโครงข่ายประสาท (Neural Network) มาซ้อนกัน หลายชั้น
                  (Layer) และทำการเรียนรู้ข้อมูลตัวอย่าง ซึ่งข้อมูล
                  ดังกล่าวจะถูกนำไปใช้ในการตรวจจับรูปแบบ (Pattern) หรือจัด
                  หมวดหมู่ข้อมูล (Classify the Data)
                </p>
                <Link
                  href="http://127.0.0.1:5000/predict"
                  target="_blank"
                  rel="nooper noreffer"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  คลิกตรวจโรควินิจฉัยโรคมะเร็ง
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  ChatGDP
                </span>
                {/* <span className="text-sm text-gray-500">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  การสนทนา ChatBot
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
