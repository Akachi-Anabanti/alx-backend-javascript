export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		let condition = true;
		condition ? resolve("success") : reject("failure")
	})
}
