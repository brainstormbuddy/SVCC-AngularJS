(function () {
    'use strict';

    //  this is nasty because it forces the user to download a big js file every time the page is loaded (assuming not cached)
    angular.module('svccApp').service('sessionDataModelUrlService', function speakerDataModelService() {


        // http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock
        // from http://plnkr.co/edit/arsvfe?p=info

        this.getData = function () {
            if (!this.hasData()) {
                return {};
            }
            return this.data;
        };

        this.setData = function (data) {
            this.data = data;
        };


        this.findOne = function (presenterId,urlPostToken) {
            //debugger;
            if (!this.hasData()) {
                return {};
            }
            var found = -1;
            var ii;
            for (ii=0;ii<this.data.length;ii++) {
               if (this.data[ii].urlPostToken === urlPostToken && this.data[ii].id === presenterId) {
                   found = ii;
                   break;
               }
            }
            return found >= 0 ? this.data[found].urlPostToken : {};
        };

        this.findAll = function () {
            return this.getData();
        };

        this.initDummyData = function() {
            this.data =
                [
                    {
                        "sessionId": 3,
                        "sessionUrl": "2008/an-introduction-to-comet-and-bayeux-pushing-data-to-the-browser"
                    },
                    {
                        "sessionId": 5,
                        "sessionUrl": "2008/java2d-and-groovy-a-perfect-match"
                    },
                    {
                        "sessionId": 6,
                        "sessionUrl": "2008/boosting-your-testing-productivity-with-groovy"
                    },
                    {
                        "sessionId": 7,
                        "sessionUrl": "2008/building-rich-applications-with-groovys-swingbuilder"
                    },
                    {
                        "sessionId": 11,
                        "sessionUrl": "2008/data-mining-for-net-developers"
                    },
                    {
                        "sessionId": 12,
                        "sessionUrl": "2008/javascript-the-good-parts-part-1"
                    },
                    {
                        "sessionId": 13,
                        "sessionUrl": "2008/silverlight-20-it-just-keeps-getting-better"
                    },
                    {
                        "sessionId": 14,
                        "sessionUrl": "2008/when-browsers-behave-badly---part-one"
                    },
                    {
                        "sessionId": 15,
                        "sessionUrl": "2008/when-browsers-behave-badly---part-two"
                    },
                    {
                        "sessionId": 16,
                        "sessionUrl": "2008/creating-cmdlets-for-powershell"
                    },
                    {
                        "sessionId": 17,
                        "sessionUrl": "2008/everything-developers-need-to-know-about-active-directory"
                    },
                    {
                        "sessionId": 18,
                        "sessionUrl": "2008/component-based-java-web-development-with-apache-wicket"
                    },
                    {
                        "sessionId": 20,
                        "sessionUrl": "2008/ui-design-fundamentals"
                    },
                    {
                        "sessionId": 21,
                        "sessionUrl": "2008/conquering-xml-with-linq-in-visual-basic-9"
                    },
                    {
                        "sessionId": 22,
                        "sessionUrl": "2008/linq-to-everything"
                    },
                    {
                        "sessionId": 23,
                        "sessionUrl": "2008/taking-advantage-of-linq-and-open-xml-in-office-2007"
                    },
                    {
                        "sessionId": 25,
                        "sessionUrl": "2008/introduction-to-grails"
                    },
                    {
                        "sessionId": 26,
                        "sessionUrl": "2008/lightning-talks---day-one"
                    },
                    {
                        "sessionId": 27,
                        "sessionUrl": "2008/lightning-talks---day-two"
                    },
                    {
                        "sessionId": 28,
                        "sessionUrl": "2008/quercus---php-on-java"
                    },
                    {
                        "sessionId": 29,
                        "sessionUrl": "2008/bam-and-the-interactive-web"
                    },
                    {
                        "sessionId": 30,
                        "sessionUrl": "2008/facebook-application-in-silverlight-20"
                    },
                    {
                        "sessionId": 32,
                        "sessionUrl": "2008/rails-powered-by-glassfish"
                    },
                    {
                        "sessionId": 34,
                        "sessionUrl": "2008/test-driven-development-an-intro-for-c-developers"
                    },
                    {
                        "sessionId": 35,
                        "sessionUrl": "2008/office-development-who-would-want-to-do-that"
                    },
                    {
                        "sessionId": 37,
                        "sessionUrl": "2008/developing-for-live-mesh"
                    },
                    {
                        "sessionId": 38,
                        "sessionUrl": "2008/easing-into-agile"
                    },
                    {
                        "sessionId": 39,
                        "sessionUrl": "2008/building-better-tests-in-java"
                    },
                    {
                        "sessionId": 40,
                        "sessionUrl": "2008/clustered-architecture-patterns-delivering-scalability-and-availability-wit"
                    },
                    {
                        "sessionId": 41,
                        "sessionUrl": "2008/hackathon-4-kids-hands-on-with-the-google-map-part-i"
                    },
                    {
                        "sessionId": 42,
                        "sessionUrl": "2008/wcf-debugging---where-do-i-start"
                    },
                    {
                        "sessionId": 43,
                        "sessionUrl": "2008/7-best-features-of-wpf-35-sp1"
                    },
                    {
                        "sessionId": 44,
                        "sessionUrl": "2008/gui-testing-made-easy"
                    },
                    {
                        "sessionId": 45,
                        "sessionUrl": "2008/business-rule-management-system-for-net"
                    },
                    {
                        "sessionId": 46,
                        "sessionUrl": "2008/gridgain---java-grid-computing-made-simple"
                    },
                    {
                        "sessionId": 47,
                        "sessionUrl": "2008/whats-wrong-with-jsf-and-how-to-solve-it"
                    },
                    {
                        "sessionId": 48,
                        "sessionUrl": "2008/teaching-kids-programming-with-scratch-alice-and-python"
                    },
                    {
                        "sessionId": 49,
                        "sessionUrl": "2008/testing-for-the-web"
                    },
                    {
                        "sessionId": 50,
                        "sessionUrl": "2008/introducing-the-scala-programming-language"
                    },
                    {
                        "sessionId": 51,
                        "sessionUrl": "2008/the-feel-of-scala"
                    },
                    {
                        "sessionId": 52,
                        "sessionUrl": "2008/the-multi-component-kernel-of-jbossas-5"
                    },
                    {
                        "sessionId": 53,
                        "sessionUrl": "2008/linq-and-wpf-inergration-overviewsoftware-services-stragegy"
                    },
                    {
                        "sessionId": 55,
                        "sessionUrl": "2008/lift-a-simply-functional-web-framework"
                    },
                    {
                        "sessionId": 56,
                        "sessionUrl": "2008/scala-tips-and-tricks"
                    },
                    {
                        "sessionId": 57,
                        "sessionUrl": "2008/building-enterprise-server-side-rias-rich-internet-applications-with-blazed"
                    },
                    {
                        "sessionId": 58,
                        "sessionUrl": "2008/metro-hello-world-to-net-35-interoperable-web-service"
                    },
                    {
                        "sessionId": 60,
                        "sessionUrl": "2008/introduction-to-building-ria-with-adobe-flex-and-air"
                    },
                    {
                        "sessionId": 61,
                        "sessionUrl": "2008/glassfish-on-a-mission-to-please-developers"
                    },
                    {
                        "sessionId": 62,
                        "sessionUrl": "2008/best-practices-for-scaling-java-applications-with-distributed-caching"
                    },
                    {
                        "sessionId": 63,
                        "sessionUrl": "2008/discovering-software-trade-secret-theft"
                    },
                    {
                        "sessionId": 64,
                        "sessionUrl": "2008/what-is-python"
                    },
                    {
                        "sessionId": 65,
                        "sessionUrl": "2008/programming-microsoft-office-using-python"
                    },
                    {
                        "sessionId": 66,
                        "sessionUrl": "2008/best-kept-secrets-in-visual-studio-2008-and-net-35"
                    },
                    {
                        "sessionId": 67,
                        "sessionUrl": "2008/generics-anonymous-methods-and-lambda-expressions"
                    },
                    {
                        "sessionId": 68,
                        "sessionUrl": "2008/building-rich-web-applications-using-jmaki"
                    },
                    {
                        "sessionId": 69,
                        "sessionUrl": "2008/gallio-crafting-a-toolchain"
                    },
                    {
                        "sessionId": 73,
                        "sessionUrl": "2008/building-interoperabile-and-scalable-php-applications"
                    },
                    {
                        "sessionId": 74,
                        "sessionUrl": "2008/deme-now-a-modular-cms-now-in-django"
                    },
                    {
                        "sessionId": 75,
                        "sessionUrl": "2008/unified-cloud-storage-library"
                    },
                    {
                        "sessionId": 76,
                        "sessionUrl": "2008/develop-rich-internet-applications-ria-using-javafx"
                    },
                    {
                        "sessionId": 78,
                        "sessionUrl": "2008/windows-azureeverything-you-wanted-to-know-about-microsofts-operating-syste"
                    },
                    {
                        "sessionId": 79,
                        "sessionUrl": "2008/groovy-and-concurrency"
                    },
                    {
                        "sessionId": 80,
                        "sessionUrl": "2008/agile-developer-practices-for-dynamic-languages"
                    },
                    {
                        "sessionId": 81,
                        "sessionUrl": "2008/groovy-tutorial"
                    },
                    {
                        "sessionId": 82,
                        "sessionUrl": "2008/xml-and-web-services-with-groovy"
                    },
                    {
                        "sessionId": 83,
                        "sessionUrl": "2008/web-api-for-wuala-social-online-storage"
                    },
                    {
                        "sessionId": 84,
                        "sessionUrl": "2008/working-with-sharepoint-data"
                    },
                    {
                        "sessionId": 85,
                        "sessionUrl": "2008/high-performance-ajaxjavasscript-with-aspnet-and-extjs"
                    },
                    {
                        "sessionId": 86,
                        "sessionUrl": "2008/the-performance-limitations-of-the-java-platform-and-how-to-avoid-them"
                    },
                    {
                        "sessionId": 89,
                        "sessionUrl": "2008/groking-the-code-base"
                    },
                    {
                        "sessionId": 90,
                        "sessionUrl": "2008/the-basics-of-threading"
                    },
                    {
                        "sessionId": 91,
                        "sessionUrl": "2008/dynamics-crm-as-a-platform-for-business-process-management-bpm"
                    },
                    {
                        "sessionId": 92,
                        "sessionUrl": "2008/linq-fundamentals"
                    },
                    {
                        "sessionId": 93,
                        "sessionUrl": "2008/building-testable-wpf-lob-using-xaml-power-toys"
                    },
                    {
                        "sessionId": 94,
                        "sessionUrl": "2008/mole-for-visual-studio"
                    },
                    {
                        "sessionId": 95,
                        "sessionUrl": "2008/take-a-rest-on-weblogic-server"
                    },
                    {
                        "sessionId": 96,
                        "sessionUrl": "2008/introducing-f"
                    },
                    {
                        "sessionId": 97,
                        "sessionUrl": "2008/building-and-sharing-enterprise-mashups-amp-mashlets"
                    },
                    {
                        "sessionId": 98,
                        "sessionUrl": "2008/windows-workflow-foundation-past-present-and-future"
                    },
                    {
                        "sessionId": 99,
                        "sessionUrl": "2008/destroy-the-universe-with-xna"
                    },
                    {
                        "sessionId": 100,
                        "sessionUrl": "2008/web-services-interop-between-java-and-net"
                    },
                    {
                        "sessionId": 101,
                        "sessionUrl": "2008/using-extjs-and-jabsorb-for-rich-internet-applications"
                    },
                    {
                        "sessionId": 102,
                        "sessionUrl": "2008/developing-wpf-and-silverlight-2-at-the-same-time"
                    },
                    {
                        "sessionId": 103,
                        "sessionUrl": "2008/cool-new-sql-server-2008-features---geospatial-and-more"
                    },
                    {
                        "sessionId": 104,
                        "sessionUrl": "2008/building-next-generation-business-it-infrastructure----unfold-your-company"
                    },
                    {
                        "sessionId": 107,
                        "sessionUrl": "2008/the-evolution-of-a-scrappy-startup-to-a-successful-web-service"
                    },
                    {
                        "sessionId": 108,
                        "sessionUrl": "2008/taming-web-services-interoperability"
                    },
                    {
                        "sessionId": 109,
                        "sessionUrl": "2008/0-to-60-with-regular-expressions-in-75-minutes"
                    },
                    {
                        "sessionId": 110,
                        "sessionUrl": "2008/how-to-build-asynchronous-web-services"
                    },
                    {
                        "sessionId": 111,
                        "sessionUrl": "2008/introduction-to-spring-web-services"
                    },
                    {
                        "sessionId": 112,
                        "sessionUrl": "2008/hands-on-lab-building-and-deploying-applications-with-oracle-weblogic-serve"
                    },
                    {
                        "sessionId": 113,
                        "sessionUrl": "2008/linkedins-engineering-process-using-jira"
                    },
                    {
                        "sessionId": 114,
                        "sessionUrl": "2008/practical-internet-telephony-with-asterisk-strengths-weaknesses-opportuniti"
                    },
                    {
                        "sessionId": 115,
                        "sessionUrl": "2008/oracle-erp---technical-overview"
                    },
                    {
                        "sessionId": 116,
                        "sessionUrl": "2008/silverlight-debugging-techniques"
                    },
                    {
                        "sessionId": 118,
                        "sessionUrl": "2008/the-fundamentals-of-transaction-systems"
                    },
                    {
                        "sessionId": 119,
                        "sessionUrl": "2008/flex-and-3d-ui-for-games-and-more"
                    },
                    {
                        "sessionId": 120,
                        "sessionUrl": "2008/architecting-and-consuming-rest-apis-in-net-using-lullaby"
                    },
                    {
                        "sessionId": 121,
                        "sessionUrl": "2008/javascript-the-good-parts-part-2"
                    },
                    {
                        "sessionId": 122,
                        "sessionUrl": "2008/dotnetnuke-module-development-in-c"
                    },
                    {
                        "sessionId": 123,
                        "sessionUrl": "2008/willowchat-out-of-the-box-comet-webchat"
                    },
                    {
                        "sessionId": 124,
                        "sessionUrl": "2008/hackathon-4-kids-building-game-over-google-app-engine-part-2"
                    },
                    {
                        "sessionId": 125,
                        "sessionUrl": "2008/integrating-wikis-and-other-social-content-into-your-website"
                    },
                    {
                        "sessionId": 126,
                        "sessionUrl": "2008/mapping-agile-practices-for-scalable-teams-to-tfs"
                    },
                    {
                        "sessionId": 128,
                        "sessionUrl": "2008/scaling-a-platform-with-bebo-yahoo-yos-rockyou-and-sun-microsystems---panel"
                    },
                    {
                        "sessionId": 129,
                        "sessionUrl": "2008/ruby-meta-programming"
                    },
                    {
                        "sessionId": 130,
                        "sessionUrl": "2008/ajax-or-not-to-ajax"
                    },
                    {
                        "sessionId": 131,
                        "sessionUrl": "2008/silverlight-20-made-easy"
                    },
                    {
                        "sessionId": 137,
                        "sessionUrl": "2008/prototyping-userrole-management-with-oracle-virtual-directory-and-oracle-xe"
                    },
                    {
                        "sessionId": 138,
                        "sessionUrl": "2008/silverlight-tools-for-visual-studio"
                    },
                    {
                        "sessionId": 139,
                        "sessionUrl": "2008/windows-powershell-scripting"
                    },
                    {
                        "sessionId": 295,
                        "sessionUrl": "2008/building-better-tests"
                    },
                    {
                        "sessionId": 151,
                        "sessionUrl": "2009/membership-with-profile-and-high-performance-extjs-javascript-interface"
                    },
                    {
                        "sessionId": 152,
                        "sessionUrl": "2009/active-directory-programming-for-developers"
                    },
                    {
                        "sessionId": 153,
                        "sessionUrl": "2009/networking-for-developers"
                    },
                    {
                        "sessionId": 155,
                        "sessionUrl": "2009/all-about-the-current-and-future-trends-in-comet"
                    },
                    {
                        "sessionId": 156,
                        "sessionUrl": "2009/introducing-the-net-service-bus"
                    },
                    {
                        "sessionId": 157,
                        "sessionUrl": "2009/beyond-the-relay---routers-and-queues-in-the-net-service-bus"
                    },
                    {
                        "sessionId": 159,
                        "sessionUrl": "2009/cloudcamp-round-1-intro-to-cloud-computing"
                    },
                    {
                        "sessionId": 160,
                        "sessionUrl": "2009/absorbing-scala-into-java-ecosystem"
                    },
                    {
                        "sessionId": 161,
                        "sessionUrl": "2009/creating-java-applications-with-google-app-engine"
                    },
                    {
                        "sessionId": 162,
                        "sessionUrl": "2009/getting-started-with-javafx-and-widgetfx"
                    },
                    {
                        "sessionId": 163,
                        "sessionUrl": "2009/test-driven-development-an-intro-for-c-developers"
                    },
                    {
                        "sessionId": 164,
                        "sessionUrl": "2009/processing-annotations-with-aop"
                    },
                    {
                        "sessionId": 166,
                        "sessionUrl": "2009/beginning-scala"
                    },
                    {
                        "sessionId": 167,
                        "sessionUrl": "2009/sharepoint---web-parts-101"
                    },
                    {
                        "sessionId": 168,
                        "sessionUrl": "2009/sharepoint---working-with-list-and-library-data"
                    },
                    {
                        "sessionId": 170,
                        "sessionUrl": "2009/wf4-workflow-in-net-40"
                    },
                    {
                        "sessionId": 171,
                        "sessionUrl": "2009/beginning-iphone-development"
                    },
                    {
                        "sessionId": 172,
                        "sessionUrl": "2009/broadcast-badges-made-really-really-simple"
                    },
                    {
                        "sessionId": 173,
                        "sessionUrl": "2009/teaching-kids-programming-with-scratch-alice-and-python"
                    },
                    {
                        "sessionId": 174,
                        "sessionUrl": "2009/learning-python-in-grade-school"
                    },
                    {
                        "sessionId": 175,
                        "sessionUrl": "2009/talkingpuffin-a-scala-twitter-client"
                    },
                    {
                        "sessionId": 176,
                        "sessionUrl": "2009/javascript-the-good-parts"
                    },
                    {
                        "sessionId": 177,
                        "sessionUrl": "2009/javascript-town-meeting"
                    },
                    {
                        "sessionId": 179,
                        "sessionUrl": "2009/security-with-oauth-why-what-and-how"
                    },
                    {
                        "sessionId": 180,
                        "sessionUrl": "2009/game-and-story-programming-class-for-kids"
                    },
                    {
                        "sessionId": 181,
                        "sessionUrl": "2009/asynchronous-web-services"
                    },
                    {
                        "sessionId": 182,
                        "sessionUrl": "2009/quotbest-practicequot-in-iphone-sdk-app-design"
                    },
                    {
                        "sessionId": 183,
                        "sessionUrl": "2009/quothello-worldquot-in-verilog"
                    },
                    {
                        "sessionId": 184,
                        "sessionUrl": "2009/getting-the-most-from-lambda-expressions-in-vb-and-c"
                    },
                    {
                        "sessionId": 185,
                        "sessionUrl": "2009/what-is-gemini"
                    },
                    {
                        "sessionId": 188,
                        "sessionUrl": "2009/from-code-to-complete-product-to-brand"
                    },
                    {
                        "sessionId": 190,
                        "sessionUrl": "2009/future-directions-for-microsoft-visual-basic-and-c"
                    },
                    {
                        "sessionId": 191,
                        "sessionUrl": "2009/taking-advantage-of-linq-and-xml-in-office-2007"
                    },
                    {
                        "sessionId": 194,
                        "sessionUrl": "2009/dependency-properties-in-wpf-amp-silverlight"
                    },
                    {
                        "sessionId": 195,
                        "sessionUrl": "2009/silverlight-3-ins-amp-outs"
                    },
                    {
                        "sessionId": 198,
                        "sessionUrl": "2009/boo-and-powershell-for-testers"
                    },
                    {
                        "sessionId": 199,
                        "sessionUrl": "2009/ria-services-rad-for-the-middle-tier"
                    },
                    {
                        "sessionId": 201,
                        "sessionUrl": "2009/software-startup-maturity-checklist"
                    },
                    {
                        "sessionId": 202,
                        "sessionUrl": "2009/what-is-python"
                    },
                    {
                        "sessionId": 203,
                        "sessionUrl": "2009/programming-microsoft-office-using-python"
                    },
                    {
                        "sessionId": 205,
                        "sessionUrl": "2009/it-for-devs-what-developers-need-to-know-about-it"
                    },
                    {
                        "sessionId": 206,
                        "sessionUrl": "2009/windows-azure-storage-the-rest-of-the-story"
                    },
                    {
                        "sessionId": 207,
                        "sessionUrl": "2009/griffon-swing-just-got-fun-again"
                    },
                    {
                        "sessionId": 208,
                        "sessionUrl": "2009/enterprise-application-development-with-spring"
                    },
                    {
                        "sessionId": 209,
                        "sessionUrl": "2009/enterprise-aop-with-spring-and-aspectj"
                    },
                    {
                        "sessionId": 210,
                        "sessionUrl": "2009/a-first-look-at-scala-on-google-app-engine"
                    },
                    {
                        "sessionId": 212,
                        "sessionUrl": "2009/using-amp-writing-behaviors-in-silverlight-amp-wpf-with-blend-amp-visual-st"
                    },
                    {
                        "sessionId": 213,
                        "sessionUrl": "2009/introduction-to-oracle-adf"
                    },
                    {
                        "sessionId": 214,
                        "sessionUrl": "2009/ajax-enabled-jsf---oracle-adf-faces-primer"
                    },
                    {
                        "sessionId": 215,
                        "sessionUrl": "2009/deep-diagnostics-of-production-jvms-using-oracle-ad4j"
                    },
                    {
                        "sessionId": 216,
                        "sessionUrl": "2009/the-great-agile-requirements-showdown"
                    },
                    {
                        "sessionId": 217,
                        "sessionUrl": "2009/agile-101"
                    },
                    {
                        "sessionId": 218,
                        "sessionUrl": "2009/exploring-agility"
                    },
                    {
                        "sessionId": 219,
                        "sessionUrl": "2009/mobile-development-101-developing-apps-for-the-iphone-and-the-android-platf"
                    },
                    {
                        "sessionId": 220,
                        "sessionUrl": "2009/scala-on-your-phone-mobile-development-with-less-suck"
                    },
                    {
                        "sessionId": 222,
                        "sessionUrl": "2009/introduction-to-building-web-application-with-spring-mvc"
                    },
                    {
                        "sessionId": 223,
                        "sessionUrl": "2009/introduction-to-adobe-flex"
                    },
                    {
                        "sessionId": 224,
                        "sessionUrl": "2009/application-architectures-for-adobe-flex-framework"
                    },
                    {
                        "sessionId": 225,
                        "sessionUrl": "2009/partially-connected-silverlight-applications"
                    },
                    {
                        "sessionId": 226,
                        "sessionUrl": "2009/get-higher-with-scalatest"
                    },
                    {
                        "sessionId": 227,
                        "sessionUrl": "2009/python-3-the-next-generation"
                    },
                    {
                        "sessionId": 228,
                        "sessionUrl": "2009/interactive-prototyping-with-dhtml"
                    },
                    {
                        "sessionId": 229,
                        "sessionUrl": "2009/deep-dumpster-diving"
                    },
                    {
                        "sessionId": 230,
                        "sessionUrl": "2009/0-to-60-with-regular-expressions-in-75-minutes"
                    },
                    {
                        "sessionId": 231,
                        "sessionUrl": "2009/a-briefing-on-itemscript-a-system-for-building-loosely-coupled-declarative"
                    },
                    {
                        "sessionId": 232,
                        "sessionUrl": "2009/embellish-your-pictures--build-an-application-for-an-android-phone"
                    },
                    {
                        "sessionId": 233,
                        "sessionUrl": "2009/extending-cruisecontrolnet"
                    },
                    {
                        "sessionId": 235,
                        "sessionUrl": "2009/web-services-interoperability-platform-session-cancelled"
                    },
                    {
                        "sessionId": 236,
                        "sessionUrl": "2009/getting-started-with-sql-server-compact-edition-ce-351"
                    },
                    {
                        "sessionId": 237,
                        "sessionUrl": "2009/communitas"
                    },
                    {
                        "sessionId": 239,
                        "sessionUrl": "2009/writing-a-jquery-plugin"
                    },
                    {
                        "sessionId": 240,
                        "sessionUrl": "2009/developing-for-webkit"
                    },
                    {
                        "sessionId": 241,
                        "sessionUrl": "2009/javascript-animation"
                    },
                    {
                        "sessionId": 242,
                        "sessionUrl": "2009/expression-blend-tips-amp-tricks"
                    },
                    {
                        "sessionId": 243,
                        "sessionUrl": "2009/integrating-iphone-apps-with-drupal"
                    },
                    {
                        "sessionId": 244,
                        "sessionUrl": "2009/a-hands-on-overview-of-the-semantic-web"
                    },
                    {
                        "sessionId": 245,
                        "sessionUrl": "2009/writing-collaborative-apps-in-google-wave"
                    },
                    {
                        "sessionId": 248,
                        "sessionUrl": "2009/befriending-lambda-expressions"
                    },
                    {
                        "sessionId": 249,
                        "sessionUrl": "2009/introduction-to-windows-azure"
                    },
                    {
                        "sessionId": 250,
                        "sessionUrl": "2009/rich-internet-applications-on-windows-azure"
                    },
                    {
                        "sessionId": 252,
                        "sessionUrl": "2009/ria-with-flex-amp-java-using-blazeds"
                    },
                    {
                        "sessionId": 253,
                        "sessionUrl": "2009/cloudcamp-begins-lightning-talks-then-propose-sessions"
                    },
                    {
                        "sessionId": 254,
                        "sessionUrl": "2009/build-bindingly-fast-web-apps-with-html5-and-sproutcore"
                    },
                    {
                        "sessionId": 255,
                        "sessionUrl": "2009/team-estimation-game"
                    },
                    {
                        "sessionId": 257,
                        "sessionUrl": "2009/slow-down-to-speed-up"
                    },
                    {
                        "sessionId": 258,
                        "sessionUrl": "2009/avoiding-the-knowledge-transfer-bottleneck"
                    },
                    {
                        "sessionId": 259,
                        "sessionUrl": "2009/making-pair-programming-and-tdd-fun-and-effective"
                    },
                    {
                        "sessionId": 260,
                        "sessionUrl": "2009/parallel-programming-with-net"
                    },
                    {
                        "sessionId": 261,
                        "sessionUrl": "2009/appcelerator-titanium---mobile-for-the-rest-of-us"
                    },
                    {
                        "sessionId": 262,
                        "sessionUrl": "2009/simple-spring-memcached"
                    },
                    {
                        "sessionId": 263,
                        "sessionUrl": "2009/java-ee-6-and-glassfish-v3-paving-the-path-for-future"
                    },
                    {
                        "sessionId": 264,
                        "sessionUrl": "2009/using-eclipse-for-java-ee-6-development-for-the-glassfisht-application-serv"
                    },
                    {
                        "sessionId": 265,
                        "sessionUrl": "2009/cancelled-dynamic-languages-amp-web-frameworks-in-glassfish"
                    },
                    {
                        "sessionId": 266,
                        "sessionUrl": "2009/ibeans-dead-simple-integration-for-web-app-development"
                    },
                    {
                        "sessionId": 267,
                        "sessionUrl": "2009/web-analytics---do-i-really-need-it"
                    },
                    {
                        "sessionId": 268,
                        "sessionUrl": "2009/when-to-build-and-when-to-buy"
                    },
                    {
                        "sessionId": 269,
                        "sessionUrl": "2009/optimize-performance-of-your-code"
                    },
                    {
                        "sessionId": 270,
                        "sessionUrl": "2009/best-and-worst-practice-for-actionscriptflashflex-development-3d-assetsocke"
                    },
                    {
                        "sessionId": 271,
                        "sessionUrl": "2009/tour-of-automatedqas-testcomplete-7"
                    },
                    {
                        "sessionId": 272,
                        "sessionUrl": "2009/getting-started-with-osgi"
                    },
                    {
                        "sessionId": 273,
                        "sessionUrl": "2009/silverlight-data-service-options-for-business-apps"
                    },
                    {
                        "sessionId": 274,
                        "sessionUrl": "2009/presenting-for-engineers"
                    },
                    {
                        "sessionId": 276,
                        "sessionUrl": "2009/which-web-app-stack-is-best"
                    },
                    {
                        "sessionId": 277,
                        "sessionUrl": "2009/clickonce-deployment-how-to-abuse-it"
                    },
                    {
                        "sessionId": 279,
                        "sessionUrl": "2009/code-excellence-for-the-average-programmer---part-1"
                    },
                    {
                        "sessionId": 280,
                        "sessionUrl": "2009/code-excellence-for-the-average-programmer---part-2"
                    },
                    {
                        "sessionId": 281,
                        "sessionUrl": "2009/unit-testing-the-easy-way-in-c"
                    },
                    {
                        "sessionId": 282,
                        "sessionUrl": "2009/paypal-platform-preview"
                    },
                    {
                        "sessionId": 284,
                        "sessionUrl": "2009/windows-mobile-devcamp-1-of-10"
                    },
                    {
                        "sessionId": 285,
                        "sessionUrl": "2009/windows-mobile-devcamp-2-of-10"
                    },
                    {
                        "sessionId": 286,
                        "sessionUrl": "2009/windows-mobile-devcamp-3-of-10"
                    },
                    {
                        "sessionId": 287,
                        "sessionUrl": "2009/windows-mobile-devcamp-4-of-10"
                    },
                    {
                        "sessionId": 288,
                        "sessionUrl": "2009/windows-mobile-devcamp-5-of-10"
                    },
                    {
                        "sessionId": 289,
                        "sessionUrl": "2009/windows-mobile-devcamp-6-of-10"
                    },
                    {
                        "sessionId": 290,
                        "sessionUrl": "2009/windows-mobile-devcamp-7-of-10"
                    },
                    {
                        "sessionId": 291,
                        "sessionUrl": "2009/windows-mobile-devcamp-8-of-10"
                    },
                    {
                        "sessionId": 292,
                        "sessionUrl": "2009/using-jsf-with-ajax"
                    },
                    {
                        "sessionId": 293,
                        "sessionUrl": "2009/practical-internet-telephony-with-asterisk-strengths-weaknesses-opportuniti"
                    },
                    {
                        "sessionId": 294,
                        "sessionUrl": "2009/next-generation-business-it-infrastructure---unfold-your-company-potential"
                    },
                    {
                        "sessionId": 296,
                        "sessionUrl": "2009/building-better-tests"
                    },
                    {
                        "sessionId": 297,
                        "sessionUrl": "2009/agile-inspect-and-adapt"
                    },
                    {
                        "sessionId": 298,
                        "sessionUrl": "2009/make-assertions-fun-with-fest"
                    },
                    {
                        "sessionId": 299,
                        "sessionUrl": "2009/windows-7-for-developers"
                    },
                    {
                        "sessionId": 300,
                        "sessionUrl": "2009/ie8-for-developers"
                    },
                    {
                        "sessionId": 302,
                        "sessionUrl": "2009/kevin-nilson-pinch-hitting-google-data-apis"
                    },
                    {
                        "sessionId": 303,
                        "sessionUrl": "2009/using-memcached-to-scale-out-your-website"
                    },
                    {
                        "sessionId": 305,
                        "sessionUrl": "2009/developing-revolutionary-web-applications-using-comet-and-ajax-push"
                    },
                    {
                        "sessionId": 306,
                        "sessionUrl": "2009/security-as-a-service"
                    },
                    {
                        "sessionId": 307,
                        "sessionUrl": "2009/iphone-development-in-c-using-monotouch"
                    },
                    {
                        "sessionId": 308,
                        "sessionUrl": "2009/scaling-hibernate-apps-with-terracotta"
                    },
                    {
                        "sessionId": 309,
                        "sessionUrl": "2009/developing-java-ee-applications-with-eclipse-and-wtp-looking-ahead-to-helio"
                    },
                    {
                        "sessionId": 310,
                        "sessionUrl": "2009/fastcgi-for-high-performance-desktop-applications"
                    },
                    {
                        "sessionId": 316,
                        "sessionUrl": "2009/top-10-productivity-tools-for-java-developers-on-oracle-weblogic-server-10g"
                    },
                    {
                        "sessionId": 317,
                        "sessionUrl": "2009/how-to-develop-with-oracle-fusion-middleware-on-amazon-ec2"
                    },
                    {
                        "sessionId": 320,
                        "sessionUrl": "2009/developing-a-google-wave-extension"
                    },
                    {
                        "sessionId": 321,
                        "sessionUrl": "2009/app-engine-101"
                    },
                    {
                        "sessionId": 323,
                        "sessionUrl": "2009/the-perils-and-pleasures-of-testing-with-selenium"
                    },
                    {
                        "sessionId": 324,
                        "sessionUrl": "2009/server-side-opensocial-java-programming"
                    },
                    {
                        "sessionId": 325,
                        "sessionUrl": "2009/cloudcamp-round-1-3-topics-tbd"
                    },
                    {
                        "sessionId": 327,
                        "sessionUrl": "2009/cloudcamp-sessions-round-2-topics-tbd"
                    },
                    {
                        "sessionId": 330,
                        "sessionUrl": "2009/cloudcamp-sessions-round-3-topics-tbd"
                    },
                    {
                        "sessionId": 333,
                        "sessionUrl": "2009/cloudcamp-wrap-up"
                    },
                    {
                        "sessionId": 334,
                        "sessionUrl": "2009/windows-mobile-devcamp-9-of-10"
                    },
                    {
                        "sessionId": 335,
                        "sessionUrl": "2009/windows-mobile-devcamp-10-of-10"
                    },
                    {
                        "sessionId": 336,
                        "sessionUrl": "2009/google-web-toolkit-gwt---productivity-for-you-performance-for-your-users"
                    },
                    {
                        "sessionId": 340,
                        "sessionUrl": "2009/intro-to-test-driven-development-for-c-developers"
                    },
                    {
                        "sessionId": 338,
                        "sessionUrl": "2010/creating-the-next-google"
                    },
                    {
                        "sessionId": 341,
                        "sessionUrl": "2010/intro-to-test-driven-development-for-c-developers"
                    },
                    {
                        "sessionId": 342,
                        "sessionUrl": "2010/for-those-about-to-mock"
                    },
                    {
                        "sessionId": 347,
                        "sessionUrl": "2010/advanced-scripting-in-powershell"
                    },
                    {
                        "sessionId": 348,
                        "sessionUrl": "2010/sharepoint-web-parts-101-then-and-now"
                    },
                    {
                        "sessionId": 349,
                        "sessionUrl": "2010/powershell-modules"
                    },
                    {
                        "sessionId": 350,
                        "sessionUrl": "2010/should-your-application-run-in-the-cloud"
                    },
                    {
                        "sessionId": 352,
                        "sessionUrl": "2010/asynchronous-web-services-part-1"
                    },
                    {
                        "sessionId": 353,
                        "sessionUrl": "2010/asynchronous-web-services-part-2"
                    },
                    {
                        "sessionId": 354,
                        "sessionUrl": "2010/what-is-python"
                    },
                    {
                        "sessionId": 355,
                        "sessionUrl": "2010/cloud-computing-with-scala-and-gridgain"
                    },
                    {
                        "sessionId": 356,
                        "sessionUrl": "2010/iis-75-for-developers"
                    },
                    {
                        "sessionId": 358,
                        "sessionUrl": "2010/networking-for-developers"
                    },
                    {
                        "sessionId": 359,
                        "sessionUrl": "2010/dancing-with-ios-sdk-iphone-amp-ipad"
                    },
                    {
                        "sessionId": 360,
                        "sessionUrl": "2010/intro-to-web-analytics"
                    },
                    {
                        "sessionId": 361,
                        "sessionUrl": "2010/web-analytics---what39s-next"
                    },
                    {
                        "sessionId": 364,
                        "sessionUrl": "2010/seo"
                    },
                    {
                        "sessionId": 365,
                        "sessionUrl": "2010/brief-introduction-to-natural-language-processing"
                    },
                    {
                        "sessionId": 371,
                        "sessionUrl": "2010/javascript-the-good-parts"
                    },
                    {
                        "sessionId": 372,
                        "sessionUrl": "2010/mobile-development-with-iphone-android-and-phone-7"
                    },
                    {
                        "sessionId": 373,
                        "sessionUrl": "2010/content-management-system-using-sitefinity"
                    },
                    {
                        "sessionId": 374,
                        "sessionUrl": "2010/silverlight-4-out-of-body-experience"
                    },
                    {
                        "sessionId": 375,
                        "sessionUrl": "2010/how-to-test-silverlight-apps-the-right-way"
                    },
                    {
                        "sessionId": 376,
                        "sessionUrl": "2010/attached-properties-and-behaviors-in-silverlight-and-wpf"
                    },
                    {
                        "sessionId": 377,
                        "sessionUrl": "2010/basic-android"
                    },
                    {
                        "sessionId": 379,
                        "sessionUrl": "2010/android-beyond-the-basics"
                    },
                    {
                        "sessionId": 381,
                        "sessionUrl": "2010/winphone-7-and-odata-building-the-code-camp-viewer"
                    },
                    {
                        "sessionId": 383,
                        "sessionUrl": "2010/advanced-xaml-for-winphone-7"
                    },
                    {
                        "sessionId": 384,
                        "sessionUrl": "2010/designer-and-developer-working-together-with-winphone-7"
                    },
                    {
                        "sessionId": 385,
                        "sessionUrl": "2010/introduction-to-dotnetnuke-5"
                    },
                    {
                        "sessionId": 386,
                        "sessionUrl": "2010/dotnetnuke-5-administration-tips-tricks"
                    },
                    {
                        "sessionId": 388,
                        "sessionUrl": "2010/using-advanced-jquery-techniques-to-enhance-your-dotnetnuke-modules"
                    },
                    {
                        "sessionId": 391,
                        "sessionUrl": "2010/the-science-of-great-ui"
                    },
                    {
                        "sessionId": 392,
                        "sessionUrl": "2010/from-code-to-product-to-company-to-brand"
                    },
                    {
                        "sessionId": 393,
                        "sessionUrl": "2010/introduction-to-powershell"
                    },
                    {
                        "sessionId": 394,
                        "sessionUrl": "2010/birdshow-a-scalalift-app-for-showing-flickr-photos"
                    },
                    {
                        "sessionId": 395,
                        "sessionUrl": "2010/teaching-programming-to-kids"
                    },
                    {
                        "sessionId": 396,
                        "sessionUrl": "2010/scratch-programming-workshop-for-kids"
                    },
                    {
                        "sessionId": 397,
                        "sessionUrl": "2010/fundamentals-of-good-ui-design"
                    },
                    {
                        "sessionId": 399,
                        "sessionUrl": "2010/extreme-testing-at-kaching-from-commit-to-production-in-5-minutes"
                    },
                    {
                        "sessionId": 400,
                        "sessionUrl": "2010/mobile-html-50"
                    },
                    {
                        "sessionId": 401,
                        "sessionUrl": "2010/thats-my-app---running-in-your-background---draining-your-battery"
                    },
                    {
                        "sessionId": 402,
                        "sessionUrl": "2010/android-flash-development"
                    },
                    {
                        "sessionId": 411,
                        "sessionUrl": "2010/sharepoint-2010-external-content-types"
                    },
                    {
                        "sessionId": 413,
                        "sessionUrl": "2010/working-with-a-ui-designer"
                    },
                    {
                        "sessionId": 414,
                        "sessionUrl": "2010/spring-roo-productive-enterprise-application-development"
                    },
                    {
                        "sessionId": 415,
                        "sessionUrl": "2010/applying-compiler-techniques-to-iterate-at-blazing-speed"
                    },
                    {
                        "sessionId": 416,
                        "sessionUrl": "2010/a-well-typed-program-never-goes-wrong"
                    },
                    {
                        "sessionId": 417,
                        "sessionUrl": "2010/appcelerator39s-titanium-platform-build-native-mobile-apps-using-your-web-s"
                    },
                    {
                        "sessionId": 418,
                        "sessionUrl": "2010/best-kept-secrets-in-visual-studio-2010-amp-net-4"
                    },
                    {
                        "sessionId": 419,
                        "sessionUrl": "2010/automating-good-coding-practices"
                    },
                    {
                        "sessionId": 420,
                        "sessionUrl": "2010/silverlight-wcf-ria-services-and-your-business-objects"
                    },
                    {
                        "sessionId": 421,
                        "sessionUrl": "2010/creating-and-consuming-odata-services"
                    },
                    {
                        "sessionId": 423,
                        "sessionUrl": "2010/creating-and-migrating-mvcwebform-apps-to-the-cloud"
                    },
                    {
                        "sessionId": 424,
                        "sessionUrl": "2010/what-is-google-app-engine"
                    },
                    {
                        "sessionId": 425,
                        "sessionUrl": "2010/windows-phone-7-meets-cloud-computing---supplying-mobile-devices-with-the-p"
                    },
                    {
                        "sessionId": 427,
                        "sessionUrl": "2010/how-to-product-manage-an-agile-team"
                    },
                    {
                        "sessionId": 428,
                        "sessionUrl": "2010/visual-studio-2010-tips-and-tricks"
                    },
                    {
                        "sessionId": 429,
                        "sessionUrl": "2010/do-you-mapreduce"
                    },
                    {
                        "sessionId": 431,
                        "sessionUrl": "2010/extending-your-community-web-site-to-include-windows-phone-7"
                    },
                    {
                        "sessionId": 432,
                        "sessionUrl": "2010/augmented-reality"
                    },
                    {
                        "sessionId": 433,
                        "sessionUrl": "2010/actionscript-event-patterns"
                    },
                    {
                        "sessionId": 434,
                        "sessionUrl": "2010/sharing-code-between-web-and-air"
                    },
                    {
                        "sessionId": 435,
                        "sessionUrl": "2010/are-you-ready-to-switch-your-role-from-pm-to-scrum-master-do-you-know-what"
                    },
                    {
                        "sessionId": 436,
                        "sessionUrl": "2010/rest-for-the-rest-of-us"
                    },
                    {
                        "sessionId": 437,
                        "sessionUrl": "2010/aspnet-mvc-for-webform-programmers"
                    },
                    {
                        "sessionId": 438,
                        "sessionUrl": "2010/bring-charting-to-your-aspnet-sites-with-the-chart-control"
                    },
                    {
                        "sessionId": 439,
                        "sessionUrl": "2010/mvp-program-overview"
                    },
                    {
                        "sessionId": 440,
                        "sessionUrl": "2010/java-ee-6-doing-more-with-less"
                    },
                    {
                        "sessionId": 441,
                        "sessionUrl": "2010/osgi-and-java-ee-in-glassfish"
                    },
                    {
                        "sessionId": 442,
                        "sessionUrl": "2010/java-ee-6-tooling"
                    },
                    {
                        "sessionId": 443,
                        "sessionUrl": "2010/servlet-30-extensible-asynchronous-and-easy-to-use"
                    },
                    {
                        "sessionId": 444,
                        "sessionUrl": "2010/running-your-java-ee-6-application-in-the-cloud"
                    },
                    {
                        "sessionId": 445,
                        "sessionUrl": "2010/5-minute-commit-to-production-continuous-deployment"
                    },
                    {
                        "sessionId": 446,
                        "sessionUrl": "2010/soa-integration-with-the-oracle-application-development-framework"
                    },
                    {
                        "sessionId": 447,
                        "sessionUrl": "2010/getting-maximum-productivity-for-the-java-developer---the-oracle-way"
                    },
                    {
                        "sessionId": 448,
                        "sessionUrl": "2010/microsoft-azure-for-beginners"
                    },
                    {
                        "sessionId": 449,
                        "sessionUrl": "2010/migrating-to-microsoft-azure-from-a-traditional-hosted-environment"
                    },
                    {
                        "sessionId": 450,
                        "sessionUrl": "2010/deploying-net-smart-client-applications"
                    },
                    {
                        "sessionId": 451,
                        "sessionUrl": "2010/monads-functors-functions-javascala"
                    },
                    {
                        "sessionId": 452,
                        "sessionUrl": "2010/introduction-to-jax-rs"
                    },
                    {
                        "sessionId": 453,
                        "sessionUrl": "2010/algorithmic-trading"
                    },
                    {
                        "sessionId": 454,
                        "sessionUrl": "2010/deep-dive-on-paypalx-payments-platform"
                    },
                    {
                        "sessionId": 455,
                        "sessionUrl": "2010/social-platforms-what-goes-on-under-the-hood"
                    },
                    {
                        "sessionId": 456,
                        "sessionUrl": "2010/visual-studio-2010-code-generation"
                    },
                    {
                        "sessionId": 459,
                        "sessionUrl": "2010/how-do-i-get-into-windows-phone-7-development"
                    },
                    {
                        "sessionId": 461,
                        "sessionUrl": "2010/sharepoint-2010-information-architecture-best-practices"
                    },
                    {
                        "sessionId": 464,
                        "sessionUrl": "2010/rich-gui-testing-made-easy"
                    },
                    {
                        "sessionId": 465,
                        "sessionUrl": "2010/fluent-interfaces-domain-specific-languages-in-plain-old-java"
                    },
                    {
                        "sessionId": 466,
                        "sessionUrl": "2010/game-development-for-windows-phone-7"
                    },
                    {
                        "sessionId": 467,
                        "sessionUrl": "2010/teaching-kids-programming"
                    },
                    {
                        "sessionId": 468,
                        "sessionUrl": "2010/website-optimization-and-performance-improvement-techniques"
                    },
                    {
                        "sessionId": 470,
                        "sessionUrl": "2010/lego-for-software-engineers-part-1---how-to-build-reusable-and-maintainable"
                    },
                    {
                        "sessionId": 471,
                        "sessionUrl": "2010/lego-for-software-engineers-part-2---from-unity-mef-and-wcf"
                    },
                    {
                        "sessionId": 472,
                        "sessionUrl": "2010/application-lifecycle-for-windows-phone-7"
                    },
                    {
                        "sessionId": 474,
                        "sessionUrl": "2010/grooming-your-product-backlog"
                    },
                    {
                        "sessionId": 475,
                        "sessionUrl": "2010/agile---an-experiential-introduction"
                    },
                    {
                        "sessionId": 476,
                        "sessionUrl": "2010/rapid-rapport-verbal-technology-to-build-chemistry-fast"
                    },
                    {
                        "sessionId": 477,
                        "sessionUrl": "2010/rdfa---what-why-and-how"
                    },
                    {
                        "sessionId": 478,
                        "sessionUrl": "2010/will-work-for-equity---the-world-startups"
                    },
                    {
                        "sessionId": 479,
                        "sessionUrl": "2010/exploring-amazon-aws-services-amp-best-practices"
                    },
                    {
                        "sessionId": 481,
                        "sessionUrl": "2010/membaseorg-the-simple-fast-elastic-nosql-database-powering-farmville-is-now"
                    },
                    {
                        "sessionId": 482,
                        "sessionUrl": "2010/how-to-take-your-current-javascriptphp-app-and-make-it-scale"
                    },
                    {
                        "sessionId": 483,
                        "sessionUrl": "2010/visual-studio-lightswitch---beyond-the-basics"
                    },
                    {
                        "sessionId": 484,
                        "sessionUrl": "2010/introducing-visual-studio-lightswitch"
                    },
                    {
                        "sessionId": 485,
                        "sessionUrl": "2010/app-monetization-still-a-mystery"
                    },
                    {
                        "sessionId": 486,
                        "sessionUrl": "2010/an-introduction-to-nodejs"
                    },
                    {
                        "sessionId": 487,
                        "sessionUrl": "2010/reengineering-to-inject-quality-into-legacy-applications"
                    },
                    {
                        "sessionId": 488,
                        "sessionUrl": "2010/computer-forensics-digital-age-detection"
                    },
                    {
                        "sessionId": 489,
                        "sessionUrl": "2010/groovygrails-controllers-deep-dive"
                    },
                    {
                        "sessionId": 490,
                        "sessionUrl": "2010/no-such-thing-as-a-secure-network-wireless-security-classdemo"
                    },
                    {
                        "sessionId": 492,
                        "sessionUrl": "2010/in-app-payments-with-paypals-mobile-payment-library-mpl"
                    },
                    {
                        "sessionId": 493,
                        "sessionUrl": "2010/an-agile-gui-war"
                    },
                    {
                        "sessionId": 495,
                        "sessionUrl": "2010/intro-to-silverlight-media-framework"
                    },
                    {
                        "sessionId": 497,
                        "sessionUrl": "2010/0-to-60-with-regular-expressions-in-75-minutes"
                    },
                    {
                        "sessionId": 498,
                        "sessionUrl": "2010/rapid-prototyping-with-the-eclipse-rich-client-platform"
                    },
                    {
                        "sessionId": 499,
                        "sessionUrl": "2010/writing-a-cli-with-flex-and-bison"
                    },
                    {
                        "sessionId": 500,
                        "sessionUrl": "2010/architecture-reigns-in-the-cloud-patterns-that-produce-sustained-market-lea"
                    },
                    {
                        "sessionId": 501,
                        "sessionUrl": "2010/career-development-for-careers-in-the-video-gaming-industry"
                    },
                    {
                        "sessionId": 503,
                        "sessionUrl": "2010/tropocom-real-time-communications-cloud-api"
                    },
                    {
                        "sessionId": 507,
                        "sessionUrl": "2010/getting-and-keeping-the-job---what-you-need-to-know"
                    },
                    {
                        "sessionId": 508,
                        "sessionUrl": "2010/fun-with-html5-css3-and-javascript"
                    },
                    {
                        "sessionId": 509,
                        "sessionUrl": "2010/setting-up-your-sharepoint-developer-environment"
                    },
                    {
                        "sessionId": 510,
                        "sessionUrl": "2010/building-safe-sharepoint-solutions"
                    },
                    {
                        "sessionId": 511,
                        "sessionUrl": "2010/creating-office-2010-add-ins-using-sharepoint-as-a-data-source"
                    },
                    {
                        "sessionId": 512,
                        "sessionUrl": "2010/going-viral-how-i-got-6000-downloads-of-my-css-framework-in-3-days-off-of-o"
                    },
                    {
                        "sessionId": 513,
                        "sessionUrl": "2010/jquery-makes-writing-javascript-fun-again"
                    },
                    {
                        "sessionId": 514,
                        "sessionUrl": "2010/become-a-code-warrior-author-an-open-licensed-textbook"
                    },
                    {
                        "sessionId": 515,
                        "sessionUrl": "2010/google-app-engine-workshop"
                    },
                    {
                        "sessionId": 516,
                        "sessionUrl": "2010/introducing-google-apis-part-ii-apps"
                    },
                    {
                        "sessionId": 517,
                        "sessionUrl": "2010/introducing-google-apis-part-iii-new-amp-exciting"
                    },
                    {
                        "sessionId": 518,
                        "sessionUrl": "2010/google-chrome-html5"
                    },
                    {
                        "sessionId": 519,
                        "sessionUrl": "2010/deep-dumpster-diving"
                    },
                    {
                        "sessionId": 520,
                        "sessionUrl": "2010/android-ecosystem-and-best-practices"
                    },
                    {
                        "sessionId": 521,
                        "sessionUrl": "2010/android-developing-for-htc-evo-samsung-epic-galaxy-tab-sprintid"
                    },
                    {
                        "sessionId": 522,
                        "sessionUrl": "2010/building-video-applications-with-youtube-apis"
                    },
                    {
                        "sessionId": 523,
                        "sessionUrl": "2010/power-up-trends-in-the-video-game-industry"
                    },
                    {
                        "sessionId": 525,
                        "sessionUrl": "2010/mvc-and-entity-framework-4"
                    },
                    {
                        "sessionId": 526,
                        "sessionUrl": "2010/the-five-biggest-myths-about-web-services-security"
                    },
                    {
                        "sessionId": 527,
                        "sessionUrl": "2010/getting-started-with-development-on-sharepoint-2010"
                    },
                    {
                        "sessionId": 528,
                        "sessionUrl": "2010/enhancing-your-sharepoint-site-with-silverlight"
                    },
                    {
                        "sessionId": 529,
                        "sessionUrl": "2010/introducing-google-apis-part-i-a-z-and-geo"
                    },
                    {
                        "sessionId": 530,
                        "sessionUrl": "2010/the-google-buzz-api-and-you"
                    },
                    {
                        "sessionId": 531,
                        "sessionUrl": "2010/mapping-on-the-phone-google-maps-on-mobile-devices"
                    },
                    {
                        "sessionId": 533,
                        "sessionUrl": "2010/lean-agile-games-to-reduce-technical-debt-and-improve-productivity"
                    },
                    {
                        "sessionId": 534,
                        "sessionUrl": "2010/lean-agile-adoption-save-it-from-failing-or-better-don39t-let-it-fail"
                    },
                    {
                        "sessionId": 535,
                        "sessionUrl": "2010/whats-the-deal-on-multi-tasking"
                    },
                    {
                        "sessionId": 536,
                        "sessionUrl": "2010/talk-with-crock"
                    },
                    {
                        "sessionId": 537,
                        "sessionUrl": "2010/cross-platform-push-notifications-in-the-cloud"
                    },
                    {
                        "sessionId": 538,
                        "sessionUrl": "2010/advanced-aspnet-mvc-extensibility"
                    },
                    {
                        "sessionId": 539,
                        "sessionUrl": "2010/may-the-source-stay-with-you"
                    },
                    {
                        "sessionId": 540,
                        "sessionUrl": "2010/high-performance-scalability-for-enterprise-applications-with-enterprise-eh"
                    },
                    {
                        "sessionId": 541,
                        "sessionUrl": "2010/next-generation-business-it-infrastructure---unfold-your-company-potential"
                    },
                    {
                        "sessionId": 542,
                        "sessionUrl": "2010/practical-internet-telephony-with-asterisk-strengths-weaknesses-opportuniti"
                    },
                    {
                        "sessionId": 543,
                        "sessionUrl": "2010/whats-new-in-scala-28"
                    },
                    {
                        "sessionId": 544,
                        "sessionUrl": "2010/intellectual-property-basics-practice-and-pitfalls-for-the-everyday-innovat"
                    },
                    {
                        "sessionId": 545,
                        "sessionUrl": "2010/inside-html5"
                    },
                    {
                        "sessionId": 546,
                        "sessionUrl": "2010/next-generation-of-testing-for-html5"
                    },
                    {
                        "sessionId": 547,
                        "sessionUrl": "2010/beginning-ubuntu-gnu-linux-development"
                    },
                    {
                        "sessionId": 548,
                        "sessionUrl": "2010/design-time-dependency-analaysis-for-eclipse---just-what-is-in-my-project-a"
                    },
                    {
                        "sessionId": 549,
                        "sessionUrl": "2010/an-introduction-to-google-web-toolkit-and-ext-gwt"
                    },
                    {
                        "sessionId": 550,
                        "sessionUrl": "2010/sencha-touch-amazing-mobile-web-apps-with-html5-css3-amp-javascript"
                    },
                    {
                        "sessionId": 551,
                        "sessionUrl": "2010/analyzing-memory-usage-and-memory-leaks"
                    },
                    {
                        "sessionId": 553,
                        "sessionUrl": "2010/cloud-computing-track-lightning-talks"
                    },
                    {
                        "sessionId": 554,
                        "sessionUrl": "2010/silverlight-automated-testing"
                    },
                    {
                        "sessionId": 555,
                        "sessionUrl": "2010/practical-entity-framework-for-the-silverlight-developer"
                    },
                    {
                        "sessionId": 556,
                        "sessionUrl": "2010/sql-source-control-solutions"
                    },
                    {
                        "sessionId": 557,
                        "sessionUrl": "2010/in-depth-survey-of-html5-features"
                    },
                    {
                        "sessionId": 558,
                        "sessionUrl": "2010/x-cancelled---how-to-setup-and-scale-windows-on-iaas"
                    },
                    {
                        "sessionId": 560,
                        "sessionUrl": "2010/voice-amp-sms-apps-in-the-cloud"
                    },
                    {
                        "sessionId": 561,
                        "sessionUrl": "2010/automating-business-processes-with-k2-aspnet-amp-sharepoint"
                    },
                    {
                        "sessionId": 562,
                        "sessionUrl": "2010/openstack---open-source-cloud-software"
                    },
                    {
                        "sessionId": 563,
                        "sessionUrl": "2010/mobile-app-communications-in-the-cloud"
                    },
                    {
                        "sessionId": 564,
                        "sessionUrl": "2010/x-cancelled-setup-and-build-your-own-open-source-cloud"
                    },
                    {
                        "sessionId": 565,
                        "sessionUrl": "2010/install-your-first-php-app-on-amazon-ec2"
                    },
                    {
                        "sessionId": 566,
                        "sessionUrl": "2010/managing-amp-scaling-your-lamp-apps-in-the-cloud"
                    },
                    {
                        "sessionId": 567,
                        "sessionUrl": "2010/how-stackoverflow-is-using-html5"
                    },
                    {
                        "sessionId": 568,
                        "sessionUrl": "2010/html5-crash-course"
                    },
                    {
                        "sessionId": 569,
                        "sessionUrl": "2010/technology-of-building-silicon-valley-code-camp-web-site-and-more"
                    },
                    {
                        "sessionId": 570,
                        "sessionUrl": "2010/java-air-and-android---make-your-logic-mobile"
                    },
                    {
                        "sessionId": 571,
                        "sessionUrl": "2010/j2ee-cloud-computing-manipulating-pdfs-for-fun-and-profit"
                    },
                    {
                        "sessionId": 572,
                        "sessionUrl": "2010/wpf-tips-and-tricks"
                    },
                    {
                        "sessionId": 573,
                        "sessionUrl": "2010/getting-things-done-gtd-for-a-geek"
                    },
                    {
                        "sessionId": 575,
                        "sessionUrl": "2010/a-fun-look-at-video-chatting"
                    },
                    {
                        "sessionId": 576,
                        "sessionUrl": "2010/wp7-developer-contest---day-1-session-1"
                    },
                    {
                        "sessionId": 577,
                        "sessionUrl": "2010/wp7-developer-contest-day-1-session-2"
                    },
                    {
                        "sessionId": 578,
                        "sessionUrl": "2010/wp7-developer-contest-day-1-session-3"
                    },
                    {
                        "sessionId": 579,
                        "sessionUrl": "2010/wp7-developer-contest-day-1-session-4"
                    },
                    {
                        "sessionId": 580,
                        "sessionUrl": "2010/wp7-developer-contest---day-2-session-1-building-your-app"
                    },
                    {
                        "sessionId": 581,
                        "sessionUrl": "2010/wp7-developer-contest-day-2-session-2-building-your-app"
                    },
                    {
                        "sessionId": 582,
                        "sessionUrl": "2010/wp7-developer-contest-day-2-session-3-building-you-app"
                    },
                    {
                        "sessionId": 583,
                        "sessionUrl": "2010/wp7-developer-contest-day-2-session-4-presentations-and-awards"
                    },
                    {
                        "sessionId": 584,
                        "sessionUrl": "2010/introduction-to-architecting-silverlight-applications-with-prism-v4"
                    },
                    {
                        "sessionId": 585,
                        "sessionUrl": "2010/webos---cross-platform-and-nodejs"
                    },
                    {
                        "sessionId": 588,
                        "sessionUrl": "2011/ecmascript-5-the-new-parts"
                    },
                    {
                        "sessionId": 589,
                        "sessionUrl": "2011/ecmascript-what-next"
                    },
                    {
                        "sessionId": 590,
                        "sessionUrl": "2011/moving-your-silverlight-phone-applications-to-windows-8"
                    },
                    {
                        "sessionId": 591,
                        "sessionUrl": "2011/mapping-and-location-awareness-on-the-windows-phone"
                    },
                    {
                        "sessionId": 592,
                        "sessionUrl": "2011/the-current-state-of-the-union-in-mobile-development"
                    },
                    {
                        "sessionId": 593,
                        "sessionUrl": "2011/testing-mobile-applications"
                    },
                    {
                        "sessionId": 594,
                        "sessionUrl": "2011/iphone-development-kickstart"
                    },
                    {
                        "sessionId": 596,
                        "sessionUrl": "2011/windows-phone-7---quotmangoquot-refresh"
                    },
                    {
                        "sessionId": 597,
                        "sessionUrl": "2011/hands-on-jquery-mobile"
                    },
                    {
                        "sessionId": 600,
                        "sessionUrl": "2011/best-kept-secrets-in-visual-studio-2010-and-net-40"
                    },
                    {
                        "sessionId": 601,
                        "sessionUrl": "2011/building-business-applications-quickly-with-visual-studio-lightswitch"
                    },
                    {
                        "sessionId": 602,
                        "sessionUrl": "2011/lightswitch-advanced-development-and-customization-techniques"
                    },
                    {
                        "sessionId": 603,
                        "sessionUrl": "2011/eclipse-rcp-rapid-application-development"
                    },
                    {
                        "sessionId": 604,
                        "sessionUrl": "2011/back-2-basics-net-coding-standards-for-the-real-world"
                    },
                    {
                        "sessionId": 605,
                        "sessionUrl": "2011/building-ntier-applications-with-entity-framework-services"
                    },
                    {
                        "sessionId": 606,
                        "sessionUrl": "2011/powershell-types-and-objects-objects-and-types-oh-my"
                    },
                    {
                        "sessionId": 608,
                        "sessionUrl": "2011/introduction-to-mongodb"
                    },
                    {
                        "sessionId": 609,
                        "sessionUrl": "2011/play-as-you-rest-using-play-framework-to-build-restful-services"
                    },
                    {
                        "sessionId": 610,
                        "sessionUrl": "2011/hands-on-blackberry-playbook-ios-and-android-development"
                    },
                    {
                        "sessionId": 611,
                        "sessionUrl": "2011/web-30-smart-devices-fun-for-users-amp-developers"
                    },
                    {
                        "sessionId": 612,
                        "sessionUrl": "2011/customer-experience-management-for-architects"
                    },
                    {
                        "sessionId": 613,
                        "sessionUrl": "2011/rapid-rapport-creating-influence-on-demand"
                    },
                    {
                        "sessionId": 614,
                        "sessionUrl": "2011/seo"
                    },
                    {
                        "sessionId": 615,
                        "sessionUrl": "2011/web-analytics---whats-next"
                    },
                    {
                        "sessionId": 617,
                        "sessionUrl": "2011/partnering-with-a-designer"
                    },
                    {
                        "sessionId": 618,
                        "sessionUrl": "2011/fundamentals-of-good-ui-design"
                    },
                    {
                        "sessionId": 620,
                        "sessionUrl": "2011/distributed-programming-with-scala-and-gridgain"
                    },
                    {
                        "sessionId": 621,
                        "sessionUrl": "2011/mobile-ecosystem"
                    },
                    {
                        "sessionId": 622,
                        "sessionUrl": "2011/software-gardening"
                    },
                    {
                        "sessionId": 623,
                        "sessionUrl": "2011/intro-to-swig-for-perl-python-and-ruby"
                    },
                    {
                        "sessionId": 624,
                        "sessionUrl": "2011/secrets-of-the-webos-gurus"
                    },
                    {
                        "sessionId": 625,
                        "sessionUrl": "2011/clean-code---why-writing-clean-code-makes-us-more-efficient"
                    },
                    {
                        "sessionId": 626,
                        "sessionUrl": "2011/contract-first-development-with-microsoft-code-contracts-and-microsoft-pex"
                    },
                    {
                        "sessionId": 627,
                        "sessionUrl": "2011/webmatrix-in-depth"
                    },
                    {
                        "sessionId": 628,
                        "sessionUrl": "2011/painless-desktop-application-development-the-griffon-experience"
                    },
                    {
                        "sessionId": 629,
                        "sessionUrl": "2011/a-walkthrough-groovys-ast-transformations"
                    },
                    {
                        "sessionId": 630,
                        "sessionUrl": "2011/visage-android-hands-on-lab-part-2"
                    },
                    {
                        "sessionId": 631,
                        "sessionUrl": "2011/mobile-flex-for-java-geeks"
                    },
                    {
                        "sessionId": 632,
                        "sessionUrl": "2011/javafx-20-with-alternative-languages---groovy-clojure-scala-fantom-and-visa"
                    },
                    {
                        "sessionId": 633,
                        "sessionUrl": "2011/gpu-accelerated-databases-using-opencl"
                    },
                    {
                        "sessionId": 634,
                        "sessionUrl": "2011/10-tips-to-spice-up-your-xaml-apps-even-if-you-are-not-a-designer"
                    },
                    {
                        "sessionId": 635,
                        "sessionUrl": "2011/8-navigation-techniques-for-your-silverlight-applications"
                    },
                    {
                        "sessionId": 636,
                        "sessionUrl": "2011/the-art-of-raising-capital-for-technology-startup-leaders"
                    },
                    {
                        "sessionId": 637,
                        "sessionUrl": "2011/extending-the-power-of-css3"
                    },
                    {
                        "sessionId": 638,
                        "sessionUrl": "2011/scala-for-java-programmers"
                    },
                    {
                        "sessionId": 639,
                        "sessionUrl": "2011/automated-gui-testing-on-mac-using-atomac"
                    },
                    {
                        "sessionId": 640,
                        "sessionUrl": "2011/autoperf---an-experience-report-for-a-haskell-automation-tool"
                    },
                    {
                        "sessionId": 641,
                        "sessionUrl": "2011/the-ecosystem-of-context-how-to-play"
                    },
                    {
                        "sessionId": 642,
                        "sessionUrl": "2011/introduction-to-clojure-programming"
                    },
                    {
                        "sessionId": 643,
                        "sessionUrl": "2011/surviving-the-zerg-how-your-web-app-can-stay-online-after-aliens-take-over"
                    },
                    {
                        "sessionId": 644,
                        "sessionUrl": "2011/test-gnome-applications-using-ldtp"
                    },
                    {
                        "sessionId": 645,
                        "sessionUrl": "2011/distributed-source-control-with-mercurial-developing-a-better-workflow"
                    },
                    {
                        "sessionId": 646,
                        "sessionUrl": "2011/math-on-the-web-handwriting-for-input-mathjax-for-display"
                    },
                    {
                        "sessionId": 647,
                        "sessionUrl": "2011/will-work-for-equity---the-world-of-startups"
                    },
                    {
                        "sessionId": 648,
                        "sessionUrl": "2011/from-code-to-product-to-market-to-business---fast-bootstrapping"
                    },
                    {
                        "sessionId": 649,
                        "sessionUrl": "2011/pragmatic-naming-for-programmers-and-product-managers"
                    },
                    {
                        "sessionId": 652,
                        "sessionUrl": "2011/programming-android-tablets"
                    },
                    {
                        "sessionId": 653,
                        "sessionUrl": "2011/survey-of-cloud-platforms"
                    },
                    {
                        "sessionId": 654,
                        "sessionUrl": "2011/voip-practical-internet-telephony-with-asterisk-strengths-weaknesses-opport"
                    },
                    {
                        "sessionId": 656,
                        "sessionUrl": "2011/web-goal-management-manage-your-life-web-based-integrated-goal-time-project"
                    },
                    {
                        "sessionId": 658,
                        "sessionUrl": "2011/understanding-sql-server-xml-features"
                    },
                    {
                        "sessionId": 659,
                        "sessionUrl": "2011/spock-the-search-for-an-intelligent-spec"
                    },
                    {
                        "sessionId": 660,
                        "sessionUrl": "2011/for-those-about-to-mock"
                    },
                    {
                        "sessionId": 661,
                        "sessionUrl": "2011/beginning-test-driven-development-for-c-developers"
                    },
                    {
                        "sessionId": 662,
                        "sessionUrl": "2011/2011-survey-of-web-based-3d-technologies"
                    },
                    {
                        "sessionId": 663,
                        "sessionUrl": "2011/so-you-have-an-idea"
                    },
                    {
                        "sessionId": 664,
                        "sessionUrl": "2011/from-just-in-case-to-just-in-time-and-beyond"
                    },
                    {
                        "sessionId": 665,
                        "sessionUrl": "2011/paas-developer-tooling---windows-azure"
                    },
                    {
                        "sessionId": 666,
                        "sessionUrl": "2011/beginning-windows-phone-development"
                    },
                    {
                        "sessionId": 667,
                        "sessionUrl": "2011/a-tour-of-ohlohnet"
                    },
                    {
                        "sessionId": 668,
                        "sessionUrl": "2011/ios-application-architecture"
                    },
                    {
                        "sessionId": 669,
                        "sessionUrl": "2011/azure-for-developers-part-1"
                    },
                    {
                        "sessionId": 670,
                        "sessionUrl": "2011/azure-for-developers-part-2"
                    },
                    {
                        "sessionId": 674,
                        "sessionUrl": "2011/scala-and-lift-introduction-and-talkingpuffin-web-a-scala-lift-webapp"
                    },
                    {
                        "sessionId": 675,
                        "sessionUrl": "2011/kojo-programming-for-kids"
                    },
                    {
                        "sessionId": 676,
                        "sessionUrl": "2011/accelerate-your-database-development-with-object-relational-mapping-orm-in"
                    },
                    {
                        "sessionId": 677,
                        "sessionUrl": "2011/introduction-to-database-design-with-entity-relationship-er-diagrams"
                    },
                    {
                        "sessionId": 678,
                        "sessionUrl": "2011/javascript-in-cloud---think-automation-using-google-apps-script"
                    },
                    {
                        "sessionId": 679,
                        "sessionUrl": "2011/lego-r-mindstorms-for-kids"
                    },
                    {
                        "sessionId": 680,
                        "sessionUrl": "2011/windows-phone-7-game-development-in-xna-and-silverlight"
                    },
                    {
                        "sessionId": 681,
                        "sessionUrl": "2011/create-data-visualizations-in-minutes-using-google-fusion-tables"
                    },
                    {
                        "sessionId": 682,
                        "sessionUrl": "2011/javascript-code-assist-for-nodejs-and-more"
                    },
                    {
                        "sessionId": 683,
                        "sessionUrl": "2011/sql-azure-for-developers"
                    },
                    {
                        "sessionId": 684,
                        "sessionUrl": "2011/teaching-kids-programming"
                    },
                    {
                        "sessionId": 685,
                        "sessionUrl": "2011/intro-to-html5-game-programming---webgl-edition"
                    },
                    {
                        "sessionId": 686,
                        "sessionUrl": "2011/dry-css-amp-images"
                    },
                    {
                        "sessionId": 687,
                        "sessionUrl": "2011/demystifying-aspnet-mvc-linomvcgetknowledge"
                    },
                    {
                        "sessionId": 689,
                        "sessionUrl": "2011/windows-phone-7-development-kickstart"
                    },
                    {
                        "sessionId": 690,
                        "sessionUrl": "2011/0---60-qa-automation-at-box"
                    },
                    {
                        "sessionId": 692,
                        "sessionUrl": "2011/test-driven-development-for-embedded-software-in-c-or-c"
                    },
                    {
                        "sessionId": 694,
                        "sessionUrl": "2011/approval-tests---unit-testing-done-better"
                    },
                    {
                        "sessionId": 695,
                        "sessionUrl": "2011/take-a-sneak-peek-at-youtube-live-streaming-apis"
                    },
                    {
                        "sessionId": 696,
                        "sessionUrl": "2011/utilizing-legor-to-brainstorm-and-solve-problems"
                    },
                    {
                        "sessionId": 697,
                        "sessionUrl": "2011/html5-uploading-and-beyond"
                    },
                    {
                        "sessionId": 698,
                        "sessionUrl": "2011/achieving-cloud-scale-test-automation-at-box"
                    },
                    {
                        "sessionId": 699,
                        "sessionUrl": "2011/building-mobile-web-applications-with-sproutcore-ui"
                    },
                    {
                        "sessionId": 700,
                        "sessionUrl": "2011/tdd-coding-dojo"
                    },
                    {
                        "sessionId": 701,
                        "sessionUrl": "2011/visual-studio-2010-tips-and-tricks"
                    },
                    {
                        "sessionId": 702,
                        "sessionUrl": "2011/the-dependency-game"
                    },
                    {
                        "sessionId": 703,
                        "sessionUrl": "2011/an-introduction-to-the-managed-extensibility-framework-mef-in-net-4"
                    },
                    {
                        "sessionId": 704,
                        "sessionUrl": "2011/introduction-to-the-xbox-kinect-sdk-from-microsoft"
                    },
                    {
                        "sessionId": 705,
                        "sessionUrl": "2011/introduction-to-windows-azure-appfabric-applications"
                    },
                    {
                        "sessionId": 706,
                        "sessionUrl": "2011/where-is-my-data-consistency-availability-security-of-cloud-file-storage-at"
                    },
                    {
                        "sessionId": 707,
                        "sessionUrl": "2011/unit-testing-legacy-code"
                    },
                    {
                        "sessionId": 708,
                        "sessionUrl": "2011/automobile-the-next-hot-platform-for-mobile-linux"
                    },
                    {
                        "sessionId": 709,
                        "sessionUrl": "2011/debugging-of-multithreaded-and-multiprocessed-programs-on-linux"
                    },
                    {
                        "sessionId": 710,
                        "sessionUrl": "2011/developing-applications-for-meego"
                    },
                    {
                        "sessionId": 711,
                        "sessionUrl": "2011/three-cool-things-about-f"
                    },
                    {
                        "sessionId": 713,
                        "sessionUrl": "2011/data-visualization-in-html5-with-jquery-and-wijmo"
                    },
                    {
                        "sessionId": 714,
                        "sessionUrl": "2011/is-your-c-optimized"
                    },
                    {
                        "sessionId": 715,
                        "sessionUrl": "2011/consuming-data-for-humans"
                    },
                    {
                        "sessionId": 716,
                        "sessionUrl": "2011/use-rspec-to-learn-ruby"
                    },
                    {
                        "sessionId": 717,
                        "sessionUrl": "2011/net-meets-regx"
                    },
                    {
                        "sessionId": 718,
                        "sessionUrl": "2011/websocket-io-with-ruby-eventmachine"
                    },
                    {
                        "sessionId": 719,
                        "sessionUrl": "2011/net-meets-a-multi-core-world"
                    },
                    {
                        "sessionId": 720,
                        "sessionUrl": "2011/html5-all-about-web-forms"
                    },
                    {
                        "sessionId": 721,
                        "sessionUrl": "2011/css3-making-snow-in-silicon-valley-without-javascript"
                    },
                    {
                        "sessionId": 722,
                        "sessionUrl": "2011/progressive-enhanced-javafx-20-custom-components"
                    },
                    {
                        "sessionId": 724,
                        "sessionUrl": "2011/hands-on-introduction-to-parallel-management-patterns"
                    },
                    {
                        "sessionId": 725,
                        "sessionUrl": "2011/how-to-scale-your-app-and-make-it-work-even-when-aws-goes-down"
                    },
                    {
                        "sessionId": 726,
                        "sessionUrl": "2011/making-more-money-with-phone-7"
                    },
                    {
                        "sessionId": 727,
                        "sessionUrl": "2011/reporting-in-silverlight"
                    },
                    {
                        "sessionId": 728,
                        "sessionUrl": "2011/build-a-wordpress-blog-and-photo-gallery-site-in-60-minutes"
                    },
                    {
                        "sessionId": 729,
                        "sessionUrl": "2011/mobile-apps-with-aspnet-mvc-wurfl-and-jquery-mobile"
                    },
                    {
                        "sessionId": 731,
                        "sessionUrl": "2011/particle---cross-platform-sdk-for-native-mobile-apps-from-a-single-code-bas"
                    },
                    {
                        "sessionId": 732,
                        "sessionUrl": "2011/flexcloudsdk---cloud-computing-for-adobe-flex-developers-and-web-developers"
                    },
                    {
                        "sessionId": 733,
                        "sessionUrl": "2011/working-with-images-on-android"
                    },
                    {
                        "sessionId": 734,
                        "sessionUrl": "2011/social-integration-metrics-fo-social-app-product-managers-and-developers"
                    },
                    {
                        "sessionId": 735,
                        "sessionUrl": "2011/computer-programmers-helping-to-shape-an-experimental-film"
                    },
                    {
                        "sessionId": 736,
                        "sessionUrl": "2011/cto-roundtable-quotleaders-in-technologyquot"
                    },
                    {
                        "sessionId": 737,
                        "sessionUrl": "2011/augmented-reality-in-windows-phone-mango"
                    },
                    {
                        "sessionId": 738,
                        "sessionUrl": "2011/fun-with-live-tiles-in-windows-phone-7"
                    },
                    {
                        "sessionId": 739,
                        "sessionUrl": "2011/a-platform-for-building-rias-using-domain-specific-languages"
                    },
                    {
                        "sessionId": 740,
                        "sessionUrl": "2011/the-continuous-delivery-zone"
                    },
                    {
                        "sessionId": 741,
                        "sessionUrl": "2011/wpfsilverlight-resources-tips-and-tricks"
                    },
                    {
                        "sessionId": 742,
                        "sessionUrl": "2011/best-practices-for-scaling-java-applications-with-distributed-caching"
                    },
                    {
                        "sessionId": 743,
                        "sessionUrl": "2011/learning-to-love-services-experiences-from-the-transition-to-a-service-orie"
                    },
                    {
                        "sessionId": 744,
                        "sessionUrl": "2011/practical-html5-using-it-today"
                    },
                    {
                        "sessionId": 745,
                        "sessionUrl": "2011/dive-into-html5"
                    },
                    {
                        "sessionId": 746,
                        "sessionUrl": "2011/continuous-integration-using-hudson-and-fitnesse"
                    },
                    {
                        "sessionId": 747,
                        "sessionUrl": "2011/how-to-become-an-online-influencer"
                    },
                    {
                        "sessionId": 748,
                        "sessionUrl": "2011/jcp-and-the-future-of-java"
                    },
                    {
                        "sessionId": 749,
                        "sessionUrl": "2011/use-coaching-skills-to-be-a-better-manager-and-leader"
                    },
                    {
                        "sessionId": 750,
                        "sessionUrl": "2011/what-is-python"
                    },
                    {
                        "sessionId": 751,
                        "sessionUrl": "2011/what-is-google-app-engine"
                    },
                    {
                        "sessionId": 752,
                        "sessionUrl": "2011/google-app-engine-workshop"
                    },
                    {
                        "sessionId": 753,
                        "sessionUrl": "2011/creating-professional-applications-with-the-linkedin-javascript-api"
                    },
                    {
                        "sessionId": 754,
                        "sessionUrl": "2011/introduction-to-nme-the-quotwrite-once-publish-everywherequot-framework"
                    },
                    {
                        "sessionId": 756,
                        "sessionUrl": "2011/monetizing-with-google"
                    },
                    {
                        "sessionId": 757,
                        "sessionUrl": "2011/winning-the-engineering-talent-war-online"
                    },
                    {
                        "sessionId": 758,
                        "sessionUrl": "2011/test-driven-development-its-all-about-fluency"
                    },
                    {
                        "sessionId": 759,
                        "sessionUrl": "2011/powerful-resume-amp-cover-letter-writing"
                    },
                    {
                        "sessionId": 761,
                        "sessionUrl": "2011/getting-started-with-net-and-oracle-database"
                    },
                    {
                        "sessionId": 762,
                        "sessionUrl": "2011/entity-framework-linq-and-wcf-data-services-for-oracle-database"
                    },
                    {
                        "sessionId": 763,
                        "sessionUrl": "2011/oracle-and-net-best-practices-for-performance-and-deployment"
                    },
                    {
                        "sessionId": 764,
                        "sessionUrl": "2011/dsls-with-groovy"
                    },
                    {
                        "sessionId": 765,
                        "sessionUrl": "2011/snoviceexpertg--vim-from-essentials-to-mastery"
                    },
                    {
                        "sessionId": 766,
                        "sessionUrl": "2011/deploy-and-monitor-your-java-ee-6-session-in-a-fully-clustered-glassfish"
                    },
                    {
                        "sessionId": 767,
                        "sessionUrl": "2011/semantic-soa-governance-bpm-and-complex-event-processing-in-cloud"
                    },
                    {
                        "sessionId": 768,
                        "sessionUrl": "2011/extending-the-jsf-controller-for-reusability"
                    },
                    {
                        "sessionId": 769,
                        "sessionUrl": "2011/continous-integration-with-hudsonjenkins-maven-archiva-and-subversion"
                    },
                    {
                        "sessionId": 770,
                        "sessionUrl": "2011/the-java-ee-7-platform-developing-for-the-cloud"
                    },
                    {
                        "sessionId": 772,
                        "sessionUrl": "2011/introduction-to-cloud-foundry"
                    },
                    {
                        "sessionId": 773,
                        "sessionUrl": "2011/javascript-code-organization-and-encapsulation"
                    },
                    {
                        "sessionId": 774,
                        "sessionUrl": "2011/how-to-hire-and-manage-a-developer"
                    },
                    {
                        "sessionId": 775,
                        "sessionUrl": "2011/how-to-break-into-mobile-app-development"
                    },
                    {
                        "sessionId": 776,
                        "sessionUrl": "2011/how-to-create-and-market-your-personal-brand"
                    },
                    {
                        "sessionId": 777,
                        "sessionUrl": "2011/how-to-survive-the-technical-interview"
                    },
                    {
                        "sessionId": 778,
                        "sessionUrl": "2011/command-query-responsibility-segregation-intro-to-cqrs"
                    },
                    {
                        "sessionId": 779,
                        "sessionUrl": "2011/how-to-create-web-apps-in-the-cloud-using-twiki"
                    },
                    {
                        "sessionId": 783,
                        "sessionUrl": "2011/the-modern-collaborative-enterprise---how-to-get-the-most-out-of-social-net"
                    },
                    {
                        "sessionId": 784,
                        "sessionUrl": "2011/how-to-run-a-long-background-process-in-a-web-app"
                    },
                    {
                        "sessionId": 785,
                        "sessionUrl": "2011/data-analysis-with-mapreduce-and-nosql"
                    },
                    {
                        "sessionId": 787,
                        "sessionUrl": "2011/an-engineers-introduction-to-in-memory-data-grid-development"
                    },
                    {
                        "sessionId": 788,
                        "sessionUrl": "2011/in-memory-session-replication-with-weblogic-and-glassfish-coherence"
                    },
                    {
                        "sessionId": 790,
                        "sessionUrl": "2011/mergers-and-acquisitions-in-consumer-internet"
                    },
                    {
                        "sessionId": 791,
                        "sessionUrl": "2011/kids-programming-workshop-with-scratch"
                    },
                    {
                        "sessionId": 792,
                        "sessionUrl": "2011/turbocharge-your-iphone-project-with-three20"
                    },
                    {
                        "sessionId": 793,
                        "sessionUrl": "2011/getting-started-with-windows-azure"
                    },
                    {
                        "sessionId": 794,
                        "sessionUrl": "2011/developing-sharepoint-and-office-365-applications-using-windows-azure"
                    },
                    {
                        "sessionId": 795,
                        "sessionUrl": "2011/building-hybrid-applications-with-service-bus-v2"
                    },
                    {
                        "sessionId": 796,
                        "sessionUrl": "2011/intellectual-property-basics-practice-and-pitfalls-for-the-everyday-innovat"
                    },
                    {
                        "sessionId": 797,
                        "sessionUrl": "2011/store-your-data-predict-the-future"
                    },
                    {
                        "sessionId": 798,
                        "sessionUrl": "2011/build-a-mobile-web-app-with-sencha-touch"
                    },
                    {
                        "sessionId": 799,
                        "sessionUrl": "2011/faster-mobile-anyone"
                    },
                    {
                        "sessionId": 800,
                        "sessionUrl": "2011/mobile-web-design-moves"
                    },
                    {
                        "sessionId": 801,
                        "sessionUrl": "2011/getting-started-with-ios-mobile-app-development"
                    },
                    {
                        "sessionId": 802,
                        "sessionUrl": "2011/mysql-cluster-with-and-without-sql"
                    },
                    {
                        "sessionId": 803,
                        "sessionUrl": "2011/0-to-60-with-regular-expressions-in-75-minutes"
                    },
                    {
                        "sessionId": 804,
                        "sessionUrl": "2011/building-java-applications-for-mysql"
                    },
                    {
                        "sessionId": 805,
                        "sessionUrl": "2011/messaging---the-solution-for-multicore-interprocess-communication-and-load"
                    },
                    {
                        "sessionId": 806,
                        "sessionUrl": "2011/building-web-and-mobile-apps-with-flex-on-php-and-zend"
                    },
                    {
                        "sessionId": 807,
                        "sessionUrl": "2011/building-flex-applications-for-mobile-and-desktop-on-the-cloud"
                    },
                    {
                        "sessionId": 808,
                        "sessionUrl": "2011/visage-android-hands-on-lab-part-1"
                    },
                    {
                        "sessionId": 809,
                        "sessionUrl": "2011/high-performance-sql-applications-using-in-memory-database-technology"
                    },
                    {
                        "sessionId": 811,
                        "sessionUrl": "2011/using-the-windows-runtime-from-javascript-in-windows-8"
                    },
                    {
                        "sessionId": 812,
                        "sessionUrl": "2011/the-best-html5-tools-you39re-not-using"
                    },
                    {
                        "sessionId": 813,
                        "sessionUrl": "2011/designing-for-windows-8-metro"
                    },
                    {
                        "sessionId": 814,
                        "sessionUrl": "2011/rapid-iteration-in-html5-designerdeveloper-workflow-techniques-amp-process"
                    },
                    {
                        "sessionId": 819,
                        "sessionUrl": "2011/accepting-payments-online---opportunities-and-pitfalls"
                    },
                    {
                        "sessionId": 820,
                        "sessionUrl": "2011/attached-properties-unleashed"
                    },
                    {
                        "sessionId": 822,
                        "sessionUrl": "2011/powerbuilder-the-real-quotcat-with-9-livesquot"
                    },
                    {
                        "sessionId": 823,
                        "sessionUrl": "2011/pragmatic-javascript-jquery-ajax-with-aspnet"
                    },
                    {
                        "sessionId": 824,
                        "sessionUrl": "2011/an-excursion-in-f"
                    },
                    {
                        "sessionId": 825,
                        "sessionUrl": "2011/create-a-kinect-powered-personal-robot-with-microsoft-robotics-developer-st"
                    },
                    {
                        "sessionId": 826,
                        "sessionUrl": "2011/building-cloud-tools-for-netflix"
                    },
                    {
                        "sessionId": 827,
                        "sessionUrl": "2011/exception-safe-coding-in-c"
                    },
                    {
                        "sessionId": 828,
                        "sessionUrl": "2011/deme-a-django-based-cms-for-deliberative-content-creation-and-control-by-us"
                    },
                    {
                        "sessionId": 829,
                        "sessionUrl": "2011/in-memory-of-steve-jobs-the-apple-story"
                    },
                    {
                        "sessionId": 833,
                        "sessionUrl": "2012/programming-style-and-your-brain"
                    },
                    {
                        "sessionId": 834,
                        "sessionUrl": "2012/creating-influence-on-demand"
                    },
                    {
                        "sessionId": 837,
                        "sessionUrl": "2012/iis-for-developers"
                    },
                    {
                        "sessionId": 838,
                        "sessionUrl": "2012/tcpip-networking-for-developers"
                    },
                    {
                        "sessionId": 842,
                        "sessionUrl": "2012/javascript-is-all-grown-up-now"
                    },
                    {
                        "sessionId": 843,
                        "sessionUrl": "2012/net-coding-standards-for-the-real-world"
                    },
                    {
                        "sessionId": 844,
                        "sessionUrl": "2012/geeks-anonymous"
                    },
                    {
                        "sessionId": 845,
                        "sessionUrl": "2012/how-to-survive-the-technical-interview"
                    },
                    {
                        "sessionId": 846,
                        "sessionUrl": "2012/reengineering-net---adding-new-technology-to-legacy-code"
                    },
                    {
                        "sessionId": 847,
                        "sessionUrl": "2012/using-mocks-in-unit-tests-to-improve-code-quality"
                    },
                    {
                        "sessionId": 848,
                        "sessionUrl": "2012/mastering-microsoft-visual-studio-2012"
                    },
                    {
                        "sessionId": 849,
                        "sessionUrl": "2012/messaging-including-multicore-interprocess-communication-and-load-distribut"
                    },
                    {
                        "sessionId": 850,
                        "sessionUrl": "2012/build-a-wordpress-blog-and-photo-gallery-site-in-60-minutes"
                    },
                    {
                        "sessionId": 851,
                        "sessionUrl": "2012/using-fitnesse-as-an-integration-test-tool-for-continuous-integration-envir"
                    },
                    {
                        "sessionId": 852,
                        "sessionUrl": "2012/rapid-development-and-deployment-of-web-apps-and-services"
                    },
                    {
                        "sessionId": 853,
                        "sessionUrl": "2012/nosql---for-the-sql-server-developer"
                    },
                    {
                        "sessionId": 854,
                        "sessionUrl": "2012/fundamentals-of-good-design"
                    },
                    {
                        "sessionId": 855,
                        "sessionUrl": "2012/partnering-with-a-designer"
                    },
                    {
                        "sessionId": 856,
                        "sessionUrl": "2012/advanced-flex-events-asynchronous-binding-and-two-way-communication"
                    },
                    {
                        "sessionId": 857,
                        "sessionUrl": "2012/sensor-fusion-on-mobile-devices-for-lifecare"
                    },
                    {
                        "sessionId": 858,
                        "sessionUrl": "2012/taking-full-advantage-of-windows-8-modern-style-applications"
                    },
                    {
                        "sessionId": 859,
                        "sessionUrl": "2012/database-design-troubleshooting-repair-and-wart-removal"
                    },
                    {
                        "sessionId": 860,
                        "sessionUrl": "2012/use-flexbox-yesterday-a-comprehensive-introduction-to-the-new-css-layout-mo"
                    },
                    {
                        "sessionId": 861,
                        "sessionUrl": "2012/introduction-to-database-design-with-entity-relationship-er-diagrams"
                    },
                    {
                        "sessionId": 862,
                        "sessionUrl": "2012/intro-to-google-sketchup"
                    },
                    {
                        "sessionId": 863,
                        "sessionUrl": "2012/intro-to-swig-for-perl-python-and-ruby"
                    },
                    {
                        "sessionId": 864,
                        "sessionUrl": "2012/restful-java-on-steroids-jax-rs-20"
                    },
                    {
                        "sessionId": 865,
                        "sessionUrl": "2012/create-a-branded-eclipse-ide"
                    },
                    {
                        "sessionId": 866,
                        "sessionUrl": "2012/writing-facebook-games-with-eclipse"
                    },
                    {
                        "sessionId": 867,
                        "sessionUrl": "2012/in-app-payments-with-html5"
                    },
                    {
                        "sessionId": 868,
                        "sessionUrl": "2012/seo"
                    },
                    {
                        "sessionId": 869,
                        "sessionUrl": "2012/build-a-wordpress-site-in-less-than-an-hour"
                    },
                    {
                        "sessionId": 870,
                        "sessionUrl": "2012/the-art-amp-science-of-managing-a-web-presence"
                    },
                    {
                        "sessionId": 871,
                        "sessionUrl": "2012/0-to-60-with-regular-expressions-in-75-minutes"
                    },
                    {
                        "sessionId": 872,
                        "sessionUrl": "2012/introducing-scala-to-your-javaruby-shop-my-experiences-at-ign"
                    },
                    {
                        "sessionId": 873,
                        "sessionUrl": "2012/kojo-programming-scala-for-grade-6-to-adult"
                    },
                    {
                        "sessionId": 874,
                        "sessionUrl": "2012/kubikulo"
                    },
                    {
                        "sessionId": 875,
                        "sessionUrl": "2012/building-rest-apis-using-aspnet-web-api"
                    },
                    {
                        "sessionId": 877,
                        "sessionUrl": "2012/moving-your-data-to-the-cloud"
                    },
                    {
                        "sessionId": 878,
                        "sessionUrl": "2012/from-code-to-product-to-market-to-business---fast-bootstrapping"
                    },
                    {
                        "sessionId": 879,
                        "sessionUrl": "2012/high-performance-sql-applications-using-in-memory-database-technology"
                    },
                    {
                        "sessionId": 880,
                        "sessionUrl": "2012/intentional-code"
                    },
                    {
                        "sessionId": 881,
                        "sessionUrl": "2012/where-the-dot-are-domain-names-going"
                    },
                    {
                        "sessionId": 882,
                        "sessionUrl": "2012/the-foss-paas-openshift---your-language-your-datastore-and-your-application"
                    },
                    {
                        "sessionId": 883,
                        "sessionUrl": "2012/select-this-css3-selectors"
                    },
                    {
                        "sessionId": 884,
                        "sessionUrl": "2012/ios-app-development-with-stackmob"
                    },
                    {
                        "sessionId": 885,
                        "sessionUrl": "2012/internationalizing-javascript-applications"
                    },
                    {
                        "sessionId": 886,
                        "sessionUrl": "2012/javascript-html5-web-apps-adding-server-side-persistence-and-more-in-minute"
                    },
                    {
                        "sessionId": 887,
                        "sessionUrl": "2012/mercurial-beyond-cloning-and-committing"
                    },
                    {
                        "sessionId": 888,
                        "sessionUrl": "2012/hands-on-web-application-development-with-play-framework-20"
                    },
                    {
                        "sessionId": 889,
                        "sessionUrl": "2012/emberjs-and-handlebarsjs-deep-dive---modern-frontend-application-hotness"
                    },
                    {
                        "sessionId": 890,
                        "sessionUrl": "2012/diving-in-to-play-20---awesome-web-applications-with-scala"
                    },
                    {
                        "sessionId": 891,
                        "sessionUrl": "2012/composable-futures-with-akka-20"
                    },
                    {
                        "sessionId": 892,
                        "sessionUrl": "2012/for-those-about-to-mock"
                    },
                    {
                        "sessionId": 893,
                        "sessionUrl": "2012/what-is-python"
                    },
                    {
                        "sessionId": 894,
                        "sessionUrl": "2012/introduction-to-dart"
                    },
                    {
                        "sessionId": 895,
                        "sessionUrl": "2012/big-data-and-no-sql-landscape"
                    },
                    {
                        "sessionId": 896,
                        "sessionUrl": "2012/oracle-sql-performance-analysis"
                    },
                    {
                        "sessionId": 897,
                        "sessionUrl": "2012/javafx-and-scala-like-milk-and-cookies"
                    },
                    {
                        "sessionId": 898,
                        "sessionUrl": "2012/futureliving-apply-software-development-principles-to-dwelling-environments"
                    },
                    {
                        "sessionId": 899,
                        "sessionUrl": "2012/web-goal-management-manage-your-life-web-based-integrated-goal-time-project"
                    },
                    {
                        "sessionId": 900,
                        "sessionUrl": "2012/rest-api-and-electronic-signatures"
                    },
                    {
                        "sessionId": 902,
                        "sessionUrl": "2012/the-art-and-science-of-dashboard-design"
                    },
                    {
                        "sessionId": 903,
                        "sessionUrl": "2012/create-once-deploy-everywhere"
                    },
                    {
                        "sessionId": 904,
                        "sessionUrl": "2012/web-applications-made-easy-with-grails"
                    },
                    {
                        "sessionId": 905,
                        "sessionUrl": "2012/css3-and-html5---all-you-wanted-to-know-about-responsive-web-design"
                    },
                    {
                        "sessionId": 906,
                        "sessionUrl": "2012/building-a-home-security-system-with-java"
                    },
                    {
                        "sessionId": 907,
                        "sessionUrl": "2012/the-five-factors-of-high-performance-product-teams"
                    },
                    {
                        "sessionId": 909,
                        "sessionUrl": "2012/python-as-a-gateway-to-functional-programming"
                    },
                    {
                        "sessionId": 910,
                        "sessionUrl": "2012/velocity-marketing---growth-hackers-try-and-buy-freemium-oh-my"
                    },
                    {
                        "sessionId": 911,
                        "sessionUrl": "2012/debugging-amp-troubleshooting-distributed-web-amp-cloud-applications"
                    },
                    {
                        "sessionId": 912,
                        "sessionUrl": "2012/cut-your-dependencies-with-dependency-injection"
                    },
                    {
                        "sessionId": 913,
                        "sessionUrl": "2012/bumblebee-an-artificial-bee-colony-algorithm-in-f"
                    },
                    {
                        "sessionId": 914,
                        "sessionUrl": "2012/enterprise-javabeans-today-and-tomorrow"
                    },
                    {
                        "sessionId": 915,
                        "sessionUrl": "2012/backbonejs-jquery-mobile-awesomesauce"
                    },
                    {
                        "sessionId": 916,
                        "sessionUrl": "2012/griffon-jumpstart"
                    },
                    {
                        "sessionId": 917,
                        "sessionUrl": "2012/introduction-to-monotouch---c-on-ios"
                    },
                    {
                        "sessionId": 918,
                        "sessionUrl": "2012/introduction-to-servicestacknet---rapid-soa-web-service-framework"
                    },
                    {
                        "sessionId": 919,
                        "sessionUrl": "2012/building-open-data-odata-cloud-services-and-apps-using-lightswitch"
                    },
                    {
                        "sessionId": 920,
                        "sessionUrl": "2012/intro-to-windows-8-development-using-winjs-and-javascript"
                    },
                    {
                        "sessionId": 921,
                        "sessionUrl": "2012/win8-dev---who-moved-my-start-button"
                    },
                    {
                        "sessionId": 923,
                        "sessionUrl": "2012/building-business-apps-for-mobile-devices"
                    },
                    {
                        "sessionId": 924,
                        "sessionUrl": "2012/the-art-of-raising-capital-for-technology-startup-leaders"
                    },
                    {
                        "sessionId": 925,
                        "sessionUrl": "2012/sql-server-basic-performance-tips-and-gotchas-for-beginners"
                    },
                    {
                        "sessionId": 926,
                        "sessionUrl": "2012/building-and-sharing-beautiful-maps-with-arcgis-online"
                    },
                    {
                        "sessionId": 927,
                        "sessionUrl": "2012/intro-to-quick-web-application-builder-qwab-with-php"
                    },
                    {
                        "sessionId": 928,
                        "sessionUrl": "2012/understanding-webkit-rendering"
                    },
                    {
                        "sessionId": 930,
                        "sessionUrl": "2012/introduction-to-advanced-net-debugging"
                    },
                    {
                        "sessionId": 931,
                        "sessionUrl": "2012/generic-programming-in-c-a-real-world-example"
                    },
                    {
                        "sessionId": 932,
                        "sessionUrl": "2012/an-introduction-to-building-mobile-html5-apps-with-sencha-architect"
                    },
                    {
                        "sessionId": 933,
                        "sessionUrl": "2012/sencha-html5-stack-walkthrough"
                    },
                    {
                        "sessionId": 934,
                        "sessionUrl": "2012/overview-of-the-current-state-of-mobile-html5"
                    },
                    {
                        "sessionId": 936,
                        "sessionUrl": "2012/intro-to-mobile-development-for-web-ios-amp-android-native-apps-using-phone"
                    },
                    {
                        "sessionId": 937,
                        "sessionUrl": "2012/project-easel---developing-and-managing-html5-in-a-java-world"
                    },
                    {
                        "sessionId": 938,
                        "sessionUrl": "2012/from-monads-to-applicative-programming"
                    },
                    {
                        "sessionId": 939,
                        "sessionUrl": "2012/the-process-improvement-challenge"
                    },
                    {
                        "sessionId": 940,
                        "sessionUrl": "2012/c11-rvalue-references-move-semantics-and-perfect-forwarding"
                    },
                    {
                        "sessionId": 941,
                        "sessionUrl": "2012/introduction-to-native-ios-development-for-net-developers"
                    },
                    {
                        "sessionId": 942,
                        "sessionUrl": "2012/working-for-equity-startup-ceos-share-lessons-learned"
                    },
                    {
                        "sessionId": 943,
                        "sessionUrl": "2012/creating-your-own-google-street-view-hands-on"
                    },
                    {
                        "sessionId": 944,
                        "sessionUrl": "2012/cracking-the-coding-interview"
                    },
                    {
                        "sessionId": 945,
                        "sessionUrl": "2012/improving-your-net-build-process-with-nant-and-cruisecontrolnet"
                    },
                    {
                        "sessionId": 946,
                        "sessionUrl": "2012/rational-decision-making-for-engineers"
                    },
                    {
                        "sessionId": 947,
                        "sessionUrl": "2012/html5-session-1-css3-and-cool-new-features"
                    },
                    {
                        "sessionId": 948,
                        "sessionUrl": "2012/nodejs-on-windows-azure"
                    },
                    {
                        "sessionId": 949,
                        "sessionUrl": "2012/logic-paradigm-for-c-part-1"
                    },
                    {
                        "sessionId": 950,
                        "sessionUrl": "2012/anti-patterns-that-stifle-lean-ux"
                    },
                    {
                        "sessionId": 951,
                        "sessionUrl": "2012/scalaz-the-easy-parts"
                    },
                    {
                        "sessionId": 952,
                        "sessionUrl": "2012/exception-safe-coding-in-c-part-i"
                    },
                    {
                        "sessionId": 953,
                        "sessionUrl": "2012/windows-cloud-walkthrough-with-microsofts-scott-guthrie-vp-server-amp-tools"
                    },
                    {
                        "sessionId": 954,
                        "sessionUrl": "2012/windows-cloud-walkthrough-with-microsofts-scott-guthrie-vp-server-amp-tools"
                    },
                    {
                        "sessionId": 955,
                        "sessionUrl": "2012/zen-of-architecture"
                    },
                    {
                        "sessionId": 956,
                        "sessionUrl": "2012/service-oriented-development-process"
                    },
                    {
                        "sessionId": 957,
                        "sessionUrl": "2012/leveraging-java-ee-7-and-the-cloud-with-javafx"
                    },
                    {
                        "sessionId": 960,
                        "sessionUrl": "2012/amqp-in-production-building-and-scaling-high-performance-compute-clusters"
                    },
                    {
                        "sessionId": 961,
                        "sessionUrl": "2012/scala-for-java-developers"
                    },
                    {
                        "sessionId": 962,
                        "sessionUrl": "2012/what39s-new-in-cloud-foundry"
                    },
                    {
                        "sessionId": 963,
                        "sessionUrl": "2012/cross-platform-gui-automation"
                    },
                    {
                        "sessionId": 964,
                        "sessionUrl": "2012/exception-safe-coding-in-c-part-ii"
                    },
                    {
                        "sessionId": 965,
                        "sessionUrl": "2012/html5-session-2-html5-canvas-media-and-mobile"
                    },
                    {
                        "sessionId": 966,
                        "sessionUrl": "2012/html5-session-3-html5-websockets-spdy-sse-and-nodejs"
                    },
                    {
                        "sessionId": 967,
                        "sessionUrl": "2012/artificial-intelligence-meets-humanoid-warriors"
                    },
                    {
                        "sessionId": 968,
                        "sessionUrl": "2012/introduction-to-nodejs-on-vmware39s-cloud-foundry"
                    },
                    {
                        "sessionId": 969,
                        "sessionUrl": "2012/introduction-to-gpgpu-and-manycore-systems-programming"
                    },
                    {
                        "sessionId": 970,
                        "sessionUrl": "2012/accelerate-your-paas-to-the-mobile-world"
                    },
                    {
                        "sessionId": 971,
                        "sessionUrl": "2012/android-innovation-home-sweet-home"
                    },
                    {
                        "sessionId": 972,
                        "sessionUrl": "2012/windows-8-amp-windows-phone-xna-graphics-and-sensor-integration"
                    },
                    {
                        "sessionId": 973,
                        "sessionUrl": "2012/ready-to-make-some-money-windows-8-is-coming"
                    },
                    {
                        "sessionId": 976,
                        "sessionUrl": "2012/50-tips-in-50-minutes-for-glassfish-fans"
                    },
                    {
                        "sessionId": 977,
                        "sessionUrl": "2012/create-magical-apps-and-engage-your-audience-using-youtube-and-the-youtube"
                    },
                    {
                        "sessionId": 980,
                        "sessionUrl": "2012/learn-to-love-lambdas"
                    },
                    {
                        "sessionId": 981,
                        "sessionUrl": "2012/get-funcltgt-y-delegates-in-net"
                    },
                    {
                        "sessionId": 982,
                        "sessionUrl": "2012/how-to-become-an-online-influencer"
                    },
                    {
                        "sessionId": 983,
                        "sessionUrl": "2012/c11-idioms"
                    },
                    {
                        "sessionId": 984,
                        "sessionUrl": "2012/crash-course-managing-software-people-and-teams"
                    },
                    {
                        "sessionId": 985,
                        "sessionUrl": "2012/modeling-in-the-nosql-world"
                    },
                    {
                        "sessionId": 988,
                        "sessionUrl": "2012/everything-is-social-and-so-can-you"
                    },
                    {
                        "sessionId": 989,
                        "sessionUrl": "2012/an-introduction-to-the-managed-extensibility-framework-mef-in-net-4-part-1"
                    },
                    {
                        "sessionId": 990,
                        "sessionUrl": "2012/extending-the-android-sdk-with-add-ons-featuring-htc39s-add-on"
                    },
                    {
                        "sessionId": 991,
                        "sessionUrl": "2012/azure-for-developers"
                    },
                    {
                        "sessionId": 992,
                        "sessionUrl": "2012/azure-cloud-storage-for-everyone"
                    },
                    {
                        "sessionId": 993,
                        "sessionUrl": "2012/threads-and-shared-variables-in-c11"
                    },
                    {
                        "sessionId": 994,
                        "sessionUrl": "2012/one-sweet-stack-odata-to-windows-8"
                    },
                    {
                        "sessionId": 995,
                        "sessionUrl": "2012/windows-8-design"
                    },
                    {
                        "sessionId": 996,
                        "sessionUrl": "2012/advanced-windows-8-app-development-with-javascript"
                    },
                    {
                        "sessionId": 997,
                        "sessionUrl": "2012/bug-trackers-do-they-really-all-suck"
                    },
                    {
                        "sessionId": 998,
                        "sessionUrl": "2012/logic-paradigm-for-c-part-2"
                    },
                    {
                        "sessionId": 999,
                        "sessionUrl": "2012/quotundo-power-failquot---how-to-implement-unlimited-persistent-undo"
                    },
                    {
                        "sessionId": 1000,
                        "sessionUrl": "2012/azure-overview"
                    },
                    {
                        "sessionId": 1001,
                        "sessionUrl": "2012/integrating-sharepoint-2010-and-windows-azure"
                    },
                    {
                        "sessionId": 1002,
                        "sessionUrl": "2012/windows-8-development-with-c-the-return-of-the-native"
                    },
                    {
                        "sessionId": 1003,
                        "sessionUrl": "2012/evolving-the-face-of-software-craftsmanship-with-performance-profiling-and"
                    },
                    {
                        "sessionId": 1004,
                        "sessionUrl": "2012/why-the-microsoft-cloud-is-a-great-choice-for-ios-android-windows-phone-win"
                    },
                    {
                        "sessionId": 1005,
                        "sessionUrl": "2012/the-proper-care-and-feeding-of-a-mysql-database-for-linux-administrators"
                    },
                    {
                        "sessionId": 1007,
                        "sessionUrl": "2012/do-you-c-what-i-c-the-resurgence-of-native-application-development-with-cc"
                    },
                    {
                        "sessionId": 1008,
                        "sessionUrl": "2012/building-a-windows-8-app-from-scratch"
                    },
                    {
                        "sessionId": 1009,
                        "sessionUrl": "2012/mobile-accessibility---ios-android-and-mobile-web"
                    },
                    {
                        "sessionId": 1010,
                        "sessionUrl": "2012/the-business-of-making-amp-selling-iphone-and-android-apps"
                    },
                    {
                        "sessionId": 1011,
                        "sessionUrl": "2012/decomposing-applications-for-scalability-and-deployability"
                    },
                    {
                        "sessionId": 1012,
                        "sessionUrl": "2012/net-meets-a-multi-core-world"
                    },
                    {
                        "sessionId": 1013,
                        "sessionUrl": "2012/why-friends-of-friends-matters-applying-graph-databases-to-much-more-than-s"
                    },
                    {
                        "sessionId": 1014,
                        "sessionUrl": "2012/who-needs-amazonrun-your-own-data-center-and-heres-why"
                    },
                    {
                        "sessionId": 1015,
                        "sessionUrl": "2012/mysql-is-the-new-nosql-noreally"
                    },
                    {
                        "sessionId": 1016,
                        "sessionUrl": "2012/how-to-build-a-mobile-app-in-less-than-30-minutes"
                    },
                    {
                        "sessionId": 1017,
                        "sessionUrl": "2012/smarter-testing-with-spock"
                    },
                    {
                        "sessionId": 1019,
                        "sessionUrl": "2012/sql-tdd"
                    },
                    {
                        "sessionId": 1020,
                        "sessionUrl": "2012/sql-design-patterns"
                    },
                    {
                        "sessionId": 1021,
                        "sessionUrl": "2012/communication-patterns-using-data-centric-publish-subscribe"
                    },
                    {
                        "sessionId": 1022,
                        "sessionUrl": "2012/rocking-the-gradle"
                    },
                    {
                        "sessionId": 1023,
                        "sessionUrl": "2012/building-beautiful-and-interactive-windows-8-apps-with-javascript-html5-amp"
                    },
                    {
                        "sessionId": 1024,
                        "sessionUrl": "2012/implementing-m-v-vm-model-view-viewmodel-in-wpf"
                    },
                    {
                        "sessionId": 1025,
                        "sessionUrl": "2012/lessons-learned-being-agile-in-a-waterfall-world"
                    },
                    {
                        "sessionId": 1026,
                        "sessionUrl": "2012/improving-the-performance-of-tpt-mapping-in-ef"
                    },
                    {
                        "sessionId": 1027,
                        "sessionUrl": "2012/tips-for-building-fast-multi-touch-enabled-web-sites"
                    },
                    {
                        "sessionId": 1028,
                        "sessionUrl": "2012/mysql-developer-essentials-with-php-java-and-net"
                    },
                    {
                        "sessionId": 1029,
                        "sessionUrl": "2012/atampt-api-platform-making-it-work-for-you"
                    },
                    {
                        "sessionId": 1030,
                        "sessionUrl": "2012/practical-html5-using-it-today"
                    },
                    {
                        "sessionId": 1031,
                        "sessionUrl": "2012/aspnet-mvc-using-kendo-ui-and-the-mvvm-pattern"
                    },
                    {
                        "sessionId": 1034,
                        "sessionUrl": "2012/for-new-managers-learn-how-to-be-a-good-boss"
                    },
                    {
                        "sessionId": 1035,
                        "sessionUrl": "2012/designing-an-iosobjective-c-api-wrapper-for-trello"
                    },
                    {
                        "sessionId": 1036,
                        "sessionUrl": "2012/recruiting-hacks-for-engineers---how-to-hire-the-best-team-imaginable"
                    },
                    {
                        "sessionId": 1037,
                        "sessionUrl": "2012/creating-a-culture-of-quality-in-quickly-growing-companies"
                    },
                    {
                        "sessionId": 1039,
                        "sessionUrl": "2012/solid-design-principles-and-patterns"
                    },
                    {
                        "sessionId": 1040,
                        "sessionUrl": "2012/introducing-the-clang-c-compiler"
                    },
                    {
                        "sessionId": 1041,
                        "sessionUrl": "2012/building-massive-scale-fault-tolerant-job-processing-systems-with-scala-akk"
                    },
                    {
                        "sessionId": 1042,
                        "sessionUrl": "2012/scala-ble-deployment-manager"
                    },
                    {
                        "sessionId": 1044,
                        "sessionUrl": "2012/mysql-replication"
                    },
                    {
                        "sessionId": 1045,
                        "sessionUrl": "2012/intellectual-property-basics-practice-and-pitfalls-for-the-everyday-innovat"
                    },
                    {
                        "sessionId": 1046,
                        "sessionUrl": "2012/building-mobile-backends-with-google-app-engine"
                    },
                    {
                        "sessionId": 1048,
                        "sessionUrl": "2012/dynamic-c"
                    },
                    {
                        "sessionId": 1049,
                        "sessionUrl": "2012/google-apis-client-libraries-and-the-future"
                    },
                    {
                        "sessionId": 1050,
                        "sessionUrl": "2012/the-100-mistakes-you39ll-make-from-contributor-to-cto"
                    },
                    {
                        "sessionId": 1051,
                        "sessionUrl": "2012/google-tv---101"
                    },
                    {
                        "sessionId": 1052,
                        "sessionUrl": "2012/advanced-video-for-google-tv"
                    },
                    {
                        "sessionId": 1053,
                        "sessionUrl": "2012/quotintuit39s-open-source-mobile-automation-toolkitquot"
                    },
                    {
                        "sessionId": 1054,
                        "sessionUrl": "2012/architecture-for-scaling-java-applications-to-multiple-servers"
                    },
                    {
                        "sessionId": 1055,
                        "sessionUrl": "2012/scaling-java-applications-with-open-source-clustered-cache-cacheonix"
                    },
                    {
                        "sessionId": 1056,
                        "sessionUrl": "2012/monads-and-gonads"
                    },
                    {
                        "sessionId": 1057,
                        "sessionUrl": "2012/mobile-speech-recognition---creating-a-voice-driven-virtual-assistant"
                    },
                    {
                        "sessionId": 1058,
                        "sessionUrl": "2012/durable-api39s-to-access-data-from-financial-institutions"
                    },
                    {
                        "sessionId": 1060,
                        "sessionUrl": "2012/google-developers-and-education"
                    },
                    {
                        "sessionId": 1061,
                        "sessionUrl": "2012/spa-single-page-apps-in-javascript-knockout-and-breeze"
                    },
                    {
                        "sessionId": 1063,
                        "sessionUrl": "2012/opencloud-workshop-the-open-source-cloud-is-here"
                    },
                    {
                        "sessionId": 1064,
                        "sessionUrl": "2012/developing-for-windows-phone-and-windows-8"
                    },
                    {
                        "sessionId": 1065,
                        "sessionUrl": "2012/batteries-included-advantages-of-an-end-to-end-javascript-stack"
                    },
                    {
                        "sessionId": 1066,
                        "sessionUrl": "2012/wakandadb-an-object-relational-javascript-datastore"
                    },
                    {
                        "sessionId": 1067,
                        "sessionUrl": "2012/building-cross-platform-applications-with-adobe-phonegap"
                    },
                    {
                        "sessionId": 1068,
                        "sessionUrl": "2012/working-with-functional-data-structures-practical-f-application"
                    },
                    {
                        "sessionId": 1069,
                        "sessionUrl": "2012/mvvm-distilled-javascript"
                    },
                    {
                        "sessionId": 1070,
                        "sessionUrl": "2012/0-to-60-with-apps-for-office-and-sharepoint-2013-using-napa-and-visual-stud"
                    },
                    {
                        "sessionId": 1071,
                        "sessionUrl": "2012/combine-the-power-of-win8-and-windows-azure-cloud-to-modenize-traditional-l"
                    },
                    {
                        "sessionId": 1072,
                        "sessionUrl": "2012/server-sent-events-async-servlet-websocket-and-json-born-to-work-together"
                    },
                    {
                        "sessionId": 1073,
                        "sessionUrl": "2012/building-products-for-the-responsive-future"
                    },
                    {
                        "sessionId": 1081,
                        "sessionUrl": "2013/monads-of-doom-arrows-of-time"
                    },
                    {
                        "sessionId": 1082,
                        "sessionUrl": "2013/the-future-of-javascript-language-tooling"
                    },
                    {
                        "sessionId": 1083,
                        "sessionUrl": "2013/create-influence-on-demand"
                    },
                    {
                        "sessionId": 1084,
                        "sessionUrl": "2013/decoding-search-optimization-jungle-applying-to-the-real-world-seo-basic"
                    },
                    {
                        "sessionId": 1085,
                        "sessionUrl": "2013/introduction-to-bitcoin"
                    },
                    {
                        "sessionId": 1086,
                        "sessionUrl": "2013/cracking-the-coding-interview-advice-for-devs-and-pm-interviews"
                    },
                    {
                        "sessionId": 1088,
                        "sessionUrl": "2013/create-stunning-data-visualization-in-html5-with-d3"
                    },
                    {
                        "sessionId": 1089,
                        "sessionUrl": "2013/data-analysis-jumpstart"
                    },
                    {
                        "sessionId": 1090,
                        "sessionUrl": "2013/overloading-in-overdrive-a-generic-data-centric-messaging-library-for-dds"
                    },
                    {
                        "sessionId": 1091,
                        "sessionUrl": "2013/semantic-spend-classification"
                    },
                    {
                        "sessionId": 1092,
                        "sessionUrl": "2013/scala-for-java-developers"
                    },
                    {
                        "sessionId": 1093,
                        "sessionUrl": "2013/f-for-the-c-developer"
                    },
                    {
                        "sessionId": 1095,
                        "sessionUrl": "2013/velocity-comes-from-emergent-design"
                    },
                    {
                        "sessionId": 1096,
                        "sessionUrl": "2013/creating-html5-mobile-apps-with-css3"
                    },
                    {
                        "sessionId": 1097,
                        "sessionUrl": "2013/scalable-systems-using-rest-based-micro-services"
                    },
                    {
                        "sessionId": 1098,
                        "sessionUrl": "2013/different-style-apis-for-different-audiences"
                    },
                    {
                        "sessionId": 1099,
                        "sessionUrl": "2013/stop-looking-for-a-technical-cofounder-and-just-do-it"
                    },
                    {
                        "sessionId": 1100,
                        "sessionUrl": "2013/fantastic-features"
                    },
                    {
                        "sessionId": 1101,
                        "sessionUrl": "2013/sprint-rhythm"
                    },
                    {
                        "sessionId": 1102,
                        "sessionUrl": "2013/hacking-media-production"
                    },
                    {
                        "sessionId": 1103,
                        "sessionUrl": "2013/how-biz-dev-and-marketing-opportunities-impact-a-startups-product-roadmap"
                    },
                    {
                        "sessionId": 1104,
                        "sessionUrl": "2013/who-are-your-customers"
                    },
                    {
                        "sessionId": 1105,
                        "sessionUrl": "2013/scale-oriented-architecture-services-deconstructed"
                    },
                    {
                        "sessionId": 1106,
                        "sessionUrl": "2013/mastering-visual-studio-2012"
                    },
                    {
                        "sessionId": 1112,
                        "sessionUrl": "2013/a-sql-server-performance-warehouse-using-the-ssas-tabular-model"
                    },
                    {
                        "sessionId": 1113,
                        "sessionUrl": "2013/working-for-equity-startup-ceo-panel"
                    },
                    {
                        "sessionId": 1114,
                        "sessionUrl": "2013/fleksy-and-the-fleksy-sdk"
                    },
                    {
                        "sessionId": 1115,
                        "sessionUrl": "2013/game-making-in-haskell---part-1"
                    },
                    {
                        "sessionId": 1117,
                        "sessionUrl": "2013/fun-with-tuples"
                    },
                    {
                        "sessionId": 1118,
                        "sessionUrl": "2013/implementing-m-v-vm-in-winjs"
                    },
                    {
                        "sessionId": 1119,
                        "sessionUrl": "2013/emerging-trends-and-factors-impacting-product-teams"
                    },
                    {
                        "sessionId": 1120,
                        "sessionUrl": "2013/intro-to-relational-database-design-entity-relationship-diagrams"
                    },
                    {
                        "sessionId": 1121,
                        "sessionUrl": "2013/newman-a-functional-rest-client-in-scala"
                    },
                    {
                        "sessionId": 1122,
                        "sessionUrl": "2013/game-making-in-haskell---part-2"
                    },
                    {
                        "sessionId": 1123,
                        "sessionUrl": "2013/building-apps-with-backbonejs-and-requirejs"
                    },
                    {
                        "sessionId": 1124,
                        "sessionUrl": "2013/polyglot-spatial-with-mongodb"
                    },
                    {
                        "sessionId": 1125,
                        "sessionUrl": "2013/advanced-data-modeling-with-entity-relationship-diagrams"
                    },
                    {
                        "sessionId": 1128,
                        "sessionUrl": "2013/building-a-google-glass-app-with-wakanda"
                    },
                    {
                        "sessionId": 1129,
                        "sessionUrl": "2013/dependency-injection-a-practical-introduction-with-samples-in-c"
                    },
                    {
                        "sessionId": 1130,
                        "sessionUrl": "2013/clean-code-homicidal-maniacs-read-code-too"
                    },
                    {
                        "sessionId": 1131,
                        "sessionUrl": "2013/50-new-features-of-java-ee-7-in-50-minutes"
                    },
                    {
                        "sessionId": 1133,
                        "sessionUrl": "2013/developing-polyglot-persistence-applications"
                    },
                    {
                        "sessionId": 1134,
                        "sessionUrl": "2013/and-now-the-rest-of-the-story-using-aspnet-web-api-to-create-restful-servic"
                    },
                    {
                        "sessionId": 1136,
                        "sessionUrl": "2013/consuming-web-services-asynchronously-with-futures-and-rx-observables"
                    },
                    {
                        "sessionId": 1137,
                        "sessionUrl": "2013/hands-on-with-backbonejs-and-requirejs"
                    },
                    {
                        "sessionId": 1138,
                        "sessionUrl": "2013/total-life-management-web-based-integrated-goal-time-project-management"
                    },
                    {
                        "sessionId": 1139,
                        "sessionUrl": "2013/wearable-technology-is-the-next-big-thing"
                    },
                    {
                        "sessionId": 1140,
                        "sessionUrl": "2013/future-living-apply-software-development-principles-to-dwelling-spaces"
                    },
                    {
                        "sessionId": 1141,
                        "sessionUrl": "2013/system-performance---what-to-optimize"
                    },
                    {
                        "sessionId": 1142,
                        "sessionUrl": "2013/blogging-fuel-for-the-seo-engine"
                    },
                    {
                        "sessionId": 1144,
                        "sessionUrl": "2013/getting-restless-with-meteor-and-mongodb-in-the-browser"
                    },
                    {
                        "sessionId": 1147,
                        "sessionUrl": "2013/3-ways-you-can-give-and-get-good-design-feedback"
                    },
                    {
                        "sessionId": 1148,
                        "sessionUrl": "2013/advanced-windows-phone-development"
                    },
                    {
                        "sessionId": 1150,
                        "sessionUrl": "2013/iis-choose-your-own-adventure"
                    },
                    {
                        "sessionId": 1151,
                        "sessionUrl": "2013/12-take-aways-managing-the-unmanageable"
                    },
                    {
                        "sessionId": 1152,
                        "sessionUrl": "2013/monoids-for-regular-programmers"
                    },
                    {
                        "sessionId": 1153,
                        "sessionUrl": "2013/type-classes-in-scala-explained"
                    },
                    {
                        "sessionId": 1154,
                        "sessionUrl": "2013/tcpip-networking-for-developers"
                    },
                    {
                        "sessionId": 1155,
                        "sessionUrl": "2013/agile-at-enterprise-scale-the-tricky-bits"
                    },
                    {
                        "sessionId": 1157,
                        "sessionUrl": "2013/the-art-of-raising-capital-for-your-tech-startup"
                    },
                    {
                        "sessionId": 1158,
                        "sessionUrl": "2013/con1170---improving-mysql-performance-with-hadoop"
                    },
                    {
                        "sessionId": 1159,
                        "sessionUrl": "2013/building-html5-based-business-apps-on-azure-with-visual-studio-lightswitch"
                    },
                    {
                        "sessionId": 1160,
                        "sessionUrl": "2013/start-your-own-business-today"
                    },
                    {
                        "sessionId": 1161,
                        "sessionUrl": "2013/scripting-with-powershell-version-30"
                    },
                    {
                        "sessionId": 1162,
                        "sessionUrl": "2013/functional-programming-on-the-jvm-with-clojure"
                    },
                    {
                        "sessionId": 1164,
                        "sessionUrl": "2013/introduction-to-windows-azure-infrastructure-services"
                    },
                    {
                        "sessionId": 1166,
                        "sessionUrl": "2013/how-to-find-name-and-protect-your-software-title"
                    },
                    {
                        "sessionId": 1167,
                        "sessionUrl": "2013/startup-funding-vcs-investors-getting-a-sweet-deal"
                    },
                    {
                        "sessionId": 1168,
                        "sessionUrl": "2013/pidoorbell---home-automation-with-raspberrypi-and-arduino"
                    },
                    {
                        "sessionId": 1171,
                        "sessionUrl": "2013/fight-the-empire-lightweightly-with-html5-websockets-serversentevents-o"
                    },
                    {
                        "sessionId": 1172,
                        "sessionUrl": "2013/5-reasons-content-first-will-save-your-butt"
                    },
                    {
                        "sessionId": 1173,
                        "sessionUrl": "2013/business-models-and-value-generation"
                    },
                    {
                        "sessionId": 1174,
                        "sessionUrl": "2013/keyword-research-under-a-microscope-advanced-seo-techniques"
                    },
                    {
                        "sessionId": 1175,
                        "sessionUrl": "2013/branches-and-merges-are-bears-oh-my"
                    },
                    {
                        "sessionId": 1176,
                        "sessionUrl": "2013/angularjs-and-the-single-page-application-spa"
                    },
                    {
                        "sessionId": 1177,
                        "sessionUrl": "2013/faster-responsive-design-with-javascript-and-foundation"
                    },
                    {
                        "sessionId": 1178,
                        "sessionUrl": "2013/3-ways-to-go-mobile-first-with-responsive-design"
                    },
                    {
                        "sessionId": 1179,
                        "sessionUrl": "2013/developing-office-365-cloud-business-apps-with-visual-studio-2013"
                    },
                    {
                        "sessionId": 1180,
                        "sessionUrl": "2013/basics-of-building-business-applications-in-wpf-using-code-framework"
                    },
                    {
                        "sessionId": 1181,
                        "sessionUrl": "2013/protecting-your-softwares-intellectual-property"
                    },
                    {
                        "sessionId": 1182,
                        "sessionUrl": "2013/aws-for-the-sql-server-pro"
                    },
                    {
                        "sessionId": 1183,
                        "sessionUrl": "2013/nodejs-in-the-enterprise"
                    },
                    {
                        "sessionId": 1185,
                        "sessionUrl": "2013/securing-restful-apis-using-oauth-2-and-openid-connect"
                    },
                    {
                        "sessionId": 1186,
                        "sessionUrl": "2013/handson-workshop-for-better-unit-testing"
                    },
                    {
                        "sessionId": 1187,
                        "sessionUrl": "2013/retro-gaming-with-lambdas"
                    },
                    {
                        "sessionId": 1188,
                        "sessionUrl": "2013/kojo-programming-for-kids"
                    },
                    {
                        "sessionId": 1189,
                        "sessionUrl": "2013/python-programming-for-kids"
                    },
                    {
                        "sessionId": 1190,
                        "sessionUrl": "2013/debuggingtroubleshooting-monitoring-distributed-web-cloud-applications"
                    },
                    {
                        "sessionId": 1191,
                        "sessionUrl": "2013/clean-code---design-patterns-and-best-practices"
                    },
                    {
                        "sessionId": 1192,
                        "sessionUrl": "2013/the-death-of-the-page-refresh-real-time-web-messaging-with-signalr"
                    },
                    {
                        "sessionId": 1193,
                        "sessionUrl": "2013/paas-vs-aws-vs-colocation"
                    },
                    {
                        "sessionId": 1194,
                        "sessionUrl": "2013/automating-the-complete-software-development-life-cycle---a-devops-approach"
                    },
                    {
                        "sessionId": 1195,
                        "sessionUrl": "2013/continuous-delivery-using-github-cloudmunch-aws-cloud-formation"
                    },
                    {
                        "sessionId": 1197,
                        "sessionUrl": "2013/adventures-with-arduino"
                    },
                    {
                        "sessionId": 1198,
                        "sessionUrl": "2013/fun-with-functions-part-1"
                    },
                    {
                        "sessionId": 1199,
                        "sessionUrl": "2013/fun-with-functions-part-2"
                    },
                    {
                        "sessionId": 1200,
                        "sessionUrl": "2013/0-to-60-with-regular-expressions-in-75-minutes"
                    },
                    {
                        "sessionId": 1201,
                        "sessionUrl": "2013/rock-your-net-coding-standards"
                    },
                    {
                        "sessionId": 1203,
                        "sessionUrl": "2013/rock-your-technical-interview-part-1"
                    },
                    {
                        "sessionId": 1204,
                        "sessionUrl": "2013/removing-impediments"
                    },
                    {
                        "sessionId": 1206,
                        "sessionUrl": "2013/agile-an-experiential-introduction"
                    },
                    {
                        "sessionId": 1207,
                        "sessionUrl": "2013/get-on-the-bus"
                    },
                    {
                        "sessionId": 1208,
                        "sessionUrl": "2013/deconstructing-the-code-for-product-excellence"
                    },
                    {
                        "sessionId": 1209,
                        "sessionUrl": "2013/unit-testing-aspnet-mvc"
                    },
                    {
                        "sessionId": 1211,
                        "sessionUrl": "2013/introduction-to-the-youtube-apis"
                    },
                    {
                        "sessionId": 1212,
                        "sessionUrl": "2013/learn-javascripthtml5-by-modeling-and-solving-rubiks-cube"
                    },
                    {
                        "sessionId": 1213,
                        "sessionUrl": "2013/introduction-to-typescript-application-scale-javascript"
                    },
                    {
                        "sessionId": 1215,
                        "sessionUrl": "2013/self-service-build-and-deployment-at-netflix"
                    },
                    {
                        "sessionId": 1216,
                        "sessionUrl": "2013/windows-azure-in-real-life"
                    },
                    {
                        "sessionId": 1217,
                        "sessionUrl": "2013/put-your-website-in-the-cloud"
                    },
                    {
                        "sessionId": 1218,
                        "sessionUrl": "2013/launching-a-line-of-business-infrastructure-with-azure"
                    },
                    {
                        "sessionId": 1219,
                        "sessionUrl": "2013/are-you-an-underpaid-developer-earn-more-by-going-independent"
                    },
                    {
                        "sessionId": 1220,
                        "sessionUrl": "2013/build-a-wordpress-blog-and-photo-gallery-site-in-60-minutes"
                    },
                    {
                        "sessionId": 1221,
                        "sessionUrl": "2013/easy-windows-8-game-dev-with-scirra-construct2"
                    },
                    {
                        "sessionId": 1228,
                        "sessionUrl": "2013/building-beautiful-maps-for-your-applications-with-arcgis-online"
                    },
                    {
                        "sessionId": 1229,
                        "sessionUrl": "2013/continuous-integration-continuous-deployment-and-your-databases"
                    },
                    {
                        "sessionId": 1230,
                        "sessionUrl": "2013/developing-nuget"
                    },
                    {
                        "sessionId": 1231,
                        "sessionUrl": "2013/advanced-windows-8-development-using-htmljs"
                    },
                    {
                        "sessionId": 1233,
                        "sessionUrl": "2013/scratching-the-surface-with-javafx"
                    },
                    {
                        "sessionId": 1234,
                        "sessionUrl": "2013/exploring-javafx-3d"
                    },
                    {
                        "sessionId": 1235,
                        "sessionUrl": "2013/designing-a-beautiful-restjson-api"
                    },
                    {
                        "sessionId": 1236,
                        "sessionUrl": "2013/exploring-accessories-and-wearables-from-ble-to-google-glass-and-beyond-wit"
                    },
                    {
                        "sessionId": 1237,
                        "sessionUrl": "2013/how-to-develop-on-the-raspberry-pi-with-java-se-embedded"
                    },
                    {
                        "sessionId": 1238,
                        "sessionUrl": "2013/responsive-re-engineering"
                    },
                    {
                        "sessionId": 1239,
                        "sessionUrl": "2013/using-task-queues-and-d3js-to-build-an-analytics-product-on-app-engine"
                    },
                    {
                        "sessionId": 1240,
                        "sessionUrl": "2013/mv-javascript-librariies"
                    },
                    {
                        "sessionId": 1241,
                        "sessionUrl": "2013/sql-server-tips-tricks"
                    },
                    {
                        "sessionId": 1242,
                        "sessionUrl": "2013/real-world-angularjs"
                    },
                    {
                        "sessionId": 1243,
                        "sessionUrl": "2013/what-to-do-when-wpf-is-too-slow-or-how-create-displays-using-directx-and-wp"
                    },
                    {
                        "sessionId": 1244,
                        "sessionUrl": "2013/simple-sentiment-analysis-using-solr"
                    },
                    {
                        "sessionId": 1245,
                        "sessionUrl": "2013/javascript-for-aspnet-developers"
                    },
                    {
                        "sessionId": 1246,
                        "sessionUrl": "2013/developing-java-mapreduce-jobs-for-hadoop"
                    },
                    {
                        "sessionId": 1247,
                        "sessionUrl": "2013/net-meets-a-multicore-world"
                    },
                    {
                        "sessionId": 1248,
                        "sessionUrl": "2013/exception-safe-coding-in-c-part-i"
                    },
                    {
                        "sessionId": 1249,
                        "sessionUrl": "2013/exception-safe-coding-in-c-part-ii"
                    },
                    {
                        "sessionId": 1250,
                        "sessionUrl": "2013/qt-container-classes"
                    },
                    {
                        "sessionId": 1251,
                        "sessionUrl": "2013/getting-started-with-test-driven-development"
                    },
                    {
                        "sessionId": 1252,
                        "sessionUrl": "2013/beginning-html5-mobile-game-programming"
                    },
                    {
                        "sessionId": 1253,
                        "sessionUrl": "2013/fast-furious-ios-and-windows-phone-development-with-azure-mobile-services"
                    },
                    {
                        "sessionId": 1254,
                        "sessionUrl": "2013/salesforce-platform-mobile-services"
                    },
                    {
                        "sessionId": 1255,
                        "sessionUrl": "2013/data-breaches-and-password-hashes"
                    },
                    {
                        "sessionId": 1256,
                        "sessionUrl": "2013/nodejs-mysql-and-nosql"
                    },
                    {
                        "sessionId": 1258,
                        "sessionUrl": "2013/think-async"
                    },
                    {
                        "sessionId": 1259,
                        "sessionUrl": "2013/pacman-in-60-minutes"
                    },
                    {
                        "sessionId": 1261,
                        "sessionUrl": "2013/your-ad-blocker-broke-my-site"
                    },
                    {
                        "sessionId": 1262,
                        "sessionUrl": "2013/minecraft-modding-workshop-part-1-of-2"
                    },
                    {
                        "sessionId": 1263,
                        "sessionUrl": "2013/big-data-is-a-big-deal---running-hadoop-in-the-cloud"
                    },
                    {
                        "sessionId": 1264,
                        "sessionUrl": "2013/cross-platform-development-with-portable-class-libraries"
                    },
                    {
                        "sessionId": 1265,
                        "sessionUrl": "2013/what-web-developers-need-to-know-to-develop-native-html5js-apps"
                    },
                    {
                        "sessionId": 1266,
                        "sessionUrl": "2013/headless-stateless-rails-api"
                    },
                    {
                        "sessionId": 1268,
                        "sessionUrl": "2013/10-things-every-developer-must-know"
                    },
                    {
                        "sessionId": 1269,
                        "sessionUrl": "2013/learning-threejs"
                    },
                    {
                        "sessionId": 1270,
                        "sessionUrl": "2013/api-design-principles-for-accelerated-development"
                    },
                    {
                        "sessionId": 1271,
                        "sessionUrl": "2013/develop-high-performance-sites-and-modern-apps-with-javascript-and-html5"
                    },
                    {
                        "sessionId": 1272,
                        "sessionUrl": "2013/javascript-patterns-for-the-c-developer"
                    },
                    {
                        "sessionId": 1273,
                        "sessionUrl": "2013/cloud-storage-for-app-developers"
                    },
                    {
                        "sessionId": 1275,
                        "sessionUrl": "2013/cracking-the-culture-code"
                    },
                    {
                        "sessionId": 1277,
                        "sessionUrl": "2013/building-apis-in-scala-with-playframework2"
                    },
                    {
                        "sessionId": 1281,
                        "sessionUrl": "2013/build-amazing-camera-apps-for-superphones"
                    },
                    {
                        "sessionId": 1282,
                        "sessionUrl": "2013/c-asynchronous-io---asio"
                    },
                    {
                        "sessionId": 1283,
                        "sessionUrl": "2013/the-best-designed-library-you-shouldnt-use"
                    },
                    {
                        "sessionId": 1284,
                        "sessionUrl": "2013/practical-unit-testing-in-cc-agility-at-scale"
                    },
                    {
                        "sessionId": 1285,
                        "sessionUrl": "2013/app-economy-opportunities-for-web-developers"
                    },
                    {
                        "sessionId": 1286,
                        "sessionUrl": "2013/developing-cross-platform-3d-games-with-unity"
                    },
                    {
                        "sessionId": 1295,
                        "sessionUrl": "2013/hitting-the-accessibility-high-notes-with-aria"
                    },
                    {
                        "sessionId": 1296,
                        "sessionUrl": "2013/intro-to-windows-phone-development"
                    },
                    {
                        "sessionId": 1297,
                        "sessionUrl": "2013/make-money-and-have-fun-building-games-for-windows-phone-using-gamemaker"
                    },
                    {
                        "sessionId": 1298,
                        "sessionUrl": "2013/the-science-of-great-ui-part-1"
                    },
                    {
                        "sessionId": 1299,
                        "sessionUrl": "2013/get-started-building-your-windows-8-app-with-c"
                    },
                    {
                        "sessionId": 1300,
                        "sessionUrl": "2013/the-science-of-great-ui-part-2"
                    },
                    {
                        "sessionId": 1301,
                        "sessionUrl": "2013/choosing-a-spa-framework"
                    },
                    {
                        "sessionId": 1302,
                        "sessionUrl": "2013/internet-safety-for-teens"
                    },
                    {
                        "sessionId": 1303,
                        "sessionUrl": "2013/teaching-kids-java-programming"
                    },
                    {
                        "sessionId": 1304,
                        "sessionUrl": "2013/chromecast"
                    },
                    {
                        "sessionId": 1307,
                        "sessionUrl": "2013/software-project-design"
                    },
                    {
                        "sessionId": 1308,
                        "sessionUrl": "2013/zen-of-architecture"
                    },
                    {
                        "sessionId": 1309,
                        "sessionUrl": "2013/raspberry-pi-gaming-4-kids-part-1-of-2"
                    },
                    {
                        "sessionId": 1310,
                        "sessionUrl": "2013/raspberry-pi-gaming-4-kids-part-2-of-2"
                    },
                    {
                        "sessionId": 1311,
                        "sessionUrl": "2013/hdinsight---hadoop-on-azure"
                    },
                    {
                        "sessionId": 1312,
                        "sessionUrl": "2013/ssas-2012-tips-and-tricks"
                    },
                    {
                        "sessionId": 1313,
                        "sessionUrl": "2013/planning-your-report-design"
                    },
                    {
                        "sessionId": 1314,
                        "sessionUrl": "2013/building-native-mobile-application-with-custom-views"
                    },
                    {
                        "sessionId": 1315,
                        "sessionUrl": "2013/developing-highly-instrumented-applications-with-minimal-effort"
                    },
                    {
                        "sessionId": 1316,
                        "sessionUrl": "2013/building-mobile-app-backends-with-google-cloud-endpoints"
                    },
                    {
                        "sessionId": 1317,
                        "sessionUrl": "2013/developing-with-sql-server-analysis-services"
                    },
                    {
                        "sessionId": 1318,
                        "sessionUrl": "2013/secrets-of-enterprise-data-mining"
                    },
                    {
                        "sessionId": 1322,
                        "sessionUrl": "2013/go-app-engine"
                    },
                    {
                        "sessionId": 1334,
                        "sessionUrl": "2013/physical-join-operators"
                    },
                    {
                        "sessionId": 1335,
                        "sessionUrl": "2013/where-are-my-primary-keys"
                    },
                    {
                        "sessionId": 1336,
                        "sessionUrl": "2013/consuming-restful-services-with-sencha-touch-ext-js"
                    },
                    {
                        "sessionId": 1337,
                        "sessionUrl": "2013/t-sql-user-defined-functions-or-bad-performance-made-easy"
                    },
                    {
                        "sessionId": 1339,
                        "sessionUrl": "2013/implementing-row-level-security-in-sql-2008"
                    },
                    {
                        "sessionId": 1340,
                        "sessionUrl": "2013/modern-performance---sql-server"
                    },
                    {
                        "sessionId": 1341,
                        "sessionUrl": "2013/dart---scalable-programming-for-the-modern-web"
                    },
                    {
                        "sessionId": 1342,
                        "sessionUrl": "2013/enterprise-nodejs-for-sencha-touch-and-extjs"
                    },
                    {
                        "sessionId": 1343,
                        "sessionUrl": "2013/powerful-t-sql-improvements-that-reduce-query-complexity"
                    },
                    {
                        "sessionId": 1344,
                        "sessionUrl": "2013/machine-learning-on-net-f-ftw"
                    },
                    {
                        "sessionId": 1345,
                        "sessionUrl": "2013/achieving-high-availability-and-high-performance-with-alwayson-and-availabi"
                    },
                    {
                        "sessionId": 1346,
                        "sessionUrl": "2013/intuit-apis-for-financial-transaction-aggregation-and-data-categorization"
                    },
                    {
                        "sessionId": 1347,
                        "sessionUrl": "2013/secret-xaml-techniques-for-an-awesome-ux"
                    },
                    {
                        "sessionId": 1348,
                        "sessionUrl": "2013/a-beginners-guide-to-animations-in-xaml"
                    },
                    {
                        "sessionId": 1349,
                        "sessionUrl": "2013/get-started-with-design"
                    },
                    {
                        "sessionId": 1350,
                        "sessionUrl": "2013/convert-your-legacy-java-application-to-html5css3"
                    },
                    {
                        "sessionId": 1351,
                        "sessionUrl": "2013/complete-automation-of-performance-testing"
                    },
                    {
                        "sessionId": 1352,
                        "sessionUrl": "2013/minecraft-modding-workshop-part-2-of-2"
                    },
                    {
                        "sessionId": 1353,
                        "sessionUrl": "2013/self-service-bi-with-powerpivot-and-power-view"
                    },
                    {
                        "sessionId": 1354,
                        "sessionUrl": "2013/ssis-2012-management-considerations-and-best-practices"
                    },
                    {
                        "sessionId": 1355,
                        "sessionUrl": "2013/connect-your-mobile-apps-to-the-cloud-the-easy-way"
                    },
                    {
                        "sessionId": 1356,
                        "sessionUrl": "2013/rock-your-technical-interview-part-2"
                    },
                    {
                        "sessionId": 1357,
                        "sessionUrl": "2013/building-your-java-configuration-muscle-memory"
                    },
                    {
                        "sessionId": 1358,
                        "sessionUrl": "2013/tynker-kids-1"
                    },
                    {
                        "sessionId": 1359,
                        "sessionUrl": "2013/tynker-kids-2"
                    },
                    {
                        "sessionId": 1360,
                        "sessionUrl": "2013/building-a-chase-game-in-greenfoot-part-1"
                    },
                    {
                        "sessionId": 1361,
                        "sessionUrl": "2013/building-a-platforming-game-in-greenfoot-part-1"
                    },
                    {
                        "sessionId": 1362,
                        "sessionUrl": "2013/building-a-chase-game-in-greenfoot-part-2"
                    },
                    {
                        "sessionId": 1363,
                        "sessionUrl": "2013/building-a-platforming-game-in-greenfoot-part-2"
                    },
                    {
                        "sessionId": 1364,
                        "sessionUrl": "2013/scala-is-fun-apps-and-games"
                    },
                    {
                        "sessionId": 1365,
                        "sessionUrl": "2013/easyrobusttrue-cross-browser-web-testing-with-testcafe"
                    },
                    {
                        "sessionId": 1366,
                        "sessionUrl": "2013/write-once-deploy-to-multiple-mobile-platforms"
                    },
                    {
                        "sessionId": 1367,
                        "sessionUrl": "2013/creating-ios-apps-with-c-using-xamarinios"
                    },
                    {
                        "sessionId": 1368,
                        "sessionUrl": "2013/netflix-open-source-software-who-what-where-when-why-how"
                    },
                    {
                        "sessionId": 1369,
                        "sessionUrl": "2013/production-ready-multi-client-centric-rest-with-spring"
                    },
                    {
                        "sessionId": 1370,
                        "sessionUrl": "2013/hackinglass-gyrofire"
                    },
                    {
                        "sessionId": 1371,
                        "sessionUrl": "2013/unity-getting-started-with-game-development"
                    },
                    {
                        "sessionId": 1373,
                        "sessionUrl": "2013/zero-effort-spring"
                    },
                    {
                        "sessionId": 1374,
                        "sessionUrl": "2013/marmalade-c-cross-platform-development"
                    },
                    {
                        "sessionId": 1375,
                        "sessionUrl": "2013/building-first-app-on-openstack-using-hp-public-cloud"
                    },
                    {
                        "sessionId": 1376,
                        "sessionUrl": "2013/getting-started-with-cloud-foundry-a-open-source-paas-technology"
                    },
                    {
                        "sessionId": 1377,
                        "sessionUrl": "2013/cloud-foundry-internals-a-cooks-tour-inside-the-worlds-most-open-paas"
                    },
                    {
                        "sessionId": 1401,
                        "sessionUrl": "2014/creating-html5-based-apps-for-wearable-technologies"
                    },
                    {
                        "sessionId": 1404,
                        "sessionUrl": "2014/google-glass-and-robots"
                    },
                    {
                        "sessionId": 1410,
                        "sessionUrl": "2014/create-influence-on-demand"
                    },
                    {
                        "sessionId": 1411,
                        "sessionUrl": "2014/agile-at-enterprise-scale-flipping-sticky-bits"
                    },
                    {
                        "sessionId": 1412,
                        "sessionUrl": "2014/cracking-the-coding-interview"
                    },
                    {
                        "sessionId": 1413,
                        "sessionUrl": "2014/cracking-the-product-manager-interview"
                    },
                    {
                        "sessionId": 1414,
                        "sessionUrl": "2014/javascript-testing-with-jasmine-101"
                    },
                    {
                        "sessionId": 1416,
                        "sessionUrl": "2014/the-better-parts"
                    },
                    {
                        "sessionId": 1420,
                        "sessionUrl": "2014/javascript-game-microservers"
                    },
                    {
                        "sessionId": 1421,
                        "sessionUrl": "2014/performance-testing-with-visual-studio"
                    },
                    {
                        "sessionId": 1422,
                        "sessionUrl": "2014/using-nuget-the-way-you-should"
                    },
                    {
                        "sessionId": 1424,
                        "sessionUrl": "2014/creating-rest-services-with-jax-rs"
                    },
                    {
                        "sessionId": 1425,
                        "sessionUrl": "2014/offline-speech-recognition-for-mobile-developers"
                    },
                    {
                        "sessionId": 1427,
                        "sessionUrl": "2014/angularjs-or-how-i-learned-to-stop-worrying-and-love-web-development"
                    },
                    {
                        "sessionId": 1428,
                        "sessionUrl": "2014/learn-javascript-by-modeling-and-solving-rubiks-cuibe"
                    },
                    {
                        "sessionId": 1429,
                        "sessionUrl": "2014/phonegap-androidios-google-maps-plugin"
                    },
                    {
                        "sessionId": 1430,
                        "sessionUrl": "2014/getting-started-with-developing-big-data-solutions-using-hbase"
                    },
                    {
                        "sessionId": 1431,
                        "sessionUrl": "2014/api-antipatterns-how-to-identify-and-avoid-them"
                    },
                    {
                        "sessionId": 1433,
                        "sessionUrl": "2014/technology-and-fashion-awaken-the-soul-of-the-shoe"
                    },
                    {
                        "sessionId": 1435,
                        "sessionUrl": "2014/intro-to-relational-database-design-entity-relationship-diagrams"
                    },
                    {
                        "sessionId": 1438,
                        "sessionUrl": "2014/zombietime---jsr-310-for-the-undead"
                    },
                    {
                        "sessionId": 1439,
                        "sessionUrl": "2014/iot-magic-show"
                    },
                    {
                        "sessionId": 1440,
                        "sessionUrl": "2014/all-about-wildfly-only-using-demos"
                    },
                    {
                        "sessionId": 1441,
                        "sessionUrl": "2014/java-ee-7-development-using-eclipse"
                    },
                    {
                        "sessionId": 1443,
                        "sessionUrl": "2014/what-is-python"
                    },
                    {
                        "sessionId": 1444,
                        "sessionUrl": "2014/intro-to-mobile-game-programming-with-cocos2d-x-part-1"
                    },
                    {
                        "sessionId": 1445,
                        "sessionUrl": "2014/intro-to-mobile-game-programming-with-cocos2d-x-part-2"
                    },
                    {
                        "sessionId": 1446,
                        "sessionUrl": "2014/rock-your-technical-interview-part-1"
                    },
                    {
                        "sessionId": 1449,
                        "sessionUrl": "2014/rock-your-technical-interview-part-2"
                    },
                    {
                        "sessionId": 1450,
                        "sessionUrl": "2014/bringing-web-content-to-the-big-screen-with-google-cast"
                    },
                    {
                        "sessionId": 1452,
                        "sessionUrl": "2014/if-we-are-agile-why-do-we-need-managers"
                    },
                    {
                        "sessionId": 1453,
                        "sessionUrl": "2014/f-for-the-c-developer"
                    },
                    {
                        "sessionId": 1454,
                        "sessionUrl": "2014/developing-applications-with-a-micro-service-architecture"
                    },
                    {
                        "sessionId": 1455,
                        "sessionUrl": "2014/map-flatmap-and-reduce-are-your-new-best-friends"
                    },
                    {
                        "sessionId": 1456,
                        "sessionUrl": "2014/mysql-enterprise-monitor"
                    },
                    {
                        "sessionId": 1457,
                        "sessionUrl": "2014/i-own-your-web-app"
                    },
                    {
                        "sessionId": 1458,
                        "sessionUrl": "2014/continuous-integration-for-databases"
                    },
                    {
                        "sessionId": 1462,
                        "sessionUrl": "2014/parallel-and-async-scripting-with-powershell"
                    },
                    {
                        "sessionId": 1463,
                        "sessionUrl": "2014/reactive-programming-with-dds-and-rx"
                    },
                    {
                        "sessionId": 1464,
                        "sessionUrl": "2014/how-do-teams-reach-high-performance"
                    },
                    {
                        "sessionId": 1465,
                        "sessionUrl": "2014/build-a-cross-platform-enterprise-lob-mobile-app-with-offline-sync"
                    },
                    {
                        "sessionId": 1466,
                        "sessionUrl": "2014/introduction-to-smartwatch-programming"
                    },
                    {
                        "sessionId": 1467,
                        "sessionUrl": "2014/exception-safe-coding-in-c-part-i"
                    },
                    {
                        "sessionId": 1468,
                        "sessionUrl": "2014/designing-a-beautiful-restjson-api"
                    },
                    {
                        "sessionId": 1469,
                        "sessionUrl": "2014/exception-safe-coding-in-c-part-ii"
                    },
                    {
                        "sessionId": 1470,
                        "sessionUrl": "2014/an-introduction-to-xaml-development"
                    },
                    {
                        "sessionId": 1471,
                        "sessionUrl": "2014/growing-technologists-through-autonomy-mastery-and-purpose"
                    },
                    {
                        "sessionId": 1472,
                        "sessionUrl": "2014/ui-and-ux-design-principles-to-keep-the-user-engaged-within-your-mobile-app"
                    },
                    {
                        "sessionId": 1473,
                        "sessionUrl": "2014/what-lean-brings-to-product-marketing-management"
                    },
                    {
                        "sessionId": 1475,
                        "sessionUrl": "2014/javascript-and-internet-controlled-hardware-prototyping"
                    },
                    {
                        "sessionId": 1476,
                        "sessionUrl": "2014/the-rise-of-wearable-technology"
                    },
                    {
                        "sessionId": 1477,
                        "sessionUrl": "2014/tcpip-networking-for-developers"
                    },
                    {
                        "sessionId": 1478,
                        "sessionUrl": "2014/about-venture-capital-fund-raising-for-your-startup"
                    },
                    {
                        "sessionId": 1479,
                        "sessionUrl": "2014/introduction-to-nosql"
                    },
                    {
                        "sessionId": 1481,
                        "sessionUrl": "2014/java-on-rails---using-spring-boot-for-rapid-application-development"
                    },
                    {
                        "sessionId": 1483,
                        "sessionUrl": "2014/secure-rest-with-sencha-ext-js-nodejs"
                    },
                    {
                        "sessionId": 1484,
                        "sessionUrl": "2014/dart---the-new-javascript"
                    },
                    {
                        "sessionId": 1485,
                        "sessionUrl": "2014/manage-your-life-web-based-goal-time-project-health-management"
                    },
                    {
                        "sessionId": 1486,
                        "sessionUrl": "2014/deep-dive-into-windows-phone-apps-sensors-bluetooth-cortana"
                    },
                    {
                        "sessionId": 1487,
                        "sessionUrl": "2014/apply-software-development-principles-to-livework-spaces"
                    },
                    {
                        "sessionId": 1488,
                        "sessionUrl": "2014/mongodb-vertx-red-hot-goodness"
                    },
                    {
                        "sessionId": 1489,
                        "sessionUrl": "2014/real-world-restful-service-development-problems-and-solutions"
                    },
                    {
                        "sessionId": 1490,
                        "sessionUrl": "2014/angularjs-for-non-javascripters"
                    },
                    {
                        "sessionId": 1491,
                        "sessionUrl": "2014/rock-your-code-with-defensive-programming"
                    },
                    {
                        "sessionId": 1492,
                        "sessionUrl": "2014/top-10-tips-for-effective-development-with-angularjs"
                    },
                    {
                        "sessionId": 1493,
                        "sessionUrl": "2014/developing-real-time-recommendation-engine"
                    },
                    {
                        "sessionId": 1494,
                        "sessionUrl": "2014/raspberry-pi-gaming-4-kids"
                    },
                    {
                        "sessionId": 1496,
                        "sessionUrl": "2014/hardening-your-code"
                    },
                    {
                        "sessionId": 1497,
                        "sessionUrl": "2014/dont-screw-up-your-licensing"
                    },
                    {
                        "sessionId": 1498,
                        "sessionUrl": "2014/winjs-for-web-devs"
                    },
                    {
                        "sessionId": 1499,
                        "sessionUrl": "2014/data-visualization-using-pov-ray-37"
                    },
                    {
                        "sessionId": 1500,
                        "sessionUrl": "2014/business-of-app-development"
                    },
                    {
                        "sessionId": 2500,
                        "sessionUrl": "2014/synthesizing-an-optimized-application-specific-os-for-your-iot-device"
                    },
                    {
                        "sessionId": 2501,
                        "sessionUrl": "2014/fail-is-not-a-four-letter-word"
                    },
                    {
                        "sessionId": 2503,
                        "sessionUrl": "2014/clean-code-homicidal-maniacs-read-code-too"
                    },
                    {
                        "sessionId": 2504,
                        "sessionUrl": "2014/learn-to-love-lambdas-c"
                    },
                    {
                        "sessionId": 2505,
                        "sessionUrl": "2014/introduction-to-natural-language-processing-nlp"
                    },
                    {
                        "sessionId": 2506,
                        "sessionUrl": "2014/saas-workflows-git-best-practices"
                    },
                    {
                        "sessionId": 2508,
                        "sessionUrl": "2014/improving-your-frontend-with-ember-mvc-js-framework"
                    },
                    {
                        "sessionId": 2509,
                        "sessionUrl": "2014/plugins-for-the-web---a-way-to-allow-others-to-improve-your-application"
                    },
                    {
                        "sessionId": 2511,
                        "sessionUrl": "2014/zero-to-fractals-in-75-minutes"
                    },
                    {
                        "sessionId": 2512,
                        "sessionUrl": "2014/obama-jquery-aspnet-signalr-getting-started-with-the-real-time-web"
                    },
                    {
                        "sessionId": 2513,
                        "sessionUrl": "2014/swift-language-and-using-playgrounds"
                    },
                    {
                        "sessionId": 2514,
                        "sessionUrl": "2014/android-on-x86"
                    },
                    {
                        "sessionId": 2516,
                        "sessionUrl": "2014/quality-dashboard---one-stop-shop-to-determine-product-quality"
                    },
                    {
                        "sessionId": 2517,
                        "sessionUrl": "2014/being-efficient-with-azure-automation"
                    },
                    {
                        "sessionId": 2518,
                        "sessionUrl": "2014/full-stack-web-performance"
                    },
                    {
                        "sessionId": 2519,
                        "sessionUrl": "2014/net-distributed-caching"
                    },
                    {
                        "sessionId": 2520,
                        "sessionUrl": "2014/code-framework-wpf-mvcmvvm-projects"
                    },
                    {
                        "sessionId": 2521,
                        "sessionUrl": "2014/modern-web-diagnostics-with-a-glimpse-into-aspnet"
                    },
                    {
                        "sessionId": 2522,
                        "sessionUrl": "2014/whirlwind-tour-of-scalable-vector-graphics"
                    },
                    {
                        "sessionId": 2523,
                        "sessionUrl": "2014/agile-machine-learning-with-scikit-learn"
                    },
                    {
                        "sessionId": 2524,
                        "sessionUrl": "2014/xaml-anti-patterns"
                    },
                    {
                        "sessionId": 2525,
                        "sessionUrl": "2014/practical-performance-tips-tricks-make-your-htmljavascript-apps-faster"
                    },
                    {
                        "sessionId": 2526,
                        "sessionUrl": "2014/launching-your-career-in-big-data"
                    },
                    {
                        "sessionId": 2529,
                        "sessionUrl": "2014/introductory-minecraft-modding-with-forge---part-1"
                    },
                    {
                        "sessionId": 2530,
                        "sessionUrl": "2014/develop-the-right-product-faster-design-thinking-for-engineers"
                    },
                    {
                        "sessionId": 2531,
                        "sessionUrl": "2014/monetize-your-ios-and-android-apps-with-multiple-ad-networks"
                    },
                    {
                        "sessionId": 2532,
                        "sessionUrl": "2014/high-performance-networking-for-qemukvm-based-virtual-machines"
                    },
                    {
                        "sessionId": 2533,
                        "sessionUrl": "2014/mvc-knockout-sing-and-dance"
                    },
                    {
                        "sessionId": 2534,
                        "sessionUrl": "2014/spark----fast-and-easy-processing-of-big-data"
                    },
                    {
                        "sessionId": 2535,
                        "sessionUrl": "2014/start-the-journey-to-internet-of-things-with-arduino"
                    },
                    {
                        "sessionId": 2536,
                        "sessionUrl": "2014/writing-facebook-applications-with-eclipse"
                    },
                    {
                        "sessionId": 2537,
                        "sessionUrl": "2014/circuit-art"
                    },
                    {
                        "sessionId": 2538,
                        "sessionUrl": "2014/gamemaker-studio-easy-game-development-for-all-ages"
                    },
                    {
                        "sessionId": 2539,
                        "sessionUrl": "2014/greenfoot-games-and-simulations-1"
                    },
                    {
                        "sessionId": 2540,
                        "sessionUrl": "2014/connecting-stuff-to-azure-and-what-happens-along-the-way"
                    },
                    {
                        "sessionId": 2541,
                        "sessionUrl": "2014/greenfoot-games-and-simulations-2"
                    },
                    {
                        "sessionId": 2542,
                        "sessionUrl": "2014/lego-mindstorms-programming-4-kids"
                    },
                    {
                        "sessionId": 2543,
                        "sessionUrl": "2014/introduction-to-python---beginners---level-1"
                    },
                    {
                        "sessionId": 2544,
                        "sessionUrl": "2014/introduction-to-python---beginners---level-2"
                    },
                    {
                        "sessionId": 2545,
                        "sessionUrl": "2014/fun-with-scratch"
                    },
                    {
                        "sessionId": 2546,
                        "sessionUrl": "2014/beer-locker-building-a-restful-api-with-nodejs"
                    },
                    {
                        "sessionId": 2547,
                        "sessionUrl": "2014/programming-a-graphical-web-game-part-1"
                    },
                    {
                        "sessionId": 2548,
                        "sessionUrl": "2014/programming-a-graphical-web-game-part-2"
                    },
                    {
                        "sessionId": 2549,
                        "sessionUrl": "2014/azure-net-and-the-internet-of-things"
                    },
                    {
                        "sessionId": 2550,
                        "sessionUrl": "2014/azure-virtual-machines-iaas-in-the-microsoft-cloud"
                    },
                    {
                        "sessionId": 2551,
                        "sessionUrl": "2014/an-introduction-to-using-apache-spark-for-machine-learning"
                    },
                    {
                        "sessionId": 2552,
                        "sessionUrl": "2014/aspnet-mvc-tips-and-tricks"
                    },
                    {
                        "sessionId": 2553,
                        "sessionUrl": "2014/maximize-your-cache-for-no-cash"
                    },
                    {
                        "sessionId": 2554,
                        "sessionUrl": "2014/kids-play---build-your-first-mobile-game-for-the-google-play-store"
                    },
                    {
                        "sessionId": 2555,
                        "sessionUrl": "2014/put-pencil-to-paper-sketching-skills-for-engineers"
                    },
                    {
                        "sessionId": 2556,
                        "sessionUrl": "2014/introducing-ravejs-zero-config-javascript-applications"
                    },
                    {
                        "sessionId": 2557,
                        "sessionUrl": "2014/introductory-minecraft-modding-with-forge---part-ii"
                    },
                    {
                        "sessionId": 2558,
                        "sessionUrl": "2014/mobile-apps-security-beyond-xss-csrf-and-sqli"
                    },
                    {
                        "sessionId": 2559,
                        "sessionUrl": "2014/solving-performance-problems-on-java-web-applications---our-experiences"
                    },
                    {
                        "sessionId": 2560,
                        "sessionUrl": "2014/beyond-push-pins---creating-enhanced-map-displays"
                    },
                    {
                        "sessionId": 2561,
                        "sessionUrl": "2014/simplifying-big-data-development-using-spring-xd"
                    },
                    {
                        "sessionId": 2562,
                        "sessionUrl": "2014/evolve-your-code-fundamental-design-principles"
                    },
                    {
                        "sessionId": 2563,
                        "sessionUrl": "2014/syncing-is-hard"
                    },
                    {
                        "sessionId": 2564,
                        "sessionUrl": "2014/how-our-saas-startup-got-1000-early-beta-customers"
                    },
                    {
                        "sessionId": 2565,
                        "sessionUrl": "2014/c11-in-the-wild-techniques-from-a-real-codebase"
                    },
                    {
                        "sessionId": 2566,
                        "sessionUrl": "2014/api-mobile-app-driven-development-made-easy"
                    },
                    {
                        "sessionId": 2567,
                        "sessionUrl": "2014/design-strategies-with-angularjs"
                    },
                    {
                        "sessionId": 2568,
                        "sessionUrl": "2014/test-driven-development-with-typescriptjasmineangularjs"
                    },
                    {
                        "sessionId": 2569,
                        "sessionUrl": "2014/functional-programming-for-production-quality-code"
                    },
                    {
                        "sessionId": 2570,
                        "sessionUrl": "2014/engineering-without-borders"
                    },
                    {
                        "sessionId": 2572,
                        "sessionUrl": "2014/implementing-row-level-security-in-microsoft-sql-server"
                    },
                    {
                        "sessionId": 2574,
                        "sessionUrl": "2014/web-ui-in-java-with-vaadin"
                    },
                    {
                        "sessionId": 2575,
                        "sessionUrl": "2014/advanced-mongodb"
                    },
                    {
                        "sessionId": 2576,
                        "sessionUrl": "2014/reactive-unidirectional-data-without-a-required-clientserver-technology"
                    },
                    {
                        "sessionId": 2577,
                        "sessionUrl": "2014/lean-startup-for-engineers"
                    },
                    {
                        "sessionId": 2579,
                        "sessionUrl": "2014/manipulating-properties-in-scala-why-flat-properties-are-best"
                    },
                    {
                        "sessionId": 2580,
                        "sessionUrl": "2014/sharepoint-2013-columnscontent-types"
                    },
                    {
                        "sessionId": 2581,
                        "sessionUrl": "2014/get-started-with-azure-tonight"
                    },
                    {
                        "sessionId": 2582,
                        "sessionUrl": "2014/keyword-research-under-a-microscope-advanced-seo-techniques"
                    },
                    {
                        "sessionId": 2583,
                        "sessionUrl": "2014/scaling-up-tame-key-business-processes-and-grow-fast"
                    },
                    {
                        "sessionId": 2584,
                        "sessionUrl": "2014/creating-a-restful-web-service-for-microsoft-sql-server"
                    },
                    {
                        "sessionId": 2585,
                        "sessionUrl": "2014/how-to-build-your-own-internet-of-things-product-with-raspberry-pi"
                    },
                    {
                        "sessionId": 2586,
                        "sessionUrl": "2014/getting-restless-with-meteorjs-and-mongodb-in-the-browser"
                    },
                    {
                        "sessionId": 2587,
                        "sessionUrl": "2014/why-what-functional-programming"
                    },
                    {
                        "sessionId": 2588,
                        "sessionUrl": "2014/hiring-a-big-data-and-data-science-team"
                    },
                    {
                        "sessionId": 2589,
                        "sessionUrl": "2014/exploring-the-brain-computer-interface"
                    },
                    {
                        "sessionId": 2590,
                        "sessionUrl": "2014/f-on-the-web"
                    },
                    {
                        "sessionId": 2591,
                        "sessionUrl": "2014/why-would-you-integrate-solr-and-hadoop-and-why-would-you-do-that"
                    },
                    {
                        "sessionId": 2592,
                        "sessionUrl": "2014/powershell-and-devops"
                    },
                    {
                        "sessionId": 2593,
                        "sessionUrl": "2014/wearable-tech-with-arduino-woman"
                    },
                    {
                        "sessionId": 2594,
                        "sessionUrl": "2014/developing-office-365-cloud-business-apps-with-visual-studio"
                    },
                    {
                        "sessionId": 2595,
                        "sessionUrl": "2014/building-apps-with-the-office-365-api-client-libraries"
                    },
                    {
                        "sessionId": 2597,
                        "sessionUrl": "2014/debunking-the-agile-myth-agile-is-not-just-for-software"
                    },
                    {
                        "sessionId": 2600,
                        "sessionUrl": "2014/code-shaming-anti-patterns-in-action"
                    },
                    {
                        "sessionId": 2603,
                        "sessionUrl": "2014/first-steps-with-mongodb"
                    },
                    {
                        "sessionId": 2604,
                        "sessionUrl": "2014/azure-for-open-source-developers"
                    },
                    {
                        "sessionId": 2605,
                        "sessionUrl": "2014/blogging-to-fuel-the-seo-engine"
                    },
                    {
                        "sessionId": 2606,
                        "sessionUrl": "2014/porting-quake-iii-to-f-a-journey-to-functional-programming"
                    },
                    {
                        "sessionId": 2607,
                        "sessionUrl": "2014/launch-an-angular-app-in-75-minutes"
                    },
                    {
                        "sessionId": 2608,
                        "sessionUrl": "2014/apps-evolved-with-the-onenote-api"
                    },
                    {
                        "sessionId": 2610,
                        "sessionUrl": "2014/accidentally-manager---a-survival-guide-for-first-time-engineering-managers"
                    },
                    {
                        "sessionId": 2611,
                        "sessionUrl": "2014/clean-code-i---best-practices"
                    },
                    {
                        "sessionId": 2612,
                        "sessionUrl": "2014/clean-code-ii---cut-your-dependencies-with-dependency-injection"
                    },
                    {
                        "sessionId": 2613,
                        "sessionUrl": "2014/introduction-to-big-data"
                    },
                    {
                        "sessionId": 3612,
                        "sessionUrl": "2014/big-data-introduction-to-hadoop-using-hdinsight"
                    },
                    {
                        "sessionId": 3613,
                        "sessionUrl": "2014/big-data-introduction-to-machine-learning-using-mahout-on-hadoop"
                    },
                    {
                        "sessionId": 3614,
                        "sessionUrl": "2014/how-to-use-the-azure-file-service"
                    },
                    {
                        "sessionId": 3616,
                        "sessionUrl": "2014/automating-windows-with-chef"
                    },
                    {
                        "sessionId": 3617,
                        "sessionUrl": "2014/fun-with-lambdas-c14-style"
                    },
                    {
                        "sessionId": 3618,
                        "sessionUrl": "2014/azure-development-with-the-visual-studio-tools"
                    },
                    {
                        "sessionId": 3619,
                        "sessionUrl": "2014/proximity-api-for-windows-phone"
                    },
                    {
                        "sessionId": 3620,
                        "sessionUrl": "2014/functional-reactive-javascript-theory-practice"
                    },
                    {
                        "sessionId": 3622,
                        "sessionUrl": "2014/buidling-a-universal-app-in-an-hour"
                    },
                    {
                        "sessionId": 3623,
                        "sessionUrl": "2014/everything-you-ever-wanted-to-know-about-node-authentication"
                    },
                    {
                        "sessionId": 3625,
                        "sessionUrl": "2014/introduction-to-machine-learning-with-azure-ml"
                    },
                    {
                        "sessionId": 3626,
                        "sessionUrl": "2014/building-killer-apps-with-neo4j"
                    },
                    {
                        "sessionId": 3627,
                        "sessionUrl": "2014/application-development-on-hadoop-using-cascading"
                    },
                    {
                        "sessionId": 3628,
                        "sessionUrl": "2014/intro-to-neo4j"
                    },
                    {
                        "sessionId": 3629,
                        "sessionUrl": "2014/designing-irresistible-apis"
                    },
                    {
                        "sessionId": 3630,
                        "sessionUrl": "2014/angular-or-backbone-go-mobile"
                    },
                    {
                        "sessionId": 3631,
                        "sessionUrl": "2014/simple-contextual-user-doc-sdk-via-wordpad"
                    },
                    {
                        "sessionId": 3632,
                        "sessionUrl": "2014/understanding-http-and-rest-the-road-to-simple-scalable-web-services"
                    },
                    {
                        "sessionId": 3633,
                        "sessionUrl": "2014/the-rest-of-the-story-using-aspnet-web-api-to-create-restful-web-services"
                    },
                    {
                        "sessionId": 3634,
                        "sessionUrl": "2014/distributed-systems---patterns-and-practices"
                    },
                    {
                        "sessionId": 3635,
                        "sessionUrl": "2014/solving-problems-with-fusion"
                    },
                    {
                        "sessionId": 3636,
                        "sessionUrl": "2014/mtut-a-c-framework-for-cross-thread-unit-testing"
                    },
                    {
                        "sessionId": 3637,
                        "sessionUrl": "2014/from-idea-to-api-in-half-a-day-with-raml"
                    },
                    {
                        "sessionId": 3638,
                        "sessionUrl": "2014/dive-into-cloud-foundry-paas"
                    },
                    {
                        "sessionId": 3639,
                        "sessionUrl": "2014/real-world-reversible-debugging-for-cc-developers-on-linux"
                    },
                    {
                        "sessionId": 3640,
                        "sessionUrl": "2014/deploying-applications-into-docker-containers"
                    },
                    {
                        "sessionId": 3641,
                        "sessionUrl": "2014/tap-into-the-112-trillion-dollar-business-travel-industry"
                    },
                    {
                        "sessionId": 3642,
                        "sessionUrl": "2014/we-dont-need-no-stinkin-product-manager"
                    },
                    {
                        "sessionId": 3643,
                        "sessionUrl": "2014/managing-programmers-programmers-are-not-like-the-other-kids"
                    },
                    {
                        "sessionId": 3645,
                        "sessionUrl": "2014/kodu-with-kids"
                    },
                    {
                        "sessionId": 3647,
                        "sessionUrl": "2014/developing-automated-stock-trading-system-with-nodejs"
                    },
                    {
                        "sessionId": 3648,
                        "sessionUrl": "2014/community-career-and-you-a-microsoft-mvp-panel"
                    },
                    {
                        "sessionId": 3650,
                        "sessionUrl": "2014/running-your-spring-apps-in-the-cloud"
                    },
                    {
                        "sessionId": 3651,
                        "sessionUrl": "2014/selling-basics-for-startups"
                    },
                    {
                        "sessionId": 3652,
                        "sessionUrl": "2014/the-self-healing-elastic-runtime-that-is-cloud-foundry"
                    },
                    {
                        "sessionId": 3653,
                        "sessionUrl": "2014/how-to-win-a-hackathon"
                    },
                    {
                        "sessionId": 3655,
                        "sessionUrl": "2014/introduction-to-googles-pagerank-algorithm"
                    },
                    {
                        "sessionId": 3656,
                        "sessionUrl": "2014/kicking-the-bukkit-anatomy-of-an-open-source-meltdown"
                    },
                    {
                        "sessionId": 3657,
                        "sessionUrl": "2014/angularjs-app-testing-for-real"
                    },
                    {
                        "sessionId": 3658,
                        "sessionUrl": "2014/get-mean-mongodb-express-angular-node"
                    },
                    {
                        "sessionId": 3659,
                        "sessionUrl": "2014/node-js-101"
                    },
                    {
                        "sessionId": 3660,
                        "sessionUrl": "2014/getting-started-with-hadoop-on-the-cloud"
                    },
                    {
                        "sessionId": 3661,
                        "sessionUrl": "2014/rapid-application-development-using-data-services-in-bluemix"
                    },
                    {
                        "sessionId": 3662,
                        "sessionUrl": "2014/the-internet-of-things-iot-enable-proactive-data-access-from-any-device"
                    },
                    {
                        "sessionId": 3663,
                        "sessionUrl": "2014/enterprise-ready-mobile-app-consuming-dbaas-offered-by-bluemix"
                    },
                    {
                        "sessionId": 3664,
                        "sessionUrl": "2014/analyzing-on-chip-interconnect-with-modern-c"
                    },
                    {
                        "sessionId": 3665,
                        "sessionUrl": "2014/building-bootiful-applications-with-spring-boot"
                    },
                    {
                        "sessionId": 3667,
                        "sessionUrl": "2014/test-driving-azure-search-and-documentdb"
                    },
                    {
                        "sessionId": 3668,
                        "sessionUrl": "2014/foothill-college-does-everything-learn-more"
                    },
                    {
                        "sessionId": 3669,
                        "sessionUrl": "2014/trick-or-treat-wearable-technology"
                    },
                    {
                        "sessionId": 3670,
                        "sessionUrl": "2014/start-the-journey-to-internet-of-things-with-arduino---part-2"
                    },
                    {
                        "sessionId": 3671,
                        "sessionUrl": "2014/build-your-first-ios-app"
                    },
                    {
                        "sessionId": 3672,
                        "sessionUrl": "2014/open-source-and-web-development-using-openui5"
                    },
                    {
                        "sessionId": 3673,
                        "sessionUrl": "2014/fun-with-scratch---part-2"
                    }
                ];
        };

        this.hasData = function() {
            return this.data && this.data.length > 0;
        };
    });


}());