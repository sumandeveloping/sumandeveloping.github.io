// check of specific todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
	// // if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	//   // turn it black
	// 	$(this).css({
	// 	    textDecoration: "none",
	// 		color: "black"
	// 	});
	// } 
	// //else
	// else{
	//   // turn it gray 
	// 	$(this).css({
	// 		textDecoration: "line-through",
	// 		color: "gray"
	//     });
	// }
});

// click on trash to remove todo

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// click on input to add todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing the new todo text from input
		var todoText = $(this).val();
		// deleting the text from input field
		$(this).val("");
		//create a new li and add to ul  [.append() = add something to a sepcified element]
		$("ul").append("<li><span id='trash'><i class='fas fa-trash-alt'></i></span>" + todoText +"</li>");
	}
});

$("ul").on("mouseenter","span", function(){
	$(this).css("cursor","pointer");
});

// hiding input text
// $("input[type = 'text']").hide();

//showing input field when plus(+) sign is cliked.
$(".fa-plus").on("click", function(){
	$("input[type = 'text']").fadeToggle();
});