import team from '../data/team'
import TeamCard from '../components/TeamCard'

function Team() {
  return (
    <section className="font-dm-sans pt-32 px-8">
      <h1 className="text-3xl font-bold text-center mb-12">
        Meet the Team
      </h1>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-10
      ">
        {team.map(member => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Team
