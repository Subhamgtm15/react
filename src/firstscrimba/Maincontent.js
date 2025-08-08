import bglogo from "./reactjs-icon 2.png";
function Maincontent() {
  return (
    <div
      className={"text-white py-8 px-5 flex flex-col gap-12 items-center bg-no-repeat bg-right"}
      style={{
        backgroundImage: `url(${bglogo})`,
      }}
    >
      <h1 className="text-4xl font-bold ">Fun Facts About React</h1>
      <ul className="list-disc list-inside text-xl marker:text-[#61DAFB] marker:text-5xl marker:gap-3">
        <li className="">
          Was first released in gojgoi oigrjoijgoirjojrojgir 2013
        </li>
        <li>was originally created by Jordan Walke</li>
        <li>was originally created by Jordan Walke</li>
        <li>was originally created by Jordan Walke</li>
        <li>
          was originally created by Jordan Walke abcorhg hoirhoig oihgohr
          oihgoirh hoigrhg
        </li>
      </ul>
    </div>
  );
}

export default Maincontent;
