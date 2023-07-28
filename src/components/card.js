import React from "react";

function ProgramCard({ programName, testimonials }) {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
      <div className='flex'>
        <div className='bg-black w-40 flex-shrink-0'>
          <div className='h-40 flex items-center justify-center'>
            <h3 className='text-2xl font-semibold text-white'>{programName}</h3>
          </div>
        </div>
        <div className='p-6 bg-gray-100'>
          <h3 className='text-xl font-semibold mb-4'>{programName}</h3>
          <div className='space-y-4'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='bg-white p-4 rounded-lg'>
                <p className='text-gray-700'>{testimonial.content}</p>
                <p className='text-gray-500 font-medium'>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Program() {
  const programName = "Program Name";
  const testimonials = [
    { content: "Testimonial 1", author: "Author 1" },
    { content: "Testimonial 2", author: "Author 2" },
  ];

  return (
    <div>
      <ProgramCard programName={programName} testimonials={testimonials} />
    </div>
  );
}
