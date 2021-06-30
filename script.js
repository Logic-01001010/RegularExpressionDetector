var reg = null;

function update_regular(){

	reg = $('#regular').val();
	console.log(reg);
}

function update_content(){

	var content = $('#content').val();

	var myRe = new RegExp( reg );
	var result = myRe.exec( content );

	if(result){
		$('#result').val('Found!');
	}
	else{
		$('#result').val('Not Found..');
	}

}
