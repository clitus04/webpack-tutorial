const chartLayout = (props) => {
  const { title, subTitle, FooterIcon, footerText, children } = props;
  return (
    <div className="bg-white rounded-xl w-full p-[0.75em] shadow-lg">
      <div className="text-primary-900 text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] py-[0.5em]">
        {title}
      </div>
      <span className="text-primary-300 text-[2.5vw] sm:text-[1.75vw] lg:text-[0.85vw]">
        {subTitle}
      </span>
      <div className="border-b">{children}</div>
      <div className="pt-[1em] flex items-center gap-[0.5em]">
        <FooterIcon color="#66615B" />
        <span className="text-sm text-primary-600">{footerText}</span>
      </div>
    </div>
  );
};

export default chartLayout;
