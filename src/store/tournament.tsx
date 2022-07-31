import create from 'zustand'
import api from '../utils/api'

type TournamentConfig = {
    applicationName?: string;
}
type TournamentStore = {
    loading: boolean;
    config: TournamentConfig;
    error: boolean;
    sucess: boolean;
    fetch: () => void;
}
const tournamentStore = create<TournamentStore>(set => ({
    config: {},
    loading: false,
    error: false,
    sucess: false,
    fetch: async () => {
        set(() => ({ loading: true }))
        try{
            const result = await api.get('config')
            set(() => ({ error: false, loading: false, config: result.data}))
        }catch(err) {
            console.log(err)
            set(() => ({ error: true, loading: false}))
        }
    }
}))

export default tournamentStore