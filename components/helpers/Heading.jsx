import HeadingSVG from "./HeadingSVG";

export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none py-16">
        <div className="heading flex items-center justify-center space-x-[3%]">
          <HeadingSVG />
          <h2 className="w-fit text-xl lg:text-4xl font-medium uppercase text-secondary-600 text-laundry-blue ">
            {title}
          </h2>
          <HeadingSVG />
        </div>
      </div>
    </>
  );
}
