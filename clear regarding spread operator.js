<script>
	let array1 = [5, 6, 7];
	let array2 = [8, 9, 10];

	// Using concat() method.....
	let concatenatedArray = array1.concat(array2);
	console.log(concatenatedArray);

	// Using spread (...) operator......
	let newArray = [...array1, ...array2];
	console.log(newArray);
</script>
