console.log("Hello, World!");

function veletlenszamgenerator()
{
    return new Promise((resolve) => {
        const veletlenszam = Math.floor(Math.random() * 100) + 1;
        console.log(`Generált véletlenszám: ${veletlenszam}`);
    });
}