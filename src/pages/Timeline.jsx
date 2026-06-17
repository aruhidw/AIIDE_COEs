function Timeline() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-5">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-[#012640] mb-6 text-center">
          Program Timeline
        </h2>
       
        <div className="flex justify-center">
          <img 
            src="/Grouptimeline.png" 
            alt="Detailed Timeline Roadmap" 
            className="rounded-lg max-w-full h-auto shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default Timeline;