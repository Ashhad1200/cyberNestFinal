const Portfolio = () => {
    return (
      <div className="mx-auto my-10">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Section 1: Large Image */}
          <div className="rounded-3xl overflow-hidden flex flex-col justify-center items-center row-span-2">
            <img
              className="object-cover w-full h-full"
              src="/Images/hero01.jpg"
              alt="About Bringer"
            />
          </div>
  
          {/* Section 2: Text Block */}
          <div className="bg-slate-800 rounded-3xl p-6 flex flex-col text-left">
            <h2 className="text-6xl font-bold text-white mb-7">Cookie Dough</h2>
            <p className="text-xl text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dignissimos impedit error, aut iure, sunt ratione vel officiis
              minima quae laborum aliquam facere similique vitae ea numquam
              atque asperiores nam.
            </p>
          </div>
  
          {/* Section 3: Info Block and Image */}
          <div className="flex flex-col col-span-2 space-y-4">
            <div className="flex flex-row gap-4">
              {/* Info Block */}
              <div className="bg-slate-800 rounded-3xl w-72 h-72 p-6 flex flex-col justify-center">
                <h2 className="font-bold text-lg text-gray-400">Client:</h2>
                <p className="text-lg mb-3 text-white">Doughp</p>
  
                <h2 className="font-bold text-lg text-gray-400">Service:</h2>
                <p className="text-xl text-white">Advertising</p>
  
                <h2 className="font-bold text-lg text-gray-400">Date:</h2>
                <p className="text-xl text-white">October 2023</p>
              </div>
  
              {/* Image */}
              <div className="rounded-3xl overflow-hidden w-72 h-72">
                <img
                  className="object-cover w-full h-full"
                  src="/Images/hero01.jpg"
                  alt="About Bringer"
                />
              </div>
            </div>
          </div>
  
          {/* Section 4: Placeholder Blocks */}
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl text-gray-600">Two</h2>
            <p className="font-bold text-2xl">Two</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl text-gray-600">Two</h2>
            <p className="font-bold text-2xl">Two</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center col-span-2">
            <h2 className="text-xl text-gray-600">Two</h2>
            <p className="font-bold text-2xl">Two</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center row-span-2">
            <h2 className="text-xl text-gray-600">Three</h2>
            <p className="font-bold text-2xl">Three</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center col-span-2">
            <h2 className="text-xl text-gray-600">Three</h2>
            <p className="font-bold text-2xl">Three</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl text-gray-600">Three</h2>
            <p className="font-bold text-2xl">Three</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl text-gray-600">Three</h2>
            <p className="font-bold text-2xl">Three</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center col-span-2">
            <h2 className="text-xl text-gray-600">Four</h2>
            <p className="font-bold text-2xl">Four</p>
          </div>
  
          <div className="bg-neutral-100 border-2 rounded-xl p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl text-gray-600">Four</h2>
            <p className="font-bold text-2xl">Four</p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  