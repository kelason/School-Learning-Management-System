<template>
    <v-app id="inspire">
        <v-row
            no-gutters
        >
            <v-col
                cols="12"
                sm="6"
                md="7"
                class="primary lighten-1 hidden-xs-only"
            >
                <v-container
                    fill-height
                    fluid
                >
                    <v-row 
                        class="text-sm-center" 
                        align="center" 
                        justify="center"
                        no-gutters
                    >
                        <v-col>
                            
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col
                cols="12"
                xs="12"
                sm="6"
                md="5"
            >
                <v-container
                    fill-height
                    fluid
                >
                    <v-row 
                        class="px-16" 
                        align="center" 
                        justify="center"
                        no-gutters
                    >
                        <v-col>
                            <p class="baloo text-h4 mb-5">Sign In</p>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="login_details.email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    v-model="login_details.password"
                                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[passwordRules.required, passwordRules.min]"
                                    :type="showPass ? 'text' : 'password'"
                                    label="Password"
                                    hint="At least 8 characters"
                                    class="input-group--focused"
                                    @click:append="showPass = !showPass"
                                    outlined
                                    required
                                ></v-text-field>
                                <v-btn
                                    block
                                    color="primary"
                                    x-large
                                    :loading="loading"
                                    :disabled="!valid"
                                    @click="validate"
                                >
                                    Sign In
                                </v-btn>
                                <p class="text-subtitle-1 mt-3"><v-icon>mdi-keyboard-backspace</v-icon> <router-link to="/" class="text-decoration-none">Go Back</router-link> </p>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            showPass: false,
            login_details: {
                email: '',
                password: '',
            },
            emailRules: [],
            passwordRules: {
                required: '',
                min: '',
                emailMatch: '',
            },
            loader: null,
            loading: false,
        }
    },
    watch: {
    },
    created() {
        this.$store.commit('SET_LAYOUT', 'no-layout')
    },
    methods: {
        validateEmail() {
            return this.emailRules = [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ];
        },
        validatePassword() {
            return this.passwordRules = {
                required: value => !!value || 'Password Required.',
                min: value => value.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            };
        },
        validate () {
            var app = this;
            app.validateEmail();
            app.validatePassword();
            app.$refs.form.validate();
        },
    }
}
</script>