const DataCard = (props) => {
  const { title, value, Icon, iconColor, FooterIcon, footerText } = props;
  return (
    <div className="w-[100%] sm:w-[48%] lg:w-[22.5%] bg-white p-[4%] sm:p-[2%] lg:p-[1%] rounded-xl shadow-lg mb-[3vh]">
      <div className="flex justify-between items-center pb-[5%] border-b">
        <span className="w-[35%] px-[5%]">
          <Icon color={iconColor} size={"80%"} />
        </span>
        <div className="flex flex-col items-end">
          <span className="text-[4vw] sm:text-[2.25vw] lg:text-[1vw] text-primary-300">
            {title}
          </span>
          <span className="text-[6vw] sm:text-[3.5vw] lg:text-[1.75vw]">
            {value}
          </span>
        </div>
      </div>
      <div className="flex items-center mt-[0.75em]">
        <span className="w-[3vw] sm:w-[1.75vw] lg:w-[1vw]">
          <FooterIcon size={"100%"} color="#66615B" />
        </span>
        <span className="text-primary-300 ml-[0.5em] text-[3vw] sm:text-[1.75vw] lg:text-[1vw]">
          {footerText}
        </span>
      </div>
    </div>
  );
};

export default DataCard;
