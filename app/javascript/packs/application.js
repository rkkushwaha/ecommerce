// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import $ from 'jquery';
global.$ = jQuery

import "./plugins/jquery-2.2.4.min.js"
import "./plugins/jquery.ajaxchimp.min"
import "./plugins/jquery.nice-select.min"
import "./plugins/jquery.sticky"
import "./plugins/nouislider.min"
import "./plugins/countdown"
import "./plugins/jquery.magnific-popup.min"
import "./plugins/owl.carousel.min"
import "./plugins/gmaps.min"
import "./plugins/main"