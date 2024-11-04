function skillsMember() {
    return {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JavaScript'],
        showSkills: function() {
            // this refers to the member object
            this.skills.forEach(skill => console.log(`${this.name} knows ${skill}`));
        }
    };
}