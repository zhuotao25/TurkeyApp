/**
 * The source code is from "team.js" of IPA02 of CS326-Fall2015. Professor: Tim Richards. 
 * The code has been modified. 
 */

//////////////////////////////////////////////////////////////////////
// The team library //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * The `member` function creates a new team member.
 *
 * You should use this function to create new "team members". It is a
 * utility function that can be used in other library routines to
 * create new members. It is a useful technique to abstract the
 * creation of data from the actual data representation itself. In
 * this case a *member* is an object with four important properties:
 *
 * `user`: The username of the member. This should be the username
 * of the team member used to login to UMass Spire, Moodle, etc. You
 * will need to ask your fellow team members for their username.
 * `fname`: The first name of a team member.
 * `lname`: The last name of a team member.
 * `year`: Their current year of college (freshman, sophomore, junior, senior)
 *
 * We give you the implementation of this!
 *
 * @param  {string} user  the team member's username
 * @param  {string} fname the team member's first name
 * @param  {string} lname the team member's last name
 * @param  {string} year  the team member's year of college
 * @return {object} { user, fname, lname, year }
 */
function member(user, fname, lname, year, profile) {
	return {
		user: user,
		fname: fname,
		lname: lname,
		year: year,
		profile: profile
	};
}

var profile_z = 'My name is Zhuotao Huang. I am a junior at Umass Amherst and I am currently pursuing a B.S. in Computer Science with a secondary major in Economics. My primary role in our team is front-end. I will be focusing on the design of the web application. I will make sure that the data coming from the backend gets displayed on the browser and also make sure the users can easily navigates the web and access the data.';
var profile_c = 'My name is Che-Ting Lin. I’m a junior at UMass Amherst majoring in Computer Science. My primary focus in the team is quality assurance and the secondary focus is database. My summer internship had given me valuable lessons on QA part of web designing process. In the future, I will do intensive testing after every small/big updates of Glean and maintain a database that stores vast amount of data.';
var profile_e = '';
var profile_j = '';
var profile_r = 'Hello! My name is Ren. I’m a senior at Smith College studying Computer Science. You must be wondering why I’m taking a class at UMass. Simply, my college doesn’t provide a practical programming-intensive course in web programming - which is the type of engineering I’m interested in - and I’ve heard a lot of praise regarding Professor Tim Richards.  I’m particularly interested in the back-end as someone who loves to handle data. This is how I ended up as the back-end engineer for Glean. I’m also sometimes the manager for the team.I love the applications of CS - theory isn’t my jab although my favorite course is Algorithms - as someone who considers herself a craftswoman. I like building things and working with my hands. I used to play LEGOs all the times as a child; I took woodworking in high school; I’ve had experience in constructing fences; I’ve made stuffed animals out of felt and thread. I also love how CS can be applied to so many fields. There’s healthcare, biology, retail, genealogy, robotics, and, the one I’m most excited about, government!';
var profile_x = 'This is Xin. My last name is Liu. I am a senior computer sciences student at University of Massachusetts Amherst. In the Glean project, I play as a Back-end role. I would work as an assistant to help other members to build the Glean apps.I started to get in touch with web application my summer job. From the job, I got a professional and functional view of a website. I think that the web programming language should be one of the important skill in my future profession. Therefore,  I registered for this course.I learn CS in my high school junior year. It is one of the special elective in my high school. I followed my other classmates to pick this course in my course list. It was difficult to understand the coding language at first. Studying with a large group of classmates outside of school help me a lot to learn the code step-by-step. After that, I found that it was very interesting to apply my logic thinking to the computer code, and then a application came out as a visible product of my thought. Because of these, I choose the CS as my Bachelors Degrees Major.';

// This library contains an internal data structure for recording
// team members. It is an array of member objects. You should add an
// entry for each of your team members. You should use the `member`
// function to easily create a new member object.
var team = [
	member('zhuotao25', 'Zhuotao', 'Huang', 'junior', profile_z),
	member('chetinglin', 'Che-Ting', 'Lin', 'junior', profile_c),
	member('egendreau', 'Eric', 'Gendreau', 'junior', profile_e),
	member('JingLiu122', 'Jing', 'Liu', 'senior', profile_j),
	member('ralren', 'Ren', 'Delos Reyes', 'senior', profile_r),
	member('xliu3', 'Xin', 'Liu', 'senior', profile_x)
];

