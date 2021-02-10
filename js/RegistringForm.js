export const RegistringForm = {
    data() {
        return {
            name: '',
            mail: '',
            phone: '',
            language: '',
            userif: false,
            showLangList: false,
            languages: ['Россия', 'США', 'Китай', 'Индия']
        }
    },
    methods: {
        changeLang(lang) {
            this.language = lang;
            this.showLangList = false;
        }
    },
    computed: {
        valideName() {
            return (/^(\D)+$/i).test(this.name);
        },
        validePhone() {
            return (/^\+?\d\(?[\d]{3}\)?[\d]{3}\-?[\d]{4}$/i).test(this.phone);
        },
        valideMail() {
            return (/^[\w]{1}[\w\.\-]+@[\w]+\.[a-z]{2,4}$/i).test(this.mail);
        },
        allIFieldsValid() {
            return this.userif && this.valideName && this.validePhone && this.valideMail && this.language;
        }
    },
    template: `<form action="#" method='POST' class="reg-form">
                <h2 class="reg-form_title">Регистрация</h2>
                <p class="reg-form_text">Уже есть аккаунт?
                    <a href='#' class="reg-form_link">Войти</a>
                </p>

                <label for="username" class="reg-form_label">Имя</label>
                <input class='reg-form_input' id="username" required="required" type="text" v-model="name"
                    placeholder="Введите Ваше имя" />
                <p :class="valideName?'valide':'invalide'">Введено не корректное значение</p>

                <label for="usermail" class="reg-form_label">Еmail</label>
                <input class='reg-form_input' id="usermail" required="required" type="mail"
                    placeholder="Введите ваш email" v-model="mail"/>
                <p :class="valideMail?'valide':'invalide'">Введено не корректное значение</p>


                <label for="userphone" class="reg-form_label">Номер телефона</label>
                <input class='reg-form_input' id="userphone" required="required" type="phone"
                    placeholder="Введите номер телефона" v-model="phone"/>
                <p :class="validePhone?'valide':'invalide'">Введено не корректное значение</p>

                <label for="lang" class="reg-form_label">Язык</label>
                <div class="lang_wraper">
                    <input class='reg-form_input lang_input' :data-state="showLangList" id="lang" readonly required="required" v-model="language"
                        type="lang" placeholder="Язык" @click="this.showLangList = !this.showLangList"/>

                    <div v-show='showLangList' class="lang_input_content">
                        <div
                            v-for="item in languages"
                            v-bind:key="item">
                            <input :id=item class="_select_input" type="radio" :name=item />
                            <label :for=item class="_select_label" @click="changeLang(item)">{{item}}</label>
                        </div>
                    </div>

                </div>

                <input class='reg-form_input-cb' id="userif" type="checkbox" v-model="userif"/>
                <label for="userif" class="reg-form_label reg-form_userif">
                    Принимаю
                    <a href='#' class='reg-form_link'>условия</a>
                    использования
                </label>

                <button :disabled=!allIFieldsValid class="reg-form_btn">Зарегистрироваться</button>

            </form>`
};