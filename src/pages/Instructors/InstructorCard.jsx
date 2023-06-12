/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const InstructorCard = ({ instructor }) => {
  const { name, email, image } = instructor;

  return (
    <div className="max-w-sm h-64 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="avatar flex items-center justify-center">
        <div className="w-36 shadow-lg rounded-full">
          <img
            className="border-4 border-green-600 rounded-full ring-2 ring-blue-500 ring-opacity-50"
            src={image}
            alt={name}
          />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
