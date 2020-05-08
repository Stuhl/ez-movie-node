const endpoints = {
  certification: {
    movie: {
      requestType: "GET",
      params: {},
      endpointPath: "certification/movie/list"
    },
    tv: {
      requestType: "GET",
      params: {},
      endpointPath: "certification/tv/list"
    }
  },
  changes: {
    movie: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "movie/changes"
    },
    tv: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "tv/changes"
    },
    person: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_date: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "person/changes"
    }
  },
  collection: {
    details: {
      requestType: "GET",
      params: {
        collection_id: {
          isRequired: true
        }
      },
      endpointPath: "collection/changes"
    },
    images: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_data: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "tv/changes"
    },
    translations: {
      requestType: "GET",
      params: {
        end_date: {
          isRequired: false
        },
        start_data: {
          isRequired: false
        },
        page: {
          isRequired: false
        }
      },
      endpointPath: "person/changes"
    }
  },
  company: {
    details: {
      requestType: "GET",
      params: {
        company_id: {
          isRequired: true
        }
      },
      endpointPath: "company/{company_id}"
    },
    alternativeNames: {
      requestType: "GET",
      params: {
        company_id: {
          isRequired: true
        }
      },
      endpointPath: "company/{company_id}/alternative_names"
    },
    images: {
      requestType: "GET",
      params: {
        company_id: {
          isRequired: true
        }
      },
      endpointPath: "company/{company_id}/images"
    }
  }
};

module.exports = endpoints
