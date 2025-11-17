export default function Heading({ title, variant = "default" }) {
  return (
    <div className="flex gap-3 items-center text-3xl w-full" data-aos="flip-down">
      {
        variant == "green" ? (
        <div className="bg-[#4CFD82] w-3 h-3" aria-hidden="true"></div>
        ) :
          (
        <div className="bg-[var(--yellow)] w-3 h-3" aria-hidden="true"></div>

          )
      }
      {title}
    </div>
  );
}
