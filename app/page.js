
const baseUrl =
  typeof process.env.NEXT_PUBLIC_BASE_URL_API.length !== undefined
    ? 'http://localhost:3000'
    : "http://129.159.56.94:3000";

export default function Home() {
  return (
    <>
    <h1>Olá</h1>
    </>
  )
}

export { baseUrl };