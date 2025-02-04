
export async function POST(req: Request){
    const data = await req.json();
    console.log(data);
    const password = data.pass;

    
    
    if (password == 'recruitment'){
        console.log('to działa')
        return new Response(JSON.stringify({token:'xyz'}));
    }else
    {
        return new Response('',{status:401});
    }
}