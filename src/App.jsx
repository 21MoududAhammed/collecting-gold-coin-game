export default function App() {
  return (
    <div className="w-[450px] mx-auto bg-green-300 text-center space-y-4 py-20 mt-5 rounded-xl">
      <h1 className="text-4xl font-bold text-yellow-500">
        Collecting Gold Coin
      </h1>
      <button className=" font-bold bg-gray-600 text-white px-16 py-4 rounded-lg">
        Press Here
      </button>
      <div className="text-2xl ">
        <h2>Gold Coin : 0</h2> 
        <h2>Round : 1 </h2>
      </div>
    </div>
  );
}
