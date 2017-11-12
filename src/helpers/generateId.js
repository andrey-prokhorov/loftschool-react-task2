export default function generateId() {
    const uniqueId = Math.floor(new Date().valueOf() * Math.random())
    return uniqueId;
}