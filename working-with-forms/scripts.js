
members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {

            }
        }
    },

    methods: {
        addMember: function() {
            if (!(this.newMember.instrument && this.newMember.fname && this.newMember.lname)) {
                alert("All fields must be filled")
            } else {
                this.members.push(this.newMember);
                this.newMember = {};
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
