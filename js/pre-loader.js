window.addEventListener("load", function () {
	document.getElementById("loader").style.display = "none";
	document.getElementById("box").style.display = "block";
});
const testimonials = [
	{
		name: "Eva Sawyer",
		job: "CEO, Fashworks",
		image: "https://i.postimg.cc/gJDkZrNn/profile-image-1.png",
		testimonial:
			"A breakthrough technology! Highly innovative and advanced. Great catalyst for boosting productivity exponentially, especially for students. Moreover, it's easy to use."
	},
	{
		name: "Katey Topaz",
		job: "Developer, TechCrew",
		image: "https://i.postimg.cc/8kZzkJ7Y/profile-image-2.png",
		testimonial:
			"Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries. It has made the GPT functionalities quite handy"
	},
	{
		name: "Jae Robin",
		job: "UI Designer, Affinity Agency",
		image: "https://i.postimg.cc/90gmLK32/profile-image-3.png",
		testimonial:
			"Kursor is an amazing AI tool that can supercharge your productivity and make content creation a breeze."
	},
	{
		name: "Nicola Blakely",
		job: "CEO,Zeal Wheels",
		image: "https://i.postimg.cc/6qp6Lwmz/profile-image-4.png",
		testimonial:
			"Really good feature , I love how I can easily use chatgpt in my day to day life with the help of this"
	}
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
	i = (j + i + 1) % j;
	displayTestimonial();
}

function prev() {
	i = (j + i - 1) % j;
	displayTestimonial();
}
let displayTestimonial = () => {
	testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
         <img src=${testimonials[i].image}></img>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;
