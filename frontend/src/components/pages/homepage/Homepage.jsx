import Aside from "../../layout/aside/Aside";

function Homepage() {
  return (
    <>
      <Aside />
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          This is homepage, you can see it even being logout.
        </div>
      </div>
    </>
  );
}

export default Homepage;
