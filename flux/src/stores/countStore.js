export const CountStore = {
    count: 0,
    setData(count)
    {
        this.count = count;
    },
    getData()
    {
        return this.count;
    },
}