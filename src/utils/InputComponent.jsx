export default function InputComponent({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-[20rem] rounded-[1.2rem] border border-stone-200 bg-white px-4 py-2 text-sm placeholder:text-stone-400 focus:ring focus:ring-yellow-400 focus:outline-none sm:w-full md:py-3"
    />
  );
}
