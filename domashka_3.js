// tut budet domashka teoriya ver.


function teorver(count) {
    let parniyCount = 0;
    let neparniyCount = 0;

    for (let x = 0; x < count; x = x + 1) {

        let sluchainoeChislo = Math.floor(Math.random() * 1000);

        if (sluchainoeChislo % 2 === 0) {
            parniyCount + 1;

        }
        else {
            neparniyCount + 1;
        }
    }

    let parniyCountProtsent = ( parniyCount / count ) * 100;
    let neparniyCountProtsent = (neparniyCount / count) * 100;

    console.log("Kol-vo sgenerirovannich chisel = ", count);
    console.log("Parnich chisel = ", parniyCount);
    console.log("Neparnich chisel = ", neparniyCount);
    console.log("Protsent parnich = ", parniyCountProtsent, "%");
    console.log("Protsent neparnich = ", neparniyCountProtsent, "%");

}
teorver(10)