/**
 * `copy` makes a copy of a member object. This is useful as we do not
 * want to leak our internal member data structures outside of this
 * library. It must be used by the `find` function below to return
 * new/distinct copies of a member object.
 *
 * @param  {member object} member a member object
 * @return {member object}        a copy of member
 */
function copy(member1) {
	return new member(member1.user, member1.fname, member1.lname, member1.year, member1.profile);

}

/**
 * `copyAll` returns a copy of all team members in a new array. It
 * relies on your implementation of `copy` to do this.
 *
 * We give you this one!
 *
 * @param  {array} members an array of member objects
 * @return {array}         a copy of the array of member objects
 */
function copyAll(members) {
	var nmembers = [];
	members.forEach(m => {
		nmembers.push(copy(m));
	});
	return nmembers;
}

/**
 * The `result` function is another utility function used to return
 * a "result" object to the caller of this library. Again, a useful
 * technique is to abstract out the creation of an object from its
 * internal representation. In this case, we create a "result" object
 * with four important properties:
 *
 * `success`: this is a boolean indicating if the result is a
 * successful response. true if it is; false otherwise.
 * `message`: this is an informational message that is helpful to
 * the caller to understand the success or failure of the result.
 * `data`: this is the actual data that is returned. In our case the
 * data will always be an array of members.
 * `count`: this is the number of members in the result - this is
 * derived from the number of entries in `data`.
 *
 * @param  {boolean} success true if success; false otherwise
 * @param  {string}  message informational message
 * @param  {array} 	 data    array of members
 * @return {object}          result object
 */
function result(success, message, data) {
	return {
		success: success,
		message: message,
		data: data,
		count: data.length
	};
}

/**
 * `find` is used to lookup a member by their username. It returns
 * a member object if it is found or `null` if it is not.
 *
 * You need to implement this function. You should iterate over the
 * team array looking for the member with the correct username. If the
 * member is found you should return the member object. If it is not
 * found it should return `null`.
 *
 * Make sure you use `copy` to produce a copy of the member object if
 * one is found for the given `user`.
 *
 * @param  {string} user the member's username
 * @return {object}      the member object or `null` if not found
 */
function find(user) {
	// TODO
	var isFound = false;
	team.forEach(m =>{
		if(m.user==user){ 
			isFound = true;
			findMember=copy(m);
		}
	});
	if (isFound === false){
		return null;
	}
	else{
		return findMember;
	}
}

/**
 * `all` returns a result object containing all of the team members.
 * This function always returns `true` as it will always return an
 * array of all the members. Even if there are no members in the team
 * it will return `true` with an empty array. You should use the
 * `result` function to create a result object. The message to the
 * `result` function should be 'team members' (the unit tests will
 * test this).
 *
 * The array of team members returned should be a copy of the original
 * array of team members. `copyAll` is a useful function for this.
 *
 * @return {result object}  a result object
 */
function all() {
	return new result(true, 'team members', copyAll(team), team.length );
}

/**
 * `one` returns a result object containing the team member that was
 * found. This function should check to make sure that the argument
 * `user` passed to it is a string - remember, this is a dynamically
 * typed language so we need to do the type checking manually.
 *
 * If `user` is not a string you must return a result object
 * indicating failure, a useful message, and an empty array. Use the
 * `result` function to do this.
 *
 * Otherwise, you must use the `find` function to find the member. If
 * the member is not found, return a new result object
 * indicating failure, the message 'team member not found', and an
 * empty array.
 *
 * If the member is found, return a result object indicating success,
 * the message 'team member found', and an array containing the single
 * member.
 *
 * @param  {string} user    the username of a team member
 * @return {result object}  a result object
 */
function one(user) {
	// TODO

	if(typeof user === 'string'){
		var myResult = find(user);
		if(myResult===null){
			return new result(false, 'team member not found', [], 0);
		}
		else{
	
			var arr=[myResult];

			return new result(true, 'team member found', arr, 1);
		}
	}
	else{
		return new result(false, 'input is not a string', [], 0);
	}
}

// This exports public functions to the outside world.
exports.all = all;
exports.one = one;