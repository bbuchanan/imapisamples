export interface QueryParameters {
    PageNumber: number;
    PageSize:   number;
    OrderBy:    string;
    Filter:     Filter[];
}

export interface Filter {
    FieldName: string;
    Op:        string;
    Value:     string;
    Filters?:  Filter[];
    And?:      string;
}

export interface SearchParam {
    FriendlyName:       string;
    ParamName:  string;
    Value:      string;
}