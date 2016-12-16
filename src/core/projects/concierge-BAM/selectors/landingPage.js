/**
 * Created by afeldmeyer on 10/28/16.
 */

module.exports = {
    helpers:{
      // Header
      img_headerLogo:       '//a[@class="app-header_logo"]',
      btn_back:             '//a[@class="btn-back"]',
      btn_cart:             '//a[@class="shopping-bag"]',
      txt_companyNews:      '//div[@h3="Company News"]',

      // Nav Menu
      btn_avatar:           '//div[@class="app-menu_avatar"]',
      txt_storeNum:         '//div[@class="app-store_number"]',

      // Company News
      txt_companyNewsPanel: '//div[@class="company-news-panel"]',

      // Top Products
      txt_bestSellingItems: '//div[@class="top-products-panel"]',

      // Social Media
      txt_socialMedia:      '//div[@class="social-panel"]',

      // Launch Pad
      txt_launchPad:        '//div[@class="launch-pad-links-panel"]',
      img_vmWiki:           '//a[@data-track-clickthrough="VM Wiki"]',
      url_vmWiki:           '//a[@href="http://opswiki.booksamillion.com/index.php?title=Visual_Merchandising&store=180"]',
      img_ppWiki:           '//a[@data-track-clickthrough="P&P Wiki"]',
      url_ppWiki:           '//a[@href="http://policywiki.booksamillion.com/index.php?title=Policies_and_Procedures"]',
      img_jmWiki:           '//a[@data-track-clickthrough="Joe Muggs Wiki"]',
      url_jmWiki:           '//a[@href="http://joemuggswiki.booksamillion.com/index.php?title=Main_Page"]',
      img_ymWiki:           '//a[@data-track-clickthrough="YM Wiki"]',
      url_ymWiki:           '//a[@href="http://yogurtwiki.booksamillion.com/index.php?title=Main_Page"]',

      // Store Resources
      txt_storeResources:   '//div[@class="store-resource-panel"]',
      btn_financePortal:    '//a[@data-track-clickthrough="Finance Portal"]',
      lnk_financePortal:    '//a[@href="http://iisfinance.booksamillion.com/finance/finance.asp?abandon=1"]',
      btn_mccSearch:        '//a[@data-track-clickthrough="MCC Search"]',
      lnk_mccSearch:        '//a[@href="/mcc"]',
      btn_customerOrder:    '//a[@data-track-clickthrough="Customer Order Search"]',
      lnk_customerOrder:    '//a[@href="/order"]',
      btn_timeClock:        '//a[@data-track-clickthrough="Time Clock Managment"]',
      lnk_timeClock:        '//a[@href="http://iisfinance.booksamillion.com/timeclock/tc_mgrmenu.asp"]',
      btn_reportingFolders: '//a[@data-track-clickthrough="Reporting Folders"]',
      lnk_reportingFolders: '//a[@href="http://policywiki.booksamillion.com/index.php?title=Reporting_Folders"]',
      btn_requestTracker:   '//a[@data-track-clickthrough="Request  Tracker"]',
      lnk_requestTracker:   '//a[@href="http://rt.booksamillion.com/ "]',
      btn_dsiSupplies:      '//a[@data-track-clickthrough="DSI Supplies"]',
      lnk_dsiSupplies:      '//a[@href="https://dsiresources.com/"]',
      btn_ups:              '//a[@data-track-clickthrough="UPS Campus Ship"]',
      lnk_ups:              '//a[@href="https://www.campusship.ups.com/login?reasonCode=-1"]',
      btn_debitMS:          '//a[@data-track-clickthrough="Debit Management System"]',
      lnk_debitMS:          '//a[@href="http://bamwlan180.ddns.netcentral.net/cgi-bin/nsdebit"]',
      btn_orderQuote:       '//a[@data-track-clickthrough="Order Quote Tool"]',
      lnk_orderQuote:       '//a[@href="http://www.booksamillion.com/b2b_quote?id=6547045818888"]',
      btn_fastlane:         '//a[@data-track-clickthrough="FastLane Voucher Search"]',
      lnk_fastlane:         '//a[@href="/fastlane"]',
      btn_webquiz:          '//a[@data-track-clickthrough="Webquiz Survey Link"]',
      lnk_webquiz:          '//a[@href="http://quiz.booksamillion.com/quizzes/survey_menu.html"]',
      btn_yomoSupply:       '//a[@data-track-clickthrough="YOMO Supply Order"]',
      lnk_yomoSupply:       '//a[@href="http://opswiki.booksamillion.com/index.php?title=Order_YoMo_Supplies"]',
      btn_cafeSupply:       '//a[@data-track-clickthrough="Cafe Supply Order"]',
      lnk_cafeSupply:       '//a[@href="http://opswiki.booksamillion.com/index.php?title=Cafe_Order_Websites"]',
      btn_saveBAM:          '//a[@data-track-clickthrough="Save@BAM"]',
      lnk_saveBAM:          '//a[@href="#"]',

      // Associate Resources
      txt_associateResources:   '//div[@class="associate-resource-panel"]',
      btn_associateFeedback:    '//a[@data-track-clickthrough="Associate Feedback Survey"]',
      lnk_associateFeedback:    '//a[@href="https://www.surveymonkey.com/r/?sm=VvND08aU%2ffQ4m0WJQye4vQ%3d%3d "]',
      btn_associateMagCenter:   '//a[@data-track-clickthrough="Associate Magazine Center"]',
      lnk_associateMagCenter:   '//a[@href="href="http://www.partnernewsstand.timeinc.com/storefront/"]',
      btn_associateSelfServe:   '//a[@data-track-clickthrough="Associate Self Service"]',
      lnk_associateSelfServe:   '//a[@href="http://opswiki.booksamillion.com/index.php?title=Welcome_to_Lawson_Employee_Self_Service"]',
      btn_bamUniversity:        '//a[@data-track-clickthrough="BAM! University"]',
      lnk_bamUniversity:        '//a[@href="http://bamcorp.booksamillion.com/index.php/bam-university/"]',
      btn_bamStore:             '//a[@data-track-clickthrough="BAM! Company Store"]',
      lnk_bamStore:             '//a[@href="https://dsiresources.com/Productlist.aspx"]',
      btn_brightIdeas:          '//a[@data-track-clickthrough="Bright Ideas"]',
      lnk_brightIdeas:          '//a[@href="https://www.surveymonkey.com/r/BAMBrightIdeas"]',
      btn_exitSurvey:           '//a[@data-track-clickthrough="Exit Survey"]',
      lnk_exitSurvey:           '//a[@href="https://www.surveymonkey.com/r/T7FQGVW"]',

      // Reports Panel
      txt_reports:   '//div[@class="reports-panel"]',


      // Right Panel
      txt_rightPanel:   '//div[@class="home-page_toolbar"]',


      // Logout Modal
      btn_logout_cancel:    '//button[@class="btn close"]',
      btn_logout:           '//button[@class="btn log-out"]',

    },

}
