<template>
    <v-app id="inspire">
        <v-row
            no-gutters
        >
            <v-col
                cols="12"
                sm="12"
                md="6"
                lg="7"
                class="hidden-xs-only"
            >
                <v-container
                    fill-height
                    fluid
                    class="svg__bg"
                >
                    <v-row 
                        class="text-sm-center" 
                        align="center" 
                        justify="center"
                        no-gutters
                    >
                        <v-col>
                            <h1 class="white--text display-3 font-weight-black">Welcome to E-learning</h1>
                            <p class="grey--text text--lighten-4 headline mt-3 font-weight-black">Sign up to have access to the platform.</p>
                            <div class="student__bg"></div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col
                cols="12"
                xs="12"
                sm="12"
                md="6"
                lg="5"
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
                            <p class="baloo text-h4 mb-5">Sign Up as Student</p>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="register.email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    v-model="register.password"
                                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPass ? 'text' : 'password'"
                                    label="Password"
                                    class="input-group--focused"
                                    @click:append="showPass = !showPass"
                                    outlined
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="register.confirm_password"
                                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[passwordRules.required, passwordRules.min]"
                                    :type="showPass ? 'text' : 'password'"
                                    label="Confirm Password"
                                    hint="At least 8 characters"
                                    class="input-group--focused"
                                    @click:append="showPass = !showPass"
                                    outlined
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="register.student_code"
                                    :rules="[codeRules.required, codeRules.min]"
                                    label="Code"
                                    hint="Enter the access code provided by your instructor"
                                    required
                                    outlined
                                ></v-text-field>
                                <v-btn
                                    block
                                    class="purple white--text"
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
            register: {
                email: '',
                password: '',
                confirm_password: '',
                student_code: '',
            },
            passwordRules: {
                required: true,
                min: true,
                emailMatch: true,
            },
            emailRules: [],
            codeRules: {
                required: true,
                min: true
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
        validateCode() {
            return this.codeRules = {
                required: value => !!value || 'Password Required.',
                min: value => value.length >= 8 || 'Min 8 characters'
            };
        },
        validate () {
            var app = this;
            app.validateEmail();
            app.validateCode();
            app.validatePassword();
            app.$refs.form.validate();
        },
    }
}
</script>