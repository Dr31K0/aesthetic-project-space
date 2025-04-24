
const AVP = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="noise-overlay" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-light mb-6">AVP</h1>
        <p className="text-xl text-white/70 max-w-2xl text-center">
          Audio-visual presentation materials and media assets.
        </p>
      </div>
    </div>
  );
};

export default AVP;
