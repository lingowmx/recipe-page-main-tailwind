export const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="w-80 flex flex-col justify-center items-center sm:w-[600px]">
        <div className="w-screen sm:mt-8 sm:w-[600px]">
          <img src="../assets/images/image-omelette.jpeg" alt="omelette-image" 
          className="w-full sm:rounded-xl"/>
        </div>
        <section className="flex flex-col p-4 sm:pl-0 sm:pr-0">
          <h1 className="text-2xl font-semibold mt-4 mb-4">Simple Omelette Recipe</h1>
          <div className="mb-3">
            <p className="text-sm tracking-wide">An easy and quick dish, perfect for any meal. This classic omelette
              combines beaten eggs cooked to perfection, optionally filled with your
              choice of cheese, vegetables or meats.
            </p>
          </div>
          <div className="bg-rose-50 rounded-lg p-4">
            <h2 className="text-rose-800 font-semibold">Preparation time</h2>
            <ul className="list-disc pl-5">
              <li><span className="font-semibold">Total:</span> Aprocimately 10 minutes</li>
              <li><span className="font-semibold">Preparation:</span> 5 minutes</li>
              <li><span className="font-semibold">Cooking:</span> 5 minutes</li>
            </ul>
          </div>
          <div className="mt-5 mb-5">
            <h2 className="text-amber-700 font-semibold text-xl">Ingredients</h2>
            <ul className="list-disc pl-5 tracking-wide mt-4">
              <li className="pl-2 text-sm text-stone-700">2-3 large eggs</li>
              <li className="pl-2 text-sm text-stone-700">salt, to taste</li>
              <li className="pl-2 text-sm text-stone-700">Pepper, to taste</li>
              <li className="pl-2 text-sm text-stone-700">1 tablespoon of butter or ail</li>
              <li className="pl-2 text-sm text-stone-700">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>
          <hr />
          <div className="mt-5 mb-5">
            <h2 className="text-amber-700 font-semibold text-xl">Instructions</h2>
            <ol className="mt-4 list-decimal pl-5 marker:text-amber-700 marker:font-semibold">
              <li className="pl-2 text-sm text-stone-700"><span className="font-semibold">Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and Pepper
              until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.</li>
              <li className="pl-2 text-sm text-stone-700"><span className="font-semibold">Heat the pan: </span>Place a non stick frying pan over medium heat and add butter or oil</li>
              <li className="pl-2 text-sm text-stone-700"><span className="font-semibold">Cook the omelette: </span>Once the butter is melted and bubbling, por the eggs.
              Tilt the pan to ensure the eggs evenly coat the surface.</li>
              <li className="pl-2 text-sm text-stone-700"><span className="font-semibold">Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny
              in the middle, sprinkle your chosen fillings over one half of omelette.</li>
              <li className="pl-2 text-sm text-stone-700"><span className="font-semibold">Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it 
              cook for another minute, then slide it onto a plate.</li>
              <li className="pl-2 text-sm text-stone-700"><span className="font-semibold">Enjoy: </span>Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>
          <hr />
          <div>
            <h2 className="text-amber-700 font-semibold text-xl">Nutrition</h2>
            <p className="text-stone-700 text-sm">The table below shows nutritional values per serving without the additional fillings.</p>
            <div className="flex flex-col mt-4 mb-8">
              <div className="flex mb-2 text-center">
                <p className="w-40 text-start pl-8">Calories</p>
                <p className="w-40 text-start pl-8 text-amber-700 font-semibold sm:pl-40">277kcal</p>
              </div>
              <hr />
              <div className="flex mb-2 text-center">
                <p className="w-40 text-start pl-8">Carbs</p>
                <p className="w-40 text-start pl-8 text-amber-700 font-semibold sm:pl-40">0g</p>
              </div>
              <hr />
              <div className="flex mb-2 text-center">
                <p className="w-40 text-start pl-8">Protein</p>
                <p className="w-40 text-start pl-8 text-amber-700 font-semibold sm:pl-40">20g</p>
              </div>
              <hr />
              <div className="flex mb-2 text-center">
                <p className="w-40 text-start pl-8">Fat</p>
                <p className="w-40 text-start pl-8 text-amber-700 font-semibold sm:pl-40">22g</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
