const Mockup = () => {
  return (
    <div className="flex flex-col gap-5 w-screen h-screen bg-gray-900">
      <header className="flex p-2 justify-between">
        <h1 className="font-bold text-2xl text-violet-700">Schedulo</h1>
        <div className="group flex flex-col justify-between p-1 w-12 h-10 transition-all hover:cursor-pointer">
          <span className="flex w-full h-[4px] rounded-sm bg-violet-900 origin-top-left group-hover:rotate-45 transition-all"></span>
          <span className="flex w-full h-[4px] rounded-sm bg-violet-900 group-hover:hidden transition-all"></span>
          <span className="flex w-full h-[4px] rounded-sm bg-violet-900 origin-top-left group-hover:-rotate-45 transition-all"></span>
        </div>
      </header>
      <div className="flex justify-between basis-full w-full">
        <section
          id="navigate"
          className="bg-white group rounded-tr-lg rounded-br-lg flex flex-col w-24"
        >
          <nav className="flex flex-col basis-full">
            <ul className="flex flex-col justify-between basis-full px-4 py-2">
              <li className="flex h-[50px] items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-5xl hover:text-blue-600 transition-all">
                  home
                </span>
              </li>
              <li className="flex h-[50px] items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-5xl hover:text-blue-600 transition-all">
                  auto_stories
                </span>
              </li>
              <li className="flex h-[50px] items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-5xl hover:text-blue-600 transition-all">
                  book
                </span>
              </li>
              <li className="flex h-[50px] items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-5xl hover:text-blue-600 transition-all">
                  person
                </span>
              </li>
            </ul>
          </nav>
        </section>
        <section id="calendar" className="basis-1/3">
          <div className="flex flex-col p-3 h-3/4 rounded-lg bg-slate-400">
            <div className="flex w-full justify-between" id="year_">
              <div className="flex">
                <span className="material-symbols-outlined cursor-pointer">
                  keyboard_double_arrow_left
                </span>
                <span className="material-symbols-outlined cursor-pointer">
                  chevron_left
                </span>
              </div>
              <div className="flex basis1/4 font-semibold text-xl cursor-pointer">
                2023
              </div>
              <div className="flex">
                <span className="material-symbols-outlined cursor-pointer">
                  chevron_right
                </span>
                <span className="material-symbols-outlined cursor-pointer">
                  keyboard_double_arrow_right
                </span>
              </div>
            </div>
            <div className="flex w-full justify-between" id="month_">
              <div className="flex">
                <span className="material-symbols-outlined cursor-pointer">
                  chevron_left
                </span>
              </div>
              <div className="flex basis1/4 font-semibold text-xl cursor-pointer">
                April
              </div>
              <div className="flex">
                <span className="material-symbols-outlined cursor-pointer">
                  chevron_right
                </span>
              </div>
            </div>
            <table id="calendar_" className="w-full text-center">
              <thead className="max-h-4 font-xl font-bold">
                <tr>
                  <td>S</td>
                  <td>Mo</td>
                  <td>Th</td>
                  <td>We</td>
                  <td>Tu</td>
                  <td>Fr</td>
                  <td>Sa</td>
                </tr>
              </thead>
              <tbody className="">
                <tr className="even:bg-zinc-400">
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    29
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    30
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    31
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    1
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    2
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    3
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    4
                  </td>
                </tr>
                <tr className="even:bg-zinc-400">
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    5
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    6
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    7
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    8
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    9
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    10
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    11
                  </td>
                </tr>
                <tr className="even:bg-zinc-400">
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    12
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    13
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    14
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    15
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    16
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    17
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    18
                  </td>
                </tr>
                <tr className="even:bg-zinc-400">
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    19
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    20
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    21
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    22
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    23
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    24
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    25
                  </td>
                </tr>
                <tr className="even:bg-zinc-400">
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    26
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    27
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    28
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    29
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    30
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    1
                  </td>
                  <td className="p-2 cursor-pointer font-bold hover:bg-indigo-300 focus:bg-sky-800">
                    2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="appointments basis-1/3">
          <div className="w-full max-h-[350px] p-4 rounded-lg overflow-y-scroll bg-gray-400">
            <div className="flex gap-3 flex-col max-h-full">
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked={false}
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Disponible</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked={false}
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Disponible</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked={false}
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Disponible</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
              <div className="bg-indigo-400 flex flex-col justify-between w-full h-[75px] rounded-lg cursor-pointer hover:bg-indigo-500">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="peer hidden"
                />
                <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg peer-checked:bg-red-400">
                  <h2>Ocupado</h2>
                  <p>8:00 - 9:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex p-10 w-full bg-gray-400"></footer>
    </div>
  );
};

export default Mockup;
