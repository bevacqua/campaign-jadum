var jade = require("jadum/runtime");
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (css, styles, preview, generated, _header, body, trapped, social) {
css = ['#outlook a{padding:0;} .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} img{-ms-interpolation-mode:bicubic;} body{margin:0; padding:0;} img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;} table{border-collapse:collapse !important;} body, .layout-table, .layout-td{height:100% !important; margin:0; padding:0; width:100% !important;} .layout-td{padding:20px;} .layout-inside{width:600px;} h1, h2, h3, h4 { color: ' + styles.headerColor + ' !important; font-family: ' + styles.fontFamily + '; font-style: normal; font-weight: bold; line-height: 100%; letter-spacing: normal; display: block; margin-top: 0; margin-right: 0; margin-bottom: 10px; margin-left: 0; text-align: left; } h1 { font-size:26px; } h2 { font-size:20px; } h3 { font-size:16px; } h4 { font-size:14px; } a:link, a:visited, a .yshortcuts { color: ' + styles.linkColor + '; font-weight: bold; text-decoration:none; } a:hover, a .yshortcuts:hover { text-decoration:underline; } img { max-width: 100%; border: none; } blockquote { border-left: 6px solid ' + styles.quoteBorderColor + '; padding-left: 15px; margin-left: 0; } code { font-family: ' + styles.codeFontFamily + '; } body, .layout-table { background-color: ' + styles.layoutBackgroundColor + '; } .layout-td { border-top: 4px solid ' + styles.horizontalBorderColor + '; } .layout-header { border-bottom: 1px solid #cccccc; } .layout-header-content { color: ' + styles.layoutTextColor + '; font-family: ' + styles.fontFamily + '; font-size: 11px; line-height: 125%; text-align: left; padding-top: 10px; padding-right: 20px; padding-bottom: 10px; padding-left: 20px; } .layout-footer {   border-top:1px solid #ffffff; } .layout-footer-item { color:' + styles.layoutTextColor + '; font-family:' + styles.fontFamily + '; font-size:10px; line-height:150%; padding-top:20px; padding-right:20px; padding-bottom:20px; padding-left:20px; text-align:right; } .body-header-wrapper { background-color: ' + styles.footerBackgroundColor + '; } .body-header-image-table {   border-top:1px solid #ffffff; } .body-header-image-td { color: ' + styles.bodyTextColor + '; font-family: ' + styles.fontFamily + '; font-size: 20px; font-weight: bold; line-height: 100%; padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; text-align: left; vertical-align: middle; } .body-header-image { height: auto; width: 100%; } .body-container { background-color: ' + styles.bodyBackgroundColor + '; border-bottom: 1px solid ' + styles.horizontalBorderColor + '; } .body-content { color: ' + styles.bodyTextColor + '; font-family: ' + styles.fontFamily + '; font-size: 14px; line-height: 150%; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; text-align: left; } .body-content img { display: inline; height: auto; max-width: 560px; } @media only screen and (max-width: 480px) { body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} body{width:100% !important; min-width:100% !important;}  .layout-td { padding:10px !important; } .layout-inside { max-width: 460px !important; width: 100% !important; } h1 { font-size: 24px !important; line-height: 100% !important; } h2 { font-size: 20px !important; line-height: 100% !important; } h3 { font-size: 18px !important; line-height: 100% !important; } h4 { font-size: 16px !important; line-height: 100% !important; } .layout-header { display: none !important; } .layout-footer-item { font-size: 14px !important; line-height: 115% !important; } .layout-footer-item a { display: block !important; } .body-header-image-td { font-size: 20px !important; line-height: 125% !important; } .body-content { font-size: 18px !important; line-height: 125% !important; } }'].join('\n');
buf.push("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/><title>" + (jade.escape(null == (jade_interp = preview) ? "" : jade_interp)) + "</title><style type=\"text/css\"><" + (css) + "></" + (css) + "></style></head><body leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\" itemscope=\"itemscope\" itemtype=\"http://schema.org/EmailMessage\"><meta itemprop=\"description\"" + (jade.attr("content", preview, true, false)) + "/><center><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\" width=\"100%\" class=\"layout-table\"><tr><td align=\"center\" valign=\"top\" class=\"layout-td\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"layout-inside\"><tr><td align=\"center\" valign=\"top\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"layout-header\"><tr><td valign=\"top\" class=\"layout-header-content\">" + (jade.escape(null == (jade_interp = preview) ? "" : jade_interp)) + "</td><td valign=\"top\" style=\"padding-left:0; text-align:right;\" width=\"180\" class=\"layout-header-content\">" + (jade.escape(null == (jade_interp = 'sent ' + generated) ? "" : jade_interp)) + "</td></tr></table></td></tr><tr><td align=\"center\" valign=\"top\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"body-header-wrapper\"><tr><td align=\"center\" valign=\"top\">");
if ( _header)
{
buf.push("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"body-header-image-table\"><tr><td valign=\"top\" class=\"body-header-image-td\"><img src=\"cid:_header\" style=\"max-width:600px;\" alt=\"\" class=\"body-header-image\"/></td></tr></table>");
}
buf.push("</td></tr><tr><td align=\"center\" valign=\"top\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"body-container\"><tr><td valign=\"top\" class=\"body-content\"><div>" + (null == (jade_interp = body) ? "" : jade_interp) + "</div>");
if ( trapped)
{
buf.push("<div" + (jade.attr("style", 'margin-top: 20px; padding: 10px; border: 3px solid ' + styles.headerColor + '; background-color: #ffd2d2; color: #384c53;', true, false)) + "><div><b>Recipients</b></div><pre><code>" + (jade.escape(null == (jade_interp = trapped) ? "" : jade_interp)) + "</code></pre></div>");
}
buf.push("</td></tr></table></td></tr><tr><td align=\"center\" valign=\"top\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"layout-footer\"><tr><td valign=\"top\" style=\"text-align: left;\" class=\"layout-footer-item\">*|HTML:unsubscribe_html|*</td><td valign=\"top\" class=\"layout-footer-item\">");
if ( social.twitter.url)
{
buf.push("<a" + (jade.attr("href", social.twitter.url, false, false)) + ">" + (jade.escape(null == (jade_interp = social.twitter.handle + ' on Twitter') ? "" : jade_interp)) + "</a><span>&nbsp;&nbsp;&nbsp;</span>");
}
if ( social.landing.url)
{
buf.push("<a" + (jade.attr("href", social.landing.url, false, false)) + ">" + (jade.escape(null == (jade_interp = 'Visit ' + social.landing.name) ? "" : jade_interp)) + "</a>");
}
buf.push("</td></tr></table></td></tr></table></td></tr></table></td></tr></table></center></body></html>");}.call(this,"css" in locals_for_with?locals_for_with.css:typeof css!=="undefined"?css:undefined,"styles" in locals_for_with?locals_for_with.styles:typeof styles!=="undefined"?styles:undefined,"preview" in locals_for_with?locals_for_with.preview:typeof preview!=="undefined"?preview:undefined,"generated" in locals_for_with?locals_for_with.generated:typeof generated!=="undefined"?generated:undefined,"_header" in locals_for_with?locals_for_with._header:typeof _header!=="undefined"?_header:undefined,"body" in locals_for_with?locals_for_with.body:typeof body!=="undefined"?body:undefined,"trapped" in locals_for_with?locals_for_with.trapped:typeof trapped!=="undefined"?trapped:undefined,"social" in locals_for_with?locals_for_with.social:typeof social!=="undefined"?social:undefined));;return buf.join("");
}