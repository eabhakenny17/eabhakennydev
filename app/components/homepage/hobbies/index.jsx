import { hobbies } from "@/utils/data/hobbies";

function Hobbies() {
  return (
    <section
      id="hobbies"
      aria-labelledby="hobbies-heading"
      className="my-12 lg:my-16"
    >
      <h2
        id="hobbies-heading"
        className="mb-5 text-xl font-medium uppercase text-[#e7b6ae]"
      >
        Hobbies &amp; Interests
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {hobbies.map((hobby) => (
          <article
            key={hobby.id}
            className="rounded-lg border border-[#7f5d55] bg-[#3e2b29] p-5 transition-colors duration-300 hover:border-[#e7b6ae]"
          >
            <h3 className="mb-3 text-lg font-medium text-[#f8f3ee]">
              {hobby.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#f1e8e3]">
              {hobby.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
