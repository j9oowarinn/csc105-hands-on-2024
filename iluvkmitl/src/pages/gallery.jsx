function Gallery() {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <p className="text-lg text-gray-600 mb-8">Here are some Cute Kirby</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
          <img
            src="https://i.pinimg.com/736x/5c/b8/e3/5cb8e34a8ffb8f503280659e17e6fe70.jpg"
            alt=""
            className="rounded-lg shadow-md w-full h-auto transition-transform transform hover:scale-105"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU4WdJ27gRWNb1lY3sFiVQxef6KRkUB7SDQ&s"
            alt=""
            className="rounded-lg shadow-md w-full h-auto transition-transform transform hover:scale-105"
          />
          <img
            src="https://www.meme-arsenal.com/memes/1c413141faa5fd9ff4ee7a14d4b8f46f.jpg"
            alt=""
            className="rounded-lg shadow-md w-full h-auto transition-transform transform hover:scale-105"
          />
          <img
            src="https://cdn.readawrite.com/articles/6632/6631793/chapter/76babc9b4c146659d044e1ec2e3c6e0a/thumbnail/small.gif?1"
            alt=""
            className="rounded-lg shadow-md w-full h-auto transition-transform transform hover:scale-105"
          />
          <img
            src="https://a0.anyrgb.com/pngimg/106/1492/waste-land-zibra-generator-rex-ben-10-action-fiction-internet-meme-action-toy-figures-style-team-action-figure.png"
            alt=""
            className="rounded-lg shadow-md w-full h-auto transition-transform transform hover:scale-105"
          />
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/379/214/desktop-wallpaper-ben-10-gutrot-meme-generator-gutrot.jpg"
            alt=""
            className="rounded-lg shadow-md w-full h-auto transition-transform transform hover:scale-105"
          />
          
          
        </div>
      </div>
    );
  }
  
  export default Gallery;
  