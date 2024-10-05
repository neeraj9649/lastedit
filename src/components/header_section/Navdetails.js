import React, { useState, useEffect } from "react";
import Navdata from "./Navdata";
import { Link } from 'react-router-dom'; // Import Link for routing
function Navdetails({ resetMenu }) {
  const [open, setOpen] = useState("");
  const [sublinks, setSublinks] = useState("");


  // Use effect to reset submenu states when the menu is toggled
  useEffect(() => {
    if (resetMenu) {
      setOpen(""); // Reset open menu state
      setSublinks(""); // Reset sublinks state
    }
  }, [resetMenu]);

  return (
    <>
      {Navdata.map((value) => (
        <div key={value.menu}>
          <div className="px-3 text-left md:cursor-pointer group flex flex-col-reverse md:py-7 py-2 cursor-pointer">
            <h1
              className="font-semibold md:hover:text-green-950 px-5 uppercase"
              onClick={() => {
                // Handle submenu opening/closing
                open === value.menu ? setOpen("") : setOpen(value.menu);
              }}
            >
              {value.menu}
            </h1>

            {value.content && (
              <div>
                <div className="absolute top-[81px] bg-white duration-500 hidden group-hover:md:block hover:md:block w-full left-0">
                  <div className="md:grid hidden grid-rows-1 grid-cols-2">
                    <div className="flex flex-col py-5 items-center gap-5">
                      <div className="font-semibold text-xl border-b-2 flex gap-1">
                        {value.title}
                        <div className="text-lg pt-1">
                          <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                      </div>
                      <div>
                        <img
                          src={value.src}
                          className="w-[250px] h-[80px] rounded-md"
                          alt="menu visual"
                        />
                      </div>
                    </div>
                    <div className="grid grid-rows-1 grid-cols-2 gap-8 justify-center px-7 py-5">
                      {value.submenu.map((sub) => (
                        <div className="flex flex-col gap-2" key={sub.title}>
                          {sub.subtitle && (
                            <h1 className="font-semibold border-b-2">
                              {sub.title}
                            </h1>
                          )}
                          <div className="text-md text-gray-700 flex flex-col gap-1">
                            {sub.sublinks.map((subname) => (
                              <Link
                              to={subname.link}
                                className="hover:text-gray-800"
                                key={subname.name}
                              >
                                <li >{subname.name}</li>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile button */}
            <div className="md:hidden flex flex-col justify-between items-start px-5 pb-6 gap-6 font-semibold uppercase">
              <button className="uppercase">About Us</button>
              <button className="uppercase">Contact Us</button>
            </div>
          </div>
          {/* Mobile menus */}
          <div className={`${open === value.menu ? "md:hidden" : "hidden"}`}>
            {value.submenu.map((subl) => (
              <div key={subl.title}>
                <div>
                  <h1
                    className="py-2 pl-12 font-semibold md:pr-0 pr-5 cursor-pointer"
                    onClick={() => {
                      // Toggle submenu for each subitem
                      sublinks === subl.title
                        ? setSublinks("")
                        : setSublinks(subl.title);
                    }}
                  >
                    {subl.title}
                  </h1>
                </div>
                <div
                  className={`${
                    sublinks === subl.title ? "md:hidden" : "hidden"
                  }`}
                >
                  {subl.sublinks.map((names) => (
                    <li className="py-2 pl-16 cursor-pointer" key={names.name}>
                      {names.name}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden py-5 pl-8 text-md font-semibold uppercase md:pr-0 pr-5">
            Career
          </div>
        </div>
      ))}
    </>
  );
}

export default Navdetails;
