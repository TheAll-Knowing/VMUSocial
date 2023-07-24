import {Link} from "@inertiajs/react";
import ProfileEdit from "@/Components/Pages/ProfileEdit.jsx";
export default function Settings({children}) {
    return (
      <>
          <div className="container lg:p-5 max-w-5xl">
              <div className="border flex flex-row bg-white min-h-[80vh]">
                  <div className="w-1/4 border-r">
                      <ul>
                          <li>
                              <Link href={route('profile.edit')} className={`block cursor-pointer p-4 px-8` +
                                  (route().current('profile.edit')
                                      ? "font-bold border-l-2 border-l-black" : ""
                                  )
                              }>
                                Edit profile
                              </Link>
                          </li>
                          <li>
                              <Link href={route('profile.password')} className={`block cursor-pointer p-4 px-8` +
                                  (route().current('profile.password')
                                          ? "font-bold border-l-2 border-l-black" : ""
                                  )
                              }>
                                  Change Password
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div className="w-3/4 p-10">
                      {children}
                  </div>
              </div>
          </div>
      </>
    );
}
