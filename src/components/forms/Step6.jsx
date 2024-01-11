import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";

const Step6 = () => {
  const [select, setSelect] = useState(false);

  const itemSelect = (index) => {
    setSelect(!select);
  };

  return (
    <div className="items-center">
      <div className="w-[70%] mx-auto">
        <h1 className="text-5xl font-bold text-center p-2">
          Invite people to your Workspace
        </h1>
      </div>
      <section className="w-[70%] mx-auto pt-10  justify-center items-center h-60">
        <div className="mt-auto flex justify-center gap-4">
          <form class="flex items-center w-[100%]">
            <div class="relative w-[62%] m-auto flex flex-col-1 mt-32 border border-gray-300 rounded-lg">
              <div class=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MdAlternateEmail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="voice-search"
                className="border-none text-gray-900 text-lg focus:outline-none block py-4 w-[72%] m-auto"
                placeholder="Enter email addresses (or paste multiple)"
                required
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Step6;
