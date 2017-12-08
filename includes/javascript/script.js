//Data
var contacts = [
	{
		"status": "available",
		"name": "Christian",
		"email": "christian@yahoo.com",
		"phone": "323-555-1234",
		"address": "123 W. Lane ln.",
		"city": "Safe City",
		"state": "WA",
		"zip": "99221"
	},
	{
		"status": "available",
		"name": "Rich",
		"email": "rich@tripod.com",
		"phone": "323-555-1235",
		"address": "121 W. Way ln.",
		"city": "Safer City",
		"state": "ID",
		"zip": "99251"
	},
	{
		"status": "available",
		"name": "Scott",
		"email": "scott@mailinator.com",
		"phone": "323-555-0012",
		"address": "521 N. Pole Way",
		"city": "Boise",
		"state": "ID",
		"zip": "99995"
	},
	{
		"status": "available",
		"name": "Danny",
		"email": "danny@hotmail.com",
		"phone": "323-555-5555",
		"address": "1221 W. What Day Ln.",
		"city": "Safest City",
		"state": "OR",
		"zip": "51242"
	},
	{
		"status": "unavailable",
		"name": "Taka",
		"email": "taka@myspace.com",
		"phone": "509-545-0000",
		"address": "200 East Mississippi Lane.",
		"city": "Crazy Town",
		"state": "CO",
		"zip": "85234"
	},
	{
		"status": "busy",
		"name": "Tim",
		"email": "tim@netscape.com",
		"phone": "123-555-100",
		"address": "15412 W. Wacko Ct.",
		"city": "No-mans-land",
		"state": "FL",
		"zip": "85258"
	},
	{
		"status": "available",
		"name": "Patrick",
		"email": "patrick@live.com",
		"phone": "555-555-5555",
		"address": "21 W. Waterfront",
		"city": "Sandy Point",
		"state": "ID",
		"zip": "98787"
	},
	{
		"status": "busy",
		"name": "Jacques",
		"email": "jacques@aol.com",
		"phone": "999-555-1911",
		"address": "-25 S. Friendship Memory Way",
		"city": "Austin",
		"state": "Me",
		"zip": "00201"
	}
];


(function() {

	var contacts_count = contacts.length;
	var new_contacts_objects = '';

	if(contacts_count){

		for(var i = 0; i < contacts_count; i++){
			var this_contact = contacts[ i ];

			new_contacts_objects +=
				'<div class="col-xs-12 contact_list_item">' +
					'<div class="col-xs-5">' +
						'<span class="status_dot ' + this_contact.status+'"></span>' +
						this_contact.name +
					'</div>' +
					'<div class="col-xs-7">' +
						'<div class="glance_details">' + this_contact.email+'</div>' +
						'<div class="additional_details">' +
							'<div class="glance_alternative">' + this_contact.phone+'</div><br />' +
							this_contact.address + '<br />' +
							this_contact.city + ', ' + this_contact.state + ' ' + this_contact.zip +
						'</div>' +
					'</div>' +
				'</div>';
		}



	}else{
		//Append no contacts message.
		new_contacts_objects += '<div class="col-xs-12 contact_list_item">No contacts available</div>';

	}
	document.getElementById('contacts').innerHTML = new_contacts_objects;



	var contact_list_items = document.querySelectorAll('.contact_list_item');

	//Click event listeners for all of our contact list items.
	if(contact_list_items.length){
		for (var j = 0; j < contact_list_items.length; j++) {
			contact_list_items[ j ].addEventListener("click", function() {
				this.classList.toggle("active");

				var parent = document.getElementById("contacts");
				var current_inactive = document.getElementsByClassName('inactive');
				if(current_inactive.length){
					parent.removeChild(current_inactive[0]);
				}else{
					var new_inactive = document.createElement("div");

					new_inactive.classList.add('inactive');
					new_inactive.style.height = parent.getBoundingClientRect().height.toString() + 'px';
					parent.appendChild(new_inactive);
				}
			});
		}
	}


	//On change of the select box
	document.getElementById('contact_display').addEventListener('change', function(){
		if(contact_list_items.length){
			for (var k = 0; k < contact_list_items.length; k++) {
				var glance_details = contact_list_items[ k ].getElementsByClassName('glance_details')[0];
				var glance_alternative = contact_list_items[ k ].getElementsByClassName('glance_alternative')[0]
				var original_glance_details = glance_details.textContent;

				glance_details.textContent = glance_alternative.textContent;
				glance_alternative.textContent = original_glance_details;

			}
		}
	})


})();