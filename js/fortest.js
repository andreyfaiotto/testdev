for(var i = 0; i<= 100; i++){
	var count = 0;
    for(var n = 1;n <= i; n++ ){
        if(i%n == 0 && i > 1){
            //verifica se é maior que 1 e o resto é 0
            count++
        }	
    }
    if(count == 2){
        //se o contador for 2, a divisão é de 1 e ele mesmo
        console.log(i +' é número primo');
    }else{
        //se a divisão do número pelo resultado for 0, o número é multiplo do valor definido.
        if(i%3 == 0 && i%5 == 0){
            console.log(i + ' Itelios, part of Capgemini');
        }else if(i%3 == 0){
            console.log(i + ' Itelios');
        }else if(i%5 == 0){
            console.log(i + ' Capgemini');
        }else{
            console.log(i)
		}
    }
}