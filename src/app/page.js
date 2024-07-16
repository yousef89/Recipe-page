import { Outfit, Young_Serif } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F1E6D9] min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-[736px]  rounded-[20px] m-40 flex flex-col items-center">
        <div>
          <Image
            src={"/image-omelette.jpeg"}
            height={300}
            width={656}
            className="rounded-[20px] mt-10"
          ></Image>
          <p className="text-[41px] font-youngSerif mt-7">
            Simple Omelette Recipe
          </p>
        </div>

        <div>
          <p className="font-outfit opacity-60  mt-4 w-[650px]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className="bg-[#fef7fb] w-[656px] h-[179px] mt-[35px] flex flex-col justify-center">
          <div className="ml-8 mb-2">
            <h1 className="text-[#b35882] font-outfit text-[21px] font-semibold ">
              Preparation time
            </h1>

            <ul className="font-outfit text-[#565656] font-semibold ml-5 list-disc indent-4 space-y-1 mt-3">
              <li>
                Total:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  Approximately 10 minutes
                </span>
              </li>
              <li>
                Preparation:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">5 minutes</span>
              </li>
              <li>
                Cooking:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">5 minutes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-[35px]">
          <div className="mr-[130px]">
            <h1 className="text-[#785443] font-youngSerif text-[30px]">
              Ingredients
            </h1>

            <ul className="font-outfit text-[#565656] opacity-70 w-[500px] indent-5 ml-5 list-disc space-y-2 mt-5 marker:text-[#582F27]">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-300 w-[660px] my-10" />

        <div className="-mt-2">
          <div className="mr-[30px]">
            <h1 className="text-[#785443] font-youngSerif text-[30px]">
              Instructions
            </h1>

            <ol className="font-outfit font-semibold list-outside text-[#565656] opacity-95 w-[600px] ml-5 list-decimal  space-y-3 mt-5 pr-5 marker:text-[#785443]">
              <li className="pl-3">
                Beat the eggs:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>
              <li className="pl-3">
                Heat the pan:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>
              </li>
              <li className="pl-3">
                Cook the omelette:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </li>
              <li className="pl-3">
                Add fillings (optional):&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </span>
              </li>
              <li className="pl-3">
                Fold and serve:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </li>
              <li className="pl-3">
                Enjoy:&nbsp;&nbsp;
                <span className="font-light text-[#757575]">
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ol>
          </div>
        </div>

        <hr className="border-t border-gray-300 w-[660px] my-10" />

        <div className="flex flex-col justify-center mr-[40px] gap-3">
          <h1 className="text-[#785443] font-youngSerif text-[30px]">
            Nutrition
          </h1>
          <p className="font-outfit opacity-50">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
        </div>

        <div className="mr-12">
          <div className="flex justify-center gap-[244px] font-outfit mt-[34px] mr-[160px] text-[17px] my-1">
            <p className="opacity-55">Calories</p>
            <p className="text-[#704034] font-semibold">277kcal</p>
          </div>

          <hr className="border-t border-gray-300 w-[660px] my-2 ml-10" />

          <div className="flex justify-center gap-[260px] font-outfit  mr-[200px] text-[17px] my-1">
            <p className="opacity-55">Carbs</p>
            <p className="text-[#704034] font-semibold">0g</p>
          </div>

          <hr className="border-t border-gray-300 w-[660px] my-2 ml-10" />

          <div className="flex justify-center gap-[250px] font-outfit  mr-[186px] text-[17px] my-1">
            <p className="opacity-55">Protein</p>
            <p className="text-[#704034] font-semibold">20g</p>
          </div>

          <hr className="border-t border-gray-300 w-[660px] my-2 ml-10" />

          <div className="flex justify-center gap-[282px] font-outfit  mr-[186px] text-[17px] my-1 mb-[45px]">
            <p className="opacity-55">Fat</p>
            <p className="text-[#704034] font-semibold">22g</p>
          </div>
        </div>
      </div>
    </div>
  );
}
