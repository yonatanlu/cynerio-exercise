import { create } from "zustand";

const useUsersStore = create((set) => ({
    users: [],
    shouldUpdate: true,
    setShouldUpdate: (value) => set((state) => ({ shouldUpdate : value })),
    setUsers: (newUsers) => set((state) => ({ users : newUsers })),
    selectedColumns: [[], []],
    selectColumns: (columnName, index ) => set((state) =>
        ({ selectedColumns : state.selectedColumns.map((cell, currIndex) => index === currIndex ? [...cell, columnName] : cell )})),
    removeColumn: (columnName, index  ) => set((state) =>
        ({ selectedColumns : state.selectedColumns.map((cell, currIndex) => index === currIndex ? cell.filter((column) => column !== columnName) : cell) })),
    textSearch: '',
    setTextSearch: (text) => set((state) => ({ textSearch : text }))
}))

export default useUsersStore;