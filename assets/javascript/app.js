<script>

		function initialize() {
			var count;
			var counter;
			var answer = 0;
			var correct = 0;
			var incorrect = 0;
			var question1;

			$("#begin").on("click", show);
			$("#begin").on("click", start);

			
			function decrement() {
  				count--;
  				$("#timeRemaining").html("Time Remaining: " + count + " seconds");
  				$("#submitButton").on("click", submit);
  				if (count === 0) {
  					function score () {
  					$("form").html("<h1>Game over!</h1> You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.");	
  					};

					function stop() {
						clearInterval(counter);
						correct = 0;
						incorrect = 0;
					};
					score();
					stop();
				};
  			}
			function submit() {
					function checkAnswers() {
					$("#1").on("click",right);
					$("#2").on("click",wrong);
					$("#11").on("click",right);
					$("#12").on("click",wrong);
					$("#21").on("click",right);
					$("#22").on("click",wrong);
					$("#31").on("click",right);
					$("#32").on("click",wrong);
					$("#41").on("click",right);
					$("#42").on("click",wrong);
					$("#51").on("click",right);
					$("#52").on("click",wrong);
					$("#61").on("click",right);
					$("#62").on("click",wrong);
					$("#71").on("click",right);
					$("#72").on("click",wrong);
					$("#81").on("click",right);
					$("#82").on("click",wrong);
					$("#91").on("click",right);
					$("#92").on("click",wrong);
					};
					
					// $("#1").on("click",answer);
					// $("#2").on("click",answer);
					// };

					// $("#1").on("click",answer);
					// $("#2").on("click",answer);
					// $("#11").on("click",answer);
					// $("#12").on("click",answer);
					// $("#21").on("click",answer);
					// $("#22").on("click",answer);
					// $("#31").on("click",answer);
					// $("#32").on("click",answer);
					// $("#41").on("click",answer);
					// $("#42").on("click",answer);
					// $("#51").on("click",answer);
					// $("#52").on("click",answer);
					// $("#61").on("click",answer);
					// $("#62").on("click",answer);
					// $("#71").on("click",answer);
					// $("#72").on("click",answer);
					// $("#81").on("click",answer);
					// $("#82").on("click",answer);
					// $("#91").on("click",answer);
					// $("#92").on("click",answer);
					// };

					function score2 () {
					$("form").html("<h1>Game over!</h1> You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.");
					};
					score2();
			};

			// function answer() {
			// 	if ("#1") { 
			// 		correct ++;
			// 	}; 
			// 	if ("#11") { 
			// 		correct ++;
			// 	}; 
			// 	if ("#21") { 
			// 		correct ++;
			// 	}; 
			// 	if ("#31") { 
			// 		correct ++;
			// 	}; 
			// 	if ("#41") { 
			// 		correct ++;
			// 	};
			// 	if ("#51") { 
			// 		correct ++;
			// 	};
			// 	if ("#61") { 
			// 		correct ++;
			// 	};
			// 	if ("#71") { 
			// 		correct ++;
			// 	};				
			// 	if ("#81") { 
			// 		correct ++;
			// 	};
			// 	if ("#91") { 
			// 		correct ++;
			// 	};
			// 	if ("#2") {
			// 		incorrect ++;
			// 	};
			// 	if ("#12") {
			// 		incorrect ++;
			// 	};
			// 	if ("#22") {
			// 		incorrect ++;
			// 	};
			// 	if ("#32") {
			// 		incorrect ++;
			// 	};
			// 	if ("#42") {
			// 		incorrect ++;
			// 	};
			// 	if ("#52") {
			// 		incorrect ++;
			// 	};
			// 	if ("#62") {
			// 		incorrect ++;
			// 	};
			// 	if ("#72") {
			// 		incorrect ++;
			// 	};
			// 	if ("#82") {
			// 		incorrect ++;
			// 	};
			// 	if ("#92") {
			// 		incorrect ++;
			// 	};
			// }

			function right() {
				correct ++;
			}

			function wrong() {
				incorrect ++;
			}

			function show() {
				$("form").show();
			}

			function hide() {
				$("#instructions").hide();
			}

			function start() {
				hide();
		 		count = 60;
				counter = setInterval(decrement, 1000);
				function checkAnswers() {
					$("#1").on("click",right);
					$("#2").on("click",wrong);
					$("#11").on("click",right);
					$("#12").on("click",wrong);
					$("#21").on("click",right);
					$("#22").on("click",wrong);
					$("#31").on("click",right);
					$("#32").on("click",wrong);
					$("#41").on("click",right);
					$("#42").on("click",wrong);
					$("#51").on("click",right);
					$("#52").on("click",wrong);
					$("#61").on("click",right);
					$("#62").on("click",wrong);
					$("#71").on("click",right);
					$("#72").on("click",wrong);
					$("#81").on("click",right);
					$("#82").on("click",wrong);
					$("#91").on("click",right);
					$("#92").on("click",wrong);

				// 	$("#1").on("click",answer);
				// 	$("#2").on("click",answer);
	
				// };
				// 	$("#2").on("click",answer);
				// 	$("#11").on("click",answer);
				// 	$("#12").on("click",answer);
				// 	$("#21").on("click",answer);
				// 	$("#22").on("click",answer);
				// 	$("#31").on("click",answer);
				// 	$("#32").on("click",answer);
				// 	$("#41").on("click",answer);
				// 	$("#42").on("click",answer);
				// 	$("#51").on("click",answer);
				// 	$("#52").on("click",answer);
				// 	$("#61").on("click",answer);
				// 	$("#62").on("click",answer);
				// 	$("#71").on("click",answer);
				// 	$("#72").on("click",answer);
				// 	$("#81").on("click",answer);
				// 	$("#82").on("click",answer);
				// 	$("#91").on("click",answer);
				// 	$("#92").on("click",answer);
				// 	};

				checkAnswers();
			}
		}


		
		
		$(document).ready(function() {
			$("form").hide();
			initialize();	
		});

			
		</script>