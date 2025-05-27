var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: "light",
  extendWith: {
    primary: themeStyle.colors.primary,
  },
});

var siteConfig = {
  version: 3,
  pages: [
    {
      id: "occurrenceSearch",
    },
    {
      id: "literatureSearch",
    },
  ],
  disableInlineTableFilterButtons: false,
  availableCatalogues: ["OCCURRENCE", "LITERATURE"],
  dataHeader: {
    enableApiPopup: false,
    enableInfoPopup: false,
  },
  theme: {
    primary: "#001972",
    borderRadius: 3,
    stickyOffset: "0px",
  },
  maps: {
    mapStyles: {
      defaultProjection: "MERCATOR",
      defaultMapStyle: "BRIGHT",
      options: {
        MERCATOR: ["BRIGHT", "NATURAL"],
      },
    },
  },
  languages: [
    {
      code: "en",
      localeCode: "en",
      label: "English",
      default: true,
      textDirection: "ltr",
      iso3LetterCode: "eng",
      cmsLocale: "en-GB",
      gbifOrgLocalePrefix: "",
      mapTileLocale: "en",
    },
  ],
  messages: {},
  occurrenceSearch: {
    scope: {
      type: "equals",
      key: "country",
      value: "MS",
    },
    //   "highlightedFilters": [
    //       "taxonKey",
    //       "institutionKey",
    //       "collectionKey",
    //       "catalogNumber",
    //       "recordedBy",
    //       "identifiedBy"
    //   ],
    //   "excludedFilters": [
    //       "occurrenceStatus",
    //       "networkKey",
    //       "hostingOrganizationKey",
    //       "protocol",
    //       "publishingCountry",
    //       "institutionCode",
    //       "collectionCode"
    //   ],
    //   "defaultEnabledTableColumns": [
    //       "features",
    //       "institutionKey",
    //       "collectionKey",
    //       "catalogNumber",
    //       "country",
    //       "year",
    //       "recordedBy",
    //       "identifiedBy"
    //   ],
    tabs: [
      "table",
      "gallery",
      "map",
      //   "clusters",
      "dashboard",
      "download",
    ],
    mapSettings: {
      lat: 16.752,
      lng: -62.189888,
      zoom: 7,
    },
  },
  collectionSearch: {},
  institutionSearch: {},
  datasetSearch: {},
  publisherSearch: {},
  literatureSearch: {
    scope: {
      type: "in",
      key: "countriesOfCoverage",
      values: ["MS"],
    },
  },
};
