console.log("Hello")

// async function időzítettüzenetek() {
//     setTimeout(() => {
//         console.log("1 másodperc eltelt");
//     }, 1000);

//     setTimeout(() => {
//         console.log("2 másodperc eltelt");
//     }, 2000);

//     setTimeout(() => {
//         console.log("3 másodperc eltelt");
//     }, 3000);   
// }
// időzítettüzenetek();

//2. **Promise alapú időzítés**
function időzítettPromise(idő)
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${idő / 1000} másodperc eltelt`);
            resolve();
        }, idő);
    });
} 

async function idozitettuzenetek()
{
    await időzítettPromise(1000);
    await időzítettPromise(2000);
    await időzítettPromise(3000);

    console.log("Sikeres kiírás!");
}

idozitettuzenetek();