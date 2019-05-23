.form-all {
	font-size:14px;
	color:#000;
	font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, Tahoma, sans-serif;

	background-repeat: no-repeat;
}

.form-line {
	/* Don't conver these into shorthand */
	padding-top:12px;
	padding-bottom:12px;
	padding-left:36px;
	padding-right:36px;


	margin:6px 0;
	width:100%;

	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

.form-label-top,
.form-label-left,
.form-label-right {
	font-weight: bold;
	/*color:#555;*/
	margin-bottom: 9px;
}

.form-label-right {
	margin-right:0;
	padding-right:15px;
	box-sizing:border-box;
}

.form-textbox,
.form-textarea,
.form-captcha input {
	padding:3px;
	margin-left: 0;
	border:1px solid #ccc;
	font-size:1em; /*14px*/
	line-height:1.071em; /*15px*/

	-moz-box-shadow: 0 1px 2px #eee inset;
	-webkit-box-shadow: 0 1px 2px #eee inset;
	box-shadow: 0 1px 2px #eee inset;
}

.form-radio-other-input, .form-checkbox-other-input {

}

.form-spinner input {
	padding:3px !important;
}

.form-all .form-upload {
	border:none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
	box-shadow: none;
}

.form-sub-label {
	font-size:0.786em; /*11px*/
	margin-top:3px;
}

.form-dropdown {
	padding: 2px;
	font-size:0.857em;/*12px*/

}

.form-radio,
.form-checkbox {
	vertical-align: top;
	margin-top: 4px;
}

.form-radio-item label,
.form-checkbox-item label,
.form-grading-label {
	font-size:1em; /*14px*/
	color:#000;
}
.form-radio-item,
.form-checkbox-item {
	margin-top:0;
	margin-bottom: 6px;
}



/* HEADING FIELD
------------------------------*/

.form-header-group {
	background: transparent; /* For overriding */
	border: none; /* For overriding */
	padding: 24px 0;
	margin: 12px 36px 18px;
	border-bottom: 1px solid #e3e3e3;
	border-top: 1px solid #e3e3e3;
}

li:first-child .form-header-group,
.form-header-group + .form-header-group {
	border-top:0;
}

h1.form-header {
	font-size: 2.143em; /*30px*/
}

h2.form-header {
	font-size: 1.714em; /*24px*/
}

h3.form-header {
	font-size: 1.5em; /*21px*/
}

.form-header{
	color:#000;
}
.form-subHeader {
	border-top:none;
	font-size: 1.071em; /*15px*/
	line-height:1.5em;  /*21px*/
	font-style: normal;
	/*color:#555;*/
	margin:3px 0 0;
}



/* BUTTONS
------------------------------*/

.form-pagebreak-back,
.form-pagebreak-next,
.qq-upload-button,
.form-submit-button,
.form-submit-reset,
.form-submit-print {
	border:1px solid #ccc;
	padding:6px 12px;
	color:#666;
	text-shadow:0 1px #fff;
	cursor:pointer;

	-moz-border-radius: 3px 3px;
	-webkit-border-radius: 3px 3px;
	border-radius: 3px 3px;

	-moz-box-shadow: 0 1px #fff inset, 0 1px #ddd;
	-webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;
	box-shadow: 0 1px #fff inset, 0 1px #ddd;

	background: #f5f5f5; /* Old browsers */
	background: -moz-linear-gradient(top,  #f5f5f5 0%, #eeeeee 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f5f5f5), color-stop(100%,#eeeeee)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* IE10+ */
	background: linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#eeeeee',GradientType=0 ); /* IE6-9 */
}

.form-pagebreak-back:hover,
.form-pagebreak-next:hover,
.form-submit-button:hover,
.qq-upload-button:hover,
.form-submit-reset:hover,
.form-submit-print:hover {
	background: #ffffff;
	background: -moz-linear-gradient(top,  #ffffff 0%, #f5f5f5 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#f5f5f5));
	background: -webkit-linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	background: -o-linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	background: -ms-linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	background: linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f5f5f5',GradientType=0 );
}

.form-pagebreak-back:active,
.form-pagebreak-next:active,
.form-submit-button:active,
.qq-upload-button:active,
.form-submit-reset:active,
.form-submit-print:active {
	background: #eeeeee;
	background: -moz-linear-gradient(top,  #eeeeee 0%, #f5f5f5 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#eeeeee), color-stop(100%,#f5f5f5));
	background: -webkit-linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	background: -o-linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	background: -ms-linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	background: linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#f5f5f5',GradientType=0 );

	-moz-box-shadow: 0 1px #fff inset;
	-webkit-box-shadow: 0 1px #fff inset;
	box-shadow: 0 1px #fff inset;
}

.form-submit-button,
.form-submit-reset,
.form-submit-print {
	color:#333;
	font-size:1em; /*14px*/
	margin-top:12px;
	margin-bottom:12px;
}

.form-submit-reset,
.form-submit-print {
	font-size:0.857em; /*12px*/
	padding:4px 8px;
}

.form-submit-print img {
	margin:-4px 3px 0 -7px;
}

.qq-upload-button {
	padding:8px 0;

	-moz-border-radius: 6px 6px;
	-webkit-border-radius: 6px 6px;
	border-radius: 6px 6px;
}


/* Phone areaCode & Phone Number in the payment field
------------------------------*/
li:not([data-type="control_phone"]) input[data-component="areaCode"] {
	width: 30px;
}

li:not([data-type="control_phone"]) input[data-component="phone"] {
	width: 83px;
}


/* FORM-LINE ACTIVE
------------------------------*/


.form-line-active {
	background: #FFFBEA;
}

.form-line-active input:focus,
.form-line-active textarea:focus {
	border:1px solid #FFD300;

	-moz-box-shadow: 0 0 3px #FFF0AA;
	-webkit-box-shadow: 0 0 3px #FFF0AA;
	box-shadow: 0 0 3px #FFF0AA;
}



/* ERROR MESSAGES
------------------------------*/

.form-line-error {
	background: #fff4f4;
}

/* li.form-line-error input:not(#coupon-input),
li.form-line-error select,
li.form-line-error textarea,
li.form-line-error .form-validation-error {
	border:1px solid #FF4E5D;
	box-shadow: none;
	-moz-box-shadow: 0 0 3px #FF4E5D;
	-webkit-box-shadow: 0 0 3px #FF4E5D;
	box-shadow: 0 0 3px #FF4E5D;
} */

li.form-line-error .form-error-message {
	background:#FF4E5D;
	color:#fff;
	padding:9px 6px 9px 36px;
	/* margin-bottom:3px; */
	/* -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.3);
	-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.3);
	box-shadow: 0 1px 2px rgba(0,0,0,0.3); */
}

li.form-line-error .form-error-message img {
	position: absolute;
	margin-top: -10px;
	left: 8px; top: 49%;
	width: 20px; height: 20px;
}

li.form-line-error .form-error-message .form-error-arrow {
	border-bottom-color: #FF4E5D;
}

.form-error-arrow-inner {
	display: none;
}



/* SURVEY TOOLS
------------------------------*/

/*----- Matrix Field -----*/

.form-matrix-table {
	font-size:1em;
}

.form-matrix-row-headers,
.form-matrix-column-headers {
	font-size:0.786em; /*11px*/
	font-weight: normal;
	/*color:#444;*/
}

.form-scale-table th,
.form-scale-table td {
	padding:9px 6px;
}

.form-scale-table label {
	/*color:#666;*/
}

.form-grading-item {
    margin-bottom: 6px;
}

/*----- Form Collapse -----*/

.form-collapse-table {
	margin: 0 36px;
	border:1px solid #ccc;
	cursor:pointer;

	-moz-border-radius: 3px 3px;
	-webkit-border-radius: 3px 3px;
	border-radius: 3px 3px;

	-moz-box-shadow: 0 1px #fff inset, 0 1px #ddd;
	-webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;
	box-shadow: 0 1px #fff inset, 0 1px #ddd;

	background: #f5f5f5; /* Old browsers */
	background: -moz-linear-gradient(top,  #f5f5f5 0%, #eeeeee 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f5f5f5), color-stop(100%,#eeeeee)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* IE10+ */
	background: linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#eeeeee',GradientType=0 ); /* IE6-9 */
}

.form-collapse-table:hover {
	background: #ffffff;
	background: -moz-linear-gradient(top,  #ffffff 0%, #f5f5f5 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#f5f5f5));
	background: -webkit-linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	background: -o-linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	background: -ms-linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	background: linear-gradient(top,  #ffffff 0%,#f5f5f5 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f5f5f5',GradientType=0 );
}

.form-collapse-table:active {
	background: #eeeeee;
	background: -moz-linear-gradient(top,  #eeeeee 0%, #f5f5f5 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#eeeeee), color-stop(100%,#f5f5f5));
	background: -webkit-linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	background: -o-linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	background: -ms-linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	background: linear-gradient(top,  #eeeeee 0%,#f5f5f5 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#f5f5f5',GradientType=0 );

	-moz-box-shadow: 0 1px #fff inset;
	-webkit-box-shadow: 0 1px #fff inset;
	box-shadow: 0 1px #fff inset;
}

/*----- Page Break Field -----*/

.form-pagebreak {
	margin:0 36px;
	border-top:1px solid #e3e3e3;
	background:transparent;
	height: auto;
	overflow: hidden;
}

.form-pagebreak-back-container {
	padding:24px 3px 24px 0;
}

.form-pagebreak-next-container {
	padding:24px 0 24px 3px;
}

.form-pagebreak-next {
	margin-left: 0;
}



/* PAYMENT FIELDS
------------------------------*/

.form-product-item {
	padding:6px;
	overflow:hidden;
	margin: 0 0 9px;

	-moz-border-radius: 6px 6px;
	-webkit-border-radius: 6px 6px;
	border-radius: 6px 6px;

	width: 100%;
}

.hover-product-item:hover {
	background:none;
	-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#19969696,endColorstr=#19969696);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#19969696,endColorstr=#19969696);
	zoom: 1;
	background: rgba(150,150,150,0.1);
}

.form-product-item br + br {
	display: none;
}

.form-product-item img {
	display:block;
	position: static;
	margin: 0 12px 0 0;
	float:left;

	-moz-border-radius: 3px 3px;
	-webkit-border-radius: 3px 3px;
	border-radius: 3px 3px;
}

.form-product-item .form-sub-label-container {
	margin: 9px 15px 0 0;
}

.form-product-item .form-sub-label-container:last-of-type {
	margin: 9px 0 0 0;
}

.form-product-name {
	font-size: 15px;
}

.form-product-container {
	margin-bottom: 6px;
	display: inline;
	width: 94%;
	width: calc(100% - 20px);
}

#app .form-product-container {
	margin: 0 0 6px 4px;
}

.form-product-item .form-sub-label {
	display: inline;
	height: 25px;
	vertical-align: top;
	margin-right: 6px;
	line-height: 24px;
	font-size: 12px;
}

.form-product-item > .form-product-item-detail {
	position: static;
	float: left;
	width: 100%;
}

.form-product-item > img + .form-product-item-detail {
	position: static;
	float: left;
	width: 84%;
	width: calc(100% - 66px);
}

/*.form-product-item-detail {
	position: static;
	float: left;
	width: 84%;
	width: calc(100% - 66px);
}*/


.form-product-item label {
	/*color:#666;*/
}

.form-product-item .form-dropdown {
	/*padding:0;*/
	height: 25px;
}

.form-product-details {
	/*color:#333;*/
	font-size:0.857em; /*12px*/
}

.form-payment-total b > span > span > span,
.form-product-details b > span > span {
	margin-left: -3px;
}

.app .form-payment-total b > span > span > span,
.app .form-product-details b > span > span {
	margin-left: 0;
}

.app .form-product-details {
	margin-left: 5px;
}
/* Subscription */

.form-product-item .form-radio,
.form-product-item .form-checkbox {
	margin-right: 2px;
}



/* SHRINK & TO NEW LINE
------------------------------*/

.form-line-column {
    clear: none;
    float: left;
/*    white-space: nowrap;*/
    width: auto;
    max-width: 100%; /*ie-11 fix*/
}

.form-line-column-clear {
	clear:left;
	width:auto;
    max-width: 100%; /*ie-11 fix*/
}

/*.form-line[data-type=control_text] {
	overflow: hidden;
}*/





/* ------------- */
/* MEDIA QUERIES */
/* ------------- */
@media screen and (max-width: 480px),
			 screen and (max-device-width: 768px) and (orientation: portrait),
			 screen and (max-device-width: 415px) and (orientation: landscape) {

	/* User defined amount width */
	input[id*="_donation"] {
            width: 25% !important;
	}
        th.form-matrix-column-headers {
            min-width: 75px;
        }
}