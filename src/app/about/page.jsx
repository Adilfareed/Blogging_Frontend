'use client';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h1 className="text-4xl font-bold text-amber-900  mb-4">
              Welcome to Blog Breeze
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Your one-stop destination for exploring, sharing, and staying updated on a world of ideas, stories, and inspiration.
            </p>
            {/* <img
              src="/about-blogging.jpg"
              alt="Blogging"
              className="w-full h-80 object-cover rounded mb-6"
            /> */}
            <h2 className="text-3xl font-bold text-amber-900  mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At Blog Breeze, our mission is to provide a platform that empowers writers, creators, and readers alike. We aim to connect people through shared knowledge and personal experiences, fostering a global community where ideas thrive.
            </p>
            <h2 className="text-3xl font-bold text-amber-900  mb-4">
              Why Blog Breeze?
            </h2>
            <ul className="text-left text-gray-600 space-y-4 mb-6">
              <li>✅ A seamless platform to publish and discover blogs.</li>
              <li>✅ User-friendly tools for creating engaging content.</li>
              <li>✅ A global community of like-minded readers and creators.</li>
              <li>✅ Regular updates and trending topics to keep you informed.</li>
              <li>✅ Built with passion to celebrate the art of storytelling.</li>
            </ul>
            <h2 className="text-3xl font-bold text-amber-900  mb-4">
              Join Us on the Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're a seasoned writer, an aspiring storyteller, or just someone who loves to read captivating blogs, Blog Breeze is the perfect place for you. Join us as we explore a world of ideas and share the stories that matter.
            </p>
            <p className="text-gray-600 font-bold">
              Together, let's make blogging a breeze!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
    