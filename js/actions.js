  $(document).ready(function(){
  	var todoCount = 2;
  	var doneCount = 0;
  	updateCount();
  
      $("#list").sortable();

     $('#list').on('click', 'li.list-item', checkoff);
	function checkoff(){
		
		if($(this).hasClass("checked")) {
			todoCount++;
			doneCount--;
			updateCount();
			$(this).slideUp('slow', function(){
				$(this).slideDown('slow').prependTo('#list');
			});
			
		} else {
			$(this).slideUp('slow', function(){
				$(this).slideDown('slow').appendTo('#list');
			doneCount++;
			todoCount--;
			updateCount();
			});			
			
		}
		$(this).toggleClass("checked");
		}

		$('#list').on('click', 'div.delete', deleteItem);

		function deleteItem(){
		if($(this).parent().hasClass("checked")) {

			$(this).parent().slideUp('slow', function(){
				$(this).remove();
			doneCount--;
			updateCount();
			});
			return false;
		};}

		$("form").submit(function(e){
		
		e.preventDefault();

		var newItem = $.trim($('#task-field').val());

		if (newItem == '') {
			setFocus();
		} else {
			addItem(newItem);

		};
		});

		function addItem(item) {
	
		$('<li class="list-item"><span class="item">' + item + '</span><div class="delete"></div></li>').hide().prependTo('#list').slideDown('slow');
		todoCount++;
		updateCount();
		setFocus();
	}

	function updateCount() {
		$('#todo').text(todoCount);
		$('#done').text(doneCount);
		$('#total').text(todoCount + doneCount);
	}



}); 