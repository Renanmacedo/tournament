import create from 'zustand'

const userStore = create( set => ({
    user: {},
    setUser: (user) => set(state => ({ user }))
}))

export default userStore