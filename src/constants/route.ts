export type page = {
    url: string,
    label: string,
}

export type route = {
    [key: string]: page
}

export const route: route = {
    index: {
        url: "/",
        label: "",
    },
    firstPage: {
        url: "/first-page",
        label: "最初のReactページ",
    },
    cardSample: {
        url: "/card-sample",
        label: "Cardのサンプル",
    },
    postSample: {
        url: "/post-sample",
        label: "postのサンプル",
    },
    formSample: {
        url: "/form-sample",
        label: "formのサンプル",
    },
    aceEditor: {
        url: "/ace-editor",
        label: "AceEditor",
    },
    webSite1: {
        url: "/web-site1",
        label: "webサイトサンプル1",
    },
    reactSpringSample: {
        url: "/react-spring-sample",
        label: "react-spring sample",
    },
}