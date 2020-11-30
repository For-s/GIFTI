/*document.getElementById('n').addEventListener('click',async(e)=>{
    e.preventDefault();
    const newComment = prompt("이거 맞냐");
    try{
        Ntsf.update({
            n: n+1,
        }, {
            where: {id : 1},
        });
    } catch(err){
        console.error(err);
    }
})*/

async function calculate_score(){
    try{
        const res = await axios.get('/ntsf');
        const users = res.data;
        console.log(users);
    } catch(err){
        console.error(err);
    }
}