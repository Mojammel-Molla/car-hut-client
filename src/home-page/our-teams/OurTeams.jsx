const OurTeams = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h6 className="text-xs pb-3 font-bold">
          HELPS YOU TO FIND PERFECT CAR
        </h6>
        <h2 className="text-2xl md:text-4xl font-bold">
          Our Sales <span className="text-[#d01818]">Team</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
        <div className="w-60 hover:bg-[#d01818]">
          <img
            className="pr-3"
            src="https://revus.tm-colors.info/dealer/wp-content/uploads/2020/04/revus-team-image-1-min.jpg"
            alt="Team Member"
          />
          <div className="text-center text-white bg-slate-700 h-20 ml-3 ">
            <h3 className="font-bold text-lg">Alex Lee man </h3>
            <p className="font-semibold">Director</p>
          </div>
        </div>
        <div className="w-60 hover:bg-[#d01818]">
          <img
            className="pr-3"
            src="https://revus.tm-colors.info/dealer/wp-content/uploads/2020/04/revus-team-image-2-min.jpg"
            alt="Team Member"
          />
          <div className="text-center text-white bg-slate-700 h-20 ml-3 ">
            <h3 className="font-bold text-lg">Diago Johnson</h3>
            <p className="font-semibold">Sales Manager</p>
          </div>
        </div>
        <div className="w-60 hover:bg-[#d01818]">
          <img
            className="pr-3"
            src="https://revus.tm-colors.info/dealer/wp-content/uploads/2020/04/revus-team-image-3-min.jpg"
            alt="Team Member"
          />
          <div className="text-center text-white bg-slate-700 h-20 ml-3 ">
            <h3 className="font-bold text-lg">Sophia Lauren </h3>
            <p className="font-semibold">Co-Founder</p>
          </div>
        </div>
        <div className="w-60 hover:bg-[#d01818]">
          <img
            className="pr-3"
            src="https://revus.tm-colors.info/dealer/wp-content/uploads/2020/04/revus-team-image-4-min.jpg"
            alt="Team Member"
          />
          <div className="text-center text-white bg-slate-700 h-20 ml-3 ">
            <h3 className="font-bold text-lg">William Henry </h3>
            <p className="font-semibold">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
