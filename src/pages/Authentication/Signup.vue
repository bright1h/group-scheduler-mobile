<template>
    <f7-page>
        <f7-navbar title="Sign Up" color="red" back-link="Back"></f7-navbar>
        <f7-list form>
            <f7-list-item>
                <f7-icon if-ios="f7:person" if-md="material:person" slot="media"></f7-icon>
                <f7-label>Displayname</f7-label>
                <f7-input type="text" required validate v-bind:value="displayName" placeholder="Displayname" @input="displayName = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-icon if-ios="f7:email" if-md="material:email" slot="media"></f7-icon>
                <f7-label>E-mail</f7-label>
                <f7-input type="email" required validate v-bind:value="email" placeholder="E-mail" @input="email = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-icon if-ios="f7:lock" if-md="material:lock" slot="media"></f7-icon>
                <f7-label>Password</f7-label>
                <f7-input type="password" required validate v-bind:value="password" placeholder="Password" @input="password = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-icon if-ios="f7:check_round_fill" if-md="material:check_box" slot="media"></f7-icon>
                <f7-label>Confirm Password</f7-label>
                <f7-input type="password" v-bind:value="confirmpassword" placeholder="Confirm Password" @input="confirmpassword = $event.target.value"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-block>
            <f7-row>
                <f7-button class="col" color="red" @click.prevent="createUser" raised fill>Sign Up</f7-button>
            </f7-row>
        </f7-block >
    </f7-page>
</template>

<script>
export default {
    data(){
        return{
            alert : false,
            displayName : '',
            email : '',
            password : '',
            confirmpassword : '',
        }
    },
    methods: {
        cleanPassword(){
            this.password = ""
            this.confirmpassword = ""
            this.$store.commit('setError',null)
            this.alert = false
        },
        createUser(){
            if(this.confirmpassword === this.password){
                this.$store.dispatch('userSignUp',
                    {displayname : this.displayName, email : this.email, password : this.password})
            }else{
                const app = this.$f7
                this.cleanPassword()
                app.dialog.alert("The password and confirm is not the same")
            }
        },
        showErrorToast(){
            const self = this;
            const error = this.$store.getters.getError
            if(!self.toastBottom) {
                self.toastBottom = self.$f7.toast.create({
                    text : error,
                    closeTimeout : 3000,
                    closeButton : true,
                });
            }
            self.toastBottom.open();
        }
    },
    computed:{
            error() {
                return this.$store.state.error
            },
            loading() {
                return this.$store.state.loading
            }
        },
        watch: {
            error(value) {
                if (value){
                    this.showErrorToast()
                    this.cleanPassword()
                }
            },
            alert(value) {
                if (!value) {
                    this.$store.commit('setError',null)
                }
            }
    },
}
</script>
