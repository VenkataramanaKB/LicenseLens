import ChatBox from "../components/ChatBox";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Software License Finder
      </h1>
      <p className="text-gray-600 mb-4">
        Enter a software name to find its license and details.
      </p>

      {/* ChatBox Component */}
      <ChatBox />
    </div>
  );
}

export default Home;
