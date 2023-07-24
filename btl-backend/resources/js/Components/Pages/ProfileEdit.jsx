import {useForm, usePage} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import {Transition} from "@headlessui/react";
import {useEffect, useState} from "react";
export default function ProfileEdit() {
    const user = usePage().props.auth.user;
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const file = e.target.files[0];
        setData('image', file)
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(file)
    }
    const { data, setData, post, errors, recentlySuccessful } = useForm({
        name: user.name,
        username: user.username,
        website: user.website,
        bio: user.bio,
        image: null,
        _method: 'patch'
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('profile.update'));
    };
    return (
      <>
          <form onSubmit={submit} encType="multipart/form-data">
              <div className="flex flex-row items-center">
                  <div className="w-1/3 p-3">
                      <label htmlFor="image" className="cursor-pointer">
                          <a className="float-right mr-5">
                              <img src={`/storage/`+user.image} alt="avatar" className={`${selectedFile ? "hidden" : ""} rounded-full`} width="40"/>
                              {selectedFile &&  <img src={preview} alt="avatar" className="rounded-full" width="40"/> }
                          </a>
                      </label>
                  </div>
                  <div>
                      <h2 className="text-xl">{user.username}</h2>
                      <label htmlFor="image" className="cursor-pointer text-sky-600 hover:text-sky-900">Change profile photo</label>
                      <input type="file"
                             id="image"
                             name="image"
                             className="hidden"
                             onChange={onSelectFile} />
                  </div>
              </div>
              <div className="flex flex-row mt-5 items-center">
                  <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                      <label htmlFor="current_password" className="m-0 p-0 align-baseline font-bold flex align-center">
                          Name
                      </label>
                  </div>
                  <div className="w-2/3 pr-10">
                      <TextInput
                          className="mt-1 block w-full"
                          id="name"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                          required
                      />

                      <InputError message={errors.name} className="mt-2" />
                  </div>
              </div>
              <div className="flex flex-row mt-5 items-center">
                  <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                      <label htmlFor="password" className="m-0 p-0 align-baseline font-bold flex align-center">
                          Username
                      </label>
                  </div>
                  <div className="w-2/3 pr-10">
                      <TextInput
                          id="username"
                          value={data.username}
                          onChange={(e) => setData('username', e.target.value)}
                          className="mt-1 block w-full"
                          required
                      />

                      <InputError message={errors.username} className="mt-2" />
                  </div>
              </div>
              <div className="flex flex-row mt-5 items-center">
                  <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                      <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">
                          Website
                      </label>
                  </div>
                  <div className="w-2/3 pr-10">
                      <TextInput
                          id="website"
                          value={data.website}
                          onChange={(e) => setData('website', e.target.value)}
                          className="mt-1 block w-full"
                      />

                      <InputError message={errors.website} className="mt-2" />
                  </div>
              </div>
              <div className="flex flex-row mt-5 items-center">
                  <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                      <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">
                          Bio
                      </label>
                  </div>
                  <div className="w-2/3 pr-10">
                      <textarea
                          id="bio"
                          value={data.bio}
                          onChange={(e) => setData('bio', e.target.value)}
                          className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm mt-1 block w-full"
                      />

                      <InputError message={errors.bio} className="mt-2" />
                  </div>
              </div>
              <div className="flex flex-row mt-5 items-center">
                  <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                  </div>
                  <div className="w-2/3 pr-10">
                      <button
                          type="submit"
                          className="bg-sky-500 text-white font-semibold py-1 px-2 rounded-lg text-md disabled:opacity-50 hover:bg-sky-600"
                      >
                          Save
                      </button>

                      <Transition
                          show={recentlySuccessful}
                          enterFrom="opacity-0"
                          leaveTo="opacity-0"
                          className="transition ease-in-out"
                      >
                          <p className="text-sm text-gray-600">Saved.</p>
                      </Transition>
                  </div>
              </div>
          </form>
          {/*<div className="flex flex-row">*/}
          {/*    <div className="w-1/3 p-3">*/}
          {/*        <a href="" className="float-right mr-5">*/}
          {/*            <img src="https://github.com/mdo.png" alt="" className="rounded-full" width="40"/>*/}
          {/*        </a>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*        <h1 className="text-2xl">Userr</h1>*/}
          {/*        <a href="" className="text-sm text-sky-500 font-bold">*/}
          {/*            Change profile photo*/}
          {/*        </a>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-row mt-5 items-center">*/}
          {/*    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">*/}
          {/*        <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">*/}
          {/*            Name*/}
          {/*        </label>*/}
          {/*    </div>*/}
          {/*    <div className="w-2/3 pr-10">*/}
          {/*        <input type="text"*/}
          {/*               className="border p-1 px-3 w-full"*/}
          {/*               placeholder="Name"*/}
          {/*               value={name}*/}
          {/*               onChange={(e) => setName(e.target.value)}*/}
          {/*        />*/}
          {/*        <p className="text-gray-400 text-xs">*/}
          {/*            Help people discover your account by using the name, nickname or business name.{" "}*/}
          {/*        </p>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-row mt-5 items-center">*/}
          {/*    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">*/}
          {/*        <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">*/}
          {/*            Username*/}
          {/*        </label>*/}
          {/*    </div>*/}
          {/*    <div className="w-2/3 pr-10">*/}
          {/*        <input type="text"*/}
          {/*               className="border p-1 px-3 w-full"*/}
          {/*               placeholder="Username"*/}
          {/*               value={username}*/}
          {/*               onChange={(e) => setUsername(e.target.value)}*/}
          {/*        />*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-row mt-5 items-center">*/}
          {/*    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">*/}
          {/*        <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">*/}
          {/*            Website*/}
          {/*        </label>*/}
          {/*    </div>*/}
          {/*    <div className="w-2/3 pr-10">*/}
          {/*        <input type="text"*/}
          {/*               className="border p-1 px-3 w-full"*/}
          {/*               placeholder="https://example.com"*/}
          {/*               value={website}*/}
          {/*               onChange={(e) => setWebsite(e.target.value)}*/}
          {/*        />*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-row mt-5 items-center">*/}
          {/*    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">*/}
          {/*        <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">*/}
          {/*            Bio*/}
          {/*        </label>*/}
          {/*    </div>*/}
          {/*    <div className="w-2/3 pr-10">*/}
          {/*        <textarea*/}
          {/*               className="border p-1 px-3 w-full"*/}
          {/*               rows="2"*/}
          {/*               value={bio}*/}
          {/*               onChange={(e) => setBio(e.target.value)}*/}
          {/*        />*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-row mt-5 items-center">*/}
          {/*    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">*/}
          {/*    </div>*/}
          {/*    <div className="w-2/3 pr-10">*/}
          {/*        <button*/}
          {/*            type="submit"*/}
          {/*            className="bg-sky-500 text-white font-semibold py-1 px-2 rounded-lg text-md disabled:opacity-50"*/}
          {/*        >*/}
          {/*              Submit*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*</div>*/}
      </>
    );
}
