

	document.addEventListener('DOMContentLoaded', function() {
		var mainCalendarEl = document.getElementById('calendar');
		var today = new Date();
		// today.setHours(0, 0, 0, 0) // Initial time set for first event
		var mainCalendar = new FullCalendar.Calendar(mainCalendarEl, {
			headerToolbar: {
				left: 'title',
				center: 'prev,next',
				right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
				
			},
			initialDate: today,
			weekNumbers: true,
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			selectable: true,
			nowIndicator: true,
			events: [
				{
				title: 'IELTS Preparation',
				start: moment().format('YYYY-MM-05') + "T10:30:00",
				className: ""
				},
				{
				title: 'TOEFL Exam',
				start: moment().format('YYYY-MM-08') + "T22:12:00",
        		end: moment().format('YYYY-MM-09') + "T23:00:00",
				className: ""
				},
				{
				title: 'Tourist Visa Consultancy',
				start: moment().format('YYYY-MM-12') + "T10:20:00",
        		end: moment().format('YYYY-MM-13') + "T12:00:00",
				className: ""
				},
				{
				title: 'Student Visa Consultancy',
				start: moment().format('YYYY-MM-17') + "T07:15:00",
				className: ""
				},
			],

			
			eventClick: function (infoEvent) {
				console.log(infoEvent.event.title);
				let infoModal = $("#event-details");
				infoModal.modal("show");
				console.log(infoModal.find(".event-title"));
				infoModal.find(".event-title").text(infoEvent.event.title);
			},
			eventLeave: function(info) {
				console.log('event left!', info.event);
			}
		});
	  
		mainCalendar.render();
	  });
	
	
	

	