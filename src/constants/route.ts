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
}