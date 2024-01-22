import HeadingSVG from "./HeadingSVG";

export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex items-center justify-center space-x-[3%] pb-5">
          <HeadingSVG />
          <h2 className="w-fit text-5xl font-medium uppercase text-secondary-600 text-laundry-blue ">
            {title}
          </h2>
          <HeadingSVG />
        </div>
      </div>
    </>
  );
}
