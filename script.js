/*
MUHAMMAD SUFI N. ARDHI
QBIT - Junior Programmer
Test1

<< TIPE DATA >>
type Ifruit =
{
    fruitId   : Number,
    fruitName : String,
    fruitType : 'IMPORT' | 'LOCAL',
    stock     : Number
}
*/

// Array of objects

const fruits= [
    {
        fruitId: 1,
        fruitName: 'Apple',
        fruitType: 'IMPORT',
        stock : 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock : 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock : 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock : 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock : 10
    },
    {
        fruitId: 6,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock : 20
    },
    {
        fruitId : 7,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]
//No.1
const BuahApaSaja = fruits.map(element => element.fruitName);
console.log('Buah yang Dimiliki Andi: ' + BuahApaSaja);
//No.2
const groupInfo = fruits.reduce((groups, fruits) => {
    const {IMPORT = 0, LOCAL = 0} = groups;
    if (fruits.fruitType === 'IMPORT') {
        console.log('Cek Nama Buah IMPORT: ' + fruits.fruitName);
        return {...groups, IMPORT: IMPORT + 1};
    } 
     else {
        console.log('Cek Nama Buah LOCAL: ' + fruits.fruitName);
        return {...groups, LOCAL: LOCAL + 1};
    }
}, {});

console.log(groupInfo);
//No.3
const StockBuah = fruits.reduce((groups, fruits) => {
    const {IMPORT = 0, LOCAL = 0} = groups;
    if (fruits.fruitType === 'IMPORT') {
        console.log('Cek Jumlah Buah IMPORT: ' + fruits.stock);
        return {...groups, IMPORT: IMPORT + fruits.stock};
    } 
     else {
        console.log('Cek Jumlah Buah LOCAL: ' + fruits.stock);
        return {...groups, LOCAL: LOCAL + fruits.stock};
    }
}, {});

console.log(StockBuah);