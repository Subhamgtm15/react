import logo from "./logo512.png";

function Navbar() {
  return (
    <nav className="bg-[#21222A] flex items-center justify-between p-6">
      <div className="flex justify-between items-center gap-5">
        <img src={logo} className="bg-transparent w-12" alt="logo" />
        <h1 className="text-[#61DAFB] text-3xl">ReactFacts</h1>
      </div>
      <p className="text-white text-lg">React Course- Project 1</p>
    </nav>
  );
}
export default Navbar;
