export const revalidate = 60;

export async function GET(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);

    const data = await res.json()

    return Response.json({data})
}