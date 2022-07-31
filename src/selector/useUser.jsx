import userStore from '../store/user'

export const useUser = () => userStore(state => state.user)