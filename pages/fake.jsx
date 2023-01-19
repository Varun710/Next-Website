import Image from "next/image";
import React from "react";
import Fake from "../public/assets/projects/fake.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const fake = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Fake}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-large">Fake New Detection</h2>
          <h3>Python, NumPy, NLTK, Pandas, Scikit-learn </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-justify">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p className="">
            Applied natural language processing techniques in Python using NLTK
            to preprocess data, including tokenization, lemmatization, and
            removing stop words. Extracted features from data using the TF-IDF
            technique and constructed predictive models using logistic
            regression, Naive Bayes, and a multilayer perceptron classifier.
            Predicted whether data news agreed, disagreed, or was unrelated to
            fake news. Achieved an accuracy of 99.8% using multilayer perceptron
            classifier by increasing the number of hidden layers.
          </p>

          <button className="mt-5">
            <a
              href="https://github.com/Varun710/Fake-news-detection"
              class="relative inline-block text-lg group"
            >
              <span class="relative z-10 block px-4 py-2 overflow-hidden font-bold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">GitHub</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NumPy
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NLTK
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scikit-learn
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer sm:mt-8">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default fake;
