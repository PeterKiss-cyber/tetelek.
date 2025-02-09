//Átlag számítás Tétele
function Atlag_szamitas(vizsgalt_tomb){
	let atlag=0
    for(let i=0;i<vizsgalt_tomb.length;i++){
    	atlag=(atlag+vizsgalt_tomb[i])/vizsgalt_tomb.length
        
    }
    document.write(`A ${vizsgalt_tomb} elemeinek átlaga: ${atlag}<br>`)
}
Atlag_szamitas([4,5,11,10])
Atlag_szamitas([3,7,5,10])
Atlag_szamitas([46,4,10])
Atlag_szamitas([15,32,41,66,54])

document.write("<hr>")
//Minimum keresés tétele
function Minimum_kereses(szam_tomb){
	let minErtek=szam_tomb[0]
    for(let i=1;i<szam_tomb.length;i++){
    	if(szam_tomb[i]<minErtek){
        	minErtek=szam_tomb[i]
        }
    }
    document.write(`A tömbben lévő legkisebb elem értéke:${minErtek}<br>`)
}
Minimum_kereses([1,15,25,31,14])
Minimum_kereses([55,64,69,43,52,86,99,45,13,22])

document.write("<hr>")
//Maximum keresés tétele
function Maximum_kereses(szam_tomb){
	let maxErtek = szam_tomb[0]
	for (let i = 1; i < szam_tomb.length; i++) {
    	if (szam_tomb[i] > maxErtek) {
        maxErtek = szam_tomb[i]
    	}
	}
    document.write(`A tömbben lévő legnagyobb elem értéke:${maxErtek}<br>`)
}
Maximum_kereses([1,15,25,31,14])
Maximum_kereses([55,64,69,43,52,86,99,45,13,22])

document.write("<hr>")
//Megszámlálás tétele
function Megszamlalas(szam_tomb){
	let darab = 0
	for (let i = 0; i < szam_tomb.length; i++) {
    	if (szam_tomb[i] % 2 == 0) {
        	darab++
    	}
	}
     document.write(`A tömbben lévő páros számok mennyisége:${darab}<br>`)
}
Megszamlalas([1,15,25,31,14])
Megszamlalas([55,64,69,43,52,86,99,45,13,22])

document.write("<hr>")
//Kiválogatás Tétele
function Kivalogatas(szam_tomb){
	for (let i = 0; i < szam_tomb.length; i++) {
    	if (szam_tomb[i] % 2 == 0) {
        	document.write(szam_tomb[i] + ",");
    }
}

let parosak = [];
for (let i = 0; i < szam_tomb.length; i++) {
    if (szam_tomb[i] % 2 == 0) {
        parosak.push(szam_tomb[i]);
    	}
	}
    document.write(`A tömbben lévő páros számok mennyisége:${parosak.length}<br>`)
}
Kivalogatas([1,15,25,31,14])
Kivalogatas([55,64,69,43,52,86,99,45,13,22])
