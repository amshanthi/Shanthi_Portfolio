function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-6xl">
      <p className="text-sm font-semibold tracking-[0.3em] text-purple-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-400">{text}</p>
    </div>
  );
}

export default SectionTitle;
