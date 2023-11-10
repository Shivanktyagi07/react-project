import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://image.lexica.art/full_jpg/69703bc6-92e4-4140-98c7-90f9868e3024"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Development is a dynamic process characterized by continuous growth and evolution. In the realm of technology and software, each development phase brings about innovation, improvement, and heightened capabilities. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      Whether it's web development, app development, or any other domain, the journey involves constant learning, adaptation to emerging technologies, and a commitment to delivering solutions that meet evolving needs.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}