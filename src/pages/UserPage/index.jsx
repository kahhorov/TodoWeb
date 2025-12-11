import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Button from "@mui/material/Button";
import HomeLink from "../../components/HomeLink";

function UserPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { get, put, del, loading } = useAxios();

  useEffect(() => {
    get("/" + id).then(setData);
  }, []);

  if (loading) {
    return <Loading />;
  }
  async function handleDelete() {
    await toast.promise(del(id), {
      pending: "O'chirilmoqda...",
      success: "Muvaffaqiyatli o'chirildi!",
      error: "O'chirishda xatolik!",
    });
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData);
    toast.promise(put(newUser, id), {
      pending: "O'zgartrilmoqda...",
      success: "Muvaffaqiyatli o'zgartrildi",
      error: "User o'zgartrilmadi!",
    });
    setData(newUser);
    console.log(data);
    e.target.reset();
  }

  return (
    <div>
      <h2 className="text-2xl w-full text-center mt-10 font-black">
        User Settings
      </h2>
      <HomeLink />
      <form
        onSubmit={handleSubmit}
        className="w-[320px] mx-auto mt-10 flex flex-col gap-5"
      >
        <div className="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
          <div className="shrink-0 text-gray-400 select-none px-2 text-xl">
            <CiUser />
          </div>
          <input
            type="text"
            name="name"
            placeholder="User name"
            required
            autoComplete="off"
            defaultValue={data?.name}
            className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
          <div className="shrink-0 text-gray-400 select-none px-2 text-xl">
            <IoCalendarOutline />
          </div>
          <input
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            type="text"
            name="age"
            placeholder="User age"
            required
            autoComplete="off"
            defaultValue={data?.age}
            className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="flex items-center rounded-md bg-white/5  outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
          <div className="shrink-0 text-gray-400 select-none text-xl px-2">
            <MdOutlineMailOutline />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="off"
            defaultValue={data?.email}
            className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <button className="bg-blue-700 py-2 rounded-md">Save</button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          type="button"
        >
          Delete
        </Button>
      </form>
      
    </div>
  );
}

export default UserPage;
