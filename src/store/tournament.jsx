import create from 'zustand'


const tournamentStore = create(set => ({
    tournaments: [],
    setTournaments: (tournaments) => set(state => { 
        console.log('state',state)
        return { tournaments: tournaments }
    })
}))

export default tournamentStore