export const revalidate = 60;

export async function GET(request, {params}){
    const num = params.id;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);

    const data = await res.json()

    return Response.json(data)
}