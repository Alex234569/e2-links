const createApp = Vue.createApp

createApp({
    setup() {
        const links = [
            {
                "title": "Atlassian",
                "data": [
                    {
                        name: "Jira",
                        url: "https://betting-solutions.atlassian.net/jira/software/c/projects/E2IT/boards/110?quickFilter=485",
                        favicon: "https://betting-solutions.atlassian.net/s/tod1zk/b/4/b6b48b2829824b869586ac216d119363/_/favicon-software.ico"
                    }, {
                        name: "BitBucket",
                        url: "https://bitbucket.org/e-quadrat/workspace/repositories/",
                        favicon: "https://bitbucket.org/favicon.ico"
                    }, {
                        name: "Confluence",
                        url: "https://betting-solutions.atlassian.net/wiki/spaces/E/pages/3260580105/Getting+Started",
                        favicon: "https://betting-solutions.atlassian.net/wiki/s/134213675/6452/bb574e0af5b575073060ac5746f6a298ce4d5b92/3/_/favicon-update.ico"
                    },
                ]
            }, {
                "title": "Organization",
                "data": [
                    {
                        url: "https://calendar.google.com/calendar/u/1/r",
                        name: "Calendar",
                        favicon: "https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_15.ico"
                    }, {
                        url: "https://e-quadrat-communications-gmbh.kiwihr.com/dashboard",
                        name: "Kiwi",
                        favicon: "https://e-quadrat-communications-gmbh.kiwihr.com/favicon.ico"
                    }, {
                        url: "https://ci.e-2.at/",
                        name: "Jenkins",
                        favicon: "https://ci.e-2.at/static/f25c6270/favicon.svg"
                    }
                ]
            }, {
                "title": "Metrics",
                "data": [
                    {
                        name: "Metrics DV",
                        url: "https://dev.sport-importer.sports-cube.com/metrics/",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/15e51b/20/0/etmy.png"
                    }, {
                        name: "Metrics ST",
                        url: "https://staging.web.sport-importer.sports-cube.com/metrics/",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/166bf3/20/0/kpky.png"
                    },
                ]
            }, {
                "title": "Grafana",
                "data": [
                    {

                    }, {
                        name: "Grafana ST",
                        url: "https://staging.metrics.e-2.at/login",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/166bf3/20/0/kpky.png"
                    }, {
                        name: "Grafana",
                        url: "https://metrics.e-2.at/login",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/000000/20/0/kbjy.png"
                    },
                ]
            }, {
                "title": "Solr",
                "data": [
                    {
                        name: "Solr DV",
                        url: "http://e2-dv.vm.nextlayer.at:8080/sportscube/#/persons/query",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/15e51b/20/0/etmy.png"
                    }, {
                        name: "Solr ST",
                        url: "http://e2-st.vm.nextlayer.at:8080/sportscube/#/persons/query",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/166bf3/20/0/kpky.png"
                    },
                ]
            }, {
                "title": "RabbitMQ",
                "data": [
                    {
                        name: "Rabbit DV",
                        url: "https://dev.amqp.sports-cube.com/#/",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/15e51b/20/0/etmy.png"
                    }, {
                        name: "Rabbit ST",
                        url: "https://staging.amqp.sports-cube.com/#/",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/166bf3/20/0/kpky.png"
                    },
                ]
            }, {
                "title": "Admin Project",
                "data": [
                    {
                        name: "Admin DV",
                        url: "https://dev.admin.sports-cube.com",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/15e51b/20/0/etmy.png"
                    }, {
                        name: "Admin ST",
                        url: "https://staging.admin.sports-cube.com",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/166bf3/20/0/kpky.png"
                    }, {
                        name: "Admin PR",
                        url: "https://admin.sports-cube.com",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/000000/20/0/kbjy.png"
                    },
                ]
            }, {
                "title": "API Project",
                "data": [
                    {
                        name: "API DV",
                        url: "https://dev.api.sports-cube.com",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/15e51b/20/0/etmy.png"
                    }, {
                        name: "API ST",
                        url: "https://staging.api.sports-cube.com",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/166bf3/20/0/kpky.png"
                    }, {
                        name: "API PR",
                        url: "https://api.sports-cube.com",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/000000/20/0/kbjy.png"
                    },
                ]
            }, {
                "title": "Ads",
                "data": [
                    {
                        name: "Ads DV",
                        url: "https://dev.ads.e-2.at",
                        favicon: "https://x-lines.ru/letters/i/cyrillicother/0857/15e51b/20/0/etmy.png"
                    },
                ]
            }, {
                "title": "Unsorted",
                "data": [
                    {
                        name: "Sentry",
                        url: "https://sentry.e-2.at/organizations/equadrat/issues/?project=3",
                        favicon: "https://33fa1ur95-n3wr1a6dl.sentry.dev/favicon.ico"
                    }, {
                        name: "E2 Apps",
                        url: "https://docs.google.com/spreadsheets/d/1Lq_R6P7yODZmtQX3SYhOX_tKt-vRQUEDtCS5tPMxQG4/edit#gid=0",
                        favicon: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_spreadsheet_x32.png"
                    }
                ]
            },
        ]

        return {
            links,
            visible: false
        }
    }
}).mount('#app')
