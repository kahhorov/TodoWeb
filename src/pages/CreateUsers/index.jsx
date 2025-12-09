import { CiUser } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
function CreateUsers() {
  const {post} = useAxios()
  function handleSubmit(e) {
    e.preventDefault()
    const formData =new FormData(e.target)
    const newUser = Object.fromEntries(formData)
    toast.promise(
      post(newUser),
      {
        pending:"Qo'shilmoqda...",
        success:"Muvaffaqiyatli qo'shildi",
        error:"User qo'shilmadi!"
      }
    )
    setTimeout(() => {
      e.target.reset()
    },1300)
  }

  return (
  <>
  <form onSubmit={handleSubmit} className="w-[320px] mx-auto mt-10 flex flex-col gap-5">
    <div className="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
      <div className="shrink-0 text-gray-400 select-none px-2 text-xl"><CiUser /></div>
      <input type="text" name="name" placeholder="User name" required autoComplete="off" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
    </div>
    <div className="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
      <div className="shrink-0 text-gray-400 select-none px-2 text-xl"><IoCalendarOutline /></div>
      <input
      onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ''))}
      type="text" name="age" placeholder="User age" required autoComplete="off" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
    </div>
    <div className="flex items-center rounded-md bg-white/5  outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
      <div className="shrink-0 text-gray-400 select-none text-xl px-2"><MdOutlineMailOutline /></div>
      <input type="email" name="email" placeholder="Email" required autoComplete="off" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
    </div>
    <button className="bg-blue-700 py-2 rounded-md">Add User</button>
</form>
  </>
  )
}

export default CreateUsers;
