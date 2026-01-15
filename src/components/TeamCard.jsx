function TeamCard({ name, role, image }) {
  return (
    <div className="flex flex-col items-center text-center fade-in">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  )
}

export default TeamCard
