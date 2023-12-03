export const revalidate = 60;

export async function GET(request, {params}){
    const num = params.id;

    const res = await fetch(`${process.env.BASE_URL_API}/pokemon/${num}`);

    const data = await res.json()

    return Response.json(data)
}